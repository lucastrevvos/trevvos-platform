import { test, expect, type Page } from "@playwright/test";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
// Every Formspree request is intercepted, including when testing the production export.
const staticExport = process.env.TREVVOS_STATIC_E2E === "1";
const contactEndpoint =
  "https://formspree.io/f/" + (staticExport ? "xyzebnjv" : "fixturecontact");
const commerceEndpoint =
  "https://formspree.io/f/" + (staticExport ? "xyzebnjv" : "fixturecommerce");
test.beforeEach(async ({ page }) => {
  await page.route("**/*", (route) => {
    const url = new URL(route.request().url());
    return url.hostname === "127.0.0.1" ? route.continue() : route.abort();
  });
});
async function fillContact(page: Page) {
  const form = page.locator("#formDiagnostico");
  await form
    .getByLabel("Nome completo *", { exact: true })
    .fill("Teste fictício");
  await form.getByLabel("E-mail *", { exact: true }).fill("teste@example.com");
  await form
    .getByLabel("Serviço de interesse *", { exact: true })
    .selectOption("Agentes de IA e atendimento");
  await form
    .getByLabel("Mensagem descrevendo a necessidade *", { exact: true })
    .fill("TESTE LOCAL — nenhuma mensagem deve chegar ao serviço real.");
  await form.getByRole("checkbox").check();
  return form;
}
for (const width of [360, 768, 1440])
  test(
    "formulários responsivos e acessíveis em " + width + "px",
    async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto("/#contato");
      await expect(
        page.getByRole("heading", { name: "Fale com a Trevvos." }),
      ).toBeVisible();
      for (const kind of ["diagnostico", "commerce"]) {
        await page.locator("#contact-tab-" + kind).click();
        const form = page.locator(
          kind === "diagnostico" ? "#formDiagnostico" : "#formCommerce",
        );
        await form.scrollIntoViewIfNeeded();
        await expect(form).toBeVisible();
        const bounds = await form.boundingBox();
        expect(bounds!.x).toBeGreaterThanOrEqual(0);
        expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width);
        for (const control of await form
          .locator('input:not([name="_gotcha"]),select,textarea,button')
          .all()) {
          const box = await control.boundingBox();
          if (box) {
            expect(box.x).toBeGreaterThanOrEqual(0);
            expect(box.x + box.width).toBeLessThanOrEqual(width);
          }
        }
        await page.addScriptTag({
          path: require.resolve("axe-core/axe.min.js"),
        });
        const violations = await page.evaluate(async () => {
          const axe = (
            window as unknown as {
              axe: {
                run: (
                  target: string,
                  options: object,
                ) => Promise<{ violations: { id: string; impact: string }[] }>;
              };
            }
          ).axe;
          return (
            await axe.run("#contato", {
              runOnly: {
                type: "tag",
                values: ["wcag2a", "wcag2aa", "wcag21aa"],
              },
            })
          ).violations.map((v) => ({ id: v.id, impact: v.impact }));
        });
        expect(violations).toEqual([]);
      }
      await page.screenshot({
        path: "test-results/forms-" + width + ".png",
        fullPage: false,
      });
    },
  );
