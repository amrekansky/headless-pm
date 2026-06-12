# Data Literacy for PMs

## What it is

The ability to read, interpret, and challenge data without being a data scientist. PMs do not need to build models — they need to know when a number is trustworthy, when an experiment is valid, and when an analyst's conclusion rests on a shaky assumption. Data literacy is the difference between a PM who gets manipulated by dashboards and one who interrogates them.

## When PMs use this

- Evaluating A/B test results before declaring a winner
- Diagnosing why a metric moved after a release
- Requesting the right analysis from a data team
- Identifying whether a funnel drop is real or a tracking bug
- Reading retention cohort tables in weekly metrics reviews

## Core Concepts / Framework

### Cohort Analysis

A cohort is a group of users defined by a shared characteristic at a fixed point in time — typically the week or month they signed up (acquisition cohort) or first performed a key action (behavior cohort).

**Acquisition cohorts** answer: "Are users who joined in January retaining better than users who joined in March?" This tells you whether product improvements or acquisition channel shifts are affecting retention quality over time.

**Behavior cohorts** answer: "Do users who completed onboarding step X have better 30-day retention than those who skipped it?" This identifies activation levers.

Reading a cohort table: rows are cohorts, columns are time periods (Day 1, Day 7, Day 30). Each cell shows what % of that cohort was still active at that period. Diagonal reading (same calendar week across cohorts) separates product effect from seasonality.

**Critical subtlety:** Cohort definition changes the story entirely. Signup date cohorts measure acquisition quality. First-value-action cohorts measure activation. Conflating them produces misleading conclusions.

### Funnel Analysis

A funnel tracks users through a sequential series of steps toward a conversion event (signup → activation → first value → retention → expansion).

Key questions funnels answer:
- Where is the biggest absolute drop? (prioritize by volume)
- Where is the worst conversion rate? (prioritize by efficiency opportunity)
- Is the drop consistent across segments (product problem) or concentrated in one segment (targeting problem)?

**Leakage vs. abandonment:** Leakage is users leaving and never returning. Abandonment is users leaving but returning later via a different path. Treat differently.

### Statistical Significance

Statistical significance measures the probability that an observed difference between two groups occurred by chance. The p-value is the probability of seeing a result at least as extreme as the one observed, assuming the null hypothesis (no difference) is true.

**p < 0.05** means: if there were truly no difference, there is less than a 5% chance of observing a result this large. This is the standard threshold, but it is not a decision threshold — it is one input.

**What p-value does NOT tell you:**
- The size of the effect (use effect size or confidence intervals)
- Whether the result is practically meaningful
- Whether the experiment was designed correctly

**Confidence intervals** are more informative than p-values for PMs. A 95% CI of [+2%, +8%] means: if we repeated this experiment many times, 95% of those intervals would contain the true effect. A CI of [-1%, +11%] crosses zero — inconclusive, even if p < 0.05 on a one-tailed test.

### Sample Size

Underpowered experiments are the most common PM mistake with data. An experiment with too few users cannot reliably detect a real effect — it will often show "no significant difference" even when a real difference exists (Type II error).

Sample size depends on:
- Baseline conversion rate
- Minimum detectable effect (MDE) — smallest lift that would change your decision
- Statistical power (typically 80%)
- Significance level (typically 95%)

Rule of thumb for most SaaS experiments: you need to see at least 100–200 conversions per variant before trusting a result. Use a calculator (Evan Miller's sample size calculator is standard).

**Never peek and stop early.** Checking results before the predetermined sample size is reached inflates false positive rates significantly.

### SQL Patterns PMs Should Know

| Use case | Core pattern |
|----------|-------------|
| DAU/MAU | COUNT(DISTINCT user_id) by date, grouped by week/month |
| Cohort retention | JOIN first_seen date to activity table, bucket by week offset |
| Funnel conversion | COUNT DISTINCT users reaching each event, in sequence |
| Feature adoption | % of active users who triggered feature event in period |
| Churn identification | Users with last activity > N days ago |
| ARPU | SUM(revenue) / COUNT(DISTINCT user_id) in period |

You do not need to write production SQL. You need to read a query and spot whether the analyst filtered to the right user population, used the right date range, and is measuring what you actually asked for.

## Key Metrics / Formulas

```
p-value < 0.05       = statistically significant at 95% confidence
95% CI               = range containing true effect 95% of the time
Effect size          = (treatment rate - control rate) / control rate
Statistical power    = probability of detecting a true effect (target: 80%)
Type I error (alpha) = false positive (declaring winner when there is none)
Type II error (beta) = false negative (missing a real effect)
```

## Common Mistakes

- **Declaring a winner before reaching sample size.** Even if p < 0.05, if you stopped the experiment early because it "looked good," the result is likely a false positive.
- **Ignoring practical significance.** A +0.1% lift on checkout with p = 0.001 may not be worth the engineering complexity to ship.
- **Partial cohorts in retention tables.** The most recent cohort always looks bad — they have not had time to churn yet. Truncate or annotate.
- **Confusing correlation with causation.** "Feature users have 3x retention" may mean engaged users adopt features, not that the feature causes retention.
- **Not segmenting funnel drops.** A 40% drop at step 3 that is entirely driven by mobile users is a different problem than one spread evenly across platforms.
- **Tracking gaps.** Assume 5–15% of events are missing or double-counted in most analytics implementations. Validate event counts against server-side data before making decisions.

## Quick Reference

```
p < 0.05        = statistically significant (not necessarily important)
CI crosses zero = inconclusive, do not ship
n < 100/variant = do not trust A/B result
Cohort diagonal = how to separate product improvement from seasonality
Funnel: biggest drop by volume = where to focus first
```

## Sources

- [The PM's Guide to Statistical Analysis — GoPractice](https://gopractice.io/data/the-product-managers-guide-to-statistical-analysis/)
- [Product Analytics Ultimate Guide — HelloPM](https://hellopm.co/product-analytics-the-ultimate-guide-for-product-managers/)
- [Cohort Analysis — Statsig](https://www.statsig.com/perspectives/your-guide-to-cohort-analysis)
- [SQL for Product Managers — AI2SQL](https://builder.ai2sql.io/blog/sql-for-product-managers)
- [Advanced Data Analysis for PM Success — LaunchNotes](https://www.launchnotes.com/blog/advanced-data-analysis-strategies-for-product-management-success)
- [Product Management Data Analysis — Row Zero](https://rowzero.io/blog/product-management-data-analysis)

[[pm-knowledge-base]]
