# Quickstart: Public Trevvos Homepage Validation

## Prerequisites

- Work from repository root: `C:\dev\PROJETOS\trevvos-platform`
- Use the existing frontend project: `src/frontend/trevvos-web`
- Use npm and the committed `package-lock.json`
- Do not modify backend, `src/frontend/kmone-landing` or `src/frontend/kmone-proxy`

## Setup

```bash
cd src/frontend/trevvos-web
npm ci
```

If dependencies are already installed and match the lockfile, implementation may proceed without reinstalling, but final validation should state whether `npm ci` was run.

## Automated Validation

```bash
cd src/frontend/trevvos-web
npm run build
npm test
```

Expected outcomes:

- Production build succeeds within the existing Angular budgets.
- Unit tests pass.
- No lint command is expected unless a lint script is added later; the current `package.json` does not define one.

## Static Output Verification

After `npm run build`, inspect the actual generated/prerendered HTML artifact for the root route, not only the browser DOM after JavaScript execution.

For the current Angular project configuration, the production browser output is under:

```text
src/frontend/trevvos-web/dist/trevvos-web/browser/
```

The root route HTML artifact is expected at:

```text
src/frontend/trevvos-web/dist/trevvos-web/browser/index.html
```

If implementation changes `angular.json` output settings, first determine the actual root HTML artifact from the build configuration or generated output, then inspect that file.

Example PowerShell verification:

```powershell
cd src/frontend/trevvos-web
$htmlPath = "dist/trevvos-web/browser/index.html"
$html = Get-Content -Path $htmlPath -Raw
@("Trevvos", "KM One", "Trevvos Flow") | ForEach-Object {
  if ($html -notmatch [regex]::Escape($_)) { throw "Missing generated HTML text: $_" }
}
if ($html -match [regex]::Escape("Copiloto KM One")) {
  throw "Forbidden generated HTML text found: Copiloto KM One"
}
```

Expected outcomes:

- The generated/prerendered root HTML contains real textual content for Trevvos.
- The generated/prerendered root HTML contains real textual content for KM One.
- The generated/prerendered root HTML contains real textual content for Trevvos Flow.
- The generated/prerendered root HTML does not contain `Copiloto KM One`.

## Manual Accessibility Review

Validate the implemented homepage against `contracts/homepage-ui.md`:

- The document has a meaningful title.
- There is one clear primary heading.
- Major sections have semantic headings.
- Keyboard users can reach and activate the KM One and Trevvos Flow CTAs.
- Focus indicators are visible.
- Trevvos, KM One and Trevvos Flow content remains understandable without images, animations or backend status.
- Reduced-motion preferences are respected if motion is added.

Expected outcome: all listed checks pass or failures are documented before completion.

## Manual Product-Truth Review

Validate the homepage copy against the approved specification and generated HTML:

- Trevvos, KM One and Trevvos Flow descriptions are present as real text.
- Core content is not hidden behind interaction.
- KM One is described as primary.
- No Copiloto KM One text appears.
- No unsupported claims appear, including guaranteed rides, income, demand, savings, profitability, results, counts, ratings, partnerships, awards, geography or release dates.

Expected outcome: 100% of core claims trace to the approved specification or existing repository documentation.

## Responsive Review

Run the app locally:

```bash
cd src/frontend/trevvos-web
npm start
```

Review at representative viewports:

- Mobile narrow viewport around 360px wide
- Mobile/tablet around 768px wide
- Desktop around 1280px wide

Expected outcomes:

- Reading order remains Trevvos introduction, KM One primary content, Trevvos Flow secondary content.
- KM One remains more prominent than Trevvos Flow.
- CTAs are readable and do not overlap content.
- Text wraps cleanly and remains readable.

## CTA Validation

- Activate the KM One CTA and confirm it points to `https://kmone.trevvos.com.br/`.
- Activate the Trevvos Flow CTA and confirm it navigates to the Trevvos Flow section on the same homepage.

Expected outcome: both CTA destinations match `contracts/homepage-ui.md`.
