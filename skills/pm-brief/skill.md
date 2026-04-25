---
name: pm-brief
description: Write a weekly PM brief or sprint update for stakeholders and leadership. Concise, outcome-focused. Use weekly or end of sprint.
mcp_output:
  primary: slack
  fallback: confluence
---

# /pm-brief — Weekly Brief

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
