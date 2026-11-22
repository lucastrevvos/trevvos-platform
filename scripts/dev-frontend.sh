#!/usr/bin/env bash
set -euo pipefail

# Next.js development server; npm start now serves a prebuilt static export.
npm run dev --prefix src/frontend/trevvos-web
