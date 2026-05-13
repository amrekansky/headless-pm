# headless-pm

AI Chief of Staff for product managers. Installs PM skills, tools, and MCP servers into Claude Code, Gemini CLI, and Codex CLI.

## Install

```bash
npx headless-pm install
```

Detects Claude Code, Gemini CLI, and Codex CLI automatically. Installs skills for each one found. Prompts to register MCP servers across all detected CLIs.

---

## What You Get

- **/pm** — agentic PM orchestrator: reads your `.pm/` workspace (sprint state, backlog, context) and routes to the right skill automatically
- **51 PM skills** across 7 categories, each with Output Templates grounded in the knowledge base (no generic placeholders)
- **40-file Knowledge Base** covering 7-powers, AARRR, Mom Test, North Star Metric, crossing-the-chasm, Van Westendorp, and more
- **8 MCP servers**: Notion, Linear, Jira, Miro, Google Sheets, Figma, Slack, GitHub
- **Works with**: Claude Code, Gemini CLI, Codex CLI (auto-detected on install)

---

## Quick Start

After install, open Claude Code in any directory:

```bash
claude
```

Type `/pm` to start. The orchestrator reads your `.pm/` workspace and routes automatically:

- Planning a sprint? → `/pm-sprint-plan`
- Writing a PRD? → `/pm-prd`
- Running a retro? → `/pm-retro`
- Customer discovery? → `/cusdev`

---

## Skill Categories

| Category | Skills |
|---|---|
| Sprint / Delivery | pm-sprint, pm-sprint-plan, pm-capacity, pm-standup, pm-status, pm-demo, pm-retro, pm-backlog, pm-story, pm-acceptance, pm-dependencies |
| Strategy / OKR | pm-okr, pm-roadmap, pm-plan, pm-portfolio, pm-prioritize, pm-brief, pm-exec-brief |
| Discovery / Research | pm-discovery, pm-discover, pm-hypothesis, pm-jtbd, pm-persona, pm-cjm, pm-survey, pm-learn, pm-nps-csat |
| Metrics / Analytics | pm-metrics, pm-ab, pm-feature-flags, pm-adoption, pm-customer-health |
| Stakeholder / Comms | pm-stakeholder, pm-decision, pm-prd, pm-epic, pm-define |
| GTM / Market | pm-gtm, pm-launch, pm-market, pm-competitive, pm-positioning, pm-pricing-changes |
| Ops / Incidents | pm-incident-response, pm-postmortem, pm-sla-slo, pm-release, pm-release-lifecycle, pm-sunset-deprecation |

Plus: `/pm` (orchestrator) and `/cusdev` (customer discovery)

---

## Commands

```bash
npx headless-pm install              # Install tools + skills + MCP setup prompt
npx headless-pm setup --key=YOUR-KEY # Unlock paid toolkit with license
npx headless-pm mcp                  # Re-run MCP setup
npx headless-pm mcp --list           # List available MCP servers
npx headless-pm list                 # List installed tools and skills
npx headless-pm update               # Update to latest version
```

---

## MCP Setup

During install you'll see a checkbox to select which tools you use. Each server connects differently:

### Notion
1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) → **New integration**
2. Copy the **Internal Integration Token**
3. Share relevant pages with your integration (open page → `...` → Connections → your integration)

### Linear / Jira / Miro / Google Sheets / Figma / Slack / GitHub
Connect via OAuth — no API key needed. On first use in Claude Code, a browser window opens for login.

---

## License

Free skills: `/pm`, `/cusdev`, `/pm-prd`, `/pm-story`, `/pm-retro`, `/pm-standup`

Full toolkit: [headlessaimode.com](https://headlessaimode.com)

---

## What's New

### v0.6.6 — Skill Quality Standard
- **Universal Rules** injected into all 51 skills: respond in user's language, only ask for genuinely missing data, always offer options with smart defaults, read KB before output
- **Output Templates** added to all 51 skills: KB-grounded, concrete field requirements, no generic placeholders

### v0.6.5 — Knowledge Base
- 40-file knowledge base installed to `~/.headless/pm/knowledge/` on setup
- Fixed: Gemini interpreting skill.md as an agent (added no-execute directive)

### v0.6.4 — Bug Fixes
- Fixed Gemini re-asking data already in context
- Fixed Codex skill menu not showing

### v0.6.3 — /pm Agentic Orchestrator
- `/pm` reads `.pm/` workspace and routes to the right skill automatically
- Sprint state, backlog context, and stakeholder list inform every skill call
