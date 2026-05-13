---
name: pm-adoption
description: Track and interpret feature adoption — activation, retention, engagement. Identifies drop-off, power users, and next interventions. Use 2-4 weeks post-launch.
mcp_output:
  primary: amplitude
  fallback: notion
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-adoption — Feature Adoption

## Knowledge Base
- `~/.headless/pm/knowledge/north-star-metric.md` — check whether adoption moves the North Star metric; flag if adoption is up but North Star is flat
- `~/.headless/pm/knowledge/product-led-growth.md` — use PLG activation/retention benchmarks and viral loop thinking when recommending next interventions
- `~/.headless/pm/knowledge/b2b-saas-metrics.md` — reference NRR and churn patterns when interpreting retention drops; use champion mapping to identify power user segments
- `~/.headless/pm/knowledge/mobile-pm.md` — use DAU/MAU benchmarks and push notification patterns when analyzing mobile feature adoption
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — use feature adoption rate benchmarks (avg 24.5%, good 28%+) and breadth-of-use data to assess whether adoption numbers are healthy and identify power-user expansion opportunities
- `~/.headless/pm/knowledge/heart-framework.md` — map adoption funnel metrics to HEART dimensions: Adoption covers the A, Retention the R, Task Success the T; use GSM to verify each metric has a clear goal and signal
- `~/.headless/pm/knowledge/aarrr-pirate-metrics.md` — align the adoption funnel (Awareness → Activation → Retention → Habitual) to AARRR stages; use K-factor when recommending referral-loop interventions for low-awareness findings
- `~/.headless/pm/knowledge/crossing-the-chasm.md` — when adoption is stalling, diagnose whether the product is stuck between visionary and pragmatist segments; use whole product gap analysis to identify what's missing for mainstream uptake
- `~/.headless/pm/knowledge/enterprise-b2b-motion.md` — for B2B features, track champion engagement separately from seat utilization; use expansion motion signals (QBR cadence, multi-team usage) as leading indicators of healthy adoption
- `~/.headless/pm/knowledge/customer-success-pm.md` — frame adoption metrics in terms of net revenue retention and expansion using QBR context

## Output Template
Every response MUST include:
- **Adoption funnel:** Awareness / Activation / Week-2 Retention / Habitual — each with value, benchmark, and assessment
- **Benchmark comparison:** per metrics-taxonomy.md — feature adoption rate avg 24.5%, good 28%+
- **Top finding:** most important signal from the data (not "adoption is low" — diagnose why)
- **North Star check:** is adoption moving the North Star metric? Flag if adoption is up but NSM is flat
- **Recommended action:** ONE specific next step — A/B test, UX fix, comms campaign, discoverability change
- **Chasm check** (per crossing-the-chasm.md): if adoption has stalled, diagnose whether product is stuck between visionary and pragmatist segments

## Steps

Ask:
1. "Which feature are we tracking adoption for?"
2. "When did it launch?"
3. "What's the success metric you defined at launch?"

## Adoption framework

### Funnel metrics
- **Awareness**: % of eligible users who saw the feature
- **Activation**: % who tried it at least once
- **Retention**: % who used it again in week 2
- **Habitual**: % using it weekly / daily (depends on feature)

### Ask per metric
"What's the current number?"

If Amplitude/Mixpanel MCP: query each funnel step automatically.

### Interpret each metric

```
Awareness: [X%]
[< 30%: discoverability problem — check placement, onboarding]
[30-70%: normal, focus on activation]
[> 70%: good, focus on activation → retention]

Activation: [X%]
[< 10%: value prop unclear or UX friction — investigate with session replay]
[10-40%: typical, A/B test onboarding or first-run experience]
[> 40%: strong, focus on retention]

Retention (week 2): [X%]
[< 20%: feature doesn't deliver recurring value — revisit JTBD]
[20-50%: decent, optimize for power users]
[> 50%: excellent — study power user behavior, expand]
```

### Output

```
## Adoption Report — [Feature] — [date]
Launch: [date] ([N weeks ago])

| Metric | Value | Benchmark | Assessment |
|---|---|---|---|
| Awareness | [%] | 50%+ | [green/yellow/red] |
| Activation | [%] | 20%+ | [green/yellow/red] |
| Week 2 retention | [%] | 30%+ | [green/yellow/red] |
| Weekly active | [%] | — | [green/yellow/red] |

### Top finding
[Most important insight from the data]

### Recommended action
[One specific next step — A/B test, UX fix, comms campaign, etc.]

### Review date
[When to check again]
```
