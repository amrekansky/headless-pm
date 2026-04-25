---
name: pm-adoption
description: Track and interpret feature adoption — activation, retention, engagement. Identifies drop-off, power users, and next interventions. Use 2-4 weeks post-launch.
mcp_output:
  primary: amplitude
  fallback: notion
---

# /pm-adoption — Feature Adoption

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
