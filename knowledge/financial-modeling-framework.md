---
type: concept
title: "Financial Modeling Framework"
aliases:
  - "Financial Modeling Framework"
tags:
  - knowledge
  - financial-modeling
status: mature
---

# Financial Modeling Framework

## What it is

A structured approach to building quantitative P&L models for service businesses, covering revenue recognition, cost accounting, scenario analysis, and cash flow projection. Financial modeling is not forecasting — forecasting predicts what will happen; modeling maps out what could happen under different assumptions and shows which variables matter most. For PMs, financial models are decision tools: they translate product decisions (pricing, growth levers, churn reduction initiatives) into financial outcomes that CFOs and boards evaluate. A model that cannot produce a bear/base/bull scenario is not ready for a leadership review.

## When PMs use this

- Building a business case for a new product or pricing change
- Running 12-month or 24-month revenue projections before a board or investor meeting
- Translating unit economics into a P&L to show path to profitability
- Scenario planning for a pricing change, market expansion, or cost reduction initiative
- Communicating financial impact of product decisions to finance and executive stakeholders
- Stress-testing growth assumptions before committing to a headcount plan

## Core Concepts / Framework

### P&L Structure for Service Businesses

A service business P&L follows a standard structure. The rows that matter most for PM decision-making are Gross Profit and EBITDA — these are the two lines that reflect product and operational decisions respectively.

| Line Item | Formula | PM Relevance |
|---|---|---|
| Revenue | Sum of all recognized revenue | Pricing × volume × retention |
| COGS — Hardware depreciation | Purchase price / useful life months | Infrastructure sizing decisions |
| COGS — Electricity + DC | kW × hours × $/kWh × PUE | Efficiency and location decisions |
| COGS — Personnel (delivery) | Headcount × fully-loaded cost | Support and ops team sizing |
| COGS — Other variable | Bandwidth, licenses, third-party APIs | Vendor and architecture choices |
| **Gross Profit** | **Revenue − Total COGS** | **Core product margin** |
| **Gross Margin %** | **Gross Profit / Revenue** | **Benchmark vs industry** |
| OpEx — Sales & Marketing | Salaries + CAC spend | GTM efficiency |
| OpEx — G&A | Finance, legal, HR overhead | Overhead rate |
| OpEx — R&D | Engineering + product headcount | Investment level |
| **EBITDA** | **Gross Profit − OpEx** | **Operational performance** |
| D&A | Depreciation + amortization | Non-cash charge (already in COGS for infra) |
| EBIT | EBITDA − D&A | — |
| Interest + Taxes | — | — |
| **Net Income** | — | — |
| **Free Cash Flow** | EBITDA − CapEx − working capital changes | Actual cash position |

**Critical distinction:** EBITDA is not cash flow. A company with positive EBITDA can be cash-flow negative due to CapEx (hardware purchases), accounts receivable timing, or deferred revenue recognition. Always show both EBITDA and free cash flow in projections.

### Revenue Model Types

**Recurring subscription (MRR/ARR):** Fixed fee per period regardless of usage. Revenue is predictable; COGS may still vary with usage. Best for: SaaS, managed services, dedicated hosting. MRR smooths revenue recognition; churn impact is visible monthly.

**Consumption / metered:** Revenue scales with usage. Unpredictable for planning; aligns incentives (customer pays for value received). Best for: IaaS, API products, GPU compute. Requires statistical usage modeling for projections.

**Hybrid — minimum commit + overage:** Customer commits to a minimum spend (e.g., $5,000/mo) with overage charged at a per-unit rate above the commit. Best of both: provider gets revenue floor; customer gets flexibility. Common in enterprise cloud contracts.

### Key Metrics with Formulas

```
MRR       = Sum of all active subscriptions' monthly recurring value
ARR       = MRR × 12 (or sum of annualized contract values for annual deals)

Gross Churn Rate     = Churned MRR in period / Beginning MRR in period
Net Revenue Retention (NRR) = (Beginning MRR + Expansion MRR − Churned MRR − Contraction MRR) / Beginning MRR

Payback Period (months) = CAC / (ARPU × Gross Margin %)
LTV                 = ARPU × Gross Margin % / Monthly Churn Rate
LTV:CAC Ratio       = LTV / CAC  (healthy: >3:1 for SaaS; >2:1 for infra)

Contribution Margin = Revenue − Variable COGS (excludes fixed COGS allocation)
Break-even Month    = Fixed Monthly Costs / Contribution Margin per Customer
```

