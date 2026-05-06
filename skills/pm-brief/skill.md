---
name: pm-brief
description: Write a weekly PM brief or sprint update for stakeholders and leadership. Concise, outcome-focused. Use weekly or end of sprint.
mcp_output:
  primary: slack
  fallback: confluence
---

# /pm-brief — Weekly Brief

## Knowledge Base
- `~/.headless/pm/knowledge/shape-up.md` — frame progress in terms of scopes and hill chart status rather than task completion percentages
- `~/.headless/pm/knowledge/working-backwards.md` — lead with customer outcome and impact; use press-release thinking to keep the brief outcome-focused
- `~/.headless/pm/knowledge/design-sprint.md` — when briefing on a sprint outcome, use sprint artifact vocabulary (prototype, test, Decider decision) to communicate results concisely to stakeholders
- `~/.headless/pm/knowledge/pyramid-principle.md` — open with the headline finding (BLUF), group this-week items into MECE buckets, and use SCR structure when the brief surfaces a significant risk or decision

## Steps

Ask: "What's happened this week / sprint? What's coming? Any blockers or decisions needed?"

## Output

```
## PM Brief — [Week of / Sprint N] — [date]

### This week
✓ [What shipped or progressed — outcome language]
✓ [What shipped or progressed]

### Next week
→ [What's planned — why it matters]
→ [What's planned]

### Risks & blockers
⚠ [Item] — impact: [what happens if unresolved] — need: [from whom]

### Decisions needed
📌 [Decision] — from: [who] — by: [when] — consequence of delay: [X]

### Metrics pulse
[North Star or key metric]: [value] vs [target] ([trend])
```

If Slack MCP: post to #product or #leadership channel.
If Confluence: append to Weekly Updates page.
If not: save `brief-week-[date].md`.
