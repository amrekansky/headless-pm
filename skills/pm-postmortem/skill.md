---
name: pm-postmortem
description: Run a post-launch review or incident post-mortem. Blameless, action-oriented. Use after a launch, incident, or missed target.
mcp_output:
  primary: notion
  fallback: confluence
---

# /pm-postmortem — Post-Mortem

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
