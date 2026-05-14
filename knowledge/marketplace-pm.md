# Marketplace PM

## What it is

A marketplace is a platform that facilitates transactions between two or more distinct user groups — typically buyers and sellers, riders and drivers, guests and hosts. Marketplace PM is a distinct discipline because the product must simultaneously serve both sides, and optimizing for one side often hurts the other. The core challenge is liquidity: a marketplace with no buyers repels sellers, and a marketplace with no sellers repels buyers.

The canonical frameworks come from Sangeet Paul Choudary's *Platform Revolution*, Andrew Chen's work on marketplace growth (a16z), Bill Gurley's essays on marketplace economics (Above the Crowd), and the Airbnb/Uber/Etsy founding stories. The two-sided network effect — where value increases for each side as the other side grows — is the defining economic property.

## When to use

- When building or managing a product where supply and demand are distinct user groups
- When evaluating liquidity problems (supply shortage, demand shortage, or both)
- When setting or changing take rates
- When designing trust and safety features
- When analyzing marketplace health metrics (GMV, take rate, NPS by side, match rate)

## Core components / steps

### The Liquidity Problem

**Liquidity** is the probability that a buyer looking for something will find a match on the marketplace. A liquid marketplace fills most requests quickly. An illiquid marketplace has supply or demand gaps that cause timeouts, long wait times, or unmet demand.

**Liquidity formula (simplified):**
Liquidity = f(supply density, demand density, match algorithm quality, geographic overlap)

**Why liquidity is the PM's primary concern**: Every feature in a marketplace should be evaluated by its liquidity impact. A feature that increases supply but hurts demand quality (lower-quality supply crowds out good supply) decreases net liquidity.

### The Chicken-and-Egg Problem

New marketplaces face a classic bootstrap paradox: buyers won't come without sellers, and sellers won't come without buyers.

**Bootstrap strategies:**

1. **Start geographically concentrated**: Build density in one city/ZIP/category before expanding. Uber launched city-by-city. Airbnb focused on events with hotel shortages. Geographic focus creates local liquidity before scaling.

2. **Subsidize the supply side first**: In most marketplaces, supply is harder to acquire (takes more effort to list). Offer supply-side incentives — early seller tools, guaranteed minimums, waived fees. Demand follows supply.

3. **Single-player mode**: Make the product valuable to one side even without the other. OpenTable was useful as a restaurant reservation system before it had diners. This removes the chicken-and-egg dependency.

4. **Curated supply**: Hand-curate the initial supply to establish quality standards. Etsy's early growth was driven by Etsy employees personally recruiting craft sellers at maker fairs.

5. **Piggybacking**: Build on existing networks where supply already exists. PayPal on eBay. Yelp bootstrapped from restaurant reviews. Craigslist originally served supply that had no other easy channel.

### Take Rate Economics

**Take rate** = Marketplace revenue / GMV (Gross Merchandise Value)

Take rates vary widely by market and value provided:

| Marketplace | Take rate | Why |
|------------|-----------|-----|
| Airbnb | ~13–15% combined | Trust, insurance, global supply |
| Uber | ~25–30% | Real-time matching, payment, driver tools |
| Etsy | ~6–8% | Discovery, payments |
| eBay | ~10–12% | Discovery, buyer protection |
| App Store | 15–30% | Distribution, billing, trust |

**Take rate strategy decisions:**
- **Too low**: Unsustainable. Competitors can undercut. No funding for trust/safety or product investment.
- **Too high**: Sellers exit to direct or competing platforms. Reduces supply quality.
- **Price discrimination**: Charge different rates by seller size, category, or usage (Etsy charges more for ads, less for listing). More efficient capture of value.
- **When to change take rate**: Only with significant advance notice to sellers. Sudden increases trigger churn and PR backlash (Airbnb 2022, DoorDash 2021).

**Net revenue margin**: Take rate minus payment processing, fraud losses, and support costs = true marketplace margin. PMs must track, not just take rate.

### Trust and Safety as Product Function

Trust enables transaction. Without trust, neither side will transact.

**Trust mechanisms by layer:**

1. **Identity verification**: Know who your users are. KYC for financial transactions; profile verification for reputation.
2. **Reviews and ratings**: Bilateral review systems (buyer and seller rate each other) build reputation over time. Design: make reviews easy to leave, hard to game.
3. **Escrow and payment protection**: Holding funds until transaction completion reduces payment fraud. Airbnb holds payment until 24h after check-in.
4. **Insurance and guarantees**: Host guarantee (Airbnb), purchase protection (PayPal), service guarantee (TaskRabbit). Reduces buyer risk perception.
5. **Trust signals on profiles**: Verification badges, response rate, years on platform, government ID verified.
6. **Dispute resolution**: Clear, fast, fair dispute process is a trust infrastructure, not just customer support.

