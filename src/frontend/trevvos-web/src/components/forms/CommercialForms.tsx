"use client";
import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useForm, ValidationError, type TUseForm } from "@formspree/react";
import { formspreeConfig } from "@/lib/formspree-config";
import {
  leadMetadata,
  leadSubject,
  salesChannels,
  serviceOptions,
  validateContact,
  type ContactKind,
  type FieldErrors,
} from "@/lib/contact";
import { useContact } from "../ContactProvider";
import { FormField } from "./FormField";
import { FormStatus } from "./FormStatus";
type Transport = {
  state: TUseForm<Record<string, string>>[0];
  submit: TUseForm<Record<string, string>>[1] | null;
  reset: () => void;
};
const unavailable: Transport = {
  state: { errors: null, result: null, submitting: false, succeeded: false },
  submit: null,
  reset: () => {},
};
function ConnectedForm({
  id,
  children,
}: {
  id: string;
  children: (transport: Transport) => ReactNode;
}) {
  const [state, submit, reset] = useForm<Record<string, string>>(id);
  return children({ state, submit, reset });
}
function CommercialForm({ kind, id }: { kind: ContactKind; id?: string }) {
  return id ? (
    <ConnectedForm id={id}>
      {(transport) => <LeadForm kind={kind} transport={transport} />}
    </ConnectedForm>
  ) : (
    <LeadForm kind={kind} transport={unavailable} />
  );
}
export function ContactForm() {
  return <CommercialForm kind="diagnostico" id={formspreeConfig.contactId} />;
}
export function CommerceInterestForm() {
  return <CommercialForm kind="commerce" id={formspreeConfig.commerceId} />;
}
function LeadForm({
  kind,
  transport,
}: {
  kind: ContactKind;
  transport: Transport;
}) {
  const {
    kind: activeKind,
    service,
    setService,
    challenge,
    setChallenge,
    ctaContext,
    focusRequest,
  } = useContact();
  const { state, submit, reset } = transport;
  const [errors, setErrors] = useState<FieldErrors>({});
  const [failure, setFailure] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);
  const lastFocus = useRef(0);
  const isContact = kind === "diagnostico";
  const hidden = activeKind !== kind;
  const formId = isContact ? "formDiagnostico" : "formCommerce";
  const prefix = isContact ? "contact" : "commerce";
  const configured = Boolean(submit);
  const fieldErrors = state.submitting ? null : state.errors;
  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      setErrors({});
      setFailure("");
      if (isContact) {
        setService("");
        setChallenge("");
      }
    }
  }, [state.succeeded, isContact, setService, setChallenge]);
  const prepareFocus = useEffectEvent(() => {
    if (state.succeeded) reset();
  });
  useEffect(() => {
    if (
      hidden ||
      focusRequest?.kind !== kind ||
      lastFocus.current === focusRequest.sequence
    )
      return;
    lastFocus.current = focusRequest.sequence;
    prepareFocus();
    const frame = requestAnimationFrame(() => {
      const form = formRef.current;
      if (!form) return;
      form.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
      form
        .querySelector<HTMLInputElement>('[name="nome"]')
        ?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [hidden, focusRequest, kind]);
  function clearField(name: string) {
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!submit || submittingRef.current || state.submitting || state.succeeded)
      return;
    reset();
    setFailure("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = Object.fromEntries(
      [...data].map(([key, value]) => [key, String(value)]),
    );
    const invalid = validateContact(kind, fields);
    setErrors(invalid);
    const first = Object.keys(invalid)[0];
    if (first) {
      form.querySelector<HTMLElement>('[name="' + first + '"]')?.focus();
      return;
    }
    if (fields._gotcha?.trim()) {
      setFailure(
        "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
      );
      return;
    }
    for (const key of ["nome", "email", "whatsapp", "empresa", "mensagem"])
      data.set(key, fields[key]?.trim() ?? "");
    for (const [key, value] of Object.entries(
      leadMetadata(kind, ctaContext[kind]),
    ))
      data.set(key, value);
    data.set("subject", leadSubject(kind, fields.servico));
    submittingRef.current = true;
    try {
      await submit(data);
    } catch {
      reset();
      setFailure(
        "Não foi possível enviar sua mensagem. Tente novamente mais tarde. Seus dados foram preservados.",
      );
    } finally {
      submittingRef.current = false;
    }
  }
  const success = isContact
    ? "Recebemos sua solicitação de contato. Obrigado! Sua mensagem foi enviada à equipe."
    : "Recebemos seu interesse no Trevvos Commerce. Obrigado! Sua mensagem foi enviada à equipe.";
  const field = (
    name: string,
    label: string,
    control: ReactNode,
    required = false,
  ) => (
    <FormField
      id={
        name === "servico"
          ? "servicoSel"
          : isContact && name === "mensagem"
            ? "desafioTxt"
            : prefix + "-" + name
      }
      name={name}
      label={label}
      required={required}
      error={errors[name]}
      errors={fieldErrors}
    >
      {control as React.ReactElement<React.ComponentPropsWithRef<"input">>}
    </FormField>
  );
  return (
    <form
      className="form"
      id={formId}
      ref={formRef}
      data-kind={kind}
      hidden={hidden}
      role="tabpanel"
      aria-labelledby={"contact-tab-" + kind}
      aria-describedby={prefix + "-status"}
      aria-busy={state.submitting}
      noValidate
      onSubmit={handleSubmit}
      onChange={(event) => {
        const target = event.target;
        if (
          target instanceof HTMLInputElement ||
          target instanceof HTMLSelectElement ||
          target instanceof HTMLTextAreaElement
        )
          clearField(target.name);
      }}
    >
      {!isContact && (
        <p className="form__intro">
          Registre seu interesse no Trevvos Commerce, produto em
          desenvolvimento. Este contato não representa contratação ou acesso
          imediato à plataforma.
        </p>
      )}
      <p className="form__intro">Campos com * são obrigatórios.</p>
      <fieldset
        className="form__fields"
        disabled={state.submitting || state.succeeded}
      >
        <legend className="visually-hidden">
          {isContact
            ? "Solicitação comercial"
            : "Interesse no Trevvos Commerce"}
        </legend>
        <div className="form__row">
          {field(
            "nome",
            isContact ? "Nome completo" : "Nome",
            <input type="text" autoComplete="name" maxLength={120} />,
            true,
          )}
          {field(
            "empresa",
            isContact ? "Empresa" : "Nome da loja ou empresa",
            <input type="text" autoComplete="organization" maxLength={200} />,
          )}
        </div>
        <div className="form__row">
          {field(
            "email",
            "E-mail",
            <input type="email" autoComplete="email" maxLength={254} />,
            true,
          )}
          {field(
            "whatsapp",
            "WhatsApp",
            <input
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="(00) 00000-0000"
            />,
          )}
        </div>
        {isContact
          ? field(
              "servico",
              "Serviço de interesse",
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
              >
                <option value="">Selecione</option>
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>,
              true,
            )
          : field(
              "canal",
              "Principal canal de venda",
              <select defaultValue="">
                <option value="">Selecione</option>
                {salesChannels.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>,
            )}
        {isContact
          ? field(
              "mensagem",
              "Mensagem descrevendo a necessidade",
              <textarea
                value={challenge}
                onChange={(event) => setChallenge(event.target.value)}
                rows={4}
                maxLength={5000}
                placeholder="Conte o que você gostaria de resolver ou melhorar."
              />,
              true,
            )
          : field(
              "mensagem",
              "Mensagem ou necessidade",
              <textarea
                rows={4}
                maxLength={5000}
                placeholder="Conte o que sua loja precisa."
              />,
            )}
        <p className="form__intro" id={prefix + "-privacy"}>
          A Trevvos usará os dados informados para analisar{" "}
          {isContact ? "sua solicitação" : "seu interesse no Commerce"} e
          responder pelo e-mail ou WhatsApp fornecido. O envio e o armazenamento
          da mensagem são processados pelo Formspree. Este contato não inscreve
          você em campanhas de marketing.
        </p>
        <div className="form__field">
          <label className="form__consent" htmlFor={prefix + "-ciencia"}>
            <input
              type="checkbox"
              id={prefix + "-ciencia"}
              name="ciencia"
              value="ciente"
              required
              aria-invalid={
                Boolean(
                  errors.ciencia ||
                  fieldErrors?.getFieldErrors("ciencia").length,
                ) || undefined
              }
              aria-describedby={
                prefix + "-privacy " + prefix + "-ciencia-error"
              }
            />
            <span>
              Li o aviso acima e estou ciente do tratamento dos meus dados para
              responder a este contato. *
            </span>
          </label>
          {errors.ciencia ? (
            <p id={prefix + "-ciencia-error"} className="form__msg err">
              {errors.ciencia}
            </p>
          ) : (
            <div id={prefix + "-ciencia-error"}>
              <ConsentError errors={fieldErrors} />
            </div>
          )}
        </div>
        <div className="form__honeypot" aria-hidden="true">
          <label htmlFor={prefix + "-gotcha"}>Deixe este campo vazio</label>
          <input
            type="text"
            id={prefix + "-gotcha"}
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </fieldset>
      <FormStatus
        id={prefix + "-status"}
        configured={configured}
        submitting={state.submitting}
        succeeded={state.succeeded}
        success={success}
        errors={fieldErrors}
        failure={failure}
        invalid={Object.keys(errors).length > 0}
      />
      {state.succeeded ? (
        <button
          className="btn btn--ink btn--lg"
          type="button"
          onClick={() => {
            reset();
            requestAnimationFrame(() =>
              formRef.current
                ?.querySelector<HTMLInputElement>('[name="nome"]')
                ?.focus(),
            );
          }}
        >
          Enviar outro contato
        </button>
      ) : (
        <button
          className="btn btn--ink btn--lg"
          type="submit"
          disabled={!configured || state.submitting}
        >
          {state.submitting
            ? "Enviando..."
            : isContact
              ? "Solicitar diagnóstico"
              : "Registrar interesse no Commerce"}
        </button>
      )}
    </form>
  );
}
import type { FormspreeErrors } from "./FormField";
function ConsentError({ errors }: { errors: FormspreeErrors }) {
  return (
    <ValidationError
      field="ciencia"
      prefix="Ciência sobre o tratamento dos dados"
      className="form__msg err"
      errors={errors}
    />
  );
}
