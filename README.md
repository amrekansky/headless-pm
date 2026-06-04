# headless-pm

![headless-pm](./banner.svg)

[![npm version](https://img.shields.io/npm/v/headless-pm)](https://www.npmjs.com/package/headless-pm)
[![npm downloads](https://img.shields.io/npm/dm/headless-pm)](https://www.npmjs.com/package/headless-pm)
[![License: FSL-1.1-MIT](https://img.shields.io/badge/License-FSL--1.1--MIT-blue.svg)](LICENSE)

Turn your AI terminal assistant into a PM agent.

**Claude Code, Gemini CLI, and Codex CLI** are the terminal interfaces for Claude (Anthropic), Gemini (Google), and Codex (OpenAI) — AI assistants you run from your computer's command line instead of a browser chat. headless-pm installs 101 PM skills into whichever one you use, so it stops being a generic chatbot and starts behaving like a product manager.

---

## Install in Claude (No Terminal)

If you use **Claude.ai** (browser or desktop app), you can add headless-pm as a plugin — no terminal needed.

1. Open Claude → click **Browse plugins** in the left sidebar
2. Go to **Personal plugins** → **Add from GitHub**
3. Enter: `amrekansky/headless-pm`
4. Click **Add** — all 9 PM skill groups install instantly

You'll get slash commands like `/pm-discovery`, `/pm-strategy`, `/pm-execution`, `/pm-customer-research`, and 5 more — directly in your Claude chat.

> **Terminal user?** Skip this and use `npx headless-pm install` below — you get the same skills plus MCP integrations and the agentic subagents.

---

## Install

```bash
npx headless-pm install
```

Auto-detects which AI assistant you have. Installs skills into each one. Prompts to connect your tools.

New to the terminal? → **[Getting Started Guide](docs/getting-started.md)** — step-by-step from zero to your first `/pm-onboarding` run.

---

## What You Get

**Free — everything below installs with `npx headless-pm install`:**

- **101 PM skills** across 16 categories: discovery, JTBD, roadmapping, OKR, sprint, GTM, competitive, metrics, stakeholder comms, and more
- **`/pm-onboarding`** — wizard that sets up your `.pm/STATE.md` workspace in 8 questions
- **8 PM domain subagents** — `/discovery`, `/customer-research`, `/strategy`, `/market-research`, `/execution`, `/gtm`, `/analytics`, `/stakeholder`. Plus `/pm-agents` hub to find the right one. Each routes to domain skills or runs a full auto-sequence.
- **Deep methodology knowledge** — 7 Powers, JTBD, April Dunford positioning, Shape Up, Lean Startup, and 50+ PM frameworks built in
- **Cross-linked workflows** — every skill points to the next one. `/pm-hypothesis` → `/brainstorm-experiments` → `/pm-ab`. No dead ends
- **Connects to your tools** — Notion, Linear, Jira, Miro, Exa, Google Sheets, Figma, Slack, GitHub via MCP
- **Works with** Claude Code, Gemini CLI, and Codex CLI — all three, or just one

**Paid — `/pm` orchestrator:**

- Reads your `.pm/STATE.md` and routes to the right skill automatically. No manual selection — just `/pm` and it thinks for you

---

## Quick Start

```bash
npx headless-pm install
```

Then open Claude Code (or Gemini CLI / Codex) in your project directory and run the onboarding wizard:

```
/pm-onboarding
```

It asks 8 questions and creates `.pm/STATE.md` — your workspace context. Then use any skill directly:

- `/pm-sprint-plan` — plan a sprint
- `/pm-prd` — write a PRD
- `/pm-discovery` — run a discovery session
- `/cusdev` — customer interview (Mom Test)
- `/pm-roadmap` — build a roadmap

You can also skip onboarding and use any skill directly — no STATE.md required.

**Have the `/pm` orchestrator?** Just type `/pm` — it reads your STATE.md and routes automatically. No flags, no menus.

### Example Output

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

## Skill Categories

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

---

## Commands

```bash
npx headless-pm install              # Install skills + tools + MCP setup
npx headless-pm setup --key=YOUR-KEY # Unlock /pm orchestrator with license key
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

**Free** — everything you need to get started:
- All 101 PM skills (slash commands)
- `/pm-onboarding` wizard
- 8 PM subagents
- MCP integrations (Notion, Linear, Jira, Miro)

**Paid — `/pm` orchestrator**

Reads your `.pm/STATE.md`, routes automatically, coordinates subagents. No manual skill selection — just `/pm` and it thinks for you.

Get a license: [headlesspm.com](https://headlesspm.com)

---

## What's New

### v0.8.1–v0.8.6 — Free tier cleanup + full skill discoverability
- All 101 PM skills now free — only `/pm` orchestrator requires a license
- All 35 previously-orphaned skills now listed in domain subagent routing tables
- Skill count corrected to 101 across README, npm description, and all marketing copy
- Skill Categories table now complete — `jtbd-interview`, `pm-segmentation-synthesis`, `influence-without-authority` added
- Fixed: skill cleanup on update no longer removes skills it doesn't own (manifest-based tracking)
- Fixed: subagents no longer show paywall messaging for free skills

### v0.8.0 — 8 Domain Subagents
- 8 domain subagents: `/discovery`, `/customer-research`, `/strategy`, `/market-research`, `/execution`, `/gtm`, `/analytics`, `/stakeholder`
- `/pm-agents` hub — describe your task, get routed to the right domain
- 30 previously-hidden framework skills now installed (ansoff-matrix, swot-analysis, north-star-selection, funnel-analysis, and 26 more)
- 3 new skills: `/jtbd-interview`, `/pm-segmentation-synthesis`, `/influence-without-authority`

### v0.7.13 — Full cross-link graph + expanded knowledge base
- All 88 skills now have "Related skills:" cross-links — every skill points to the next one in the workflow
- Knowledge base expanded to 59 files: added Jobs-to-be-Done (Moesta/Christensen/Ulwick) and April Dunford positioning
- 37 new skills added since v0.6.x: strategy, positioning, experiments, segmentation, comms, and more
- Zero isolated skills — every workflow chain is navigable end-to-end

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
