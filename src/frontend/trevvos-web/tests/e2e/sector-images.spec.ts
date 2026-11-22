import { test, expect } from "@playwright/test";
import { sectors } from "../../src/data/sectors";

for (const width of [375, 768, 1440]) {
  test(
    "fotografias, conteúdo e CTAs dos setores em " + width + "px",
    async ({ page }) => {
      test.setTimeout(120000);
      await page.setViewportSize({ width, height: 1000 });
      await page.route("**/*", (route) =>
        new URL(route.request().url()).hostname === "127.0.0.1"
          ? route.continue()
          : route.abort(),
      );
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto("/#aplicacoes");
      const seen = new Set<string>();
      for (const [index, sector] of sectors.entries()) {
        await page.locator("#sector-tab-" + index).click();
        const panel = page.locator("#sectorList");
        await expect(panel.locator("article")).toHaveCount(sector.items.length);
        await expect(panel.locator("img")).toHaveCount(sector.items.length);
        for (const item of sector.items) {
          const card = panel.getByRole("article").filter({
            has: page.getByRole("heading", { name: item.t, exact: true }),
          });
          await expect(card.getByRole("heading")).toHaveText(item.t);
          for (const text of [
            item.p,
            item.s,
            item.b,
            ...(item.reg ? [item.reg] : []),
          ])
            await expect(card.getByText(text, { exact: true })).toBeVisible();
          expect(item.image, item.t).toBeDefined();
          if (item.image) {
            expect(seen.has(item.image.src)).toBe(false);
            seen.add(item.image.src);
            const img = card.getByRole("img", {
              name: item.image.alt,
              exact: true,
            });
            await img.scrollIntoViewIfNeeded();
            await expect
              .poll(() =>
                img.evaluate((el) => {
                  const image = el as HTMLImageElement;
                  return image.complete && image.naturalWidth > 0;
                }),
              )
              .toBe(true);
            const box = await img.boundingBox();
            expect(box!.width).toBeGreaterThan(100);
            expect(box!.height).toBeGreaterThan(100);
            expect(box!.x).toBeGreaterThanOrEqual(0);
            expect(box!.x + box!.width).toBeLessThanOrEqual(width);
          }
          const link = card.getByRole("link", {
            name: "Quero explorar esta solução",
            exact: true,
          });
          await expect(link).toHaveAttribute("href", "#contato");
          await link.click();
          await expect(page.locator("#servicoSel")).toHaveValue("Outro");
          await expect(page.locator("#desafioTxt")).toHaveValue(
            "Tenho interesse nesta aplicação: " +
              sector.name +
              ": " +
              item.t +
              ".\n\n",
          );
        }
        await page.locator("#sectors").scrollIntoViewIfNeeded();
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth),
        ).toBeLessThanOrEqual(width);
        await page.locator("#sectors").screenshot({
          animations: "disabled",
          style: "header, nextjs-portal { visibility: hidden !important; }",
          path:
            "test-results/missao004/screenshots/sector-" +
            index +
            "-" +
            width +
            ".png",
        });
      }
      expect(seen.size).toBe(12);
      expect(errors).toEqual([]);
    },
  );
}
