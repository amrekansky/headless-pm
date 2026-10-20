# OpenCode V2 Installation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `npx headless-pm install` discover OpenCode V2 and install all PM workflows as native global OpenCode skills.

**Architecture:** Extend the existing CLI target list with `opencode`, add a focused OpenCode converter beside the other platform converters, and add an OpenCode branch to the existing skill installation loop. The installer writes one converted `SKILL.md` per source skill in OpenCode's global skill directory without modifying `opencode.jsonc` or third-party skills.

**Tech Stack:** Node.js 18+, ES modules, Node built-in test runner, OpenCode V2 skill format.

**Spec:** `docs/superpowers/specs/2026-10-20-opencode-v2-installation-design.md`

## Global Constraints

- OpenCode global skills must be written to `~/.config/opencode/skills/<skill-id>/SKILL.md`.
- Skill IDs must remain the existing source directory names.
- Preserve all existing Claude, Gemini, and Codex behavior.
- Do not modify `opencode.jsonc`, configure OpenCode MCP servers, status lines, or agents.
- Do not overwrite third-party OpenCode skill directories.
- Keep shared `~/.headless/pm/` tools and knowledge-base behavior unchanged.

## Review Focus

- Windows home-directory resolution: test setup must isolate `os.homedir()` so no real user OpenCode files are touched.
- Existing global skill collision: the OpenCode-specific manifest must identify a directory before it is replaced; an unowned same-ID directory must remain untouched.
- `CLAUDE.md` references: converted OpenCode workflows must refer to `AGENTS.md`, which OpenCode V2 loads.
- YAML quoting: names/descriptions containing quotes or backslashes must keep valid frontmatter.
- OpenCode-only installation: the run must not trigger Claude prerequisite skills, statusline configuration, or MCP configuration.

---

### Task 1: Stabilize the cross-platform installer test fixture

**Files:**
- Modify: `tests/installer.test.js:1-240, 246-450`

**Interfaces:**
- Consumes: Node's `os.homedir()` environment resolution and exported installer functions.
- Produces: A test home fixture that isolates `HOME` and Windows `USERPROFILE`, and assertions aligned with the current supported installer behavior.

- [ ] **Step 1: Update the fixture to set and restore `HOME` and `USERPROFILE` around the test suite**

Store original values in `test.before`, assign the temporary home before importing `lib/installer.js`, and restore both variables in `test.after`.

- [ ] **Step 2: Run the existing installer tests to verify the fixture-related failures are reproduced before editing assertions**

Run: `npm test`

Expected: existing installation tests fail because the current fixture changes `HOME` only on Windows.

- [ ] **Step 3: Align obsolete assertions with the current installer contract**

Update the Gemini output expectation to `~/.gemini/commands/pm.toml`; remove the obsolete `isHeadlessPmSkill` source-text assertion; expect the actual `MCP_SERVERS` count; assert only the current free tool names; and strip ANSI escape sequences before checking the statusline text. Keep assertions that are not stale.

- [ ] **Step 4: Run the suite to verify the corrected baseline passes**

Run: `npm test`

Expected: all pre-OpenCode tests pass on Windows and no files appear under the real user home directory.

- [ ] **Step 5: Commit the fixture and expectation corrections**

```bash
git add tests/installer.test.js
git commit -m "test: stabilize installer coverage across platforms"
```

### Task 2: Add OpenCode conversion support

**Files:**
- Modify: `lib/converters.js:1-50`
- Modify: `tests/installer.test.js:135-185`

**Interfaces:**
- Consumes: `parseFrontmatter(content: string): { meta: Record<string, string>, body: string }`.
- Produces: `convertForOpenCode(content: string): string`, returning an OpenCode V2-compatible `SKILL.md` document.

- [ ] **Step 1: Write failing converter tests for OpenCode frontmatter and instruction adaptation**

Add a sample with quoted metadata and `CLAUDE.md` in its body. Assert that `convertForOpenCode()` emits YAML frontmatter with `name` and `description`, preserves the workflow body, and replaces every `CLAUDE.md` reference with `AGENTS.md`.

- [ ] **Step 2: Run the targeted converter tests to verify they fail**

Run: `node --test --test-name-pattern="OpenCode" tests/installer.test.js`

Expected: FAIL because `convertForOpenCode` is not exported.

- [ ] **Step 3: Implement `convertForOpenCode(content: string): string` in `lib/converters.js`**

Reuse `parseFrontmatter()` and the existing YAML escaping pattern from `convertForCodex()`. Preserve the parsed name and description, replace `CLAUDE.md` with `AGENTS.md` in the body, and return `---`-delimited frontmatter followed by the adapted body.

- [ ] **Step 4: Run the targeted converter tests to verify they pass**

Run: `node --test --test-name-pattern="OpenCode" tests/installer.test.js`

Expected: PASS.

- [ ] **Step 5: Commit the converter**

```bash
git add lib/converters.js tests/installer.test.js
git commit -m "feat: add OpenCode skill conversion"
```

### Task 3: Install native OpenCode V2 skills

**Files:**
- Modify: `lib/installer.js:1-30, 110-290`
- Modify: `bin/cli.js:35-80`
- Modify: `tests/installer.test.js:185-245`

