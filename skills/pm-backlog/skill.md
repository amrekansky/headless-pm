---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-backlog
description: Run a backlog grooming / refinement session. Reviews items for readiness, splits large ones, removes stale items. Use weekly or before sprint planning.
mcp_output:
  primary: jira
  fallback: linear
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-backlog — Backlog Grooming

## Knowledge Base
- `~/.headless/pm/knowledge/prioritization-frameworks.md` — use RICE/Kano/WSJF to re-score items when deciding what to keep vs. archive
- `~/.headless/pm/knowledge/dual-track-agile.md` — use the opportunity backlog structure to separate discovery items from delivery items during grooming; archive delivery items that lack a validated opportunity behind them
- `~/.headless/pm/knowledge/story-mapping.md` — prioritize backlog by walking skeleton completeness, not just business value scores

## Output Template
Every response MUST include:
- **Items reviewed:** count + date
- **Per-item verdict:** Ready / Not ready / Split needed / Archive — with reason
- **Actions assigned:** owner + due date per not-ready item
- **Next sprint candidates:** top 5-10 ready items listed
- **WSJF/RICE score** (per prioritization-frameworks.md): applied when re-ordering competing items
- **Walking skeleton gap** (per story-mapping.md): flag if any backbone activity has zero ready items

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
