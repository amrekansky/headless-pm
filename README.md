# headless-pm

AI Chief of Staff for product managers. Installs PM skills and tools into Claude Code.

## Install

```bash
npx headless-pm install
```

Detects Claude Code, Gemini CLI, and Codex CLI automatically. Installs skills for each one found. Prompts to register MCP servers (Notion, Linear, Jira, Miro) across all detected CLIs.

---

## Quick Start

After install, open Claude Code in any directory:

```bash
claude
```

Type `/pm` to start the PM lifecycle orchestrator.

This installs:
- PM skills (`/pm`, `/cusdev`, `/pm-prd`, and 40+ paid skills) → `~/.claude/skills/` (and other CLI skill directories)
- PM tools (`pm-interview-prep`, `pm-sprint-brief`) → `~/.headless/pm/`
- MCP servers (Notion, Linear, Jira, Miro) registered across all detected CLIs

---

## MCP Setup (PM Tools Integration)

During `npx headless-pm install` you'll see a checkbox to select which tools you use.
Each tool connects differently:

### Miro

**Read-only (view boards):** Works automatically if you have the `claude.ai Miro` integration connected in Claude.ai settings. No extra steps.

**Read + Write (create cards, sticky notes, frames):** Requires a personal access token.

1. Go to [developers.miro.com](https://developers.miro.com) → **Your apps** → **Create new app**
2. Set OAuth scopes: `boards:read` `boards:write`
3. Click **Install app and get OAuth token** → copy the token
4. Run:
```bash
claude mcp add -s user --force miro \
  -e MIRO_ACCESS_TOKEN=your_token_here \
  --transport sse https://mcp.miro.com/sse
```

### Notion

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) → **New integration**
2. Copy the **Internal Integration Token**
3. Share relevant pages with your integration (open page → `...` → Connections → your integration)
4. Run:
```bash
claude mcp add -s user --force notion \
  -e NOTION_API_KEY=your_token_here \
  -- npx -y @notionhq/notion-mcp-server
```

### Linear

Connects via OAuth — no API key needed. On first use in Claude Code, browser will open for login.

```bash
claude mcp add -s user --transport sse linear https://mcp.linear.app/sse
```

### Jira / Confluence

Connects via OAuth — no API key needed. On first use in Claude Code, browser will open for login.

```bash
claude mcp add -s user --transport sse jira https://mcp.atlassian.com/v1/sse
```

---

## Commands

```bash
npx headless-pm install       # Install tools + skills + MCP setup prompt
npx headless-pm setup --key=YOUR-KEY   # Unlock paid toolkit with license
npx headless-pm mcp           # Re-run MCP setup (checkbox)
npx headless-pm mcp --list    # List available MCP servers
npx headless-pm list          # List installed tools and skills
npx headless-pm update        # Update to latest version
```

---

## Skills (use inside Claude Code)

| Skill | What it does |
|-------|-------------|
| `/pm` | PM lifecycle orchestrator — routes to the right phase |
| `/cusdev` | Customer development interview guide |
| `/pm-discover` | 5-stage discovery wizard |
| `/pm-define` | PRD → Epics → Stories → Acceptance |
| `/pm-plan` | OKR → Roadmap → Capacity → Sprint |
| `/pm-launch` | GTM → Positioning → Comms → Launch checklist |
| `/pm-learn` | Metrics → Retro → A/B → Next cycle |
| `/pm-release-lifecycle` | smoke→alpha→beta→pilot→go-nogo→GA |
| `/pm-incident-response` | Triage → Comms → Resolution → Postmortem |
| `/pm-nps-csat` | Parse → Segment → Diagnose → Roadmap impact |
| `/pm-feature-flags` | Flag spec → Targeting → Rollout → Cleanup |

Full list: 40+ skills covering the entire PM lifecycle.

---

## License

Free skills: `/pm`, `/cusdev`, `/pm-prd`, `/pm-story`, `/pm-retro`, `/pm-standup`

Full toolkit: [headlessaimode.com](https://headlessaimode.com)
