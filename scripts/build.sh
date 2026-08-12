#!/usr/bin/env bash
set -euo pipefail

dotnet build --no-restore
npm run build --prefix src/frontend/trevvos-web
