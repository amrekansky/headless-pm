# PM Research Tools

## What it is
A practical map of which research tool answers which question — with free tier limits, accuracy caveats, and the fastest path to the insight you actually need.

## When PMs use this
- Competitive analysis: sizing a market, understanding a rival's traction
- Roadmap validation: do users hate this competitor feature?
- Market entry: which category is growing, who owns it
- Discovery: what are users complaining about that nobody is building

---

## Traffic and SEO

### Similarweb

**What it answers:** How much traffic does a competitor get? Where does it come from? What channels drive their growth?

**Key data points:**
- Monthly visits (estimated)
- Traffic sources: direct, search (organic vs paid), referral, social, email, display
- Geography breakdown
- Time on site, pages per visit, bounce rate
- Top referring domains and destinations
- Cross-app usage (after acquiring 42matters in 2024 — now covers 3M+ apps, 2,800+ SDKs)

**Can't answer:**
- Conversion rates (you see visits, not signups)
- Revenue or ARR
- Internal product engagement (DAU, retention)

**Free vs paid:** Free tier gives rough monthly visit estimates and traffic source breakdown for large sites. Paid unlocks historical data, keyword breakdown, audience demographics, and API access. Enterprise pricing, no public rate card.

**Fastest path to insight:** Go to a competitor's domain → Traffic Overview → "Traffic Sources" tab. Compare organic vs paid ratio — a site spending heavily on paid search but weak in organic is vulnerable to content plays. Check "Top Keywords" to see what they're buying.

**Accuracy caveat:** Estimates for sites under 50K monthly visits are unreliable. Directionally useful for mid-to-large sites.

---

### SEMrush / Ahrefs

**What it answers:** What keywords drive organic traffic? What is the competitor's content strategy? Who links to them?

