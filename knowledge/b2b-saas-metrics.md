# B2B SaaS Metrics

## What it is

The core financial and operational metrics that measure health, growth efficiency, and retention in subscription software businesses. Unlike transactional businesses, SaaS value lives in recurring relationships — so the metrics track the quality of those relationships over time.

## When PMs use this

- Quarterly business reviews and board prep
- Evaluating whether product changes improved retention
- Sizing the impact of a feature on expansion revenue
- Making the case for investment in a specific customer segment
- Identifying early warning signs of churn before it hits ARR

## Core Concepts / Framework

### Retention Metrics

**GRR (Gross Revenue Retention)** — revenue retained from existing customers at the same or lower contract value. Excludes expansion. Measures how well you prevent churn and contraction. Formula:

```
GRR = (Starting MRR - Churned MRR - Contraction MRR) / Starting MRR
```

Good benchmark: 85–95% for B2B SaaS. Larger companies ($100M+ ARR) hit ~94%.

**NRR (Net Revenue Retention)** — GRR plus expansion (upsells, cross-sells, seat growth). The single most important metric for SaaS health. Formula:

```
NRR = (Starting MRR - Churned MRR - Contraction MRR + Expansion MRR) / Starting MRR
```

Benchmarks (2025 median: 106%):
- Best-in-class: >130%
- Good: 100–120%
- Concerning: <100% (you are shrinking even without churn)
- Larger companies ($100M+ ARR) median: 115%

NRR >100% means the business can grow revenue without acquiring a single new customer. This is why investors weight it heavily.

**Logo Churn vs. Revenue Churn** — logo churn counts the number of customers lost; revenue churn counts the ARR lost. A small customer churning shows up in logo churn but barely moves revenue churn. A whale churning barely moves logo churn but devastates revenue churn. Always report both.

### Expansion Revenue

Top-performing companies generate >50% of new ARR from upsells to existing customers. Companies above $50M ARR typically see existing customers driving 40–50%+ of net new ARR. Expansion mechanisms: seat growth, tier upgrades, add-on modules, usage overages.

### Unit Economics

**LTV (Customer Lifetime Value)**:
```
LTV = ARPU / Monthly Churn Rate
```
Or for contract businesses: `LTV = ACV * Gross Margin * Average Contract Duration`

**CAC (Customer Acquisition Cost)**:
```
CAC = (Sales + Marketing Spend) / New Customers Acquired
```
Split CAC into blended CAC and new-logo CAC. Blended includes expansion bookings which inflates the ratio.

**LTV:CAC ratio** — measures return on customer acquisition investment:
- Benchmark: 3:1 minimum to be viable; 4:1+ is healthy
- 2024 median for public SaaS: 4.2:1; private: 3.1:1
- Ratio <3:1 means you are paying too much to acquire customers relative to their lifetime value

**CAC Payback Period** — months to recover acquisition cost:
```
CAC Payback = CAC / (ARPA * Gross Margin %)
```
- Best-in-class: under 12 months
- Acceptable: 12–18 months
- Warning: >24 months
- Companies with <12 month payback trade at ~8.2x ARR; >18 months trade at ~5.1x ARR

### Champion Mapping

Champions are individuals inside customer accounts who drove the buying decision and defend the renewal. Tracking champions:
- When a champion leaves, churn probability increases significantly (treat as at-risk)
- Multi-threaded accounts (3+ contacts) have materially lower churn than single-contact accounts
- PMs should instrument product to detect when champion usage drops (early warning)

## Key Metrics / Formulas

| Metric | Formula | Healthy Range |
|--------|---------|---------------|
| GRR | (Start - Churn - Contraction) / Start | 85–95% |
| NRR | GRR + Expansion / Start | >100%, best >120% |
| Logo Churn | Customers Lost / Starting Customers | <5% annually for SMB |
| Revenue Churn | ARR Lost / Starting ARR | <3% monthly |
| LTV:CAC | LTV / CAC | >3:1 |
| CAC Payback | CAC / (ARPA * GM%) | <12 months |
| Expansion Revenue % | Expansion ARR / Total New ARR | >30% mature companies |

## Common Mistakes

- **Conflating NRR and GRR.** GRR can never exceed 100%. NRR can. They answer different questions.
- **Using blended CAC for payback.** Include only new-logo acquisition costs, not expansion costs.
- **Measuring logo churn and ignoring revenue churn.** A company losing 5 SMB logos and 1 enterprise logo may have worse revenue health than logo numbers suggest.
- **Annualizing monthly churn incorrectly.** 3% monthly churn is not 36% annual — it compounds to ~31% annual.
- **Not segmenting NRR by cohort or segment.** Average NRR hides that enterprise cohorts might have 130% NRR while SMB cohorts are at 85%.
- **Ignoring champion tracking.** Product usage data predicts renewal risk months before the renewal date.

## Quick Reference

```
NRR > 100%    = growth engine (revenue grows without new customers)
NRR 90–100%  = treadmill (must acquire to grow)
NRR < 90%    = leaky bucket (acquisition cannot compensate)

LTV:CAC > 5:1 = underinvesting in growth
LTV:CAC 3–5:1 = efficient growth
LTV:CAC < 3:1 = unit economics problem

Payback < 12mo = healthy
Payback 12-18mo = watch carefully
Payback > 24mo = fix before scaling
```

## Sources

- [B2B SaaS Benchmarks — Orb, 2025](https://www.withorb.com/blog/saas-benchmarks)
- [Retention Benchmarks for B2B SaaS 2025 — Wudpecker](https://www.wudpecker.io/blog/retention-benchmarks-for-b2b-saas-in-2025)
- [State of the Cloud 2024 — Bessemer Venture Partners](https://www.bvp.com/atlas/state-of-the-cloud-2024)
- [CAC Payback Benchmarks — Drivetrain](https://www.drivetrain.ai/strategic-finance-glossary/cac-payback-period-formula-benchmarks-and-how-to-reduce-it)
- [SaaS Metrics Benchmark Report 2025 — Rockingweb](https://www.rockingweb.com.au/saas-metrics-benchmark-report-2025/)
- [NRR calculation guide — Drivetrain](https://www.drivetrain.ai/strategic-finance-glossary/how-to-calculate-net-revenue-retention)

## Related

- [[metrics-taxonomy]]
- [[unit-economics]]
- [[aarrr-pirate-metrics]]
- [[pricing-strategy-saas]]
- [[north-star-metric]]
