#!/usr/bin/env bash
set -euo pipefail

dotnet restore
npm ci --prefix src/frontend/trevvos-web
npm ci --prefix src/frontend/kmone-landing
