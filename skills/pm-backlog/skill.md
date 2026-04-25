---
name: pm-backlog
description: Run a backlog grooming / refinement session. Reviews items for readiness, splits large ones, removes stale items. Use weekly or before sprint planning.
mcp_output:
  primary: jira
  fallback: linear
---

# /pm-backlog — Backlog Grooming

## Definition of Ready
An item is ready for sprint if:
- [ ] Clearly described (user story format preferred)
- [ ] Estimated (story points)
- [ ] Acceptance criteria written
- [ ] No unresolved blockers
- [ ] Dependencies identified

## Steps

### 1. Get the backlog
Ask: "Share backlog items to review." or use Jira/Linear MCP to fetch unestimated items.

If Jira MCP: query `project = X AND sprint is EMPTY AND status != Done ORDER BY priority`.

### 2. Review each item

For each item assess:
- **Ready?** (meets Definition of Ready above)
- **Size?** (if > 8 SP: must split)
- **Stale?** (if not touched in 2+ sprints: archive or delete)
- **Still valid?** (does the problem still exist? is it still prioritized?)

### 3. Actions per item

```
[Item title]
Status: ✓ Ready / ✗ Not ready / ⚠ Split needed / 🗑 Archive
Issues: [what's missing]
Action: [who does what by when]
```

### 4. Groomed backlog summary

```
## Backlog Grooming — [date]

Reviewed: [N items]
Ready for sprint: [N]
Needs work: [N] — actions assigned
Split needed: [N items]
Archived: [N items]

Next sprint candidates (ready): [list top 5-10]
```

If Jira/Linear MCP: update item statuses, add grooming notes to descriptions.
