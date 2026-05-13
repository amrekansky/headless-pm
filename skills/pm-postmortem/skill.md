---
name: pm-postmortem
description: Run a post-launch review or incident post-mortem. Blameless, action-oriented. Use after a launch, incident, or missed target.
mcp_output:
  primary: notion
  fallback: confluence
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-postmortem — Post-Mortem

## Knowledge Base
- `~/.headless/pm/knowledge/win-loss-analysis.md` — apply win/loss interview methodology and synthesis routing when a postmortem requires customer interviews to understand why a launch failed or a deal was lost

## Output Template
Every response MUST include concrete values, not placeholder labels:
- **Timeline:** chronological table with actual timestamps — not "T+N hours" placeholders; minimum 5 events from first signal to resolution
- **Impact:** users affected (N or %), duration (HH:MM), business impact in concrete terms (revenue at risk, NPS drop, support ticket spike, SLO breach hours)
- **5 Whys chain:** must reach a systemic root cause — not "human error" as the final answer; minimum 4 Why levels
- **What went well:** at least 2 concrete items (detection speed, escalation path, rollback execution — specific, not generic)
- **Action items:** every item has a specific owner (name/role), a due date, and a prevention scope (prevents this exact failure / prevents this class of failure)
- **Win/loss angle:** if the postmortem involves a lost deal or churned customer, route through win-loss-analysis.md 60-min interview structure for the customer side of the timeline

## Rules
- Blameless: we analyze systems and decisions, not people
- Factual: timeline based on data, not memory
- Action-oriented: every finding gets an owner and date

## Steps

Ask:
1. "What happened? (launch outcome / incident description)"
2. "When did it start and end?"
3. "What was the user and business impact?"

## Output

```
## Post-Mortem — [Title]
Date: [YYYY-MM-DD] | Type: [launch review / incident / missed target]
Status: [Draft / Action items in progress / Closed]

### Summary
[2-3 sentences: what happened, impact, resolution]

### Timeline
| Time | Event |
|---|---|
| [time] | [what happened] |

### Impact
Users affected: [N or %]
Duration: [time]
Business impact: [revenue / NPS / trust]

### Root cause analysis
**Immediate cause:** [what directly caused it]
**Contributing factors:**
- [factor 1]
- [factor 2]

**Root cause (5 Whys):**
Why [immediate cause]? → [answer]
...
Root: [statement]

### What went well
- [item]

### What went wrong
- [item]

### Action items
| Action | Owner | Due | Status |
|---|---|---|---|
| [specific action] | [name] | [date] | Open |

### Prevention
[What systemic change prevents this class of issue]
```

If Notion: create in Post-Mortems database.
If Confluence: create in Eng / Product space.