**NRR benchmarks by business type:**
- Best-in-class cloud/IaaS: >130% (customers expand usage as they grow)
- Healthy infra/SaaS: 110–130%
- Neutral: ~100% (expansion offsets churn exactly)
- Warning zone: <100% (churn exceeds expansion — MRR declining without new sales)

### Scenario Modeling

Every financial model needs three scenarios. One-scenario models are not models — they are guesses.

| Assumption | Bear | Base | Bull |
|---|---|---|---|
| New customers/month | −30% vs plan | Plan | +30% vs plan |
| Monthly churn rate | +20–30% vs plan | Plan | −15–20% vs plan |
| ARPU expansion | −10% vs plan | Plan | +10–15% vs plan |
| COGS as % of revenue | +5 pp vs plan | Plan | −3 pp vs plan |

**Sensitivity analysis:** Build a sensitivity table showing month-12 MRR across combinations of churn rate (rows) and new customer growth rate (columns). This is more useful than three discrete scenarios because it shows the shape of outcomes space.

### 12-Month vs 24-Month Projection Structure

**12-month model:** Monthly cadence (12 columns). Use for operating plans, budget submissions, board updates. Sufficient detail to track actuals vs plan monthly. Cohort-based churn (each month's new cohort tracked independently) is preferred over blended churn — blended churn hides cohort quality degradation.

**24-month model:** Months 1–12 at monthly cadence, quarters 1–4 of year 2 at quarterly cadence (4 additional columns). Use for fundraising, strategic planning, investor models. Annual view shows path to profitability or funding runway.

**Cohort vs blended churn:**
- Blended churn = total churned customers / total active customers. Simple but misleading.
- Cohort churn tracks each acquisition month's customers separately and measures their retention over time. More accurate; reveals if newer cohorts are worse quality.
- When in doubt, use cohort churn. Blended churn systematically understates churn for growing companies (new customers dilute the churn rate numerically).

### P&L Template — Monthly Row Structure

```
Row 01: New Customers (acquired this month)
Row 02: Churned Customers (lost this month)
Row 03: Active Customers = prior month active + Row 01 − Row 02
Row 04: ARPU (average revenue per user, may expand over time)
Row 05: MRR = Row 03 × Row 04
Row 06: One-time Revenue (setup fees, professional services)
Row 07: Total Revenue = Row 05 + Row 06
Row 08: COGS — Hardware Depreciation
Row 09: COGS — Power + DC
Row 10: COGS — Personnel
Row 11: COGS — Other
Row 12: Total COGS = sum Row 08:11
Row 13: Gross Profit = Row 07 − Row 12
Row 14: Gross Margin % = Row 13 / Row 07
Row 15: OpEx — Sales + Marketing
Row 16: OpEx — G&A
Row 17: OpEx — R&D
Row 18: Total OpEx = sum Row 15:17
Row 19: EBITDA = Row 13 − Row 18
Row 20: CapEx (hardware purchases, not depreciation)
Row 21: Free Cash Flow = Row 19 − Row 20 − working capital delta
```

## Common Mistakes

- **Confusing EBITDA with cash flow.** A company buying servers monthly has significant CapEx that does not appear in EBITDA. Show both EBITDA and free cash flow when presenting to finance or investors.
- **Using blended churn instead of cohort churn.** Blended churn artificially improves for growing companies and hides cohort quality degradation. Use cohort churn for any model that will be reviewed by a sophisticated audience.
- **Omitting working capital in cash flow projections.** Annual contracts paid upfront create deferred revenue (cash received, revenue not yet recognized). Annual contracts billed in arrears create accounts receivable (revenue recognized, cash not yet received). Both affect cash position significantly.
- **Single-scenario models.** A model with no bear/base/bull analysis cannot answer the question "what happens if growth is slower than expected?" — which is the question every board member asks.
- **Projecting costs as fixed when they are variable.** Infrastructure COGS scales with customer count and usage. Modeling COGS as flat while revenue grows produces artificially improving margin profiles that collapse in reality.

## Related

[[Unit Economics Cloud Infra]] · [[Cloud Infrastructure Pricing]] · [[B2B SaaS Metrics]] · [[Unit Economics]] · [[Pricing Strategy SaaS]]
