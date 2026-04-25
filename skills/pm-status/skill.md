---
name: pm-status
description: Generate a status update for one or more projects/features. For stakeholders, execs, or weekly digests. Use weekly or when asked for a project update.
mcp_output:
  primary: confluence
  fallback: slack
---

# /pm-status — Status Report

## Ask first
"Who is this for — team, stakeholders, or executives?"

Team → more detail, technical context ok
Stakeholders → outcome-focused, risks prominent
Executives → one page, business impact only

## Steps

Ask:
1. "What project(s) are you reporting on?"
2. "What's the current sprint or timeframe?"
3. "What shipped, what's in progress, what's blocked?"

## Output format

```
## Status Report — [Project] — [Date]
**Overall:** 🟢 On track / 🟡 At risk / 🔴 Off track
**Sprint:** [N] | **Goal:** [one sentence]

### Shipped ✓
- [Feature/fix] — [business impact, one line]

### In Progress
- [Item] — [% done] — ETA: [date]

### Blocked ⚠
- [Item] — Blocker: [description] — Need: [from whom] — Impact if unresolved: [consequence]

### Upcoming
- [What's next and why it matters]

### Risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [risk] | H/M/L | H/M/L | [action] |

### Decisions needed
- [Decision] — needed from [who] — by [when]
```

If Confluence MCP: create/update status page in project space.
If Slack MCP: post summary to #product-updates or #[project] channel.
If Notion: save to project page.
