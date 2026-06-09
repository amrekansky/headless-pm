# Product Metrics Taxonomy

## What it is
A complete reference for product metrics — formulas, benchmarks by category, and red-flag thresholds. Covers the full AARRR funnel plus revenue health, referral, and product engagement signals.

## When PMs use this
- Setting OKRs: pick the right metric for the outcome you're driving
- Diagnosing problems: compare your numbers to industry benchmarks
- Presenting to stakeholders: know what "good" looks like before you walk in
- Post-launch reviews: determine if a feature moved the needle

---

## Acquisition

**CAC (Customer Acquisition Cost)**
> Total sales + marketing spend / number of new customers acquired in the same period

Ranges by channel (B2B SaaS, 2024–2025):

| Channel | Typical CAC | Notes |
|---|---|---|
| Organic / SEO | $290–$940 | Drops over time; high upfront |
| Paid Search (Google) | $800–$1,200 | Immediate, scalable but expensive |
| Content / Inbound | $650–$1,800 | Broad range by quality |
| Referral / Word of mouth | $100–$300 | Lowest CAC; hard to scale |
| Outbound (SDR) | $1,500–$2,500+ | High touch; justified for ACV $20K+ |
| Events / Trade shows | CPL $400–$800; total CAC higher | Brand value often justifies |

**CPL (Cost per Lead):** Total spend / leads generated. Ranges: content $35–80, paid social $50–120, events $400–800.

**CPI (Cost per Install):** Mobile. Good: <$1.50 casual games, <$3 utilities/productivity, <$5 fintech.

**CPA (Cost per Action / Acquisition):** Spend / conversions to a defined action (free trial, signup, purchase).

**Red flags:**
- CAC > LTV/3 — you're losing money on every customer
- CAC payback period >24 months — cash-flow danger for startups

---

## Activation

**Activation Rate**
> Users who complete the "aha moment" action / total new users in the same cohort

Benchmarks (2024):

| Segment | Decent | Average | Excellent |
|---|---|---|---|
| B2B SaaS (PLG) | 15% | 25–30% | 40%+ |
| B2B SaaS (sales-led) | 25% | 35–42% | 50%+ |
| Consumer app | 20% | 30–40% | 55%+ |
| AI/ML tools | 30% | 45% | 55%+ |
| Fintech | 5% | 10–15% | 25%+ |

**Time-to-Value (TTV):** Time from signup to first meaningful outcome.
- Consumer / PLG: target <24h; Amplitude data shows 69% of products with strong D7 activation also have strong 3-month retention.
- B2B: top performers deliver first value within 7 days; enterprise acceptable up to 30 days.
- Average across all SaaS: ~1.5 days (Userpilot 2024 benchmark report).

**Aha moment signal:** Users who hit the core action within their first 3 days convert at ~4x the rate of those who don't.

**Common mistake:** Defining activation as "email confirmed" instead of "first value delivered." Activation should be the earliest leading indicator of retention.

---

## Retention

### Day-N Retention (bracket / classic method)
> Users who return on exactly day N / users who installed on day 0

**a16z social app benchmarks:**

| Tier | D1 | D7 | D30 |
|---|---|---|---|
| OK | 50% | 35% | 20% |
| Good | 60% | 40% | 25% |
| Great | 70% | 50% | 30% |

**By category (mobile, 2024 data):**

| Category | D1 | D7 | D30 | D90 |
|---|---|---|---|---|
| Social / Messaging | 25–29% | 9–10% | 5% | 2–3% |
| Gaming (casual) | 26–28% | 8% | 2–3% | <1% |
| Gaming (top performers) | 45%+ | 20%+ | 10%+ | — |
| Fintech | 22–30% | 17–18% | 11–12% | 5–8% |
| Productivity | 35–40% | 20–25% | 12–15% | 6–10% |
| B2B SaaS (3-month equiv.) | top 10%: 15.6% | — | median: 2.5% | — |

**Amplitude industry benchmarks (3-month retention, all products):**

| Percentile | B2B Tech | Ecommerce | Financial Services |
|---|---|---|---|
| Median (50th) | 2.5% | 2.8% | — |
| Top 25% (75th) | ~8% | ~7% | ~9% |
| Top 10% (90th) | 15.6% | 18.9% | 19.5% |

The "7% rule": reaching 7% D7 retention puts a product in the top 25% across all categories (Amplitude).

