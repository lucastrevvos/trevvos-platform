import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactProvider } from "../src/components/ContactProvider";
import { Contact } from "../src/components/Contact";
import { formspreeConfig } from "../src/lib/formspree-config";
vi.mock("../src/lib/formspree-config", () => ({
  formspreeConfig: {
    contactId: "fixturecontact",
    commerceId: "fixturecommerce",
  },
}));
let fetchMock: ReturnType<typeof vi.fn>;
beforeEach(() => {
  formspreeConfig.contactId = "fixturecontact";
  formspreeConfig.commerceId = "fixturecommerce";
  fetchMock = vi
    .fn()
    .mockRejectedValue(new Error("Nenhuma rede real permitida nos testes"));
  vi.stubGlobal("fetch", fetchMock);
});
function setup() {
  return render(
    <ContactProvider>
      <a
        href="#contato"
        data-cta="diagnostico"
        data-service="Agentes de IA para atendimento"
      >
        Explorar agentes
      </a>
      <a href="#contato" data-cta="commerce">
        Tenho interesse no Commerce
      </a>
      <a href="#contato" data-cta="diagnostico" data-app="Jurídico: contratos">
        Explorar contratos
      </a>
      <a href="#contato">Contato geral</a>
      <Contact />
    </ContactProvider>,
  );
}
function contactForm() {
  return document.getElementById("formDiagnostico") as HTMLFormElement;
}
function fillContact() {
  const form = contactForm();
  fireEvent.change(within(form).getByLabelText("Nome completo *"), {
    target: { value: "João Silva" },
  });
  fireEvent.change(within(form).getByLabelText("E-mail *"), {
    target: { value: "joao@example.com" },
  });
  fireEvent.change(within(form).getByLabelText("Serviço de interesse *"), {
    target: { value: "Agentes de IA e atendimento" },
  });
  fireEvent.change(
    within(form).getByLabelText("Mensagem descrevendo a necessidade *"),
    { target: { value: "Preciso integrar o atendimento." } },
  );
  fireEvent.click(within(form).getByRole("checkbox"));
  return form;
}
function respond(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
describe("formulários com hook oficial e rede simulada", () => {
  it("mantém exatamente dois formulários inline e só um visível", () => {
    setup();
    expect(document.querySelectorAll("form")).toHaveLength(2);
    expect(contactForm().hidden).toBe(false);
    expect(
      (document.getElementById("formCommerce") as HTMLFormElement).hidden,
    ).toBe(true);
  });
  it("não envia campos obrigatórios vazios e foca o primeiro erro", () => {
    setup();
    fireEvent.submit(contactForm());
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.getByText("Informe seu nome.")).toBeTruthy();
    expect(document.activeElement).toBe(
      within(contactForm()).getByLabelText("Nome completo *"),
    );
    expect(
      within(contactForm())
        .getByLabelText("Nome completo *")
        .getAttribute("aria-invalid"),
    ).toBe("true");
  });
  it("bloqueia envio sem ciência mesmo com outros campos válidos", () => {
    setup();
    const form = fillContact();
    fireEvent.click(within(form).getByRole("checkbox"));
    fireEvent.submit(form);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.getByText(/Confirme a ciência/)).toBeTruthy();
  });
  it("expõe indisponibilidade sem chamar useForm com ID inventado", () => {
    formspreeConfig.contactId = undefined;
    formspreeConfig.commerceId = undefined;
    setup();
    expect(
      within(contactForm())
        .getByRole("button", { name: "Solicitar diagnóstico" })
        .hasAttribute("disabled"),
    ).toBe(true);
    fireEvent.submit(contactForm());
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.getAllByText(/ainda não está disponível/)).toHaveLength(2);
  });
  it("inclui metadados, limpa os campos apenas após sucesso e permite novo contato", async () => {
    fetchMock.mockResolvedValue(respond({ next: "/thanks" }));
    setup();
    fireEvent.click(screen.getByText("Explorar agentes"));
    const form = fillContact();
    fireEvent.submit(form);
    await screen.findByText(/Recebemos sua solicitação/);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://formspree.io/f/fixturecontact");
    expect(options.body.get("origem")).toBe("trevvos-institucional");
    expect(options.body.get("tipo")).toBe("contato-comercial");
    expect(options.body.get("servico")).toBe("Agentes de IA e atendimento");
    expect(options.body.get("subject")).toBe(
      "Trevvos | Contato comercial: Agentes de IA e atendimento",
    );
    expect(options.body.get("contexto_cta")).toContain("Explorar agentes");
    expect(options.body.get("_gotcha")).toBe("");
    await waitFor(() =>
      expect(
        (within(form).getByLabelText("Nome completo *") as HTMLInputElement)
          .value,
      ).toBe(""),
    );
    fireEvent.click(
      screen.getByRole("button", { name: "Enviar outro contato" }),
    );
    expect(
      within(form)
        .getByRole("button", { name: "Solicitar diagnóstico" })
        .hasAttribute("disabled"),
    ).toBe(false);
  });
  it("bloqueia duplo envio durante carregamento sem mostrar sucesso prematuro", async () => {
    let release!: (value: Response) => void;
    fetchMock.mockImplementation(
      () =>
        new Promise<Response>((resolve) => {
          release = resolve;
        }),
    );
    setup();
    const form = fillContact();
    fireEvent.submit(form);
    fireEvent.submit(form);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(
      screen
        .getByRole("button", { name: "Enviando..." })
        .hasAttribute("disabled"),
    ).toBe(true);
    expect(screen.queryByText(/Recebemos sua solicitação/)).toBeNull();
    await act(async () => release(respond({ next: "/thanks" })));
    await screen.findByText(/Recebemos sua solicitação/);
  });
  it.each(["network", "rate", "unavailable", "malformed"])(
    "preserva campos e permite retry em falha %s",
    async (scenario) => {
      fetchMock.mockImplementationOnce(() =>
        scenario === "network"
          ? Promise.reject(new Error("offline"))
          : Promise.resolve(
              respond(
                scenario === "rate"
                  ? { error: "Too many requests (429)" }
                  : scenario === "unavailable"
                    ? { errors: [{ code: "INACTIVE", message: "inactive" }] }
                    : { unexpected: true },
                scenario === "rate" ? 429 : 503,
              ),
            ),
      );
      setup();
      const form = fillContact();
      fireEvent.submit(form);
      await screen.findByText(
        scenario === "rate"
          ? /limite temporário/
          : scenario === "unavailable"
            ? /indisponível no momento/
            : /Não foi possível enviar sua mensagem/,
      );
      expect(
        (within(form).getByLabelText("Nome completo *") as HTMLInputElement)
          .value,
      ).toBe("João Silva");
      expect(screen.queryByText(/Recebemos sua solicitação/)).toBeNull();
      fetchMock.mockResolvedValueOnce(respond({ next: "/thanks" }));
      fireEvent.submit(form);
      await screen.findByText(/Recebemos sua solicitação/);
    },
  );
  it("mostra erro de campo devolvido pelo Formspree com associação acessível", async () => {
    fetchMock.mockResolvedValue(
      respond(
        {
          errors: [
            { field: "email", code: "TYPE_EMAIL", message: "is invalid" },
          ],
        },
        422,
      ),
    );
    setup();
    const form = fillContact();
    fireEvent.submit(form);
    await screen.findByText("E-mail is invalid");
    expect(
      within(form).getByLabelText("E-mail *").getAttribute("aria-describedby"),
    ).toBe("contact-email-error");
  });
  it("não envia honeypot preenchido e não declara sucesso", () => {
    setup();
    const form = fillContact();
    fireEvent.change(form.querySelector('[name="_gotcha"]')!, {
      target: { value: "bot" },
    });
    fireEvent.submit(form);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.queryByText(/Recebemos sua solicitação/)).toBeNull();
  });
  it("Commerce usa endpoint e metadados próprios, sem prometer acesso", async () => {
    fetchMock.mockResolvedValue(respond({ next: "/thanks" }));
    setup();
    fireEvent.click(screen.getByText("Tenho interesse no Commerce"));
    const form = document.getElementById("formCommerce") as HTMLFormElement;
    fireEvent.change(within(form).getByLabelText("Nome *"), {
      target: { value: "Maria" },
    });
    fireEvent.change(within(form).getByLabelText("E-mail *"), {
      target: { value: "maria@example.com" },
    });
    fireEvent.click(within(form).getByRole("checkbox"));
    fireEvent.submit(form);
    await screen.findByText(
      "Recebemos seu interesse no Trevvos Commerce. Obrigado! Sua mensagem foi enviada à equipe.",
    );
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://formspree.io/f/fixturecommerce");
    expect(options.body.get("tipo")).toBe("interesse-produto");
    expect(options.body.get("origem")).toBe("trevvos-commerce");
    expect(options.body.get("produto")).toBe("Trevvos Commerce");
    expect(options.body.get("subject")).toBe(
      "Trevvos Commerce | Interesse no produto",
    );
  });
  it("CTAs preenchem serviço/contexto e movem foco na mesma página", async () => {
    setup();
    fireEvent.click(screen.getByText("Explorar agentes"));
    expect(
      (screen.getByLabelText("Serviço de interesse *") as HTMLSelectElement)
        .value,
    ).toBe("Agentes de IA e atendimento");
    await waitFor(() =>
      expect(document.activeElement).toBe(
        screen.getByLabelText("Nome completo *"),
      ),
    );
    fireEvent.click(screen.getByText("Explorar contratos"));
    expect(
      (screen.getByLabelText("Serviço de interesse *") as HTMLSelectElement)
        .value,
    ).toBe("Outro");
    expect(
      (
        screen.getByLabelText(
          "Mensagem descrevendo a necessidade *",
        ) as HTMLTextAreaElement
      ).value,
    ).toContain("Jurídico: contratos");
    fireEvent.click(screen.getByText("Tenho interesse no Commerce"));
    await waitFor(() =>
      expect(document.activeElement).toBe(screen.getByLabelText("Nome *")),
    );
    fireEvent.click(screen.getByText("Contato geral"));
    expect(contactForm().hidden).toBe(false);
  });
  it("abas têm navegação por teclado e preservam rascunhos", async () => {
    setup();
    const user = userEvent.setup();
    const name = screen.getByLabelText("Nome completo *") as HTMLInputElement;
    fireEvent.change(name, { target: { value: "Rascunho" } });
    screen.getByRole("tab", { name: "Soluções sob medida" }).focus();
    await user.keyboard("{ArrowRight}");
    expect(document.activeElement).toBe(
      screen.getByRole("tab", { name: "Trevvos Commerce" }),
    );
    await user.keyboard("{ArrowLeft}");
    expect(name.value).toBe("Rascunho");
  });
});

