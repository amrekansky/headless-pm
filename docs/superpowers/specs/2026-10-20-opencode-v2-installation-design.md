# OpenCode V2 installation support

## Goal

Enable `npx headless-pm install` to discover an installed OpenCode V2 CLI and install every Headless PM workflow as a global OpenCode skill. The implementation must preserve the existing behavior for Claude, Gemini, and Codex.

## Scope

- Add `opencode` to the CLI detection set.
- Add an OpenCode destination to `installSkills()`.
- Convert each source `skills/<id>/skill.md` into an OpenCode V2-compatible `SKILL.md`.
- Document OpenCode as a supported CLI and describe how to invoke its skills.
- Add coverage for detection, conversion, and installation output.

The shared tools and knowledge base already installed under `~/.headless/pm/` remain unchanged and are available regardless of which CLI is detected.

## Installation contract

When `opencode` is detected, the installer writes every supported skill to:

```text
~/.config/opencode/skills/<skill-id>/SKILL.md
```

This is OpenCode V2's global native skill location. It requires no `opencode.jsonc` update and does not alter unrelated OpenCode skills or configuration.

The skill ID is the source directory name and remains unchanged. Re-running installation replaces only the Headless PM skill directories that the installer owns, making the operation idempotent.

## Conversion contract

A new `convertForOpenCode(source)` converter will:

1. Parse the existing YAML frontmatter using the shared frontmatter parser.
2. Write OpenCode-compatible frontmatter with a display `name` and a discoverable `description`.
3. Retain the workflow body and skill references.
4. Apply only the portable document-reference adaptations needed for OpenCode V2; no workflow steps are removed or rewritten.

Output uses the directory form (`<id>/SKILL.md`) required by OpenCode's native skill discovery. The OpenCode V2 runtime uses the directory name as the skill ID and frontmatter only as display metadata.

## Installer flow

`detectCLIs()` will return `opencode` when `opencode` is on `PATH`. The CLI summary will include OpenCode. `installSkills()` will handle the new target alongside the existing Claude, Gemini, and Codex branches:

1. Create `~/.config/opencode/skills` if absent.
2. For each Headless PM skill, create or replace its owned destination directory.
3. Write the converted content to `SKILL.md`.
4. Report the installed skill using OpenCode-oriented output.

No MCP configuration, Claude statusline setup, or prerequisite Claude skill installation is performed solely because OpenCode is detected.

## Error handling and compatibility

- A missing OpenCode CLI is not an error; existing installations work as before.
- OpenCode-only environments must install workflows and shared tools successfully.
- Existing unrelated skills and `opencode.jsonc` are left untouched.
- Existing supported CLIs remain independently installable and may be installed in the same run.

## Tests

Add tests that verify:

- `convertForOpenCode()` emits `name` and `description` frontmatter and preserves the workflow body.
- `installSkills(null, ['opencode'])` creates `~/.config/opencode/skills/pm/SKILL.md` in the isolated test home.
- The installed OpenCode skill has valid expected frontmatter and content.
- CLI detection accepts only supported names, including `opencode`.
- A combined install still writes all existing target formats plus OpenCode output.

Update existing expectations that encode the historical set of supported CLIs.

## Documentation

Update the README and getting-started guidance to list OpenCode V2 among the supported assistants and use OpenCode-native invocation examples (`@pm-...` or discovery/autoinvocation).

## Non-goals

- Remote OpenCode skill catalogs.
- Automatic modifications to `opencode.jsonc`.
- OpenCode-specific MCP setup, status lines, or agents.
- Changes to Headless PM workflows themselves beyond minimal compatibility references.
