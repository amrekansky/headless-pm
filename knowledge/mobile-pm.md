# Mobile Product Management

## What it is

Product management for apps distributed through Apple App Store and Google Play, where the distribution channel, review process, OS constraints, and user behavior patterns differ fundamentally from web. Mobile PMs deal with constraints that web PMs do not: app review delays, OS-level permission systems, push notification fatigue, and the DAU/MAU stickiness benchmark as the primary health signal.

## When PMs use this

- Shipping a native iOS or Android app (or React Native / Flutter cross-platform)
- Optimizing app store visibility and conversion
- Designing push notification and re-engagement strategy
- Setting up mobile A/B testing
- Evaluating mobile-specific analytics instrumentation
- Preparing for app store review submissions

## Core Concepts / Framework

### App Store Optimization (ASO)

ASO is the mobile equivalent of SEO: optimizing your store listing to improve organic visibility and download conversion. 70% of users discover apps through app store search; 65% of downloads come from organic search. Apps in the top 3 results get 90% more downloads.

**Ranking signals (both stores):**
- Keyword relevance (title, subtitle, keyword field)
- Download velocity and volume
- Ratings and reviews (apps with 4.5+ get 150% more downloads than lower-rated)
- Retention and engagement metrics — since 2025, both stores weight Day 7 retention in rankings
- Update frequency and crash rate

**Title optimization:** Include your primary keyword in the app title. Both stores index title keywords with high weight. Character limit: 30 (App Store), 50 (Google Play).

**Screenshots and video:** The first 2 screenshots show in search results before the user taps. These drive the tap-through rate. Test screenshot order.

**Apple-specific (2025):** Apple now indexes Custom Product Pages (CPPs) in organic search (since July 2025). CPPs are no longer only for paid traffic — they function as full ASO assets.

### Review Guidelines and Common Rejection Reasons

**Apple App Store common rejections:**
- Guideline 2.1: App crashes or has significant bugs
- Guideline 4.0: Design issues (confusing UI, placeholder content)
- Guideline 3.1.1: Using non-App Store in-app purchase for digital goods
- Guideline 5.1.1: Privacy — insufficient usage description strings for permissions

**Google Play common rejections:**
- Misleading metadata (screenshots not matching app functionality)
- Policy violations (impersonation, spam, deceptive behavior)
- Sensitive content not age-gated

**PM implication:** Build review submission into the release schedule. Apple's average review time is 1–3 days for standard reviews; expedited review is available for critical bug fixes. Never commit to a launch date without accounting for review time.

### Push Notification Strategy

Push notifications are the highest-leverage re-engagement channel in mobile, and the fastest way to get uninstalled if misused.

**Permission reality:** iOS requires explicit opt-in for push. The system prompt appears once — if the user declines, you cannot re-prompt without navigating to Settings. Typical iOS opt-in rates: 40–60% for apps with clear value proposition, <20% for apps that prompt immediately on first open.

**Best practice: permission priming.** Before triggering the OS permission dialog, show an in-app screen explaining why notifications are valuable. Users who see a priming screen convert at 2–3x the rate of cold OS prompts.

**Notification fatigue formula:** If a user receives more than 2–3 notifications per week without obvious personal relevance, unsubscribe rates increase sharply. Every notification must answer "why now, why this user?"

**Categories by effectiveness:**
- Transactional (order shipped, message received): high engagement, rarely disabled
- Behavioral triggers (you have unread X): medium engagement
- Promotional (sale, new feature): lowest engagement, highest disable rate

**Re-engagement campaigns:** Push is 40% more effective for re-engagement when personalized to user behavior vs. broadcast campaigns.

### Rating Prompts

The SKStoreReviewRequestAPI (iOS) and In-App Review API (Android) allow apps to prompt for ratings without leaving the app. Rules:
- iOS: Apple limits prompts to 3 times per year per device
- Prompt after a moment of success (task completed, level passed, goal achieved) — never mid-task
- Never gate the prompt behind conditions that inflate rating (only showing to users who say they "love" the app violates both store guidelines)
- Apps with 4.5+ star ratings get significantly more downloads; a single wave of 1-star reviews can tank ranking for weeks

### Deep Linking

