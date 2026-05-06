---
name: pm-ab
description: Design an A/B test — hypothesis, variants, success metric, sample size, duration. Use before running any experiment.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-ab — A/B Test Design

## Knowledge Base
- `~/.headless/pm/knowledge/product-led-growth.md` — prioritize experiments that improve activation and retention funnel steps; use PLG loop thinking to pick the highest-leverage variable to test
- `~/.headless/pm/knowledge/data-literacy-for-pms.md` — use p-value, sample size, and statistical significance concepts when designing tests and interpreting results; reference A/B stats patterns to avoid common errors
- `~/.headless/pm/knowledge/mobile-pm.md` — apply mobile A/B constraints (app store review cycles, OS-level permissions) when designing experiments for mobile surfaces
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — reference activation rate and feature adoption benchmarks when setting the baseline conversion and minimum detectable effect for experiment design
- `~/.headless/pm/knowledge/lean-startup.md` — use Build-Measure-Learn and pivot vs persevere logic when deciding whether A/B results warrant shipping, iterating, or killing the variant
- `~/.headless/pm/knowledge/aarrr-pirate-metrics.md` — map the experiment's primary metric to the correct AARRR stage so the test targets the highest-leverage funnel step; use K-factor thinking when testing referral or viral mechanics
- `~/.headless/pm/knowledge/attribution-models.md` — apply UTM and attribution model context when the experiment involves acquisition channels or cross-channel flows to avoid misattributing results
- `~/.headless/pm/knowledge/bayesian-ab-testing.md` — use Bayesian approach for small samples or sequential testing; compare to frequentist for large-sample fixed-horizon tests
- `~/.headless/pm/knowledge/experimentation-maturity.md` — assess org maturity level before proposing experiment complexity; don't pitch multi-armed bandits to a level-1 org

## Steps

Ask:
1. "What behavior are you trying to change?"
2. "What's the current baseline metric?"
3. "How much traffic goes through this flow daily?"

## Output

```
## A/B Test — [Name]
Date: [YYYY-MM-DD]

### Hypothesis
We believe that [change] will cause [users] to [behavior] because [reason].
We'll know we're right when [metric] increases by [X%].

### Variants
Control (A): [current state]
Treatment (B): [specific change — one variable only]

### Primary metric
[Metric name]: [definition] — measured via [tool]

### Guardrail metrics (must not degrade)
- [metric]: floor = [value]

### Sample size calculation
Baseline conversion: [X%]
Minimum detectable effect: [Y%]
Statistical significance: 95%
Required sample per variant: [N users]
(use calculator: statsig.com/calculator)

### Duration
At [Z users/day]: [N days] to reach significance
Minimum run time: 2 weeks (avoid day-of-week bias)

### Launch criteria
- [ ] Feature flagged (not a code deploy)
- [ ] Analytics instrumented for both variants
- [ ] Guardrail monitoring set up
- [ ] Clear owner for reading results

### Analysis plan
Read results after [date].
Decision rule: if p < 0.05 and primary metric ↑ and guardrails not hurt → ship Treatment.
```

If Notion: create test doc in Experiments log.
If Amplitude/Mixpanel MCP: query baseline metric before launch.
