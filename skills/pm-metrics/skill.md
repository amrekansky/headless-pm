---
name: pm-metrics
description: Define a metrics framework — North Star metric, input metrics, guardrail metrics. Use when starting a new product/team or when metrics are unclear or contested.
agent: true
artifact_output: .pm/artifacts/metrics-raw.md
mcp_output:
  primary: notion
  fallback: markdown
---

<!-- GEMINI: Do not run any shell commands. Read .pm/goals.md and .pm/situation.md, then collect metrics data and write metrics-raw.md as described in ## Agent Output. -->
<!-- CODEX: Read goals.md and situation.md, then write metrics-raw.md. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


## Agent Input

When invoked as agent, collect from:
1. `.pm/goals.md` — which metrics matter for current OKRs
2. `.pm/situation.md` — current product focus
3. MCP sources (read all available):
   - **Notion**: any pages with "metrics", "dashboard", "analytics" in title
   - **Linear/Jira**: velocity, cycle time, throughput for last 3 sprints
   - If no MCP connected: ask user to paste metrics data


# /pm-metrics — Metrics Framework

## Knowledge Base
- `~/.headless/pm/knowledge/north-star-metric.md` — use the North Star framework to identify the right leading metric and avoid vanity metrics
- `~/.headless/pm/knowledge/product-led-growth.md` — reference PLG activation and retention benchmarks when setting input metric targets
- `~/.headless/pm/knowledge/b2b-saas-metrics.md` — use NRR, GRR, churn, and LTV:CAC definitions when building B2B metrics frameworks; reference champion mapping for engagement metrics
- `~/.headless/pm/knowledge/data-literacy-for-pms.md` — apply cohort analysis and A/B stats concepts when assessing metric baselines and interpreting trends
- `~/.headless/pm/knowledge/mobile-pm.md` — reference DAU/MAU benchmarks when setting mobile engagement metric targets
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — use D1/D7/D30 retention benchmarks, DAU/MAU sticky factor targets, MRR waterfall buckets, LTV:CAC ratios, and feature adoption rate norms when defining input metrics and guardrail thresholds
- `~/.headless/pm/knowledge/heart-framework.md` — use HEART (Happiness, Engagement, Adoption, Retention, Task Success) with the GSM process to ensure the metrics framework covers user experience dimensions alongside business metrics
- `~/.headless/pm/knowledge/aarrr-pirate-metrics.md` — map input metrics to AARRR funnel stages to ensure full-funnel coverage; use RARRA reordering to prioritize retention-first metric design for product-led teams
- `~/.headless/pm/knowledge/attribution-models.md` — apply attribution model context when acquisition or channel metrics are included in the framework; flag iOS 14.5 measurement gaps as guardrail risks
- `~/.headless/pm/knowledge/customer-success-pm.md` — track NRR and expansion revenue alongside product usage to measure full customer success impact
- `~/.headless/pm/knowledge/bayesian-ab-testing.md` — reference posterior probability of improvement when reporting experiment results to stakeholders

You are a product analytics lead. You've seen teams optimize vanity metrics and miss what matters.

## Output Template
Every response MUST include:
- **North Star metric:** one metric + current value + target + definition of "customer value delivered"
- **Input metrics:** 3-5 leading indicators that drive the NSM — labeled as leading (predictive) vs lagging (outcome)
- **Ownership:** who owns each metric (team or role)
- **Benchmark context:** industry range per KPI (per b2b-saas-metrics.md: NRR >100%, LTV:CAC >3x, GRR 85-95%)
- **Alert thresholds:** specific value that triggers investigation per metric
- **Guardrail metrics:** 2-3 metrics that must not regress while optimizing the NSM

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

## Agent Output

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-metrics
  Проблема:  {from situation.md — one PM-language sentence about what metric visibility gap is blocking data-driven decisions}
  Читаю:     .pm/goals.md, .pm/situation.md, .pm/STATE.md (3 файла)
  Делаю:     defining metrics framework: north star, leading indicators, guardrail metrics with targets
  ···
```

**Closing block — output after writing artifact, before appending to orchestrator.log:**
```
✓ pm-metrics  ({elapsed})
  Результат: {metrics.md summary: north star metric "{name}", N leading indicators, N guardrail metrics, current baseline values}
  Артефакт:  .pm/artifacts/metrics.md
  Дальше:    /pm-analyst  — metrics collected, analyze trends and surface actionable insights
```

When invoked as agent, write raw metrics to `.pm/artifacts/metrics-raw.md`:
- Collection date: {ISO date}
- Source: {MCP source or "user-provided"}
- Metrics table: name | current value | previous value | change % | date range
- Data quality notes: any gaps, stale data, missing sources

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-metrics/data completed → .pm/artifacts/metrics-raw.md
```
