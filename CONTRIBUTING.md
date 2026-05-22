# Contributing to headless-pm

## Local Setup

```bash
git clone https://github.com/amrekansky/headless-pm.git
cd headless-pm
npm install
```

To test the installer locally without publishing:

```bash
node bin/cli.js install
```

## Running Tests

```bash
npm test
```

Tests use Node.js built-in test runner (`node --test`). The test file is `tests/installer.test.js`.

## Project Structure

```
bin/cli.js          — CLI entry point
lib/installer.js    — Core install logic
lib/config.js       — Config helpers
skills/             — PM skill files (one per skill)
knowledge/          — Knowledge base (40 files, installed to ~/.headless/pm/knowledge/)
tools/              — Free and paid tool scripts
docs/               — Getting started guide
```

## Adding or Editing Skills

Skills live in `skills/<name>/skill.md`. Each file is a markdown prompt installed to the user's AI CLI on `npx headless-pm install`.

Skill files follow this structure:
- Universal Rules block at the top (language, question style, KB reading)
- Skill-specific instructions
- Output Template section

## Opening a Pull Request

1. Fork the repo and create a branch: `git checkout -b feat/your-change`
2. Make your changes
3. Run `npm test` and confirm it passes
4. Open a PR with a clear description of what changed and why

For significant changes (new skills, installer behavior), open an issue first to discuss the approach.
