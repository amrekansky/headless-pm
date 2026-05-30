---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-sprint-plan
description: Run sprint planning — define sprint goal, select backlog items, check capacity, create commitment. Outputs sprint to Jira or Linear.
mcp_output:
  primary: jira
  fallback: linear
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-sprint-plan — Sprint Planning

## Knowledge Base
- `~/.headless/pm/knowledge/prioritization-frameworks.md` — apply WSJF or RICE when choosing between competing backlog candidates
- `~/.headless/pm/knowledge/shape-up.md` — use appetite and betting concepts when defining sprint scope and goal
- `~/.headless/pm/knowledge/dual-track-agile.md` — pull sprint candidates from the delivery track backlog only; ensure discovery track work runs in parallel and is not mixed into sprint commitments
- `~/.headless/pm/knowledge/story-mapping.md` — reference walking skeleton when selecting stories for end-to-end sprint coverage

## Output Template
Every response MUST include:
- **Sprint goal:** one sentence — user/business outcome, not a task list
- **Committed items:** table with Story ID, SP, Owner — total SP vs capacity shown
- **Capacity utilization:** actual SP / available SP — flag if >90% (leave buffer)
- **Stretch items:** listed separately, never in committed
- **Explicitly out:** items considered but deferred — with reason (prevents scope creep)
- **Shape Up appetite check:** flag any committed item > 1 sprint appetite

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

Related skills: `/pm-capacity` (confirm team capacity before committing sprint items), `/pm-backlog` (groom and prioritize candidates before planning), `/pm-estimation` (size stories before pulling them into the sprint)
