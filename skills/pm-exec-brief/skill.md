---
name: pm-exec-brief
description: Write an executive or board briefing on a product initiative. One page, outcome-focused, with clear ask. Use for leadership reviews, board updates, or budget discussions.
agent: true
artifact_output: .pm/artifacts/exec-brief.md
mcp_output:
  primary: notion
  fallback: confluence
---

<!-- GEMINI: Do not run any shell commands. Read .pm/artifacts/status-report.md, .pm/situation.md, and .pm/goals.md, then write exec-brief.md as described in ## Agent Output. -->
<!-- CODEX: Read status-report.md, situation.md, goals.md, then write exec-brief.md. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


## Agent Input

When invoked as agent, read before generating output:
1. `.pm/artifacts/status-report.md` — detailed status (synthesize to executive level)
2. `.pm/situation.md` — critical deadlines and blockers
3. `.pm/goals.md` — OKR context for business framing


# /pm-exec-brief — Executive Briefing

## Knowledge Base
- `~/.headless/pm/knowledge/shreyas-frameworks.md` — use the influence/effort and pre-mortem frameworks to anticipate exec objections and frame the recommendation confidently
- `~/.headless/pm/knowledge/b2b-saas-metrics.md` — use NRR, LTV:CAC, and churn data to quantify business impact when briefing executives on retention or growth initiatives
- `~/.headless/pm/knowledge/tam-sam-som.md` — use TAM/SAM/SOM figures and the pressure-test checklist when briefing on market opportunity; reference investor expectation norms to frame the business impact section credibly
- `~/.headless/pm/knowledge/pyramid-principle.md` — lead with BLUF, structure the brief using SCR narrative (Situation → Complication → Resolution), and apply MECE to the options considered section to eliminate redundancy
- `~/.headless/pm/knowledge/enterprise-b2b-motion.md` — distinguish economic buyer from champion when framing the ask; align the brief to QBR or procurement stage signals; use expansion motion context when briefing on upsell initiatives
- `~/.headless/pm/knowledge/okr-implementation.md` — anchor the business impact section to outcome KRs rather than output metrics; use CFR framing when the brief requires executive alignment on team priorities

## Output Template
Every response MUST include (Pyramid Principle SCR structure):
- **TL;DR:** one sentence — situation + ask (answer-first, per pyramid-principle.md BLUF)
- **Situation:** 2-3 bullets — what's happening and why it matters now
- **Business impact:** quantified (NRR, LTV:CAC, churn, revenue at risk — per b2b-saas-metrics.md)
- **Options considered:** 2-3 options with trade-offs — not just the recommended one
- **Recommendation:** what + why in 2-3 sentences; anchor to outcome KR, not output
- **Ask:** specific decision/resource + named owner + deadline
- **Risks if no action:** what happens if decision is delayed — concrete consequence

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

## Agent Output

When invoked as agent, write 1-page executive brief to `.pm/artifacts/exec-brief.md`:
- **Overall Status:** Green / Yellow / Red + 1 sentence why
- **Key wins this period:** 2-3 bullets, business-impact framing
- **Risks requiring attention:** 1-2 items, escalation required or not
- **Decision needed:** any exec decisions blocking progress (or "none")
- **Next milestone:** {milestone} — {date} — {confidence %}

Maximum 300 words. No technical jargon.

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-exec-brief completed → .pm/artifacts/exec-brief.md
```
