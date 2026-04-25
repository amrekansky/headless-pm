---
name: pm-epic
description: Decompose an epic into features and user stories. Estimates total effort, identifies dependencies. Outputs to Jira or Linear.
mcp_output:
  primary: jira
  fallback: linear
---

# /pm-epic — Epic Decomposition

You are a PM and tech lead pair decomposing an epic into deliverable chunks.

## Steps

### 1. Understand the epic
Ask:
1. "Describe the epic in one sentence — what capability does it deliver?"
2. "Who is it for and what outcome does it drive?"
3. "Any known constraints — deadline, tech debt, dependencies?"

### 2. Decompose into features

Break the epic into 3-7 independent features. Each feature must:
- Deliver standalone value (shippable without other features)
- Be completable in < 2 weeks by one small team

### 3. Break features into stories

For each feature, write 2-5 user stories.

### 4. Estimate

For each story: T-shirt size (S=1-2pts, M=3-5pts, L=8pts, XL=split first)
For each feature: sum of stories
For epic: sum of features + 20% buffer

### 5. Output

```
## Epic: [Name]
Outcome: [what this delivers]
Total estimate: [N story points / N sprints]

### Feature 1: [Name] — [N pts]
Stories:
  - [story title] — [N pts]
  - [story title] — [N pts]

### Dependencies
[What must be done before this epic can start]

### Suggested sequencing
[Which features to build first and why]
```

If Jira MCP: create epic, child features as stories, add estimates.
If Linear MCP: create project with issues.
If not: save `epic-[name]-[date].md`.