**SEMrush strengths:** Keyword gap analysis (keywords they rank for, you don't), PPC competitor ad copy and spend estimates, backlink audit.

**Ahrefs strengths:** More accurate backlink index, content gap analysis, DR (Domain Rating) as proxy for SEO authority.

**Can't answer:** App store performance, social engagement, internal product data.

**Free vs paid:** SEMrush free gives 10 searches/day with limited data. Ahrefs has no free tier for the full tool (Ahrefs Webmaster Tools is free for your own site only). Both require paid plans ($99–$250/month) for serious competitive research.

**Fastest path to insight (SEMrush):** Competitor domain → "Organic Research" → "Top Pages." Tells you which pages drive the most traffic and which keywords they're targeting. Combine with "Keyword Gap" against your own domain to find uncontested opportunities.

---

## Mobile Apps

### Sensor Tower

**What it answers:** How many downloads is a competitor's app getting? What's their estimated revenue? How do they rank in category charts? What keywords drive their ASO?

**Key data points:**
- Download and revenue estimates (iOS + Android) by country, by period
- Category ranking history
- ASO keyword rankings and suggested keywords
- Ad intelligence (which creatives are running, where)
- SDK/tech stack detection

**Accuracy:** Estimates for top apps typically fall within ±10–30% of true values. Over-estimates revenue; downloads are closer to actual. More reliable for apps with millions of downloads; high error for niche apps. Since acquiring data.ai in 2024, the combined panel has improved.

**Can't answer:** Engagement metrics (session length, DAU), exact revenue, retention.

**Free vs paid:** Essentially enterprise-only. Limited free exploration via sensortower.com but meaningful competitive data requires a paid plan. No public pricing; enterprise quotes.

**Fastest path to insight:** Search competitor app → "Downloads" tab → set to monthly, last 12 months, by country. See growth trajectory. Then "Keywords" tab to find which app store search terms they're winning.

---

### data.ai (App Annie) — now part of Sensor Tower

**Note:** data.ai was acquired by Sensor Tower in March 2024. The two platforms are being merged. Legacy data.ai accounts and the separate enterprise product still exist but the roadmap points to full consolidation.

**What it answered:** MAU/DAU estimates, category engagement benchmarks, consumer intelligence (cross-app usage panels).

**Current status:** If you have an existing data.ai contract, it continues. For new research, evaluate Sensor Tower as the combined platform.

---

### AppFollow

**What it answers:** What are users saying about competitor apps in reviews? What features do they love/hate? How is sentiment trending over time?

**Key capabilities:**
- Aggregates reviews from App Store and Google Play (20 languages)
- AI semantic tags: automatically categorizes reviews into themes (bugs, UX, specific features)
- Sentiment trend chart over time
- Competitor review monitoring: track rating and review volume changes
- Auto-tags and anomaly detection (sudden spike in negative reviews = something broke)
- Integrations with Slack, Jira, Zendesk for routing feedback

**Can't answer:** Downloads, revenue, traffic, rankings.

**Free vs paid:** Free plan covers 1 app with limited review volume. Paid plans from ~$23/month. Competitive monitoring requires paid tier.

**Fastest path to insight:** Add a competitor's app → "Semantic Analysis" → filter by "Negative" sentiment → sort by volume. The most common complaint clusters are your positioning opportunities. Export the top 10 themes for a battlecard.

---

## Reviews and Sentiment

### G2 / Capterra

**What it answers:** What do users of a B2B competitor actually think of specific features? What are the most common switching reasons? Where is the product weak?

**G2 strengths:**
- 2.5M+ reviews (early 2026), structured "Pros / Cons / Switching reasons" fields
- Filter by company size, industry, market segment
- Comparison grid: satisfaction scores by feature category
- G2 acquired Capterra from Gartner in 2025 — consolidating the two largest B2B review platforms

**Capterra strengths (legacy):** Stronger SMB coverage, longer-tail software categories.

**Methodology for competitive mining:**
1. Go to competitor's G2 page → filter to your target segment (e.g., Mid-Market, 50–500 employees)
2. Sort by "Most Recent" and read the "What do you dislike?" field systematically
3. Cluster into 5–8 recurring themes (onboarding, pricing model, missing integrations, support, performance)
4. Minimum 50 reviews for reliable patterns; below that, individual outliers distort
5. Cross-check against your win/loss interviews — G2 confirms or contradicts what sales hears

**Can't answer:** Traffic, downloads, revenue, engagement data.

**Free vs paid:** Reading competitor reviews is free. Claiming and managing your own listing + accessing buyer intent data (who is researching you) requires paid plans.

---

### Reddit

**What it answers:** Unfiltered, unprompted user opinions — complaints that people wouldn't leave in a formal review.

**When to use:** Early discovery research. Find the subreddits where your ICP hangs out (r/productmanagement, r/[industry], r/[competitor-name]) and search for the competitor or problem space.

**Fastest path:** site:reddit.com "[competitor name]" problems OR alternatives — run this in Google. Reddit posts rank well and the comment threads contain unfiltered pain points. Also search [category] + "looking for alternative" on Reddit directly.

**Can't answer:** Quantitative anything. Sampling bias toward vocal critics.

---

### App Store / Google Play Reviews (Direct)

**What it answers:** Same as G2 but for mobile apps. Most valuable for consumer apps where users leave feedback immediately after a bad experience.

**Pattern to look for:**
- 1-star reviews with specific feature complaints = product gaps
- 5-star reviews mentioning specific features = what users actually value (not what you think they value)
- Sudden rating drop on a specific date = a bad release; check what shipped then
- "Used to be great until [X]" = you can reverse-engineer a competitor regression

Use AppFollow or AppBot to aggregate and analyze at scale. Manual reading of raw reviews is inefficient past 200 reviews.

---

## Companies and Funding

### Crunchbase

**What it answers:** When did a competitor raise money? How much? Who invested? How many employees do they have? What is their growth trajectory?

**Key signals for PMs:**
- Fresh funding = expect a product push or sales expansion in the next 6–12 months
- Headcount growth in Engineering/Product = they're building something
- Headcount decline = cost pressure; they may deprioritize certain areas
- Investors' portfolio = see what else they're funding (market thesis)

**Free vs paid:** Free tier gives basic funding data and employee count. Crunchbase Pro ($29–$49/month) unlocks export, alerts, full contact data, and employment signal trends.

**Fastest path:** Competitor page → "Signals and News" tab → "Funding" tab. Set an alert for new rounds. Cross-reference with LinkedIn Jobs for what they're actually building.

---

### LinkedIn Jobs as Roadmap Signal

**What it answers:** What is a competitor building right now?

**Logic:** Companies hire 2–6 months before a feature ships. Job descriptions reveal technical stack choices, team priorities, and product bets.

**Patterns to decode:**
- 3+ ML Engineer posts = AI feature in development
- "Payment infrastructure engineer" = they're going deeper into fintech
- "Enterprise security / compliance" postings = moving upmarket
- Sudden cluster of a specific role = active project, not just backfill

**Process:**
1. LinkedIn Jobs → search "[company name]" → filter to last 30 days
2. Read job descriptions for product context: what problem are they solving? What tools/stack?
3. Track every 4–6 weeks; note what's new vs what's been open forever (slow hiring = low priority or budget freeze)

**Can't answer:** Timelines, exact features, validation of hypothesis.

---

## User Behavior (Your Own Product)

### Amplitude

**Best for:** Behavioral cohort analysis, cross-funnel experimentation, understanding complex user journeys across multiple products or surfaces.

**Core strengths:**
- Behavioral cohorts: "users who did X but not Y within 7 days" — extremely powerful for activation research
- Experiment (A/B testing) built in and tied to behavioral metrics, not just conversion
- Multi-product tracking: if your company has web + mobile + B2B, Amplitude handles the unified view well
- Chart types: funnels, retention, pathways, sessions, revenue
- Steeper learning curve than Mixpanel; rewards investment

**Free vs paid:** Free tier for up to 10M events/month (generous). Paid plans for advanced governance, experiment, and enterprise features.

**When to use Amplitude:** You want to understand *who* is retaining and *why*, not just aggregate numbers. You run experiments and need behavioral segmentation on the results.

---

### Mixpanel

**Best for:** Real-time event analysis, quick self-service queries, teams where non-analysts need to explore data.

**Core strengths:**
- Fastest time-to-insight for ad-hoc queries: any PM can pull a funnel in 5 minutes
- Strong mobile analytics and push notification performance tracking
- "Flows" (user path analysis) for discovering unexpected usage patterns
- Real-time data — see what's happening now, not yesterday's batch

**Free vs paid:** Free for up to 20M monthly events. Paid for advanced data governance, SSO, custom roles.

**When to use Mixpanel:** You need an answer fast and want to give PMs and designers direct data access without a data analyst intermediary.

---

### Heap

**Best for:** Retroactive analysis — discovering what happened before you thought to track it.

**Core strength — autocapture:** Heap captures every click, tap, form fill, and page view automatically. No instrumentation decisions upfront. This means you can go back in time and analyze behavior from before a specific hypothesis existed.

**Best use case for PMs:** CRO and onboarding optimization. When you suspect something in the funnel is broken but don't know what, Heap lets you investigate retroactively without waiting for a new tracking sprint.

**Trade-off:** Autocapture generates massive volumes of noisy data. Governance discipline is critical at scale — without naming conventions and a data dictionary, Heap dashboards become unusable.

**Free vs paid:** No public free tier for competitive size. Pricing on request.

**When to use Heap:** "We didn't instrument that event and the sprint is closed." Or: "I want to explore what users actually do before dropping off, not just what I hypothesized."

---

## Quick Reference

| Question | Tool | Free? | Speed to Insight |
|---|---|---|---|
| Competitor web traffic | Similarweb | Partial | Fast |
| Competitor SEO keywords | SEMrush / Ahrefs | Limited | Medium |
| App downloads / revenue | Sensor Tower | No | Medium |
| App user sentiment | AppFollow | Partial (1 app) | Fast |
| B2B product reviews | G2 | Yes (reading) | Fast |
| Organic complaints | Reddit search | Yes | Fast |
| Funding + headcount | Crunchbase | Partial | Fast |
| Competitor roadmap signals | LinkedIn Jobs | Yes | Slow (manual) |
| Behavioral cohorts (own product) | Amplitude | Yes (generous) | Medium |
| Real-time event analysis | Mixpanel | Yes (generous) | Fast |
| Retroactive UX analysis | Heap | No | Fast (if already deployed) |

---

## Common Mistakes

- **Treating Sensor Tower revenue estimates as truth:** They're directional signals, not financials. Use for trend analysis and relative comparison, not absolute sizing.
- **Mining G2 without segmenting by company size:** A 10-person startup and a 500-person mid-market company have completely different complaints. Always filter.
- **Using LinkedIn Jobs as confirmation, not discovery:** Don't search for what you expect to find. Scan broadly and let the patterns emerge.
- **Ignoring review velocity:** A competitor with 4.1 stars and 200 reviews in the last 90 days is different from one with 4.1 stars and 8 reviews. Volume signals whether the product is actively in use.
- **Building separate tool workflows per research question:** The best competitive analyses combine 3–4 tools: Similarweb (traffic story) + G2 (user story) + LinkedIn Jobs (roadmap story) + Crunchbase (funding story). Each answers a different dimension of the same question.

---

## Sources

- [a16z — Do You Have Lightning In a Bottle? (social app benchmarks)](https://a16z.com/do-you-have-lightning-in-a-bottle-how-to-benchmark-your-social-app/)
- [Amplitude vs Mixpanel vs Heap comparison — Userpilot](https://userpilot.com/blog/heap-vs-amplitude-vs-mixpanel-for-product-analytics/)
- [Sensor Tower acquires data.ai — TechCrunch, March 2024](https://techcrunch.com/2024/03/18/app-analytics-firm-sensor-tower-acquires-rival-data-ai/)
- [G2 acquires Capterra from Gartner — PR Newswire 2025](https://www.prnewswire.com/news-releases/g2-to-acquire-capterra-software-advice-and-getapp-from-gartner-302673901.htm)
- [AppFollow — Semantic Analysis documentation](https://support.appfollow.io/hc/en-us/articles/360020979818-Semantic-Analysis)
- [G2 + Capterra as competitive intelligence — HireSteve AI, 2026](https://hiresteve.ai/articles/g2-capterra-reviews-competitive-intelligence-2026)
- [Crunchbase employment signals](https://about.crunchbase.com/blog/new-crunchbase-employment-signals)
- [Similarweb competitive intelligence guide](https://www.similarweb.com/blog/marketing/marketing-strategy/competitive-intelligence/)

## Related

- [[user-research-methods]]
- [[data-literacy-for-pms]]
- [[conjoint-analysis]]
- [[win-loss-analysis]]
- [[continuous-discovery]]
