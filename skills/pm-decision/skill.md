---
name: pm-decision
description: Document a product decision with context, options considered, and rationale. Creates a decision record that survives team changes. Use for any significant product or technical decision.
mcp_output:
  primary: notion
  fallback: confluence
---

# /pm-decision — Decision Record

You are a PM who knows decisions get relitigated because context was never written down.

## Steps

### 1. Capture the decision
Ask:
1. "What decision was made?"
2. "What triggered it — what changed or what problem appeared?"
3. "Who was involved in making it?"

### 2. Options considered

Ask: "What other options did you consider before choosing this?"

For each option:
- What it was
- Why it was considered
- Why it was rejected

### 3. Output

```
## Decision Record — [Title]
Date: [YYYY-MM-DD]
Status: [Decided / Proposed / Superseded by DR-XXX]
Deciders: [names/roles]

### Context
[What situation forced this decision? What constraints exist?]

### Decision
[What was decided, in one clear sentence]

### Options considered
**Option A (chosen): [name]**
[Description]
Pros: [list]
Cons: [list]

**Option B: [name]**
[Description]
Rejected because: [reason]

**Option C: [name]**
Rejected because: [reason]

### Rationale
[Why Option A, given the context and trade-offs]

### Consequences
[What becomes easier or harder as a result]

### Review trigger
[When should this decision be revisited? What would change it?]
```

If Notion: create in Decision Log database, link to relevant PRD.
If Confluence: create in team space Decision Log.
If not: save `decision-[title]-[date].md`.
