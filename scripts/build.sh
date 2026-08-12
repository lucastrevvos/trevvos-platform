#!/usr/bin/env bash
set -euo pipefail

dotnet build --no-restore
npm run build --prefix src/frontend/trevvos-web
npm run build --prefix src/frontend/kmone-landing
