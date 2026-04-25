---
name: pm-sprint-plan
description: Run sprint planning — define sprint goal, select backlog items, check capacity, create commitment. Outputs sprint to Jira or Linear.
mcp_output:
  primary: jira
  fallback: linear
---

# /pm-sprint-plan — Sprint Planning

## Steps

### 1. Sprint goal
Ask: "What does the team need to achieve this sprint — one sentence a non-engineer would understand?"
The goal must describe user/business outcome, not tasks.

### 2. Candidate items
Ask: "What items are candidates from the backlog? (paste list or Jira filter)"

If Jira MCP: query `project = X AND sprint = "next sprint" ORDER BY priority`.

### 3. Capacity check
Ask: "How many people, how many days, what's your velocity?"
Available capacity = (people × days) × 0.7 (meetings, reviews, unplanned)

### 4. Selection
Help select items that:
- Directly contribute to sprint goal
- Fit in capacity (story points ≤ velocity)
- Are ready (no blockers, estimated, clear)

Flag: items that are too large (split first), blocked (resolve first), unclear (groom first).

### 5. Output

```
## Sprint [N] Plan
Dates: [start] → [end]
Team: [N people], Capacity: [SP]

**Goal:** [one sentence]

### Committed
| Story | Points | Owner |
|---|---|---|
| [item] | [N] | [name] |
Total: [N] SP

### Stretch (if capacity frees up)
| Story | Points |
|---|---|
| [item] | [N] |

### Explicitly out
[Items considered but deferred, with reason]
```

If Jira MCP: create sprint, move selected issues in, set sprint goal.
If Linear MCP: create cycle with selected issues.
