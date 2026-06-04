# Getting Started with headless-pm in Claude

This guide is for **Claude Cowork** users — people who installed headless-pm through Claude's plugin menu without using the terminal.

---

## What you have

9 PM plugin groups with 101 slash commands — the full headless-pm skill library, running conversationally in Claude Desktop or Claude.ai. You can call `/pm-discovery`, `/pm-strategy`, `/pm-prd`, `/pm-sprint`, and 97 more skills directly in chat.

All commands route through `/pm-orchestrator` — describe what you are working on and it picks the right skill for you.

---

## What works

- All 9 `/pm-*` plugin groups — discovery, strategy, execution, GTM, analytics, customer research, market research, stakeholder, and the orchestrator
- `/pm-orchestrator` — describe your situation, get routed to the right skill
- Every skill works as a standalone conversation — just type the command and answer the questions

---

## What does not work

Cowork mode runs inside Claude's conversation window. There is no file system access, so:

- **No `.pm/STATE.md`** — your workspace context is not saved between sessions. Each conversation starts fresh.
- **Artifacts are not saved** — outputs (PRDs, roadmaps, briefs) stay in chat. Copy them manually to Notion, Google Docs, or wherever you store work.
- **No memory between sessions** — the next conversation does not know what you worked on in the last one.

This is a Claude architecture limitation, not a headless-pm limitation.

---

## Cowork vs Terminal comparison

| | Cowork (Claude plugin) | Terminal (free) | Terminal + /pm (paid) |
|---|---|---|---|
| **Install** | 4 clicks in Claude | `npx headless-pm install` | `npx headless-pm install` + license key |
| **101 PM skills** | Yes | Yes | Yes |
| **Memory between sessions** | No | Yes (`.pm/STATE.md`) | Yes (automatic) |
| **Saves artifacts** | No | Yes (`.pm/artifacts/`) | Yes |
| **Autopilot (picks workflow for you)** | No | No | Yes |
| **MCP integrations (Notion, Jira, Linear)** | No | Yes | Yes |

---

## How to upgrade to the terminal version

If you want persistent context and MCP integrations, install via terminal:

```bash
npx headless-pm install
```

This requires Node.js 18+ and a terminal (macOS Terminal, iTerm2, Windows Terminal, or similar). Not sure if you have Node? Run `node --version` — if it prints a version number, you are ready.

New to the terminal? → [Getting Started Guide](docs/getting-started.md)

---

## How to unlock the /pm orchestrator

The `/pm` orchestrator reads your `.pm/STATE.md` and routes automatically — no manual skill selection. This is a paid feature.

Get a license: [headlesspm.com](https://headlesspm.com)

After purchase:

```bash
npx headless-pm setup --key=YOUR-KEY
```

---

## Questions?

Open an issue on [GitHub](https://github.com/amrekansky/headless-pm) or reach out at headlesspm.com.