### Rolling Retention vs Bracket Retention
- **Bracket (classic):** User must return on *exactly* day N. Strict; used for mobile apps.
- **Rolling (unbounded):** User returned on day N *or any day after*. Always >= bracket. Preferred for B2B where usage isn't daily.
- **L28 (Last 28 days):** Count of users active in any of the last 28 days. Smooths weekly/monthly cycles. Standard for consumer apps with irregular usage.

Use bracket for mobile benchmarking. Use rolling for understanding "is the user still alive?" in SaaS.

---

## Engagement

**DAU / MAU (Sticky Factor)**
> Daily active users / monthly active users × 100%

Benchmarks:

| Category | Average | Good | World-class |
|---|---|---|---|
| Social / Messaging | 40–50% | 55% | 65%+ (WhatsApp, Snapchat) |
| Media / Gaming | 20–35% | 40% | 50%+ |
| B2B SaaS (daily-use) | 25–35% | 40% | 50%+ (Slack, Figma) |
| B2B SaaS (workflow) | 10–20% | 25–30% | 40%+ |
| Utilities | 10–15% | 20% | 30%+ |
| All industries avg (Mixpanel 2024) | 37% | — | — |

**Session Length:** Varies massively by category. Productivity tools: 15–45 min. Social: 8–25 min. Gaming: 25–60 min. Fintech: 3–8 min (task-completion, short is fine).

**Session Frequency:** Daily-use tools (Slack, Notion): 5+ sessions/day. B2B workflow tools: 2–5 days/week. Consumer subscription: 3–8x/week.

**Red flag:** DAU/MAU below 10% in a "daily tool" category suggests the product isn't habit-forming. Below 5% signals churn risk.

---

## Revenue

**MRR / ARR Waterfall (movement accounting):**

```
MRR (end) = MRR (start)
           + New MRR         (new customers)
           + Expansion MRR   (upgrades, seat growth, upsells)
           - Contraction MRR (downgrades)
           - Churn MRR       (cancellations)
```

Every MRR change should be attributed to one of these four buckets. This is your revenue growth equation.

**Net Revenue Retention (NRR / NDR):**
> (MRR start + expansion - contraction - churn) / MRR start × 100%

Benchmarks (Lenny Rachitsky / a16z):

| Segment | OK | Good | Great |
|---|---|---|---|
| Consumer SaaS | 55% | 80% | 90%+ |
| PLG / Bottom-Up SaaS | 100% | 110% | 120%+ |
| SMB / Mid-Market | 90% | 100% | 110%+ |
| Enterprise | 110% | 120% | 130%+ |

NRR >100% = expansion revenue more than offsets churn. You grow even with zero new sales.

**ARPU (Average Revenue per User):**
> MRR / total paying users

Useful for cohort segmentation: ARPU rising = better customers coming in or upsell working. ARPU falling = downmarket drift or discounting.

**ACV (Annual Contract Value):**
> Total contract value / contract length in years

Typical ranges: SMB SaaS $1K–$10K, Mid-Market $10K–$100K, Enterprise $100K–$1M+.

**LTV (Customer Lifetime Value):**
> Simple: ARPU / monthly churn rate
> With margin: (ARPU × gross margin %) / monthly churn rate

LTV benchmarks (B2B SaaS by segment):
- SMB: $15K–$40K
- Mid-Market: $50K–$200K
- Enterprise: $300K–$1M+

**LTV:CAC ratio:**
- <1:1 — you're destroying value
- 1:1–3:1 — marginal, review unit economics
- 3:1 — standard healthy benchmark
- 5:1+ — strong efficiency; may be under-investing in growth
- 3:1–4:1 is the Goldilocks zone for most B2B SaaS

**CAC Payback Period:**
> CAC / (ARPU × gross margin %)

Targets: SMB <12 months, Mid-Market <18 months, Enterprise <24 months.

---

## Referral

**Viral Coefficient (K-factor):**
> K = (invites sent per user) × (invite conversion rate)

- K > 1 = viral growth (each user brings >1 new user)
- K = 0.7–0.9 = strong viral assist
- K = 0.4 = great for a consumer app
- K = 0.15–0.25 = good; typical for most products with a referral mechanic
- K < 0.1 = not meaningfully viral; acquisition is primarily direct

Viral cycle: consumer apps ~7–14 days per cycle; B2B SaaS ~8–12 weeks.

**NPS as growth predictor:**
> (Promoters % - Detractors %) × 100

Benchmarks (2024):

| Segment | Below average | Average | Good | Excellent |
|---|---|---|---|---|
| B2B SaaS | <20 | 30–40 | 40–50 | 50+ |
| Consumer software | <25 | 35–45 | 50–60 | 70+ |
| B2B overall | <25 | 39–45 | 50–60 | 65+ |