**Interfaces:**
- Consumes: `convertForOpenCode(content: string): string` and `installSkills(licenseKey: string | null, clis: string[] | null): Promise<void>`.
- Produces: `detectCLIs(): Promise<string[]>` that may return `'opencode'`, and OpenCode skill files at `~/.config/opencode/skills/<id>/SKILL.md`.

- [ ] **Step 1: Write failing OpenCode installation tests**

Add tests that call `installSkills(null, ['opencode'])` and assert the isolated home receives `~/.config/opencode/skills/pm/SKILL.md`, with expected metadata and `AGENTS.md` references. Add a combined-target assertion that includes OpenCode output and update the supported CLI allowlist to include `opencode`.

Add collision tests: pre-create `~/.config/opencode/skills/pm/SKILL.md` without the OpenCode manifest and assert an OpenCode-only install preserves it; then install once normally and assert a repeat install updates the now-owned `pm` skill. Assert the manifest lives at `~/.config/opencode/skills/.headless-pm-installed-skills.json`.

- [ ] **Step 2: Run the targeted installation tests to verify they fail**

Run: `node --test --test-name-pattern="OpenCode" tests/installer.test.js`

Expected: FAIL because the installer neither recognizes nor writes the OpenCode target.

- [ ] **Step 3: Add the OpenCode directory helper, detection, ownership manifest, and installation branch in `lib/installer.js`**

Import `convertForOpenCode`; define `opencodeSkillsDir()` as `join(homedir(), '.config', 'opencode', 'skills')`; add `'opencode'` to `detectCLIs()`; and choose `where` on Windows and `which` elsewhere when checking commands so native OpenCode installations are detectable on both platforms.

Add an OpenCode-only manifest named `.headless-pm-installed-skills.json` in the OpenCode skill root. Read its installed IDs before writing. For each source skill, write `<id>/SKILL.md` only when the directory is absent or its ID already belongs to this manifest; preserve and report any conflicting unowned skill. After a successful write, add the ID to the manifest. This makes subsequent Headless PM installs idempotent without overwriting third-party skills that use the same ID.

Do not add OpenCode to Claude-specific `installPrerequisiteSkills()`, `stripGlobalContext()`, statusline, or MCP setup logic. Do not delete directories not named in the manifest.

- [ ] **Step 4: Extend the installation summary in `bin/cli.js`**

Add OpenCode to the detected-CLI display so an OpenCode installation is visible to the user.

- [ ] **Step 5: Run the targeted installation tests to verify they pass**

Run: `node --test --test-name-pattern="OpenCode" tests/installer.test.js`

Expected: PASS, including collision protection.

- [ ] **Step 6: Commit the installer integration**

```bash
git add lib/installer.js bin/cli.js tests/installer.test.js
git commit -m "feat: install Headless PM skills for OpenCode V2"
```

### Task 4: Document OpenCode V2 usage

**Files:**
- Modify: `README.md:12-130`
- Modify: `docs/getting-started.md:installation and first-run sections`

**Interfaces:**
- Consumes: The documented installer behavior and OpenCode V2 skill invocation model.
- Produces: Accurate user-facing installation and first-run guidance for OpenCode V2.

- [ ] **Step 1: Update README support and quick-start copy**

List OpenCode V2 together with Claude, Gemini, and Codex in the product description, auto-detection line, supported-client statements, and first-run guidance. State that OpenCode installs skills globally at `~/.config/opencode/skills` and users can invoke a workflow with `@pm-<workflow>` or let OpenCode auto-invoke it.

- [ ] **Step 2: Update `docs/getting-started.md` tables and installation text**

Add OpenCode V2 to the supported CLI prerequisites and post-install verification table. Keep existing platform-specific paths/instructions intact; do not claim unsupported OpenCode MCP configuration.

- [ ] **Step 3: Verify all documented paths and invocation syntax against the OpenCode V2 skills documentation**

Run: `git diff --check`

Expected: PASS with no whitespace errors; confirm the documentation uses `~/.config/opencode/skills/<skill-id>/SKILL.md` and `@pm-...`.

- [ ] **Step 4: Commit documentation**

```bash
git add README.md docs/getting-started.md
git commit -m "docs: add OpenCode V2 installation guidance"
```

### Task 5: Full verification and PR preparation

**Files:**
- Modify: `docs/superpowers/plans/2026-10-20-opencode-v2-installation.md` (mark completed tasks only during execution)

**Interfaces:**
- Consumes: All previous commits and the upstream issue `amrekansky/headless-pm#1`.
- Produces: A verified feature branch ready for a pull request from `cosmosdesigner:feat/opencode-v2-install` to `amrekansky:main`.

- [x] **Step 1: Run the complete test suite**

Run: `npm test`

Expected: PASS with zero failures.

- [x] **Step 2: Verify a clean working tree and inspect the final diff**

Run: `git status --short && git diff upstream/main...HEAD --check && git diff --stat upstream/main...HEAD`

Expected: clean working tree, no whitespace errors, and changes limited to converter, installer, CLI, tests, and documentation.

- [ ] **Step 3: Push the feature branch**

Run: `git push`

Expected: `origin/feat/opencode-v2-install` updated.

- [ ] **Step 4: Create the pull request linked to the issue**

Run:

```bash
gh pr create --repo amrekansky/headless-pm --base main --head cosmosdesigner:feat/opencode-v2-install --title "feat: support OpenCode V2 skill installation" --body "Closes #1"
```

Expected: GitHub returns the pull-request URL.
