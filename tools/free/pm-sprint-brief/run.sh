#!/bin/bash
# pm-sprint-brief — Jira/Linear export → stakeholder narrative
# Usage: pm-sprint-brief <export.txt|export.csv>
# Requires: claude CLI

set -e

if [ -z "$1" ]; then
  echo "Usage: pm-sprint-brief <export.txt>"
  echo "Example: pm-sprint-brief sprint-42-export.txt"
  exit 1
fi

FILE="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROMPT=$(cat "$SCRIPT_DIR/system-prompt.md")

echo "Generating sprint brief from $FILE..."
echo ""
claude -p "$PROMPT" --files "$FILE"
