# Attribution Models

## What it is

Attribution models are rules that determine how credit for a conversion (signup, purchase, subscription) is distributed across the marketing touchpoints a user interacted with before converting. A user might have seen a LinkedIn ad, then read a blog post, then clicked a retargeting ad, then converted via a Google search — which touchpoint "caused" the conversion? Different attribution models answer this differently, and each answer implies a different budget allocation decision. There is no universally correct model — only models that are more or less appropriate for your sales cycle, data volume, and strategic question.

## When to use

Attribution analysis matters when:
- You're running multiple marketing channels simultaneously and need to allocate budget
- Leadership asks "what's actually driving signups/revenue?"
- CAC calculations differ wildly by channel and you need to understand why
- You're evaluating whether to scale or cut a channel

**Less critical when:** you have a single acquisition channel, very low conversion volume (<100/month), or purely organic/viral growth with no paid channels.

## Core components / steps

### The Six Main Models

**First-Touch Attribution**
All credit goes to the first touchpoint — the interaction that introduced the user to you.
- Best for: measuring brand awareness, top-of-funnel channel effectiveness
- Strategic question: "What's introducing us to new customers?"
- Misleads when: the first touch was months ago and many nurture steps drove the conversion
- Example: user found you via a podcast mention → signed up 3 weeks later via direct. First-touch credits the podcast.

**Last-Touch Attribution**
All credit goes to the final touchpoint before conversion.
- Best for: short sales cycles (e-commerce, impulse decisions), measuring bottom-of-funnel
- Strategic question: "What's closing deals?"
- Misleads when: the closing touchpoint is a branded search that would have happened anyway — you're crediting Google for work SEO/content/ads already did
- Default model in most tools (Google Analytics, Mixpanel) — overuse is common

**Linear Attribution**
Credit distributed equally across all touchpoints.
- Best for: acknowledging that every interaction mattered; avoiding over-crediting one channel
- Strategic question: "Which channels are consistently present across my customer journeys?"
- Misleads when: all touchpoints are not equally important (a casual impression vs. a demo request)

**Time-Decay Attribution**
More credit to interactions closer to conversion; earlier touches get less.
- Best for: longer sales cycles where recency signals momentum; SaaS with multi-week evaluation
- Strategic question: "What's building momentum toward conversion?"
- Misleads when: the early-stage education (a blog post, a webinar) actually drove the decision but happened 6 weeks before conversion

**Position-Based (U-Shaped) Attribution**
40% to first touch, 40% to last touch, 20% distributed across middle touches.
- Best for: valuing both acquisition and closing while acknowledging the middle exists
- Strategic question: "What starts and closes journeys?"
- Misleads when: middle-funnel nurture (case studies, demos) is actually the most important stage

**Data-Driven Attribution**
Uses machine learning to assign credit based on actual observed conversion patterns across paths.
- Best for: high-volume teams (600+ conversions/month) with clean data infrastructure
- Strategic question: "What actually caused each conversion based on our real data?"
- Requires: significant data volume; models are unreliable below ~600 monthly conversions
- Misleads when: data is messy, tracking is inconsistent, or the model is a black box you can't interrogate

### Choosing the Right Model

| Sales cycle | Recommended model |
|---|---|
| Under 7 days (e-commerce) | Last-touch is often sufficient |
| 2-8 weeks (SMB SaaS) | Time-decay or position-based |
| 3-12 months (enterprise B2B) | Multi-touch (linear or position-based) |

| Conversion volume | Recommended model |
|---|---|
| < 100/month | Rules-based (any of first 5) |
| 100-600/month | Position-based or time-decay |
| > 600/month | Data-driven becomes reliable |

| Strategic question | Use this model |
|---|---|
| Where should I find new customers? | First-touch |
| What closes sales? | Last-touch |
| How does my whole funnel work? | Multi-touch (linear/position) |

### Multi-Touch Attribution Challenges

Multi-touch attribution is theoretically correct but practically hard:
- **Cross-device problem**: user saw ad on mobile, converted on desktop — same person?
- **Offline touchpoints**: a sales call, a conference — how do you attribute?
- **View-through vs click-through**: user saw an ad but didn't click (view-through); 7 days later converted. Does the ad get credit?
- **Walled gardens**: Facebook, TikTok, Google each claim credit in their own dashboards — double-counting is endemic
- **Privacy changes**: iOS 14.5+, cookie deprecation, and Signal Loss have made click-level tracking much harder since 2021

### UTM Parameters Basics

UTMs (Urchin Tracking Module) are URL parameters that tell your analytics tool which campaign/channel/medium sent the traffic:

```
https://yourproduct.com?utm_source=linkedin&utm_medium=paid&utm_campaign=pm-audience-q2
```

- `utm_source`: the platform (linkedin, google, newsletter)
- `utm_medium`: the channel type (paid, organic, email, social)
- `utm_campaign`: the specific campaign name
- `utm_content`: the specific ad or link variant (for A/B testing)

Without consistent UTM tagging, no attribution model works — you're just analyzing "(direct)" traffic.

## Key questions to ask

- What strategic question are we trying to answer with attribution? (Awareness vs closing vs full funnel?)
- How long is our average sales cycle? (This determines model choice.)
- How many conversions per month? (Determines if data-driven is viable.)
- Are our UTM parameters consistently applied across all channels?
- Are we comparing channels using the same attribution model, or each channel's self-reported numbers?

## Common mistakes

- **Using last-touch by default for everything** — credits retargeting ads for work content/SEO did
- **Trusting each channel's own attribution dashboard** — Facebook claims credit for 80% of conversions while Google claims 80% too; they're not deduplicating
- **Applying data-driven attribution with <100 monthly conversions** — model learns nothing, results are noise
- **Ignoring view-through attribution entirely** — brand ads and display do generate awareness even without clicks
- **Inconsistent UTM tagging** — some links tagged, some not — corrupts all analysis

## Quick reference

```
First-Touch   → all credit to first interaction   (awareness question)
Last-Touch    → all credit to last interaction     (closing question)
Linear        → equal credit to all touchpoints    (full funnel question)
Time-Decay    → more credit to recent touches      (momentum question)
Position-Based→ 40/40/20 first/last/middle         (balance question)
Data-Driven   → ML-based, requires 600+ conv/mo    (statistical question)

Biggest trap: last-touch by default → over-credits retargeting, under-credits content/SEO
```

## Sources

- [Marketing Attribution Models — Marketing with Dave](https://marketingwithdave.com/marketing-attribution-models-explained-first-touch-last-touch-linear-time-decay-position-based-and-data-driven/) [CITED]
- [Attribution Models — Adobe Business](https://business.adobe.com/blog/basics/marketing-attribution) [CITED]
- [Multi-Touch Attribution — MCP Analytics](https://mcpanalytics.ai/articles/marketing-attribution-models-compared) [CITED]
- [First Touch vs Last Touch B2B — Factors.ai](https://www.factors.ai/blog/first-touch-vs-last-touch-attribution) [CITED]
