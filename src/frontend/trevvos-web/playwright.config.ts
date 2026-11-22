import { defineConfig, devices } from "@playwright/test";
const staticExport = process.env.TREVVOS_STATIC_E2E === "1";
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  timeout: 45000,
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "retain-on-failure",
    reducedMotion: "reduce",
  },
  webServer: {
    command: staticExport
      ? "npm start -- --port 3100"
      : "npm run dev -- --hostname 127.0.0.1 --port 3100",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: false,
    env: staticExport
      ? {}
      : {
          TREVVOS_E2E: "1",
          NEXT_PUBLIC_FORMSPREE_CONTACT_ID: "fixturecontact",
          NEXT_PUBLIC_FORMSPREE_COMMERCE_ID: "fixturecommerce",
        },
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