NPS >50 correlates with word-of-mouth referrals being a meaningful acquisition channel. NPS is a lagging indicator — measure it per cohort, not just as a company average.

---

## Product Health

**Feature Adoption Rate:**
> Users who used the feature at least once / total eligible users × 100%

Benchmarks (Userpilot 2024, 181 SaaS companies):
- Average: 24.5%
- Good: 28%+
- HR tools: 31%; FinTech: 22.6%
- New feature, first 30 days: 20–30% is healthy for B2B SaaS

**Breadth of Use:**
> Number of core features used regularly / total core features in the product

B2B products with 80%+ feature adoption across 3 core functions retain customers at 3.2× the rate of single-feature users (a16z data). Used in QBRs to identify churn risk: accounts using only 1 feature are early churn signals.

**Seats Utilization (B2B):**
> Active seats / provisioned seats × 100%

- <40% — account at churn risk; buyer losing value narrative
- 40–70% — watch list
- 70–85% — healthy; expansion conversation is natural
- 85%+ — expansion signal; propose additional seats proactively

Low utilization is the #1 leading indicator of B2B churn. Check it 60–90 days before renewal.

---

## Quick Reference Table

| Metric | Formula | Good Benchmark | Red Flag |
|---|---|---|---|
| CAC | Sales+Mktg spend / new customers | Channel-dependent (see above) | >LTV/3 |
| LTV:CAC | LTV / CAC | 3:1–5:1 | <1:1 |
| CAC Payback | CAC / (ARPU × GM%) | <12m SMB, <18m MM | >24m |
| Activation Rate | Aha! users / new users | 25–30% B2B, 35–40% consumer | <10% |
| D7 Retention | Return on D7 / D0 installs | 20%+ (social), 8%+ (gaming) | <5% any category |
| D30 Retention | Return on D30 / D0 installs | 25%+ (social), 10%+ (B2B) | <3% |
| NRR | (MRR±changes) / start MRR | 100%+ (B2B), 120%+ (enterprise) | <80% |
| DAU/MAU | DAU / MAU | 25%+ (B2B daily), 50%+ (social) | <10% |
| K-Factor | Invites/user × conv. rate | >0.4 great, >0.15 good | <0.05 |
| NPS | Promoters% − Detractors% | 40+ (B2B SaaS) | <0 |
| Feature Adoption | Feature users / eligible users | 25–30% | <15% |
| Seats Utilization | Active / provisioned seats | 70–85% | <40% |

---

## Common Mistakes

- **Measuring DAU/MAU for a weekly-use tool:** Use WAU/MAU instead. Match cadence to expected usage pattern.
- **One aggregate retention number:** Always segment by cohort (acquisition channel, plan type, company size). Averages hide the signal.
- **Confusing bracket and rolling retention:** Comparing your rolling numbers to published bracket benchmarks inflates apparent performance.
- **Treating NRR as the only revenue health metric:** NRR can look fine while new logo acquisition collapses. Watch all four MRR waterfall buckets.
- **Setting activation on completion of signup:** Activation must be tied to a value moment, not an administrative step.

---

## Sources

- [Lenny Rachitsky — What is good retention](https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29)
- [a16z — Do You Have Lightning In a Bottle? Social App Benchmarks](https://a16z.com/do-you-have-lightning-in-a-bottle-how-to-benchmark-your-social-app/)
- [Amplitude — B2B Technology Product Benchmarks](https://amplitude.com/blog/b2b-technology-product-benchmarks)
- [Amplitude — The 7% Retention Rule](https://amplitude.com/blog/7-percent-retention-rule)
- [Amplitude — Product Benchmarks (interactive)](https://amplitude.com/benchmarks)
- [Mixpanel — 2024 Benchmarks Report](https://mixpanel.com/blog/2024-mixpanel-benchmarks-report/)
- [Userpilot — User Activation Rate Benchmark Report 2024](https://userpilot.com/blog/user-activation-rate-benchmark-report-2024/)
- [Userpilot — Core Feature Adoption Rate Benchmark 2024](https://userpilot.com/blog/core-feature-adoption-rate-benchmark-report-2024/)
- [First Page Sage — CAC by Channel](https://firstpagesage.com/marketing/cac-by-channel-fc/)
- [NPS Benchmarks 2024 — Survicate](https://survicate.com/nps-benchmarks/)

## Related

- [[aarrr-pirate-metrics]]
- [[north-star-metric]]
- [[b2b-saas-metrics]]
- [[unit-economics]]
- [[heart-framework]]
