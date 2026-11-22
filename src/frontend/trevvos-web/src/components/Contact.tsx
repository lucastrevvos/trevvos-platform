"use client";
import type { KeyboardEvent } from "react";
import { useContact } from "./ContactProvider";
import { ContactForm, CommerceInterestForm } from "./forms/CommercialForms";

export function Contact() {
  const { kind, setKind } = useContact();
  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? "diagnostico"
        : event.key === "End"
          ? "commerce"
          : kind === "diagnostico"
            ? "commerce"
            : "diagnostico";
    setKind(next);
    document.getElementById("contact-tab-" + next)?.focus();
  }
  return (
    <section className="section section--paper2" id="contato">
      <div className="container grid-2 grid-2--center">
        <div className="reveal">
          <span className="eyebrow">Contato</span>
          <h2>Fale com a Trevvos.</h2>
          <p className="lead">
            Escolha o caminho que combina com você: solicite um diagnóstico para
            uma solução sob medida ou registre seu interesse no Trevvos
            Commerce.
          </p>
          <p className="lead">
            Procura o KM One?{" "}
            <a
              className="link-inline"
              href="https://kmone.trevvos.com.br/"
              target="_blank"
              rel="noopener"
            >
              Acesse o site oficial
            </a>
            .
          </p>
        </div>

        <div className="reveal">
          <div className="ctabs" role="tablist" aria-label="Tipo de contato">
            <button
              type="button"
              role="tab"
              className={kind === "diagnostico" ? "is-active" : ""}
              id="contact-tab-diagnostico"
              aria-controls="formDiagnostico"
              aria-selected={kind === "diagnostico"}
              tabIndex={kind === "diagnostico" ? 0 : -1}
              onClick={() => setKind("diagnostico")}
              onKeyDown={handleTabKey}
              data-form="diagnostico"
            >
              Soluções sob medida
            </button>
            <button
              type="button"
              role="tab"
              className={kind === "commerce" ? "is-active" : ""}
              id="contact-tab-commerce"
              aria-controls="formCommerce"
              aria-selected={kind === "commerce"}
              tabIndex={kind === "commerce" ? 0 : -1}
              onClick={() => setKind("commerce")}
              onKeyDown={handleTabKey}
              data-form="commerce"
            >
              Trevvos Commerce
            </button>
          </div>

          <ContactForm />
          <CommerceInterestForm />
        </div>
      </div>
    </section>
  );
}
