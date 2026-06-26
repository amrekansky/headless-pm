# headless-pm

![headless-pm](./banner.svg)

[![npm version](https://img.shields.io/npm/v/headless-pm)](https://www.npmjs.com/package/headless-pm)
[![npm downloads](https://img.shields.io/npm/dm/headless-pm)](https://www.npmjs.com/package/headless-pm)
[![License: FSL-1.1-MIT](https://img.shields.io/badge/License-FSL--1.1--MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/amrekansky/headless-pm)](https://github.com/amrekansky/headless-pm)

**An AI workflow system for product managers.**

headless-pm turns messy product context into structured outputs — discovery synthesis, PRDs, backlog reviews, sprint briefs, launch checklists — with methods, checks, and a reviewable trail.

100+ PM skills + a `/pm` orchestrator that routes them. Free, local-first, runs on Claude, Codex, or Gemini.

```bash
npx headless-pm install
```

---

## The shift

Most PMs run their AI work as a copy-paste ritual: open a chat, paste the notes, re-explain the context, ask for a summary, fix the structure, and do it all again next week. The method lives in your head, so it resets every time.

headless-pm runs that same recurring work as a repeatable workflow instead. Same context rules, same method, same checks, the same artifact shape — and a trail you can review at the end. The AI stops being a drafting toy and starts being workflow infrastructure.

---

## The workflow shape

Every skill runs the same shape, so the output holds up the same way every time:

```
  context  →  method  →  checks  →  loops  →  artifact  →  review trail
```

| Step | What it means |
|------|----------------|
| **context** | your project — notes, tickets, goals, decisions |
| **method** | the workflow decides the steps, not the prompt |
| **checks** | risks, gaps, assumptions, owners — surfaced, not skipped |
| **loops** | rerun until the output actually holds up |
| **artifact** | a brief, PRD, checklist, or decision — in your files |
| **review trail** | what changed, why, and where it lives |

---

## What you get

Everything below installs free with `npx headless-pm install`:

- **100+ PM skills** across 16 categories — discovery, JTBD, roadmapping, OKR, sprint, GTM, competitive, metrics, stakeholder comms, and more
- **`/pm-onboarding`** — a wizard that sets up your `.pm/STATE.md` workspace in 8 questions
- **8 PM domain subagents** — `/discovery`, `/customer-research`, `/strategy`, `/market-research`, `/execution`, `/gtm`, `/analytics`, `/stakeholder`, plus the `/pm-agents` hub to find the right one. Each routes to domain skills or runs a full auto-sequence.
- **Deep methodology knowledge** — 7 Powers, JTBD, April Dunford positioning, Shape Up, Lean Startup, and 50+ PM frameworks built in
- **Cross-linked workflows** — every skill points to the next one. `/pm-hypothesis` → `/brainstorm-experiments` → `/pm-ab`. No dead ends.
- **Connects to your tools** — Notion, Linear, Jira, Miro, Exa, Google Sheets, Figma, Slack, GitHub via MCP
- **Works with** Claude Code, Gemini CLI, and Codex CLI — all three, or just one

---

## Install

```bash
npx headless-pm install
```

Auto-detects which AI assistant you have, installs the skills into each one, and prompts to connect your tools (Notion, Linear, Jira, Miro).

New to the terminal? → **[Getting Started Guide](docs/getting-started.md)** — step by step, from zero to your first run.

<details>
<summary><b>No terminal? Install in Claude Cowork</b></summary>

<br>

Run headless-pm inside Claude Desktop — no command line required:

1. Open **Customize** (bottom-left in Claude Desktop)
2. Go to **Browse plugins** → **Personal** → **+**
3. Select **Add marketplace from GitHub**
4. Enter: `amrekansky/headless-pm`

All 9 PM plugins install automatically. You get commands like `/pm-discovery`, `/pm-execution`, `/pm-customer-research`, and 6 more — directly in your Claude chat.

> Skills work conversationally in Cowork — no memory between sessions. → [Getting Started in Cowork](COWORK.md)

</details>

---

## First run

Open Claude Code (or Gemini CLI / Codex) in your project directory and run the onboarding wizard:

```
/pm-onboarding
```

It asks 8 questions and creates `.pm/STATE.md` — your workspace context. Then use any skill directly:

- `/pm-sprint-plan` — plan a sprint
- `/pm-prd` — write a PRD
- `/pm-discovery` — run a discovery session
- `/cusdev` — customer interview (Mom Test)
- `/pm-roadmap` — build a roadmap

You can also skip onboarding and use any skill directly — no `STATE.md` required.

Not sure where to start? Run the subagent hub:

```
$ claude
> /pm-agents

╔══════════════════════════════════════════════╗
║        headless-pm — PM Subagent Hub         ║
╠══════════════════════════════════════════════╣
║  8 domain subagents ready                    ║
╚══════════════════════════════════════════════╝

What are you working on?

  1  /pm-discovery      → problem framing, hypotheses, OST
  2  /pm-customer-research → interviews, JTBD, segmentation
  3  /pm-strategy       → vision, OKR, roadmap, prioritization
  4  /pm-market-research → sizing, competitive, ICP, positioning
  5  /pm-execution      → sprint, backlog, estimation, delivery
  6  /pm-gtm            → launch, release lifecycle, feature flags
  7  /pm-analytics      → metrics, North Star, funnel, A/B tests
  8  /pm-stakeholder    → exec briefs, status, risk, influence

Describe your task and I'll route you, or pick a number:
>
```

---

## The `/pm` orchestrator

The orchestrator reads your `.pm/STATE.md`, routes to the right skill automatically, and coordinates the subagents. No manual selection, no menus — just type `/pm` and it picks up where you left off.

```bash
npx headless-pm setup --key=YOUR-KEY
```

$60/yr. Get a license → **[headlesspm.com](https://headlesspm.com)**

---

<details>
<summary><b>All skills — full category list</b></summary>

<br>

| Category | Skills |
|---|---|
| Domain Subagents | `/discovery`, `/customer-research`, `/strategy`, `/market-research`, `/execution`, `/gtm`, `/analytics`, `/stakeholder`, `/pm-agents` |
| Orchestrator | `/pm` _(paid)_ |
| Customer Development | `/cusdev`, `/switch-interview`, `/continuous-interview-synthesis` |
| Discovery & Research | `/pm-discover`, `/pm-discovery`, `/pm-define`, `/pm-hypothesis`, `/pm-learn`, `/pm-market`, `/pm-cjm`, `/opportunity-solution-tree` |
| JTBD & Segmentation | `/pm-jtbd`, `/pm-persona`, `/attitudinal-segmentation`, `/user-segmentation`, `/jtbd-interview`, `/pm-segmentation-synthesis` |
| Survey & Feedback | `/pm-survey`, `/pm-nps-csat`, `/feedback-triage`, `/pm-cluster` |
| Definition & Spec | `/pm-prd`, `/pm-story`, `/pm-epic`, `/pm-acceptance`, `/pm-brief` |
| Sprint & Delivery | `/pm-sprint`, `/pm-sprint-plan`, `/pm-backlog`, `/pm-capacity`, `/pm-estimation`, `/pm-dependencies`, `/pm-kickoff`, `/pm-standup`, `/pm-status`, `/pm-demo`, `/pm-retro`, `/pm-save` |
| Strategy | `/strategy-stack`, `/vision-setting`, `/product-work-levels`, `/ansoff-matrix`, `/swot-analysis`, `/pestle-analysis`, `/pm-radar` |
| OKR & Roadmap | `/pm-okr`, `/pm-roadmap`, `/pm-portfolio`, `/pm-prioritize`, `/pm-plan` |
| Market & Sizing | `/tam-sizing`, `/market-sizing`, `/beachhead-mapping` |
| Positioning & Messaging | `/positioning-five-component`, `/icp-definition`, `/messaging-hierarchy`, `/pm-positioning`, `/competitive-battlecard` |
| Competitive | `/pm-competitive`, `/pm-competitive-synthesis` |
| GTM & Launch | `/pm-gtm`, `/pm-launch`, `/pm-feature-flags`, `/pm-release`, `/pm-release-lifecycle`, `/pm-pricing-changes` |
| Stakeholder & Comms | `/pm-stakeholder`, `/pm-exec-brief`, `/risk-escalation`, `/audience-tailoring`, `/weekly-digest`, `/influence-without-authority` |
| Metrics & Analytics | `/pm-metrics`, `/north-star-selection`, `/funnel-analysis`, `/dashboard-structuring`, `/pm-ab`, `/pm-adoption`, `/pm-customer-health`, `/pm-analyst`, `/growth-loops` |
| Experiments & Risk | `/assumption-mapping`, `/brainstorm-experiments`, `/lean-canvas`, `/pre-mortem`, `/pm-decision` |
| Ops & Incidents | `/pm-incident-response`, `/pm-postmortem`, `/pm-sla-slo`, `/pm-sunset-deprecation` |

</details>

<details>
<summary><b>Connect your tools (MCP)</b></summary>

<br>

MCP setup runs automatically during install. You'll see a checkbox list — select the tools you use.

**Notion**
1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) → **New integration**
2. Copy the **Internal Integration Token**
3. Share relevant pages with your integration (open page → `...` → Connections → your integration)

**Linear / Jira / Google Sheets / Figma / Slack / GitHub** — OAuth, no API key needed. A browser window opens on first use.

**Miro** — OAuth, no API key needed.

> **Write access:** The OAuth flow is read-only. For write operations (creating cards, updating boards), generate a personal access token with `boards:write` scope at [miro.com/app/settings/user-profile/apps](https://miro.com/app/settings/user-profile/apps) and set it as `MIRO_TOKEN` in your environment.

**Exa** — AI-powered web search. After install you'll see setup instructions to add your API key. Get one at [exa.ai/settings/api-keys](https://exa.ai/settings/api-keys).

</details>

<details>
<summary><b>The <code>.pm/</code> workspace</b></summary>

<br>

`npx headless-pm install` creates a `.pm/` directory in your project — your persistent PM workspace, context that carries across sessions.

```
.pm/
├── STATE.md           # Current sprint, phase, focus, blockers
├── situation.md       # Situational snapshot from pm-radar
├── goals.md           # Product goals and OKRs
├── decisions.md       # Decision log with [verbal/documented/intuition] tags
├── risks.md           # Active, mitigated, and closed risks
├── open-questions.md  # Open questions with due dates
├── BRIEF.md           # Latest stakeholder brief (written by /pm-brief)
├── REVIEW.md          # Latest workspace health export (written by /pm-review)
├── stakeholders/      # One file per stakeholder — attitude, history, open asks
│   └── {name}.md
├── artifacts/         # PRDs, sprint plans, research outputs, retros
│   └── *.md
├── config.json        # Workspace config (sprint cadence, team name)
└── manifest.json      # Installed skill manifest (used for updates)
```

The `/pm` orchestrator reads this workspace on every invocation — no context re-entry needed. Its opening dashboard flags risks, questions, and briefs as they go stale.

</details>

<details>
<summary><b>CLI commands</b></summary>

<br>

```bash
npx headless-pm install              # Install skills + tools + MCP setup
npx headless-pm setup --key=YOUR-KEY # Unlock the /pm orchestrator with a license key
npx headless-pm mcp                  # Re-run MCP setup
npx headless-pm mcp --list           # List available MCP servers
npx headless-pm list                 # List installed skills and tools
npx headless-pm update               # Update to the latest version
```

</details>

<details>
<summary><b>What's new</b></summary>

<br>

**Latest — PM workspace memory layer**
- `/pm` opening dashboard shows staleness reminders for `/pm-brief` and `/pm-review`
- `/pm-chat` — pour out meeting notes, decisions, and risks in one message; the right `.pm/` file gets updated for you
- `/pm-review` — weekly workspace health sweep: stale risks, overdue questions, unimplemented decisions, stakeholders without recent contact
- `.pm/` memory layer now created on install: `decisions.md`, `risks.md`, `open-questions.md`, `stakeholders/`

**Earlier highlights**
- All PM skills free — only the `/pm` orchestrator needs a license
- 8 domain subagents + the `/pm-agents` hub
- Full cross-link graph — every workflow chain is navigable end-to-end
- Methodology knowledge base — 7 Powers, JTBD, Dunford positioning, North Star, and more

</details>

---

Built for product managers who'd rather run a workflow than feed a chat box.
[Getting Started](docs/getting-started.md) · [headlesspm.com](https://headlesspm.com) · License: FSL-1.1-MIT
