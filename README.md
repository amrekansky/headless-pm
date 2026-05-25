# headless-pm

![headless-pm](./banner.svg)

[![npm version](https://img.shields.io/npm/v/headless-pm)](https://www.npmjs.com/package/headless-pm)
[![npm downloads](https://img.shields.io/npm/dm/headless-pm)](https://www.npmjs.com/package/headless-pm)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

PM toolkit for Claude Code, Gemini CLI, and Codex CLI. One command installs 51 skills, a 40-file knowledge base, and MCP server connections — so your AI assistant thinks like a product manager, not a generic chatbot.

## Install

```bash
npx headless-pm install
```

Auto-detects which CLIs you have. Installs skills into each one. Prompts to connect MCP servers.

New to the terminal? → **[Getting Started Guide](docs/getting-started.md)** — step-by-step from zero to your first `/pm` run.

---

## What You Get

- **/pm** — agentic orchestrator that reads your `.pm/` workspace (sprint state, backlog, context) and routes to the right skill automatically
- **51 PM skills** across 7 categories, each grounded in the knowledge base with concrete output templates
- **40-file knowledge base** — 7 Powers, AARRR, Mom Test, North Star, Crossing the Chasm, Van Westendorp, and more — installed to `~/.headless/pm/knowledge/`
- **MCP integrations** — Notion, Linear, Jira, Miro, Exa, Google Sheets, Figma, Slack, GitHub
- **Works with** Claude Code, Gemini CLI, and Codex CLI — all three, or just one

---

## Quick Start

```bash
npx headless-pm install
```

Then open Claude Code (or Gemini CLI / Codex) in any project directory and type `/pm`:

```
/pm
```

The orchestrator reads your `.pm/` workspace and routes automatically. No flags, no menus.

Common entry points:
- `/pm-sprint-plan` — plan a sprint
- `/pm-prd` — write a PRD
- `/pm-discovery` — run a discovery session
- `/cusdev` — customer interview (Mom Test)
- `/pm-roadmap` — build a roadmap

---

## Skill Categories

| Category | Skills |
|---|---|
| Orchestrator | pm, cusdev |
| Discovery / Research | pm-discover, pm-discovery, pm-hypothesis, pm-jtbd, pm-persona, pm-cjm, pm-survey, pm-market, pm-learn, pm-nps-csat |
| Definition | pm-define, pm-prd, pm-story, pm-epic, pm-acceptance |
| Sprint / Delivery | pm-sprint, pm-sprint-plan, pm-backlog, pm-capacity, pm-standup, pm-status, pm-demo, pm-retro, pm-dependencies |
| Strategy / OKR | pm-okr, pm-roadmap, pm-plan, pm-portfolio, pm-prioritize, pm-brief, pm-exec-brief |
| GTM / Market | pm-gtm, pm-launch, pm-competitive, pm-positioning, pm-pricing-changes |
| Stakeholder / Comms | pm-stakeholder, pm-decision |
| Metrics / Growth | pm-metrics, pm-ab, pm-feature-flags, pm-adoption, pm-customer-health |
| Ops / Incidents | pm-incident-response, pm-postmortem, pm-sla-slo, pm-release, pm-release-lifecycle, pm-sunset-deprecation |

---

## Commands

```bash
npx headless-pm install              # Install skills + tools + MCP setup
npx headless-pm setup --key=YOUR-KEY # Unlock paid skills with license key
npx headless-pm mcp                  # Re-run MCP setup
npx headless-pm mcp --list           # List available MCP servers
npx headless-pm list                 # List installed skills and tools
npx headless-pm update               # Update to latest version
```

---

## MCP Setup

Runs automatically during install. You'll see a checkbox list — select the tools you use.

### Notion
1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) → **New integration**
2. Copy the **Internal Integration Token**
3. Share relevant pages with your integration (open page → `...` → Connections → your integration)

### Linear / Jira / Google Sheets / Figma / Slack / GitHub
OAuth — no API key needed. A browser window opens on first use.

### Miro
OAuth — no API key needed. A browser window opens on first use.

> **Write access:** The OAuth flow provides read-only access. For write operations (creating cards, updating boards), generate a personal access token with `boards:write` scope at [miro.com/app/settings/user-profile/apps](https://miro.com/app/settings/user-profile/apps) and set it as `MIRO_TOKEN` in your environment.

### Exa
AI-powered web search. After install, you will see setup instructions to add your API key.

Get your API key: [exa.ai/settings/api-keys](https://exa.ai/settings/api-keys)

---

## Free vs Paid

**Free** (installed without a license key):

`/pm`, `/cusdev`, `/pm-discover`, `/pm-discovery`, `/pm-persona`, `/pm-survey`, `/pm-cjm`, `/pm-jtbd`, `/pm-market`, `/pm-hypothesis`, `/pm-define`, `/pm-prd`, `/pm-story`, `/pm-epic`, `/pm-acceptance`

**Paid** (require license key via `npx headless-pm setup --key=YOUR-KEY`):

All remaining skills — sprint planning, OKR, roadmap, GTM, metrics, stakeholder, ops, and more.

Get a license: [headlesspm.com](https://headlesspm.com)

---

## What's New

### v0.7.10 — Zombie skill cleanup
- `update` command now removes skills that were deleted in newer versions — no stale `/pm-*` commands left behind after upgrade

### v0.7.9 — Update notifier
- CLI notifies you when a new version is available
- `npx headless-pm update` now does a full reinstall (not just a version bump)

### v0.7.7–v0.7.8 — /pm Dashboard + /pm-save
- `/pm` now opens with a visual dashboard: lifecycle phase, sprint status, artifact inventory
- `/pm-save` — new skill to wrap up a PM session and commit context to git

### v0.7.0–v0.7.6 — Agentic Layer (24 agents)
- All major PM workflows now run as autonomous agents with Opening/Closing Dashboards
- 24 skills upgraded: discovery, competitive, release lifecycle, sprint planning, exec brief, backlog grooming, and more
- Agent Communication Protocol standardized across all agents
- Gemini CLI routing directives hardened for all agent skills

### v0.6.5–v0.6.15 — Knowledge Base + Skill Quality
- 40-file knowledge base: 7 Powers, AARRR, Mom Test, North Star, Crossing the Chasm, Van Westendorp
- Universal Rules + Output Templates injected into all 51 skills
- Gemini MCP fix: Notion, Linear, Jira, Miro reliably registered on install

### v0.6.3 — /pm Agentic Orchestrator
- `/pm` reads `.pm/` workspace and routes to the right skill automatically
