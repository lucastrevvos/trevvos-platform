export type ContactKind = "diagnostico" | "commerce";
export const serviceOptions = [
  "Agentes de IA e atendimento",
  "Automação inteligente de processos",
  "Consultoria e implementação de IA",
  "IA para marketing e vendas",
  "Copilotos empresariais",
  "Desenvolvimento de software personalizado",
  "Outro",
] as const;
export const salesChannels = [
  "Mercado Livre",
  "Shopee",
  "Instagram / WhatsApp",
  "Nuvemshop",
  "Shopify",
  "WooCommerce",
  "Outros",
] as const;
export type ContactFields = Record<string, string>;
export type FieldErrors = Partial<Record<string, string>>;
export function resolveService(value = ""): string {
  const aliases: Record<string, string> = {
    "Agentes de IA para atendimento": serviceOptions[0],
    "IA para marketing, vendas e relacionamento": serviceOptions[3],
    "Ainda não sei, quero conversar": "Outro",
  };
  return serviceOptions.includes(value as (typeof serviceOptions)[number])
    ? value
    : (aliases[value] ?? "Outro");
}
export function validateContact(
  kind: ContactKind,
  data: ContactFields,
): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.nome?.trim()) errors.nome = "Informe seu nome.";
  else if (data.nome.length > 120)
    errors.nome = "Use até 120 caracteres no nome.";
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email?.trim() ?? "") ||
    (data.email?.length ?? 0) > 254
  )
    errors.email = "Informe um e-mail válido.";
  if (kind === "diagnostico") {
    if (
      !serviceOptions.includes(data.servico as (typeof serviceOptions)[number])
    )
      errors.servico = "Selecione um serviço de interesse.";
    if (!data.mensagem?.trim())
      errors.mensagem = "Descreva a necessidade da sua empresa.";
  }
  if ((data.mensagem?.length ?? 0) > 5000)
    errors.mensagem = "Use até 5.000 caracteres na mensagem.";
  if ((data.empresa?.length ?? 0) > 200)
    errors.empresa = "Use até 200 caracteres na empresa.";
  if ((data.whatsapp?.length ?? 0) > 40)
    errors.whatsapp = "Use até 40 caracteres no WhatsApp.";
  if (
    kind === "commerce" &&
    data.canal &&
    !salesChannels.includes(data.canal as (typeof salesChannels)[number])
  )
    errors.canal = "Selecione um canal da lista.";
  if (data.ciencia !== "ciente")
    errors.ciencia =
      "Confirme a ciência sobre o tratamento dos dados para continuar.";
  return errors;
}
export function leadSubject(kind: ContactKind, service = ""): string {
  if (kind === "commerce") return "Trevvos Commerce | Interesse no produto";
  const base = "Trevvos | Contato comercial";
  return serviceOptions.includes(service as (typeof serviceOptions)[number])
    ? base + ": " + service
    : base;
}
export function leadMetadata(kind: ContactKind, context = "") {
  return kind === "commerce"
    ? {
        origem: "trevvos-commerce",
        tipo: "interesse-produto",
        produto: "Trevvos Commerce",
        contexto_cta: context,
      }
    : {
        origem: "trevvos-institucional",
        tipo: "contato-comercial",
        produto: "Soluções sob medida",
        contexto_cta: context,
      };
}
export function submissionErrorMessage(
  errors: {
    getFormErrors(): readonly { code: string; message: string }[];
  } | null,
): string {
  const messages = errors?.getFormErrors() ?? [];
  if (
    messages.some((error) =>
      /limit|quota|too many|429/i.test(error.code + " " + error.message),
    )
  )
    return "O limite temporário de envios foi atingido. Aguarde e tente novamente mais tarde. Seus dados foram preservados.";
  if (
    messages.some((error) =>
      ["INACTIVE", "BLOCKED", "FORM_NOT_FOUND", "PROJECT_NOT_FOUND"].includes(
        error.code,
      ),
    )
  )
    return "O formulário está indisponível no momento. Tente novamente mais tarde. Seus dados foram preservados.";
  return "Não foi possível enviar sua mensagem. Verifique sua conexão ou tente novamente mais tarde. Seus dados foram preservados.";
}
