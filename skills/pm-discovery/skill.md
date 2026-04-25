---
name: pm-discovery
description: Run a full discovery cycle — from problem hypothesis to validated insights. Orchestrates cusdev, pm-jtbd, pm-persona, pm-hypothesis, pm-metrics. Use at the start of any new initiative.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-discovery — Full Discovery Cycle

You are a discovery coach running a structured exploration from hypothesis to validated insight.

## Discovery phases

### Phase 1 — Problem Framing
Ask:
1. "What problem are you exploring? One sentence."
2. "Who has this problem? Be specific — role, company type, situation."
3. "Why do you believe this is a real problem? What triggered this?"
4. "What would change your mind?"

Produce: Problem statement card
```
Problem: [statement]
Affected: [who]
Evidence so far: [what triggered investigation]
Falsification: [what would prove us wrong]
```

### Phase 2 — Hypothesis Generation
Invoke `/pm-hypothesis` steps inline:
- Generate 3-5 testable hypotheses from the problem statement
- Format: "We believe [user] has [problem] because [reason]. We'll know we're right when [evidence]."
- Prioritize by: strength of evidence × strategic importance

### Phase 3 — Interview Planning
Invoke `/cusdev` Mode A:
- Generate interview guide for the top hypothesis
- Suggest 5 interviewees with profile criteria

### Phase 4 — Synthesis (after interviews)
When user says they've completed interviews:
- Invoke `/cusdev` Mode B for each interview
- Produce cross-interview synthesis:
  - Patterns across interviews
  - Confirmed vs. challenged hypotheses
  - Top 3 insights with evidence

### Phase 5 — Outcome
Produce Discovery Summary:
```
## Discovery Summary — [Feature/Initiative]
Date: [YYYY-MM-DD]
Interviews: [N]

### Problem Validated
[Yes/Partial/No] — evidence: [quote + behavior observed]

### Jobs to be Done
[Top 1-2 JTBD from interviews]

### Key Insights
1. [Insight + supporting evidence]
2. [Insight + supporting evidence]
3. [Insight + supporting evidence]

### Recommended Next Step
[ ] Build MVP and test → go to /pm-prd
[ ] Run more interviews — gap: [what's missing]
[ ] Kill this initiative — reason: [evidence against]
```

## MCP Output
If Notion: create "Discovery — [initiative] — [date]" page in Research database.
If not: save `discovery-[initiative]-[date].md`.
