# HEART Framework

## What it is

HEART is a user-centered metrics framework developed at Google by Kerry Rodden, Hilary Hutchinson, and Xin Fu (published 2010). It organizes product metrics into five dimensions: **Happiness, Engagement, Adoption, Retention, Task Success**. The companion process — **GSM (Goals-Signals-Metrics)** — is how you operationalize each dimension for your specific product. HEART is designed to measure quality of user experience at product scale, where traditional usability testing can't keep up.

You don't measure all five dimensions always — you pick the ones that matter for your current product challenge.

## When to use

- You're launching a new feature and need to define what success looks like before launch
- Current metrics are all about business outcomes (revenue, MAU) but ignore user experience quality
- You need to align multiple teams (PM, Design, Eng) on what "improving the product" means
- Post-launch: "the feature shipped — is it actually good?" without sitting next to users

**Less useful:** pure B2B enterprise products with very few users (sample size too small for some dimensions), one-time transactional products where retention isn't meaningful.

## Core components / steps

### The Five Dimensions

**H — Happiness**
How users feel about the product. Attitudinal, survey-based.
- Signals: satisfaction ratings, NPS, customer effort score
- Metrics: CSAT score (e.g., post-task survey), NPS trend, star ratings in app stores
- Caution: self-reported; complement with behavioral data

**E — Engagement**
Frequency, intensity, and depth of user interaction.
- Signals: returning to the app, using core features repeatedly, session length
- Metrics: DAU/WAU/MAU ratio, sessions per user per week, features used per session
- Note: engagement ≠ good; addictive dark patterns drive engagement. Tie to positive outcomes.

**A — Adoption**
New users starting to use a product, or existing users starting to use a new feature.
- Signals: signing up, completing onboarding, using a new feature for the first time
- Metrics: signup conversion rate, feature adoption rate (% of eligible users who used it), time to first key action

**R — Retention**
Users returning over time. The "opposite of churn."
- Signals: returning after 1 day, 7 days, 30 days; not canceling subscription
- Metrics: Day-7 retention, Day-30 retention, monthly churn rate, renewal rate
- Note: retention is the hardest dimension to move and the most important long-term signal

**T — Task Success**
Whether users can accomplish what they came to do. Behavioral, efficiency-focused.
- Signals: completing a flow, not hitting errors, not needing help
- Metrics: task completion rate, time-on-task, error rate, abandonment rate

### GSM: Goals-Signals-Metrics Process

For each HEART dimension you care about:

**Step 1 — Goal:** What does success look like in this dimension for your product? State it in user terms.
Example: "Users find it easy to onboard without needing support."

**Step 2 — Signal:** What user behavior would indicate you're achieving that goal? Signals must be observable.
Example: "Users complete onboarding without contacting support, and return on Day 3."

**Step 3 — Metric:** How do you quantify the signal? Must be measurable at scale.
Example: "% of new users who complete all onboarding steps AND log in again within 72 hours."

### Choosing Which Dimensions Matter

Not every product needs all five. Ask:
- Is this a new product? → Focus on **Adoption** and **Task Success**
- Is this a mature product fighting churn? → Focus on **Retention** and **Happiness**
- Is this a core engagement loop feature? → Focus on **Engagement** and **Task Success**
- Running a design experiment? → Focus on **Task Success** and **Happiness**

### Example GSM Table

| Dimension | Goal | Signal | Metric |
|---|---|---|---|
| Adoption | New users try the search feature | User runs at least one search in first session | % of new users who run a search on Day 1 |
| Retention | Users return weekly | Users log in more than once per week | WAU/MAU ratio |
| Task Success | Users find what they're looking for | Search returns relevant result, user clicks | Search success rate (click-through on result) |
| Happiness | Users feel confident using the product | Positive survey response after key task | CSAT after onboarding flow (target: >4.2/5) |

## Key questions to ask

- Which of the five dimensions is currently our biggest problem?
- Have we defined metrics before launch, or are we creating them post-hoc?
- Is our "engagement" metric tied to a user goal, or just time-in-app?
- Do we have the data infrastructure to measure the metrics we defined?
- Are we measuring adoption of the feature, or adoption of the value the feature creates?

## Common mistakes

- **Measuring all five dimensions for every project** — creates metric overload; pick 2-3
- **Using happiness as the only UX metric** — survey data lags behind behavior and is gameable
- **Confusing engagement with health** — a user rage-clicking is highly "engaged"
- **Defining metrics post-launch** — you lose the baseline; define before shipping
- **Signals that aren't observable** — "users feel confident" is a goal, not a signal
- **Treating HEART as a dashboard** — it's a design process for choosing metrics, not a static report

## Quick reference

```
H — Happiness    → CSAT, NPS, sentiment surveys
E — Engagement   → DAU/MAU, sessions/user, feature depth
A — Adoption     → New user activation, feature penetration %
R — Retention    → Day-7/30 return, churn rate, renewal rate
T — Task Success → Completion rate, error rate, time-on-task

GSM: Goal → Signal → Metric (for each dimension you pick)
```

**Rule of thumb:** Pick 2-3 dimensions per initiative. Define GSM before launch. Revisit after 4-6 weeks with real data.

## Sources

- [HEART Framework — heartframework.com](https://www.heartframework.com/) [CITED]
- [Google's HEART Framework — UX Collective](https://uxdesign.cc/googles-heart-framework-choosing-the-right-metrics-for-your-product-112bd7300d55) [CITED]
- [GSM Process — Userpilot](https://userpilot.com/blog/goals-signals-metrics/) [CITED]
- [HEART Framework — ProductPlan](https://www.productplan.com/glossary/heart-framework) [CITED]
- [Google HEART Framework — Userpilot](https://userpilot.com/blog/google-heart-framework/) [CITED]

[[pm-knowledge-base]]