describe("endpoint compartilhado com hook oficial e rede simulada", () => {
  it("envia ambos os públicos ao mesmo destino preservando assuntos e metadados", async () => {
    formspreeConfig.commerceId = formspreeConfig.contactId;
    fetchMock.mockImplementation(async () => respond({ next: "/thanks" }));
    setup();
    fireEvent.click(screen.getByText("Explorar agentes"));
    fireEvent.submit(fillContact());
    await screen.findByText(/Recebemos sua solicitação/);
    fireEvent.click(screen.getByText("Tenho interesse no Commerce"));
    const commerce = document.getElementById("formCommerce") as HTMLFormElement;
    fireEvent.change(within(commerce).getByLabelText("Nome *"), {
      target: { value: "Teste fictício Commerce" },
    });
    fireEvent.change(within(commerce).getByLabelText("E-mail *"), {
      target: { value: "commerce@example.com" },
    });
    fireEvent.click(within(commerce).getByRole("checkbox"));
    fireEvent.submit(commerce);
    await screen.findByText(
      "Recebemos seu interesse no Trevvos Commerce. Obrigado! Sua mensagem foi enviada à equipe.",
    );
    expect(fetchMock).toHaveBeenCalledTimes(2);
    const [contactRequest, commerceRequest] = fetchMock.mock.calls;
    expect(contactRequest[0]).toBe("https://formspree.io/f/fixturecontact");
    expect(commerceRequest[0]).toBe(contactRequest[0]);
    expect(Object.fromEntries(contactRequest[1].body)).toMatchObject({
      origem: "trevvos-institucional",
      tipo: "contato-comercial",
      produto: "Soluções sob medida",
      servico: "Agentes de IA e atendimento",
      subject: "Trevvos | Contato comercial: Agentes de IA e atendimento",
      contexto_cta: expect.stringContaining("Explorar agentes"),
    });
    expect(Object.fromEntries(commerceRequest[1].body)).toMatchObject({
      origem: "trevvos-commerce",
      tipo: "interesse-produto",
      produto: "Trevvos Commerce",
      subject: "Trevvos Commerce | Interesse no produto",
      contexto_cta: expect.stringContaining("Tenho interesse no Commerce"),
    });
    expect(commerceRequest[1].body.has("servico")).toBe(false);
  });
});
