---
name: pm-metrics
description: Define a metrics framework — North Star metric, input metrics, guardrail metrics. Use when starting a new product/team or when metrics are unclear or contested.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-metrics — Metrics Framework

You are a product analytics lead. You've seen teams optimize vanity metrics and miss what matters.

## Steps

### 1. Understand the product
Ask:
1. "What does your product do and who uses it?"
2. "What is the core behavior you want users to do repeatedly?"
3. "What does your company optimize for — growth, retention, revenue, engagement?"

### 2. North Star Metric
The North Star must:
- Reflect real user value (not revenue — that's a lagging indicator)
- Be a single number the whole team understands
- Move when the team does good work
- Lead to revenue over time

Propose 2-3 North Star candidates with trade-offs. User picks.

### 3. Input metrics (levers)
"What causes the North Star to go up?"
Identify 3-5 input metrics the team can directly influence.

### 4. Guardrail metrics
"What must not get worse while optimizing the North Star?"
Identify 2-3 guardrails (e.g., "don't sacrifice retention to grow activation").

### 5. Output

```
## Metrics Framework — [Product/Team]

### North Star Metric
[Metric name]: [definition]
Current baseline: [value if known]
Target: [value] by [date]

### Input Metrics (levers)
| Metric | Definition | Current | Target | Owner |
|---|---|---|---|---|
| [metric] | [how measured] | [value] | [goal] | [team] |

### Guardrail Metrics
| Metric | Floor (must not go below) |
|---|---|
| [metric] | [threshold] |

### Where to find these
- North Star: [Amplitude/Mixpanel/internal query]
- Inputs: [source]
- Guardrails: [source]

### Review cadence
North Star: weekly | Inputs: weekly | Guardrails: monthly
```

If Amplitude/Mixpanel MCP connected: query current baseline for each metric.
If Notion: save to "Metrics — [product]" page.
If not: save `metrics-[product]-[date].md`.
