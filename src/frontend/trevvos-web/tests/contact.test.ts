import { describe, expect, it } from "vitest";
import {
  leadMetadata,
  leadSubject,
  resolveService,
  salesChannels,
  serviceOptions,
  submissionErrorMessage,
  validateContact,
} from "../src/lib/contact";
import { resolveFormspreeIds } from "../src/lib/formspree-config";
const valid = {
  nome: "João Silva",
  email: "joao@example.com",
  servico: serviceOptions[0],
  mensagem: "Preciso integrar o atendimento.",
  ciencia: "ciente",
};
describe("validação comercial", () => {
  it("aceita contato completo e campos opcionais vazios", () =>
    expect(validateContact("diagnostico", valid)).toEqual({}));
  it("recusa nome, e-mail, serviço, mensagem e ciência ausentes", () =>
    expect(Object.keys(validateContact("diagnostico", {}))).toEqual([
      "nome",
      "email",
      "servico",
      "mensagem",
      "ciencia",
    ]));
  it("rejeita espaços e e-mail inválido", () =>
    expect(
      validateContact("diagnostico", {
        ...valid,
        nome: "  ",
        email: "a@b",
        mensagem: "  ",
      }),
    ).toMatchObject({
      nome: expect.any(String),
      email: expect.any(String),
      mensagem: expect.any(String),
    }));
  it("aceita todos os serviços e rejeita valor fora da lista", () => {
    for (const servico of serviceOptions)
      expect(validateContact("diagnostico", { ...valid, servico })).toEqual({});
    expect(
      validateContact("diagnostico", { ...valid, servico: "inexistente" })
        .servico,
    ).toBeTruthy();
  });
  it("Commerce exige apenas nome, e-mail e ciência", () =>
    expect(
      validateContact("commerce", {
        nome: valid.nome,
        email: valid.email,
        ciencia: "ciente",
      }),
    ).toEqual({}));
  it("valida canais opcionais sem inventar valores", () => {
    for (const canal of salesChannels)
      expect(validateContact("commerce", { ...valid, canal })).toEqual({});
    expect(
      validateContact("commerce", { ...valid, canal: "inexistente" }).canal,
    ).toBeTruthy();
  });
  it("limita campos longos", () =>
    expect(
      validateContact("diagnostico", {
        ...valid,
        mensagem: "a".repeat(5001),
        whatsapp: "1".repeat(41),
      }),
    ).toMatchObject({
      mensagem: expect.any(String),
      whatsapp: expect.any(String),
    }));
});
describe("configuração e metadados", () => {
  it("deixa ambos desativados sem IDs", () =>
    expect(resolveFormspreeIds()).toEqual({
      contactId: undefined,
      commerceId: undefined,
    }));
  it("permite dois IDs e fallback explícito", () => {
    expect(resolveFormspreeIds("fixturecontact", "fixturecommerce")).toEqual({
      contactId: "fixturecontact",
      commerceId: "fixturecommerce",
    });
    expect(resolveFormspreeIds("fixturecontact", "").commerceId).toBe(
      "fixturecontact",
    );
  });
  it("não aceita URLs/tokens nem usa fallback se o ID exclusivo é inválido", () => {
    expect(
      resolveFormspreeIds("https://formspree.io/f/id").contactId,
    ).toBeUndefined();
    expect(
      resolveFormspreeIds("fixturecontact", "token_invalido").commerceId,
    ).toBeUndefined();
  });
  it("mantém públicos separados mesmo com endpoint compartilhado", () => {
    expect(leadMetadata("diagnostico", "serviço")).toEqual({
      origem: "trevvos-institucional",
      tipo: "contato-comercial",
      produto: "Soluções sob medida",
      contexto_cta: "serviço",
    });
    expect(leadMetadata("commerce")).toMatchObject({
      origem: "trevvos-commerce",
      tipo: "interesse-produto",
      produto: "Trevvos Commerce",
    });
  });
  it("mapeia os nomes dos CTAs preservados para opções válidas", () => {
    expect(resolveService("Agentes de IA para atendimento")).toBe(
      serviceOptions[0],
    );
    expect(resolveService("IA para marketing, vendas e relacionamento")).toBe(
      serviceOptions[3],
    );
    expect(resolveService("Copilotos empresariais")).toBe(
      "Copilotos empresariais",
    );
    expect(resolveService("desconhecido")).toBe("Outro");
  });
  it("explica falha de limite e indisponibilidade", () => {
    expect(
      submissionErrorMessage({
        getFormErrors: () => [
          { code: "UNSPECIFIED", message: "Too many requests (429)" },
        ],
      }),
    ).toContain("limite temporário");
    expect(
      submissionErrorMessage({
        getFormErrors: () => [{ code: "INACTIVE", message: "inactive" }],
      }),
    ).toContain("indisponível");
  });
});

describe("assuntos comerciais", () => {
  it("identifica cada serviço sem incluir dados pessoais", () => {
    for (const service of serviceOptions)
      expect(leadSubject("diagnostico", service)).toBe(
        "Trevvos | Contato comercial: " + service,
      );
    expect(leadSubject("diagnostico")).toBe("Trevvos | Contato comercial");
  });
  it("Commerce mantém assunto próprio mesmo após selecionar serviço comercial", () =>
    expect(leadSubject("commerce", serviceOptions[0])).toBe(
      "Trevvos Commerce | Interesse no produto",
    ));
  it("não inclui texto arbitrário no assunto", () =>
    expect(leadSubject("diagnostico", "texto\r\nindevido")).toBe(
      "Trevvos | Contato comercial",
    ));
  it("aceita o mesmo ID público para ambos os formulários", () =>
    expect(resolveFormspreeIds("xyzebnjv", "xyzebnjv")).toEqual({
      contactId: "xyzebnjv",
      commerceId: "xyzebnjv",
    }));
});
