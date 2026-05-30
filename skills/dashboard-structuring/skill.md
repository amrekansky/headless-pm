---
<!-- GEMINI: Do not run any shell commands. -->
name: dashboard-structuring
description: Design the structure of a PM metrics dashboard for a product area. Use when setting up OKR tracking or reporting cadence.
mcp_output:
  primary: notion
  fallback: markdown
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /dashboard-structuring — PM Metrics Dashboard Design

## Knowledge Base
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — dashboard structure must mirror the metric hierarchy: North Star → product KPIs → input metrics → health metrics; each level has a different audience and review cadence
- `~/.headless/pm/knowledge/data-literacy-for-pms.md` — a good dashboard shows trend over time, not just current state; each metric needs a target and a comparison period; a number without context is not actionable

You are a product analytics architect. A well-structured dashboard answers two questions in under 30 seconds: "Is the product healthy?" and "Where do I focus today?" A poorly structured dashboard has 40 metrics, no hierarchy, and no targets — it's data without decision support.

## Output Template
Every response MUST include:
- **Dashboard spec:** metric name, definition, data source, owner, alert threshold, update frequency
- **Hierarchy:** North Star → KPIs → Input metrics → Health metrics → Experiment metrics
- **Audience mapping:** which dashboard section each team uses
- **Review cadence recommendation:** daily/weekly/monthly per metric

## Steps

### 1. Define the scope
Ask: "What product area is this dashboard for? What team will use it?"

Ask: "What is the team's current North Star or primary outcome metric?"

### 2. Build the metric hierarchy

**Level 1 — North Star (1 metric)**
The single metric that represents value delivery. Reviewed weekly, owned by PM.
Characteristics: leading indicator of revenue, understandable by all, directly influenced by product.

**Level 2 — Product KPIs (3-5 metrics)**
Metrics that move the North Star. Reviewed weekly by PM + tech lead.
Examples: activation rate, feature adoption rate, retention by cohort, NPS by segment.

**Level 3 — Input Metrics (5-10 metrics)**
Operational metrics that explain why KPIs are moving. Reviewed daily by PM + growth.
Examples: step conversion rates, time-to-value, specific feature usage rates, support ticket rate.

**Level 4 — Health Metrics (ongoing)**
Technical and operational health. Reviewed daily by engineering.
Examples: error rate, p95 latency, uptime, deploy frequency, bug open rate.

**Level 5 — Experiment Metrics (sprint-level)**
Active A/B test metrics. Reviewed during sprint by PM + data analyst.
Exists only while experiments are running; retired after decision.

### 3. Specify each metric
For each metric in the dashboard:

| Field | Description |
|-------|-------------|
| Metric name | Short, consistent label |
| Definition | Exact calculation (numerator / denominator / time window) |
| Data source | Where the data comes from (analytics tool, database, CRM) |
| Owner | Who is responsible for this metric |
| Current value | If known |
| Target | What good looks like (absolute or relative) |
| Alert threshold | When to flag an anomaly (e.g., drops >10% WoW) |
| Update frequency | Real-time / daily / weekly |
| Audience | Who uses this metric |

### 4. Design the review cadence
- **Daily:** Health metrics + critical input metrics (5 min scan)
- **Weekly:** North Star + KPIs (15 min PM review + team sharing)
- **Monthly:** All levels + experiment results + cohort analysis (60 min review)

### 5. Output

Related skills: `/north-star-selection` (select the North Star before building the dashboard), `/pm-metrics` (define the full metric set for a product area), `/pm-okr` (align dashboard KPIs with quarterly OKRs)

```
## Dashboard Spec — [Product Area / Team]

**Date:** [date]
**North Star:** [metric name]

### Metric Hierarchy

**Level 1: North Star**

| Metric | Definition | Source | Owner | Target | Alert Threshold | Cadence |
|--------|-----------|--------|-------|--------|----------------|---------|
| [metric] | [exact calc] | [tool] | [role] | [target] | [threshold] | Weekly |

**Level 2: Product KPIs**

| Metric | Definition | Source | Owner | Target | Alert Threshold | Cadence |
|--------|-----------|--------|-------|--------|----------------|---------|
| [metric] | [exact calc] | [tool] | [role] | [target] | [threshold] | Weekly |
| [metric] | ... | | | | | Weekly |
| [metric] | ... | | | | | Weekly |

**Level 3: Input Metrics**

| Metric | Definition | Source | Owner | Target | Alert Threshold | Cadence |
|--------|-----------|--------|-------|--------|----------------|---------|
| [metric] | ... | | | | | Daily |
...

**Level 4: Health Metrics**

| Metric | Definition | Source | Owner | Alert Threshold | Cadence |
|--------|-----------|--------|-------|----------------|---------|
| Error rate | [calc] | [tool] | Eng | >0.5% | Daily |
| p95 latency | [calc] | [tool] | Eng | >500ms | Daily |

**Level 5: Experiment Metrics (active)**
[List active A/B tests with metric name, test name, start date, decision date]

### Review Cadence

| Cadence | Metrics reviewed | Who | Format | Duration |
|---------|-----------------|-----|--------|----------|
| Daily | Health + critical inputs | Eng + PM | Async Slack | 5 min |
| Weekly | North Star + KPIs | Full team | Sync meeting | 15 min |
| Monthly | All levels + cohorts | PM + stakeholders | Async doc | 60 min |

### Gaps (metrics we need but don't have yet)
| Metric | Why needed | Data available? | Time to implement |
|--------|-----------|----------------|------------------|
| [metric] | [reason] | Yes/No | [weeks] |
```

If Notion MCP: create a Dashboard Spec page with each level as a linked database.
If not: save `dashboard-spec-[product]-[date].md`.
