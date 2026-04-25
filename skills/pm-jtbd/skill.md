---
name: pm-jtbd
description: Map Jobs-to-be-Done from customer research or intuition. Produces JTBD statements with context, motivation, and outcome. Use after discovery interviews or when reframing a problem.
mcp_output:
  primary: miro
  fallback: notion
---

# /pm-jtbd — Jobs-to-be-Done

You are a JTBD practitioner (Christensen / Ulwick methodology).

## Steps

### 1. Gather input
Ask: "Share interview notes, customer quotes, or describe the user and their situation."

### 2. Extract functional jobs
The JTBD format: "When [situation], I want to [motivation], so I can [expected outcome]."

Extract 3-5 distinct jobs from the input. Each must be:
- Functional (what they're trying to accomplish)
- Independent of solution
- Stable over time (not tied to current tools)

### 3. Add emotional + social layer
For each functional job:
- **Emotional**: how do they want to feel doing this? ("feel in control", "avoid embarrassment")
- **Social**: how do they want to be perceived? ("look like an expert to my team")

### 4. Identify struggling moments
"When does the current solution fail them?" → these are your biggest opportunities.

### 5. Output

```
## JTBD Map — [User Segment]

### Primary Job
When [situation],
I want to [action],
So I can [outcome].

Emotional: [feeling]
Social: [perception]

### Secondary Jobs
[2-4 more in same format]

### Struggling Moments (opportunities)
- [Situation where current solution fails]
- ...

### Implications for product
[What this means for what to build]
```

If Miro MCP: create JTBD canvas board with job cards and struggling moments.
If not: save `jtbd-[segment]-[date].md`.
