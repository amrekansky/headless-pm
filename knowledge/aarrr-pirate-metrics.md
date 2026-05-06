# AARRR Pirate Metrics

## What it is

AARRR (pronounced like a pirate, hence "Pirate Metrics") is a five-stage growth framework introduced by Dave McClure in 2007 at the Ignite Seattle event. It maps the full customer lifecycle: **Acquisition, Activation, Retention, Referral, Revenue**. Each stage represents a critical conversion point where users either progress or drop off. AARRR forces product and growth teams to identify where the biggest leaks are in their funnel, rather than optimizing everything at once.

## When to use

- Early-stage product that needs a growth framework but doesn't have one
- Teams that can't agree on what to optimize (AARRR forces prioritization by stage)
- Diagnosing why growth has stalled (find the broken stage)
- Designing metrics for a new product area or feature set

**Less useful for:** consumer social products at scale (referral is the dominant mechanic), or enterprise B2B with multi-stakeholder sales cycles (funnel shape doesn't map cleanly).

## Core components / steps

### The Five Stages

**A — Acquisition**
How users first find you. The top of the funnel.
- Definition: a new user reaches your product (visits site, downloads app, signs up)
- How to measure: channel-level traffic, conversion rate per channel, cost per acquisition (CPA)
- Key channels: SEO, paid ads, social, word of mouth, partnerships, content
- Key lever: don't scale paid acquisition until you've fixed activation and retention — you're buying leaky buckets

**A — Activation**
The first "aha moment" — when a new user gets real value from your product.
- Definition: user completes a key action that signals genuine engagement
- How to measure: % of new users who complete the activation event (onboarding, first task, first value)
- Examples: Slack — first message sent in a channel with 3+ people; Dropbox — first file uploaded; Spotify — first playlist created
- Key lever: shorten time-to-value; remove friction between signup and the aha moment

**R — Retention**
Users coming back. The most important stage for sustainable growth.
- Definition: users returning and continuing to use the product over time
- How to measure: Day-1/7/30 retention curves, WAU/MAU ratio, churn rate
- Benchmarks (general SaaS): Day-30 retention >25% is good; >40% is excellent
- Key lever: habit formation, notification strategy, ongoing value delivery

**R — Referral**
Users bringing other users.
- Definition: existing users recommend the product to others
- How to measure: Net Promoter Score (NPS), viral coefficient (K-factor), referral conversion rate
- K-factor formula: (invites sent per user) × (conversion rate of invites)
- Key lever: referral programs, social sharing hooks, product experiences worth talking about

**R — Revenue**
The monetization step.
- Definition: users take money-generating actions (pay, upgrade, subscribe)
- How to measure: Average Revenue Per User (ARPU), Monthly Recurring Revenue (MRR), LTV, LTV:CAC ratio
- Key lever: pricing model fit, upgrade triggers, expansion revenue (upsell/cross-sell)

### Funnel Visualization

```
Acquisition  [██████████████████████████████] 10,000 visitors
Activation   [████████████████████          ]  6,000 signups (60%)
             [████████                      ]  2,400 activated (40%)
Retention    [████                          ]    720 still active Day-30 (30%)
Referral     [██                            ]    216 referred someone (30%)
Revenue      [█                             ]     72 paid (33%)
```

**The point:** find the biggest drop. Fix that stage first.

### AARRR vs RARRA

RARRA (Retention, Activation, Referral, Revenue, Acquisition) is a reordering popularized by Thomas Petit and Gabor Papp (~2017) for the modern app ecosystem:

| | AARRR | RARRA |
|---|---|---|
| Priority order | Acquisition first | Retention first |
| Mental model | Funnel (top-down) | Engine (retention drives everything) |
| Best for | Sales-led GTM, growth stage | PLG, early-stage, apps |
| Core insight | Get users, then keep them | You can't scale what doesn't retain |

**Practical rule:** if your Day-30 retention is below 20%, don't invest in paid acquisition. Fix retention first — you're pouring water into a bucket with holes.

**RARRA is not a replacement for AARRR.** Same metrics, different prioritization based on your stage and GTM motion.

## Key questions to ask

- What is our activation event — and do we know if users who hit it retain better?
- Where is the biggest drop-off in our funnel right now?
- What does our Day-7 and Day-30 retention curve look like? Is it flattening?
- Is our LTV significantly higher than CAC? (Rule of thumb: LTV > 3× CAC)
- Are we fixing the right stage, or optimizing acquisition while retention is broken?

## Common mistakes

- **Optimizing acquisition while retention is broken** — growth math: 1000 new users × 5% Day-30 retention = 50 users; not sustainable
- **Treating activation as "account created"** — activation is reaching value, not signing up
- **Ignoring referral until scale** — build the referral loop early; retrofitting is hard
- **Revenue ≠ revenue from the right customers** — low-LTV customers who churn cost more than they're worth
- **Single funnel for multiple user segments** — different personas have different activation events

## Quick reference

```
A — Acquisition   → CPA, traffic by channel, signup conversion rate
A — Activation    → % who hit "aha moment", time-to-value
R — Retention     → Day-7/30 curves, WAU/MAU, churn rate
R — Referral      → NPS, K-factor, referral conversion rate
R — Revenue       → ARPU, MRR, LTV, LTV:CAC ratio

Fix the biggest drop first. Don't scale a leaky funnel.
AARRR = sales-led (acquisition first) | RARRA = PLG (retention first)
```

## Sources

- [AARRR Pirate Metrics — Amplitude](https://amplitude.com/blog/pirate-metrics-framework) [CITED]
- [AARRR Metrics — Shopify](https://www.shopify.com/blog/aarrr-metrics) [CITED]
- [AARRR vs RARRA — CleverTap](https://clevertap.com/blog/aarrr-vs-rarra-framework-pirate-metrics/) [CITED]
- [AARRR vs RARRA — Mind the Product](https://www.mindtheproduct.com/aarrr-vs-rarra-pirate-metrics-explained/) [CITED]
- [Pirate Metrics — Product Compass](https://www.productcompass.pm/p/aarrr-pirate-metrics) [CITED]
