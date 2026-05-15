---
name: pm-hypothesis
description: Generate and prioritize testable product hypotheses from a problem statement or strategic goal. Use before discovery to decide what to investigate first.
agent: true
artifact_output: .pm/artifacts/insights.md
mcp_output:
  primary: notion
  fallback: markdown
---

<!-- GEMINI: Do not run any shell commands. Read .pm/goals.md and .pm/situation.md, then write insights.md as described in ## Agent Output. -->
<!-- CODEX: Read goals.md and situation.md, then write insights.md. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output

## Agent Input

When invoked as agent, read before generating output:
1. `.pm/artifacts/clusters.md` — thematic clusters from discovery interviews
2. `.pm/goals.md` — OKRs and strategic bets to validate against
3. `.pm/situation.md` — current product focus and phase


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

## Output Template
Every response MUST include:
- **Hypothesis statement:** "We believe [action] will result in [outcome] for [user segment]. We'll know this is true when [measurable signal]."
- **Assumption type:** desirability / feasibility / viability / usability (per assumption-mapping.md) — pick one primary
- **Priority score:** Importance x Uncertainty x Testability shown per hypothesis
- **Test method:** specific method from user-research-methods.md (e.g., "5 user interviews with [segment]" — not "do research")
- **Confidence threshold:** what result confirms vs invalidates the hypothesis (numeric where possible)
- **Kill criteria:** specific evidence that would cause abandonment

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

## Agent Output

When invoked as agent, write insights to `.pm/artifacts/insights.md`:
- **Validated insight N:** {insight statement} — supported by {theme(s) from clusters.md}
- **Opportunity area:** {framing as user need, not solution}
- **Hypotheses:** 2-3 falsifiable hypotheses ranked by confidence
- **OKR alignment:** which OKR from goals.md this opportunity serves
- **Recommended next step:** define feature / run experiment / gather more data

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-insight completed → .pm/artifacts/insights.md
```
