"use client";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type MouseEvent,
  type ReactNode,
  type SetStateAction,
} from "react";
import { resolveService, type ContactKind } from "@/lib/contact";
export type { ContactKind } from "@/lib/contact";
interface ContactContextValue {
  kind: ContactKind;
  setKind: Dispatch<SetStateAction<ContactKind>>;
  service: string;
  setService: Dispatch<SetStateAction<string>>;
  challenge: string;
  setChallenge: Dispatch<SetStateAction<string>>;
  ctaContext: Record<ContactKind, string>;
  focusRequest: { kind: ContactKind; sequence: number } | null;
}
const ContactContext = createContext<ContactContextValue | null>(null);
export function useContact() {
  const context = useContext(ContactContext);
  if (!context) throw new Error("ContactProvider ausente");
  return context;
}
export function ContactProvider({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<ContactKind>("diagnostico");
  const [service, setService] = useState("");
  const [challenge, setChallenge] = useState("");
  const [ctaContext, setCtaContext] = useState({
    diagnostico: "",
    commerce: "",
  });
  const [focusRequest, setFocusRequest] =
    useState<ContactContextValue["focusRequest"]>(null);
  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (
      !(event.target instanceof Element) ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const link = event.target.closest<HTMLAnchorElement>('a[href="#contato"]');
    if (!link) return;
    const requested: ContactKind =
      link.dataset.cta === "commerce" ? "commerce" : "diagnostico";
    event.preventDefault();
    setKind(requested);
    const section =
      link.closest("section")?.id ||
      (link.closest("header")
        ? "cabecalho"
        : link.closest("footer")
          ? "rodape"
          : "pagina");
    const context = [
      section,
      link.textContent?.trim(),
      link.dataset.service,
      link.dataset.app,
    ]
      .filter(Boolean)
      .join(" | ");
    setCtaContext((current) => ({ ...current, [requested]: context }));
    if (requested === "diagnostico") {
      if (link.dataset.service)
        setService(resolveService(link.dataset.service));
      if (link.dataset.app) {
        setService("Outro");
        setChallenge(
          "Tenho interesse nesta aplicação: " + link.dataset.app + ".\n\n",
        );
      }
    }
    setFocusRequest((current) => ({
      kind: requested,
      sequence: (current?.sequence ?? 0) + 1,
    }));
  }
  return (
    <ContactContext.Provider
      value={{
        kind,
        setKind,
        service,
        setService,
        challenge,
        setChallenge,
        ctaContext,
        focusRequest,
      }}
    >
      <div className="site-content" onClick={handleClick}>
        {children}
      </div>
    </ContactContext.Provider>
  );
}
