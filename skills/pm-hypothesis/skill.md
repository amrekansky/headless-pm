---
name: pm-hypothesis
description: Generate and prioritize testable product hypotheses from a problem statement or strategic goal. Use before discovery to decide what to investigate first.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-hypothesis — Hypothesis Generation

## Knowledge Base
- `~/.headless/pm/knowledge/continuous-discovery.md` — frame hypotheses as opportunity nodes in the opportunity solution tree; connect each hypothesis to a customer outcome
- `~/.headless/pm/knowledge/ai-pm.md` — if hypotheses involve AI features, include capability hypotheses (will the model perform well enough?) alongside user behavior hypotheses
- `~/.headless/pm/knowledge/data-literacy-for-pms.md` — frame hypotheses with measurable validation criteria using cohort analysis and SQL query patterns; reference p-value thresholds when defining "we'll know we're right when"
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — use industry benchmarks (activation rates, D7 retention, LTV:CAC) to set realistic "we'll know we're right when" thresholds so hypotheses are falsifiable against known norms
- `~/.headless/pm/knowledge/lean-startup.md` — apply Build-Measure-Learn loop framing to structure the test method for each hypothesis; use innovation accounting to define the metrics that prove or disprove each hypothesis
- `~/.headless/pm/knowledge/assumption-mapping.md` — classify each hypothesis by assumption type (desirability/viability/feasibility/usability) and use the 2x2 importance-vs-evidence grid to prioritize which to test first as the RAT
- `~/.headless/pm/knowledge/bayesian-ab-testing.md` — apply Bayesian prior reasoning when setting expected lift in hypothesis formulation
- `~/.headless/pm/knowledge/experimentation-maturity.md` — match hypothesis sophistication to org experimentation maturity level

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
