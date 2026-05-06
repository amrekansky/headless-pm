# Pricing Strategy for SaaS

## What it is

The set of methodologies for deciding what to charge, how to package it, and how to communicate price in a way that reflects the value delivered. Pricing is not finance — it is product strategy. A 1% improvement in pricing yields an 11% increase in profit (more leverage than either acquisition or retention improvements). Most SaaS companies undercharge, especially in the early stages, and the damage compounds over years.

## When PMs use this

- Launching a new product or tier
- Evaluating whether to raise prices
- Designing packaging (feature-to-tier assignment)
- Commissioning willingness-to-pay research
- Responding to competitive price pressure
- Building a freemium model or trial strategy

## Core Concepts / Framework

### Pricing Strategies Compared

**Cost-plus pricing** — Set price at cost of goods + target margin. Simple, but ignores value delivered and what the market will pay. Common mistake: treating infrastructure costs as the price floor when customers are willing to pay 10x more for the outcome.

**Competitive pricing** — Price relative to alternatives. Useful signal but a trap as a primary strategy. If your differentiator is genuine, you are leaving money on the table. If you have no differentiator, competitive pricing becomes a race to the bottom.

**Value-based pricing** — Price based on the economic value delivered to the customer. If your tool saves a customer $50,000/year in analyst time, charging $3,000/year is underpricing. Requires willingness-to-pay research to operationalize.

Value-based pricing is the standard recommendation for B2B SaaS — it aligns price with customer outcomes and creates pricing power as the product improves.

### Van Westendorp Price Sensitivity Meter (PSM)

Developed by Dutch economist Peter van Westendorp in 1976. Asks four questions to map the range of acceptable prices:

1. At what price would this be **so cheap** you would question the quality?
2. At what price would this be **a bargain** — great value?
3. At what price would this start to seem **expensive**, but you would still consider it?
4. At what price would this be **too expensive** to consider?

Plotting the cumulative distributions of these four questions produces two intersections:

- **Acceptable Price Range (APR):** From the intersection of "cheap" and "expensive" curves
- **Point of Marginal Expensiveness (PME):** Where "too expensive" exceeds "not too expensive"
- **Optimal Price Point (OPP):** Intersection of "too cheap" and "too expensive" curves — where resistance is balanced

**SaaS application:** Segment by persona (SMB vs. enterprise, power user vs. light user) — price sensitivity varies dramatically between segments. Enterprise PSM APR is typically 5–10x wider than SMB.

**Limitation:** PSM measures abstract price tolerance, not actual purchase intent. Combine with Gabor-Granger (direct willingness to pay at specific price points) for validation.

### Willingness to Pay Research

Methods ranked by reliability:
1. **Conjoint analysis** — Present tradeoff scenarios between bundles of features at different prices. Most accurate, most complex.
2. **Van Westendorp PSM** — Quick, directional, good for early-stage research.
3. **Gabor-Granger** — Ask "would you pay $X?" at multiple price points. Builds a demand curve.
4. **Customer interviews** — Probe current spend on alternatives, what outcomes are worth to them. Directional.

Never ask customers "what would you pay?" directly. They will anchor low. Use the PSM questions or conjoint scenarios instead.

### Packaging: Good / Better / Best

Three-tier packaging (Good/Better/Best or Starter/Pro/Enterprise) is the SaaS standard because:
- It creates a reference point — the middle tier anchors perception
- It serves different willingness-to-pay segments without a single price negotiation
- It allows upsell motion (land Starter, expand to Pro)

**Feature allocation rules:**
- Put features that drive adoption and activation in the lowest paid tier
- Put features that drive expansion and stickiness in the middle tier
- Put features that are compliance/security/audit requirements in the top tier (enterprises buy here)
- Freemium tier: remove value, not just features — the free tier should feel complete for a narrow use case, not hobbled

**Packaging mistake:** Putting too many features in the top tier means enterprise buyers overpay relative to value. Distribute value across tiers proportionally to price.

### Freemium Economics

Freemium is a customer acquisition channel, not a pricing model. Unit economics:
```
Free user cost = Infrastructure + Support burden
Conversion rate to paid = typically 2–5% for B2B SaaS
Payback on free user = CAC substitute / conversion rate
```

Freemium works when: (1) marginal cost of a free user is near zero, (2) free usage creates genuine network value or word-of-mouth, (3) the product has a natural expansion path that free limits create.

Freemium fails when: free users consume significant support or infrastructure, conversion rates are sub-1%, or the free tier cannibilizes paid.

### Price Anchoring

The first number a buyer sees anchors all subsequent price judgments. Tactics:
- Show the annual plan first (larger absolute number makes monthly look small)
- Show the enterprise tier column first in pricing tables
- Include a "most popular" badge on the middle tier to shift reference
- Compare to alternatives the customer is already paying for ("replaces $X/month in analyst hours")

### When to Raise Prices

Indicators: NPS is high, churn is low, your price is below PSM Optimal Price Point, customers rarely negotiate, a competitor charges more for less, you have added meaningful features without adjusting price.

The rule: if no customers push back on price, you are underpriced. Healthy friction is 5–15% of prospects citing price as the main reason they did not buy.

## Key Metrics / Formulas

```
Price elasticity = % change in demand / % change in price
ARPU expansion = (New ARPU - Old ARPU) / Old ARPU
Freemium conversion = Paid users / Total free signups
Price:Value ratio = Perceived value (survey) / Price paid (should be >1)
```

## Common Mistakes

- **Pricing to recover costs, not capture value.** Cost-plus ignores what the customer is actually paying for.
- **Never raising prices.** Inflation, feature additions, and market validation all justify increases. Annual 5–10% price increases with no churn impact are standard.
- **One-size-fits-all pricing.** Enterprise and SMB have fundamentally different WTP. Same price for both segments leaves money on the table from one and creates churn in the other.
- **Freemium without conversion funnel.** Free users who never see the upgrade path never convert. The free-to-paid trigger must be designed into the product, not left to marketing.
- **Ignoring annual vs. monthly pricing.** Annual pricing at ~20% discount improves cash flow, reduces churn risk, and typically increases LTV. Default all contracts to annual.

## Quick Reference

```
Cost-plus     = floor, not strategy
Competitive   = signal, not anchor
Value-based   = standard for B2B SaaS
PSM           = 4 questions → Acceptable Price Range
Good/Better/Best = default packaging model
Freemium      = acquisition channel (2-5% conversion)
Raise prices  = when <15% of lost deals cite price
```

## Sources

- [Van Westendorp Pricing Model for SaaS — Lago](https://getlago.com/blog/van-westendorp-pricing-model)
- [Van Westendorp PSM — Wikipedia](https://en.wikipedia.org/wiki/Van_Westendorp%27s_Price_Sensitivity_Meter)
- [Van Westendorp vs Gabor-Granger for SaaS — Monetizely](https://www.getmonetizely.com/articles/van-westendorp-vs-gabor-granger-for-saas-which-pricing-methodology-to-choose)
- [SaaS Packaging and Pricing — Product Leadership](https://www.productleadership.com/blog/saas-packaging-and-pricing/)
- [PSM Implementation for SaaS Research — Monetizely](https://www.getmonetizely.com/articles/how-to-implement-van-westendorp-price-sensitivity-meter-for-saas-research)
- [Pricing Products — First Principles Ventures](https://www.firstprinciples.ventures/insights/pricing-products-the-silicon-valley-way-van-westendorp-model)
