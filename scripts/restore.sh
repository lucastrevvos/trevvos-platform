#!/usr/bin/env bash
set -euo pipefail

dotnet restore
npm ci --prefix src/frontend/trevvos-web