test("CTAs de serviços, setores, Commerce e contato usam o formulário correto", async ({
  page,
}) => {
  await page.goto("/");
  const cases = [
    "Agentes de IA e atendimento",
    "Automação inteligente de processos",
    "Consultoria e implementação de IA",
    "IA para marketing e vendas",
    "Copilotos empresariais",
  ];
  for (let index = 0; index < cases.length; index++) {
    await page.locator("#service-tab-" + index).click();
    await page
      .locator("#service-panel-" + index + ' a[data-cta="diagnostico"]')
      .click();
    await expect(page.locator("#servicoSel")).toHaveValue(cases[index]);
    await expect(page.locator('#formDiagnostico [name="nome"]')).toBeFocused();
  }
  await page.locator('#sectorList a[data-cta="diagnostico"]').first().click();
  await expect(page.locator("#servicoSel")).toHaveValue("Outro");
  await expect(page.locator("#desafioTxt")).toHaveValue(
    /Tenho interesse nesta aplicação: Jurídico/,
  );
  await page.locator('.prod--commerce [data-cta="commerce"]').click();
  await expect(page.locator("#formCommerce")).toBeVisible();
  await expect(page.locator('#formCommerce [name="nome"]')).toBeFocused();
  await page.locator(".footer__links a[href='#contato']").click();
  await expect(page.locator("#formDiagnostico")).toBeVisible();
  await expect(
    page.locator('.prod--km a[href="https://kmone.trevvos.com.br/"]'),
  ).toHaveCount(2);
});
test("validação, envio, sucesso confirmado e recomeço sem sair do site", async ({
  page,
}) => {
  let count = 0;
  await page.route(contactEndpoint, async (route) => {
    count++;
    await new Promise((resolve) => setTimeout(resolve, 300));
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ next: "https://example.com/unused" }),
    });
  });
  await page.goto("/#contato");
  const form = page.locator("#formDiagnostico");
  await form.getByRole("button", { name: "Solicitar diagnóstico" }).click();
  await expect(
    form.getByText("Informe seu nome.", { exact: true }),
  ).toBeVisible();
  expect(count).toBe(0);
  await fillContact(page);
  await form.getByRole("button", { name: "Solicitar diagnóstico" }).click();
  await expect(
    form.getByRole("button", { name: "Enviando..." }),
  ).toBeDisabled();
  await expect(
    form.getByText(/Recebemos sua solicitação de contato/),
  ).toBeVisible();
  expect(count).toBe(1);
  expect(page.url()).toContain("127.0.0.1:3100");
  await expect(form.getByLabel("Nome completo *", { exact: true })).toHaveValue(
    "",
  );
  await form.getByRole("button", { name: "Enviar outro contato" }).click();
  await expect(
    form.getByLabel("Nome completo *", { exact: true }),
  ).toBeFocused();
});
test("falha de limite preserva mensagem e permite tentar novamente", async ({
  page,
}) => {
  await page.route(contactEndpoint, (route) =>
    route.fulfill({
      status: 429,
      contentType: "application/json",
      body: JSON.stringify({ error: "Too many requests (429)" }),
    }),
  );
  await page.goto("/#contato");
  const form = await fillContact(page);
  await form.getByRole("button", { name: "Solicitar diagnóstico" }).click();
  await expect(form.getByText(/limite temporário/)).toBeVisible();
  await expect(form.getByLabel("Nome completo *", { exact: true })).toHaveValue(
    "Teste fictício",
  );
  await expect(
    form.getByRole("button", { name: "Solicitar diagnóstico" }),
  ).toBeEnabled();
  await expect(form.getByText(/Recebemos sua solicitação/)).toHaveCount(0);
});

test("Commerce envia ao endpoint configurado com metadados próprios", async ({
  page,
}) => {
  let payload = "";
  await page.route(commerceEndpoint, async (route) => {
    expect(route.request().method()).toBe("POST");
    payload = route.request().postData() ?? "";
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ next: "https://example.com/unused" }),
    });
  });
  await page.goto("/#contato");
  await page.locator("#contact-tab-commerce").click();
  const form = page.locator("#formCommerce");
  await form
    .getByLabel("Nome *", { exact: true })
    .fill("Teste fictício Commerce");
  await form.getByLabel("E-mail *", { exact: true }).fill("teste@example.com");
  await form.getByRole("checkbox").check();
  await form.getByRole("button", { name: "Registrar interesse" }).click();
  await expect(
    form.getByText(/Recebemos seu interesse no Trevvos Commerce/),
  ).toBeVisible();
  expect(payload).toContain("trevvos-commerce");
  expect(payload).toContain("interesse-produto");
});
