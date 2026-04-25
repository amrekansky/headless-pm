---
name: pm-ab
description: Design an A/B test — hypothesis, variants, success metric, sample size, duration. Use before running any experiment.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-ab — A/B Test Design

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