Deep links route users to a specific in-app location from outside the app (web, email, another app).

- **Universal Links (iOS) / App Links (Android):** HTTP links that open the app if installed, fall back to web if not. Preferred for user experience.
- **Custom scheme links** (`myapp://profile/123`): Open app only; no web fallback. Use for internal navigation only.
- **Deferred deep links:** Route the user to the correct in-app location even after installing from a cold start. Essential for paid acquisition campaigns — a user who clicked an ad for feature X should land on feature X after install, not the home screen.

### Mobile Analytics: Key Metrics

| Metric | Formula | Benchmark |
|--------|---------|-----------|
| DAU/MAU ratio (stickiness) | DAU / MAU | >20% is engaged, >50% is excellent |
| Day 1 retention | Users active Day 1 / Install cohort | >40% good, >60% excellent |
| Day 7 retention | Users active Day 7 / Install cohort | >20% good |
| Day 30 retention | Users active Day 30 / Install cohort | >10% good |
| Session length | Average time per session | Category-dependent |
| Crash rate | Crashes / Sessions | <0.1% for quality apps |
| ANR rate (Android) | App Not Responding / Sessions | <0.47% to avoid Play Store warnings |

**DAU/MAU interpretation:** Facebook-class stickiness is ~65%. Most B2B apps target 20–30%. Below 10% indicates the app is not providing daily-recurring value.

### Mobile A/B Testing Constraints

Mobile A/B testing is harder than web because:
- App review cycles mean you cannot ship a variant instantly — changes embedded in the binary require store review
- Server-driven UI or feature flags can change behavior without a new binary, but only for features built to support it
- iOS privacy changes (ATT framework, SKAdNetwork) limit user-level attribution
- Sample sizes take longer to accumulate if DAU is modest

**Recommended approach:** Use server-side feature flags (LaunchDarkly, Firebase Remote Config, Statsig) for behavioral tests that do not require binary changes. Reserve binary A/B tests for major UI changes worth the release cycle cost.

## Common Mistakes

- **Prompting for push permissions immediately on first open.** Users have not seen value yet. Wait for a moment of success or use permission priming.
- **Ignoring ASO after launch.** ASO is not set-and-forget. Keywords and screenshots should be tested and refreshed quarterly.
- **Not planning for app review in launch timelines.** "We can ship this Friday" — not if Friday is the submission date and review takes 2 days.
- **Measuring installs, not retention.** Installs are a vanity metric. Day 7 retention and DAU/MAU tell you whether the app has product-market fit.
- **Broadcasting notifications.** Sending the same push to all users accelerates opt-out and damages long-term channel quality. Segment and trigger on behavior.
- **No deferred deep linking in paid campaigns.** Users who click an ad for feature X and land on the home screen have high drop-off. Deferred deep links are table stakes for paid acquisition.

## Quick Reference

```
ASO: title keyword + screenshots + ratings = ranking
Review time: 1-3 days Apple, same-day to 3 days Google
Push opt-in: prime before OS prompt; max 2-3/week
Rating prompt: post-success moment only; 3x/year iOS limit
DAU/MAU: >20% engaged, >50% excellent
Day 7 retention: >20% healthy
Crash rate: <0.1%
Deep links: universal links + deferred deep links for paid
```

## Sources

- [ASO Complete Guide 2025 — Movadex](https://movadex.com/blog/article/the-ultimate-guide-to-app-store-optimization-aso-in-2025)
- [ASO in 2026 — ASO Mobile](https://asomobile.net/en/blog/aso-in-2026-the-complete-guide-to-app-optimization/)
- [App Store Optimization Guide — AppRadar](https://appradar.com/academy/what-is-app-store-optimization-aso)
- [Best ASO Practices 2024–2025 — SplitMetrics](https://splitmetrics.com/blog/app-store-optimization-best-practices/)
- [ASO 2.0 Advanced Strategies 2025 — Dogtown Media](https://www.dogtownmedia.com/aso-2-0-advanced-app-store-optimization-strategies-for-2025/)

## Related

- [[developer-experience]]
- [[aarrr-pirate-metrics]]
- [[heart-framework]]
- [[technical-concepts-for-pms]]
- [[product-led-growth]]
