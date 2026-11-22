"use client";
import { submissionErrorMessage } from "@/lib/contact";
import type { FormspreeErrors } from "./FormField";
export function FormStatus({
  id,
  configured,
  submitting,
  succeeded,
  success,
  errors,
  failure,
  invalid,
}: {
  id: string;
  configured: boolean;
  submitting: boolean;
  succeeded: boolean;
  success: string;
  errors: FormspreeErrors;
  failure: string;
  invalid: boolean;
}) {
  const failed = !submitting && !succeeded && (invalid || failure || errors);
  const text = !configured
    ? "O envio deste formulário ainda não está disponível. Tente novamente mais tarde."
    : submitting
      ? "Enviando... Aguarde a confirmação."
      : succeeded
        ? success
        : failure ||
          (invalid
            ? "Revise os campos indicados antes de enviar."
            : errors
              ? submissionErrorMessage(errors)
              : "");
  return (
    <p
      id={id}
      className={
        "form__msg" + (succeeded ? " ok" : failed || !configured ? " err" : "")
      }
      role={failed ? "alert" : "status"}
      aria-live={failed ? "assertive" : "polite"}
      aria-atomic="true"
    >
      {text}
    </p>
  );
}
