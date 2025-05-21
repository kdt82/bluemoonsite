#!/bin/bash
# Force disable all checks
export DISABLE_ESLINT_PLUGIN=true
export NEXT_DISABLE_ESLINT=1
export NEXT_TELEMETRY_DISABLED=1
export NEXT_IGNORE_TYPE_ERRORS=1

# Run with maximum memory allocation and all checks disabled
NODE_OPTIONS="--max-old-space-size=4096" npx next build --no-lint
