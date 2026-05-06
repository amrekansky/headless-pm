# Customer Success ↔ PM Collaboration

## What it is

Customer Success (CS) and Product Management are the two functions closest to customer reality — but they operate on different timescales and own different outcomes. CS owns the customer relationship and near-term revenue health; PM owns the product and long-term platform capability. When this boundary is unclear, roadmap decisions get made on the loudest customer complaint rather than the highest-leverage product investment. When the collaboration works, CS becomes a systematic intelligence source that makes PM decisions more accurate and faster.

## When to use

This model applies whenever:
- Your SaaS product has a CS or account management function (typically at $20K+ ACV)
- Expansion revenue (upsell, cross-sell) is a meaningful growth driver
- You are running quarterly business reviews (QBRs) or executive reviews with customers
- Churn rate is a key metric and you want leading indicators, not lagging ones

## Core components / steps

### Ownership Boundary

| Domain | Owner | Handoff |
|--------|-------|---------|
| Product capability and roadmap | PM | PM briefs CS on what is coming and why |
| Customer relationship and renewal | CS | CS briefs PM on what customers are saying and needing |
| Bug priority (customer-impacting) | Engineering via PM | CS escalates, PM triages and sets priority |
| Feature request intake | PM decides | CS submits with customer context, PM evaluates vs strategy |
| Expansion play definition | PM (what product enables) + CS (when to offer it) | PM defines tiers, CS identifies readiness signals |
| Health score inputs | Shared | PM defines which product signals matter; CS adds relationship signals |

The key principle: CS should never be designing product strategy, and PM should never be managing customer relationships. The boundary prevents both "roadmap by loudest customer" and "PM ignoring real customer pain."

### Expansion Revenue Signals PMs Should Track

Expansion is cheaper than new acquisition (expansion CAC is approximately $1.00 vs $1.76 for new customers in B2B SaaS). PMs should instrument these product-side expansion signals:

**Usage ceiling signals:**
- Users hitting plan limits (seats, API calls, storage, exports)
- Power users active daily while basic users are inactive — segmentation opportunity
- Feature adoption reaching saturation on current tier

**Workflow expansion signals:**
- Users exporting data to tools that could be integrated
- Users asking CS about a feature that exists only in higher tier
- New team members being added (team growth = natural expansion trigger)

**Engagement quality signals:**
- Users completing advanced tutorials or certification
- Users attending webinars or requesting advanced training
- Support tickets that are "how do I do X advanced thing" rather than "it's broken"

### Churn Prediction Signals

Churn is almost always visible in product data before the renewal conversation. PMs should define and surface these signals:

**Early warning (3–6 months before renewal):**
- Login frequency drop > 30% over 60 days
- Feature adoption reversal (was using 5 features, now using 2)
- Single user account (sponsor left, no adoption by the rest of the team)
- No new users added in 90+ days on a team plan

**Late warning (30–90 days before renewal):**
- Support tickets with negative sentiment
- Data export requests (customer is preparing to leave)
- RFP/vendor evaluation language in support tickets
- Declining monthly active users with no corresponding business explanation

CS should own the intervention; PM should own building the detection.

### QBR Insights Feeding the Roadmap

Quarterly Business Reviews generate structured customer intelligence that PMs rarely access. Build a systematic intake:

1. **CS submits QBR prep doc to PM 1 week before** — includes: what customer is trying to achieve this quarter, gaps they named, competitor mentions
2. **PM attends one QBR per quarter per segment** — observe directly, not filtered through CS
3. **Post-QBR debrief** — 30-minute sync: what surprised CS, what would have changed the conversation if the product had done X
4. **Pattern aggregation** — monthly PM review of all QBR debriefs to find cross-customer patterns vs one-off requests

### Health Score Design

A customer health score predicts renewal probability. PMs define the product-side inputs:

| Input category | Example signals | Weight |
|----------------|-----------------|--------|
| Adoption depth | Features used / features available | High |
| Engagement frequency | DAU/MAU for the account | High |
| Usage trend | 90-day trend, not just point-in-time | High |
| Outcomes achieved | Customer-defined goals completed | Very high |
| Support burden | Ticket volume, severity, unresolved | Medium |

Gainsight, Totango, ChurnZero, and Planhat are the standard health score platforms. PM should define what counts as "healthy" product usage; CS adds relationship layer.

## Key questions to ask

- Is our roadmap disproportionately influenced by a small number of large, vocal customers?
- Do we have a systematic way to distinguish "one customer's request" from "signal from multiple customers"?
- What product-side signals predict churn 90 days out? Are we measuring them?
- When did CS last surface a problem that changed a roadmap decision?
- What does expansion look like in product terms, and are we surfacing in-product prompts at the right moment?

## Common mistakes

**PM treating CS as a proxy customer.** CS interprets and filters customer feedback. PMs need direct customer access (continuous discovery) alongside CS channels.

**Letting CS own the roadmap via escalation.** CS escalations tend to represent your largest or loudest accounts, not your median or ideal customer. A systematic intake process prevents this.

**No product instrumentation for health.** If health score is based only on CS sentiment ("my gut says this account is at risk"), it is too late and too slow.

**CS and PM not having a regular structured sync.** Without rhythm, collaboration happens only in crises. Monthly syncs prevent this.

**Conflating "feature request" with "outcome need."** A customer asking for a Gantt chart view needs better project visibility. PM's job is to solve the outcome, not to build the requested feature.

## Quick reference

**CS → PM pipeline (what CS should deliver regularly):**
- Feature requests with customer count and ARR at stake
- Churn post-mortems: what product gap contributed?
- Expansion blocked by product gap
- Verbatim customer quotes organized by theme

**PM → CS pipeline (what PM should deliver regularly):**
- Upcoming releases with CS talking points
- Known limitations and workarounds for common requests
- Which feature requests are on roadmap, which are not and why
- Health score signal definitions (what product usage means what)

## Sources

- [Gainsight: Expansion Signals](https://www.gainsight.com/blog/unlocking-expansion-are-you-spotting-the-signals-that-customers-are-ready-to-grow/)
- [ChurnZero: 2024 Customer Success Leadership Study](https://churnzero.com/blog/2024-customer-success-leadership-study-key-findings/)
- [Customer Success Collective: Top Predictions 2024](https://www.customersuccesscollective.com/top-customer-success-predictions/)
- [Custify: Customer Success Market Statistics 2026](https://www.custify.com/blog/customer-success-statistics/)
