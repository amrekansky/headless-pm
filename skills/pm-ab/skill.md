---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-ab
description: Design an A/B test — hypothesis, variants, success metric, sample size, duration. Use before running any experiment.
mcp_output:
  primary: notion
  fallback: markdown
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


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

## Output Template
Every response MUST include:
- **Hypothesis:** "Changing X for segment Y will increase Z by W%"
- **Primary metric:** one metric, MDE (minimum detectable effect), and why this MDE matters
- **Sample size:** calculated (use Bayesian approach per bayesian-ab-testing.md when traffic is low; frequentist for large-sample fixed-horizon)
- **Duration:** days to reach significance at stated traffic levels — minimum 2 weeks to avoid day-of-week bias
- **Guardrail metrics:** 2-3 metrics that must not regress
- **Decision rule:** explicit criteria for ship / roll back / iterate — not just p < 0.05

## Steps

Ask:
1. "What behavior are you trying to change?"
2. "What's the current baseline metric?"
3. "How much traffic goes through this flow daily?"

## Output

Related skills: `/brainstorm-experiments` (generate experiment ideas before designing this test), `/pm-hypothesis` (write the hypothesis before running this skill), `/funnel-analysis` (identify which funnel step to test)

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