**T&S metrics PMs should track:**
- Fraud rate (transaction-level)
- Dispute rate and resolution time
- Chargeback rate
- Safety incident rate (for physical goods/services)
- User-reported scam/fraud

### Marketplace Flywheel

The self-reinforcing growth mechanism that defines great marketplace businesses:

```
More supply → Better match quality → Higher demand satisfaction
     ↑                                         |
Higher supply earnings ← More demand ←────────┘
```

**PM's job on the flywheel**: Identify where the flywheel is leaking and fix it. Common leaks:
- **Match quality is poor**: Supply exists but doesn't match demand. Fix: better search and filtering.
- **High supply churn**: New sellers arrive but don't earn enough and leave. Fix: onboarding, guaranteed earnings programs.
- **Low repeat demand**: Buyers transact once and don't return. Fix: retention features, re-engagement, loyalty.
- **Geographic imbalance**: Supply in suburbs, demand in cities. Fix: pricing incentives to shift supply.

### Managed vs Unmanaged Marketplace

**Unmanaged** (pure platform): The marketplace facilitates transactions but does not control supply quality, pricing, or service delivery. eBay, Craigslist, Etsy.

**Managed** (curated platform): The marketplace controls supply standards, often sets prices, and may guarantee service quality. Airbnb (house standards), Uber (driver standards), Amazon Fulfilled by Amazon.

Managed marketplaces trade off supply scale for quality and trust. Unmanaged marketplaces scale faster but have more quality variance. Most successful marketplaces move from unmanaged toward managed as they scale.

## Key questions to ask

- What is our current liquidity metric — what % of demand is matched quickly?
- Where is the supply-demand imbalance, and what product intervention would fix it?
- Does our take rate reflect the actual value we provide to each side?
- What is our supply churn rate, and why are sellers leaving?
- Are trust and safety metrics improving or degrading as we scale?

## Common mistakes

- **Serving both sides equally**: Usually one side is the constraint. Identify which side limits liquidity and optimize for them.
- **Launching in too many geographies at once**: Thin supply everywhere is worse than dense supply somewhere. Focus for liquidity.
- **Optimizing GMV instead of net revenue**: High GMV with high fraud and chargebacks is worse than lower GMV with clean transactions.
- **Ignoring supply quality in growth**: Adding more supply that is low quality decreases match quality and hurts both sides.
- **Misaligning incentives**: If the take rate makes sellers uncompetitive vs direct channels, they will route around the marketplace.

## Quick reference

```
Liquidity = probability that a buyer finds a match quickly
Take rate = Revenue / GMV (typical range: 5–30%)
Flywheel: supply → match quality → demand → supply earnings → more supply

Bootstrap strategies:
  1. Geographic focus (density before scale)
  2. Subsidize supply side first
  3. Single-player mode (valuable without the other side)
  4. Curated initial supply
  5. Piggyback on existing networks
```

| Metric | Definition | Benchmark concern |
|--------|-----------|-------------------|
| GMV | Total transaction value | Growing is good; also track take rate |
| Take rate | Revenue / GMV | Declining = value erosion or competition |
| Supply churn | % sellers leaving per month | > 5% monthly = problem |
| Match rate | Demand requests matched | < 80% = liquidity problem |
| NPS by side | Buyer NPS vs Seller NPS | Divergence signals side imbalance |

## Sources

- [Platform Revolution — Sangeet Paul Choudary, Geoffrey Parker, Marshall Van Alstyne (2016)](https://www.amazon.com/Platform-Revolution-Networked-Markets-Transforming/dp/0393249131)
- [All Markets Are Not Created Equal — Bill Gurley (Above the Crowd)](https://abovethecrowd.com/2012/11/13/all-markets-are-not-created-equal-10-factors-that-make-a-marketplace-business-truly-great/)
- [The Supply Side of Marketplaces — Andrew Chen (a16z)](https://a16z.com/2016/08/05/marketplace-1/)
- [Marketplace Liquidity — Josh Breinlinger (Jackson Square Ventures)](https://acrowdedspace.com/post/47658552922/the-importance-of-marketplace-liquidity)
- [How Airbnb Bootstrapped — Paul Graham case studies](http://paulgraham.com/growth.html)
