# Infrastructure PM

## What it is

Infrastructure PM (also called Platform PM or DevTools PM) is the practice of managing products whose customers are other engineers, teams, or services — not end users. The product surface is APIs, SDKs, CLIs, internal platforms, shared services, and developer tools. Infrastructure PMs work at the intersection of product management and systems engineering, where the "user" needs documentation instead of UX, reliability SLOs instead of NPS, and performance benchmarks instead of delight.

The field draws from site reliability engineering (Google's SRE book), developer experience research (DevEx — a framework by Forsgren, Storey, et al.), and platform product theory (Evan Bottcher's "Team Topologies", Gregor Hohpe's enterprise integration patterns). The internal developer product discipline was codified by Spotify, Netflix, and Google's internal developer experience teams.

## When to use

- When managing an internal platform (data platform, ML platform, CI/CD system, API gateway)
- When building developer-facing products (SDKs, APIs, CLIs, developer portals)
- When making the case for platform investment to leadership who sees no "user-facing" value
- When measuring developer productivity or developer experience
- When designing the interface between a platform team and the application teams that use it

## Core components / steps

### Developer Experience (DevEx)

DevEx describes how developers feel about and interact with their tools, infrastructure, and workflows. Poor DevEx is one of the largest hidden costs in engineering organizations — developers lose hours per week to broken tooling, slow builds, poor documentation, and opaque error messages.

**The SPACE framework** (GitHub/Microsoft Research, Forsgren et al. 2021):

| Dimension | What it measures | Example metrics |
|-----------|-----------------|----------------|
| **S**atisfaction | Developer happiness and engagement | Developer NPS, survey scores |
| **P**erformance | Outcome quality | Code review latency, bug escape rate |
| **A**ctivity | Volume of actions | PRs merged, deployments, test runs |
| **C**ommunication | Team interaction quality | PR turnaround time, async resolution |
| **E**fficiency | Flow and minimal friction | Context switches, build times, CI wait time |

**DORA metrics** (DevOps Research and Assessment, Google):

| Metric | Elite | High | Medium | Low |
|--------|-------|------|--------|-----|
| Deployment frequency | Multiple/day | Weekly | Monthly | Less than monthly |
| Lead time for changes | < 1 hour | 1 day–1 week | 1 week–1 month | > 1 month |
| Change failure rate | < 5% | < 10% | 10–15% | > 15% |
| Time to restore service | < 1 hour | < 1 day | 1 day–1 week | > 1 week |

**Infrastructure PM's job on DevEx**: Ship platform improvements that move teams from Medium to High on DORA metrics. Frame every platform investment in terms of its DORA impact.

### Platform Reliability — Error Budgets and SLOs

**SLI (Service Level Indicator)**: The actual metric being measured. Availability (% of successful requests), latency (p99 response time), throughput (requests per second), error rate.

**SLO (Service Level Objective)**: The target for the SLI. "99.9% availability over a rolling 30-day window." An internal commitment to the teams that depend on the platform.

**SLA (Service Level Agreement)**: A contractual commitment with financial consequences. Usually for external customers. Infrastructure PMs set SLOs, not SLAs.

**Error budget**: The allowed downtime/errors within the SLO.
- 99.9% availability = 43.8 minutes downtime/month allowed
- 99.95% = 21.9 minutes/month
- 99.99% = 4.4 minutes/month

**Error budget policy**: What happens when the error budget is exhausted? Typical policy: freeze all risky deployments until the error budget recovers. PMs must enforce this policy — it is how reliability is maintained without being a reliability blocker.

**Toil**: Repetitive, automatable operational work. SRE discipline measures toil as a % of engineering time. Target: < 50% of platform team time on toil. Reducing toil is a platform PM priority because toil compounds.

### SRE Collaboration Model

Platform PMs work with SRE (Site Reliability Engineering) teams to manage reliability. The SRE model (Google SRE Book):

- **Embedded SREs**: SREs sit in the product team and help design for reliability from the start
- **Consulting SREs**: Centralized SREs who review architectures and incident response
- **Production readiness reviews (PRR)**: Before launch, SRE reviews: are SLOs defined, are runbooks written, is alerting in place, is capacity planned?

**PM responsibilities in SRE collaboration:**
- Define SLOs for every platform feature (SREs enforce them)
- Write or commission runbooks for all failure modes
- Prioritize toil reduction in the roadmap as first-class work
- Ensure incident retrospectives (blameless postmortems) result in product changes, not just process changes

### Writing Specs for Platform Engineering

Platform specs differ from consumer specs because the "user story" is always an engineer or a team, not an end user.

**Platform spec structure:**

1. **Problem statement**: Which teams/services are affected and how? Include DORA impact if possible.
2. **API contract**: What does the interface look like? Input/output schemas, error codes, versioning policy.
3. **Performance requirements**: Latency targets (p50/p95/p99), throughput, scalability targets (N× current load).
4. **Reliability requirements**: SLO target, failure mode behavior (graceful degradation vs hard fail), retry semantics.
5. **Migration path**: How do existing consumers migrate to the new API? Backward compatibility window.
6. **Deprecation policy**: When will old API versions be removed? How will consumers be notified?

**The API is the UX**: For platform PMs, the API ergonomics matter as much as consumer UX does for product PMs. Poorly named methods, inconsistent error handling, and missing defaults are UX bugs in platform products.

### Internal vs External Developer Products

**Internal platform products** (CI/CD, internal APIs, ML platforms):
- Captive user base — developers cannot choose a different vendor
- Feedback loop is direct (internal Slack channels, office hours)
- Success metric: developer productivity (DORA), adoption rate, support ticket volume
- Danger: "good enough" culture — internal users tolerate worse tooling than external users would

**External developer products** (public APIs, SDKs, CLIs):
- Developers can and will switch to competitors
- Documentation quality is a primary product quality signal
- Time-to-first-successful-API-call is the activation metric
- Feedback loop is longer — external developers rarely file detailed bugs

**Developer portal quality markers:**
- < 5 minutes to first successful API call with real data
- Every error message includes the cause and the fix
- Code examples in at least 3 languages for every endpoint
- Changelog is maintained and versioned

## Key questions to ask

- What is our current DORA tier, and which metric has the most headroom?
- Are our SLOs defined for every service that other teams depend on?
- What is the ratio of new feature work to toil reduction in our current roadmap?
- How long does it take a new developer to make their first successful call to our API?
- When the platform fails, how long until consuming teams know it is us and not them?

## Common mistakes

- **Building without measuring developer productivity**: "Developers seem happier" is not a success metric. DORA metrics and developer NPS are measurable.
- **Ignoring migration burden on consumers**: A breaking API change is a product defect, not just a compatibility issue. Plan migration with adequate notice and tooling.
- **Underestimating documentation as product**: Developers will not use a platform they cannot understand. Documentation debt kills adoption.
- **Not enforcing error budget policies**: An SLO without an error budget policy is theater. Teams need to see reliability enforced, or they stop trusting SLOs.
- **Feature roadmap with no toil reduction**: If toil exceeds 50% of platform team time, new features are building on an unreliable foundation.

## Quick reference

```
DORA metrics: deployment freq | lead time | change failure rate | MTTR
SPACE framework: Satisfaction | Performance | Activity | Communication | Efficiency
SLO: target reliability (e.g. 99.9%)
Error budget: allowed downtime before freeze (43.8 min/month at 99.9%)
Toil target: < 50% of platform team time

Time-to-first-successful-API-call: primary developer activation metric
API is the UX: treat API ergonomics with same discipline as consumer UX
```

| Platform metric | Target | Red flag |
|-----------------|--------|----------|
| DORA: deploy freq | Daily | Monthly |
| DORA: MTTR | < 1 hour | > 1 day |
| Developer NPS | > 40 | < 0 |
| Time to first API call | < 5 min | > 30 min |
| Toil % | < 50% | > 70% |

## Sources

- [Site Reliability Engineering (SRE Book) — Google (2016)](https://sre.google/sre-book/table-of-contents/)
- [DORA State of DevOps Report — dora.dev](https://dora.dev/research/)
- [The SPACE of Developer Productivity — Forsgren et al. (2021, ACM Queue)](https://queue.acm.org/detail.cfm?id=3454124)
- [Team Topologies — Matthew Skelton & Manuel Pais (2019)](https://teamtopologies.com/)
- [Platform Engineering at Spotify — Spotify Engineering Blog](https://engineering.atspotify.com/)
- [Developer Experience (DevEx) — GitHub Research (2023)](https://github.blog/2023-06-08-developer-experience-what-is-it-and-why-should-you-care/)

## Related

- [[developer-experience]]
- [[ai-pm]]
- [[technical-concepts-for-pms]]
- [[make-buy-partner]]
- [[platform-strategy]]
