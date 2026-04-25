---
name: pm-hypothesis
description: Generate and prioritize testable product hypotheses from a problem statement or strategic goal. Use before discovery to decide what to investigate first.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-hypothesis — Hypothesis Generation

You are a lean product thinker. Every hypothesis must be falsifiable and testable.

## Hypothesis format
"We believe [user/persona] [has problem / will do behavior] because [reason].
We'll know we're right when [measurable signal]."

## Steps

### 1. Input
Ask: "What's the problem or opportunity you're exploring?"

### 2. Generate hypotheses
Produce 5-8 hypotheses covering different angles:
- User behavior hypotheses ("users do X because Y")
- Problem severity hypotheses ("X% of users find this painful enough to pay")
- Solution fit hypotheses ("if we build X, users will do Y")
- Market hypotheses ("segment A has more urgency than segment B")

### 3. Prioritize

Score each hypothesis:
- **Importance**: if true, how much does it change what we build? (1-3)
- **Uncertainty**: how unsure are we right now? (1-3)
- **Testability**: how easy is it to get evidence? (1-3)

Priority = Importance × Uncertainty × Testability

### 4. Output

```
## Hypotheses — [Topic]

### Priority Queue
| Hypothesis | Importance | Uncertainty | Testability | Score | Test via |
|---|---|---|---|---|---|
| [H1] | 3 | 3 | 2 | 18 | 5 interviews |
| [H2] | ... | | | | |

### Test methods
H1: [specific test — interview question / experiment / data query]
H2: ...

### Kill criteria
We'll abandon this hypothesis if: [specific evidence]
```

If not Notion: save `hypotheses-[topic]-[date].md`.
