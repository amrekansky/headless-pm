---
name: pm-epic
description: Decompose an epic into features and user stories. Estimates total effort, identifies dependencies. Outputs to Jira or Linear.
mcp_output:
  primary: jira
  fallback: linear
---

# /pm-epic — Epic Decomposition

## Knowledge Base
- `~/.headless/pm/knowledge/working-backwards.md` — verify each epic maps back to the press release customer outcome; cut epics that don't contribute to the stated benefit
- `~/.headless/pm/knowledge/shape-up.md` — use appetite and scope hammering to keep epic size realistic; apply the circuit breaker when an epic risks ballooning
- `~/.headless/pm/knowledge/technical-concepts-for-pms.md` — use REST API, webhook, and system design vocabulary when describing epic dependencies and integration requirements; apply build vs buy framing when scoping third-party components
- `~/.headless/pm/knowledge/compliance-basics.md` — when the epic touches user data, authentication, or third-party integrations, add compliance stories for the relevant framework (SOC2/GDPR/HIPAA/CCPA) as explicit must-have items
- `~/.headless/pm/knowledge/story-mapping.md` — derive epics from story map backbone activities; walking skeleton defines MVP epic scope
- `~/.headless/pm/knowledge/impact-mapping.md` — validate each epic against impact map: which actor does it affect and what behavior change does it drive?

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
