import { expect, test } from "@playwright/test";

test("exportação carrega marcas, fontes e imagens sem serviços Next.js", async ({
  page,
}) => {
  test.skip(
    process.env.TREVVOS_STATIC_E2E !== "1",
    "Requires the production export",
  );
  const errors: string[] = [];
  const failedAssets: string[] = [];
  const fontAssets = new Set<string>();
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) failedAssets.push(response.url());
    if (/\.woff2?(\?|$)/.test(response.url())) fontAssets.add(response.url());
  });
  await page.route("**/*", (route) => {
    const url = new URL(route.request().url());
    expect(url.pathname).not.toBe("/_next/image");
    return url.hostname === "127.0.0.1" ? route.continue() : route.abort();
  });
  await page.goto("/");
  await expect(page).toHaveTitle(
    "Trevvos | Soluções em Inteligência Artificial",
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (el) =>
            el instanceof HTMLImageElement &&
            el.complete &&
            el.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.evaluate(() => document.fonts.ready.then(() => undefined));
  expect(fontAssets.size).toBeGreaterThanOrEqual(4);
  expect(failedAssets).toEqual([]);
  expect(errors).toEqual([]);
});
