#!/bin/bash
# pm-interview-prep — Product context → customer interview guide
# Usage: pm-interview-prep <context.md>
# Requires: claude CLI

set -e

if [ -z "$1" ]; then
  echo "Usage: pm-interview-prep <context.md>"
  echo "Example: pm-interview-prep feature-context.md"
  exit 1
fi

FILE="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROMPT=$(cat "$SCRIPT_DIR/system-prompt.md")

echo "Generating interview guide for $FILE..."
echo ""
claude -p "$PROMPT" --files "$FILE"
