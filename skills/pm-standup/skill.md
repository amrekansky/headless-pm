---
name: pm-standup
description: Prepare or run a standup. Formats updates for async (Slack) or sync (meeting). Surfaces blockers. Use daily.
mcp_output:
  primary: slack
  fallback: markdown
---

# /pm-standup — Daily Standup

## Two modes

Ask: "Are you preparing your own update or facilitating the team standup?"

## Mode A — Your update

Ask: "What did you do yesterday, what's today, any blockers?"

Format:
```
✓ Yesterday
  - [specific thing completed]
  - [specific thing completed]

→ Today
  - [specific task]
  - [specific task]

⚠ Blocked
  - [item] — need [what] from [who]

📌 FYI
  - [anything the team should know]
```

If Slack MCP: post to #standup or #pm channel.

## Mode B — Facilitate team standup

Ask each person for their update. After all updates:

Surface:
- **Blockers needing PM action**: [items where PM must unblock]
- **Dependencies risked**: [items that block other teams]
- **Sprint goal health**: on track / at risk / off track

```
## Standup — [date] — Sprint [N] Day [D]

Sprint goal: [one sentence]
Goal health: 🟢 On track / 🟡 At risk / 🔴 Off track

Blockers for PM:
- [item] → action: [what PM does today]

Team updates: [summarized if async]
```
