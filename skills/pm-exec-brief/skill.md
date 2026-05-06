---
name: pm-exec-brief
description: Write an executive or board briefing on a product initiative. One page, outcome-focused, with clear ask. Use for leadership reviews, board updates, or budget discussions.
mcp_output:
  primary: notion
  fallback: confluence
---

# /pm-exec-brief — Executive Briefing

## Knowledge Base
- `~/.headless/pm/knowledge/shreyas-frameworks.md` — use the influence/effort and pre-mortem frameworks to anticipate exec objections and frame the recommendation confidently
- `~/.headless/pm/knowledge/b2b-saas-metrics.md` — use NRR, LTV:CAC, and churn data to quantify business impact when briefing executives on retention or growth initiatives
- `~/.headless/pm/knowledge/tam-sam-som.md` — use TAM/SAM/SOM figures and the pressure-test checklist when briefing on market opportunity; reference investor expectation norms to frame the business impact section credibly
- `~/.headless/pm/knowledge/pyramid-principle.md` — lead with BLUF, structure the brief using SCR narrative (Situation → Complication → Resolution), and apply MECE to the options considered section to eliminate redundancy
- `~/.headless/pm/knowledge/enterprise-b2b-motion.md` — distinguish economic buyer from champion when framing the ask; align the brief to QBR or procurement stage signals; use expansion motion context when briefing on upsell initiatives
- `~/.headless/pm/knowledge/okr-implementation.md` — anchor the business impact section to outcome KRs rather than output metrics; use CFR framing when the brief requires executive alignment on team priorities

## Rules for exec communication
- Lead with the ask or headline, not context
- Business outcomes first, features never
- One page maximum
- Every number must be verifiable
- Anticipate the top 3 questions and answer them preemptively

## Steps

Ask:
1. "What's the topic — initiative update, decision request, or budget ask?"
2. "Who is the audience — CEO, board, VP?"
3. "What do you need from them — approval, funding, awareness, decision?"

## Output

```
## [Topic] — Executive Brief
Date: [YYYY-MM-DD] | Prepared by: [name] | For: [audience]

### TL;DR
[One sentence: situation + ask]

### Situation
[2-3 bullet points — what's happening and why it matters now]

### Business impact
[Quantified where possible: revenue, users, risk]

### Options considered
Option A (recommended): [description] — [trade-off]
Option B: [description] — [trade-off]

### Recommendation
[What you recommend and why in 2-3 sentences]

### Ask
[Specific decision or resource needed from this audience, by when]

### Risks if we don't act
[What happens if decision is delayed or wrong option chosen]

### Appendix (optional)
[Data, deeper context — only if they ask]
```

If Notion: create in Leadership Updates database.
If Confluence: create in Leadership space.
