# Unit Economics

## What it is

Unit economics describes the direct revenues and costs associated with a single unit of a business model — most commonly one customer, one transaction, or one subscription. For SaaS PMs, the two central metrics are **CAC** (Customer Acquisition Cost) and **LTV** (Lifetime Value), and the relationship between them determines whether the business is fundamentally viable at scale. Unit economics became a core PM discipline as subscription software replaced one-time-license software: you can sell at a loss per customer for a while, but eventually the math catches up.

The discipline draws from microeconomics (contribution margin theory), SaaS financial modeling (David Skok's SaaS Metrics framework, Andreessen Horowitz growth accounting), and marketing attribution work.

## When to use

- When setting pricing — a price change has direct impact on LTV and LTV:CAC
- When evaluating acquisition channel ROI — not all CAC is equal
- When prioritizing churn reduction vs new acquisition investments
- When making the case for a product feature to leadership (tie to LTV impact)
- When entering a new market segment or persona — each segment has different unit economics
- When the company is pre-PMF and trying to understand if the model is fundamentally sound

## Core components / steps

### CAC — Customer Acquisition Cost

**CAC = Total Sales & Marketing Spend / New Customers Acquired**

Calculated over a period (usually a quarter or year). Includes: salaries, ad spend, events, tools, agency fees.

**Blended vs channel CAC**: Blended CAC averages across all channels. Channel CAC breaks it down (paid search, organic, outbound, partner). Channel CAC is more actionable for product decisions — a feature that improves SEO may lower blended CAC without affecting paid CAC.

**Fully-loaded vs marketing-only CAC**: Some companies exclude sales salaries. Be consistent. Investors usually want fully-loaded.

### LTV — Lifetime Value

**LTV = ARPU × Gross Margin % × Average Customer Lifetime**

Where Average Customer Lifetime = 1 / Monthly Churn Rate

For a subscription at $100/mo, 80% gross margin, 2% monthly churn:
- Average lifetime = 1/0.02 = 50 months
- LTV = $100 × 0.80 × 50 = **$4,000**

**Discounted LTV**: Adjust for time-value of money. A dollar in year 3 is worth less than a dollar today. Use NPV when LTV > 24 months.

### LTV:CAC Ratio

The foundational health metric for SaaS businesses.

| Ratio | Signal |
|-------|--------|
| < 1x | Destroying value — each customer costs more than they generate |
| 1x–3x | Marginal — business is not sustainably investable |
| 3x | Industry baseline threshold for "healthy" |
| 5x–8x | Strong unit economics |
| > 10x | Either massive efficiency OR underinvesting in growth |

**The 3:1 rule** (David Skok): LTV should be at least 3× CAC. Below this, the business is either not scaling or burning unsustainably.

### Payback Period

**Payback = CAC / (Monthly ARPU × Gross Margin %)**

How many months until a customer has paid back their acquisition cost.

- < 12 months: Excellent (can reinvest quickly)
- 12–24 months: Acceptable for enterprise
- > 24 months: Requires significant capital to scale; raises risk

A company with a $1,500 CAC, $100/mo ARPU, 80% margin: payback = 1,500 / (100 × 0.8) = **18.75 months**.

### Contribution Margin

**Contribution Margin = Revenue − Variable Costs**

Variable costs = cost of goods sold (COGS) — hosting, support, payment processing, third-party APIs. Fixed costs (engineering salaries, rent) are excluded.

Contribution margin tells you if each incremental unit of revenue is positive after direct costs. A product with 60% gross margin but 30% contribution margin has significant variable cost leakage that engineering decisions can fix (cheaper infrastructure, fewer support tickets via better UX).

### Gross Margin

**Gross Margin % = (Revenue − COGS) / Revenue × 100**

SaaS benchmarks:
- Pure software: 70–85%
- Managed services / implementation-heavy: 50–65%
- Infrastructure-heavy (storage, compute): 40–60%

Gross margin is a product decision. Reducing support load, improving self-serve, moving to cheaper infrastructure — all improve gross margin.

### When Unit Economics Become the Forcing Function

Unit economics move from "interesting" to "urgent" when:
1. **Growth is slowing** — you can no longer grow your way out of bad economics
2. **CAC is rising** — paid channels saturate, organic is not enough
3. **Churn is rising** — LTV shrinks, payback extends, math breaks
4. **Fundraising** — investors will run LTV:CAC before writing a check

Product levers that directly affect unit economics:
- Onboarding → activation → reduces early churn → increases LTV
- Expansion revenue (upsell/cross-sell) → increases ARPU → increases LTV
- Self-serve support (help docs, in-app guidance) → reduces COGS → improves margin
- Feature usage → reduces churn → extends lifetime

## Key questions to ask

- What is our LTV:CAC by acquisition channel? Are some channels fundamentally uneconomic?
- What is our payback period today, and how does it change if we cut CAC by 20%?
- What is our gross margin, and what product changes would move it by 5 points?
- Where in the funnel does the most LTV get destroyed (activation, expansion, churn)?
- Does our pricing capture the value we create, or are we leaving LTV on the table?

## Common mistakes

- **Ignoring churn in LTV**: Using revenue / churn without multiplying by gross margin overstates LTV and hides margin problems.
- **Using blended CAC to evaluate channels**: A channel with $50 CAC and zero retention is worse than a channel with $300 CAC and 90% year-1 retention.
- **Treating LTV:CAC as static**: It changes with pricing, churn, and acquisition mix. Track it quarterly.
- **Optimizing CAC without tracking payback**: Lower CAC from a lower-quality segment can extend payback if ARPU also drops.
- **Ignoring expansion revenue**: LTV calculations that omit upsells and seat expansions dramatically understate value in PLG and enterprise products.
- **Using LTV:CAC to justify any acquisition spend**: The ratio does not tell you whether the absolute dollar amounts make sense for your runway.

## Quick reference

```
CAC        = Total Sales & Marketing Spend / New Customers
LTV        = ARPU × Gross Margin% × (1 / Monthly Churn Rate)
LTV:CAC    = 3x minimum | 5x+ healthy | 10x+ exceptional
Payback    = CAC / (Monthly ARPU × Gross Margin%)
            Target: < 12 months (< 24 months acceptable for enterprise)
Gross Margin: 70–85% for pure SaaS
```

| Metric | Red | Yellow | Green |
|--------|-----|--------|-------|
| LTV:CAC | < 1x | 1–3x | > 3x |
| Payback | > 36mo | 24–36mo | < 18mo |
| Gross Margin (SaaS) | < 50% | 50–65% | > 70% |
| Monthly Churn | > 5% | 2–5% | < 2% |

## Sources

- [SaaS Metrics 2.0 — David Skok (ForEntrepreneurs)](https://www.forentrepreneurs.com/saas-metrics-2/)
- [The SaaS Adventure — Christoph Janz (Point Nine)](https://christophjanz.blogspot.com/2013/04/a-saas-metrics-primer.html)
- [LTV:CAC Ratio Explained — Andreessen Horowitz](https://a16z.com/2015/08/21/16-metrics/)
- [Unit Economics — Y Combinator Startup School](https://www.startupschool.org/library)
- [Measure What Matters (OKR/metrics) — John Doerr](https://www.whatmatters.com/)
