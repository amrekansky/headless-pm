# Experimentation Maturity

## What it is

Experimentation maturity describes an organization's capability to run controlled experiments (A/B tests, multivariate tests, feature flags) systematically, at scale, and with statistical rigor. It is not just about tooling — it is about culture, process, and statistical sophistication evolving together. Booking.com runs 25,000 experiments per year; most companies run 5. The gap is not compute budget — it is organizational maturity. A PM operating in a low-maturity environment who understands the model can drive the company up the curve.

## When to use

This framework is useful when:
- You are diagnosing why experiments take months to run and decisions still feel arbitrary
- You are joining a new company and want to quickly assess experimentation capability
- You are building a case for investing in experimentation infrastructure
- You want to benchmark against industry leaders (Netflix, Booking.com, Airbnb)

## Core components / steps

### Maturity Levels

**Level 1 — Ad hoc**
- Experiments happen occasionally and informally
- No standard process, no dedicated tooling
- Results are interpreted by whoever ran the test
- Typical org: early-stage startup, or large company with one technical champion doing all tests
- Key symptom: "We ran a test and it worked" with no reproducible analysis

**Level 2 — Structured**
- Dedicated A/B testing tool deployed (Optimizely, VWO, LaunchDarkly)
- PMs and engineers understand basic statistical concepts (p-values, sample size calculators)
- Standard experiment documentation: hypothesis, metric, success criteria defined upfront
- Most tests are front-end (UI/UX), not back-end logic
- Key symptom: 5–20 concurrent tests, centralized results repository exists but is not consistently maintained

**Level 3 — Scaled**
- Experimentation platform integrated with data warehouse (results are queryable)
- Guardrail metrics defined and monitored automatically (experiment cannot ship if it degrades core metrics)
- Any product team can launch and analyze experiments without central bottleneck
- Feature flags decouple deploy from release — experiments run on production code without separate branches
- Key symptom: 50–200+ concurrent experiments, cross-team learnings are shared regularly

**Level 4 — Embedded**
- Experimentation is the default mechanism for all significant product decisions
- Statistical sophistication includes CUPED variance reduction, sequential testing, heterogeneous treatment effects
- Multi-armed bandits replace long-running A/B tests for optimization tasks
- Culture: leadership accepts that their intuition will regularly be proven wrong, and celebrates this
- Key symptom: Booking.com model — 25,000 tests/year, every employee can launch a test, executives confront counter-intuitive results daily

### Multi-Armed Bandits

Traditional A/B testing allocates traffic 50/50 until a winner is found, then switches to 100% winner. This sacrifices revenue during the test.

Multi-armed bandits dynamically allocate more traffic to the winning variant as it emerges, reducing opportunity cost during experimentation. Best for:
- Optimization problems with a clear reward signal (CTR, conversion rate)
- When speed matters more than statistical certainty
- Content recommendations, ad selection, onboarding flow optimization

Not ideal for:
- Tests where novelty effect distorts early results
- Tests where you need clean statistical significance for a legal or compliance record
- Tests with long conversion windows (SaaS annual contracts — you cannot learn fast enough)

### Building Experimentation Culture

The technical infrastructure is the easy part. Culture is the hard part:

**Conditions required:**
1. **Psychological safety for failed experiments.** If a team is punished for a test that shows no lift, experiments become vanity projects rather than learning tools.
2. **Leaders who demonstrate humility.** At Booking.com, cultural acceptance that executives can be wrong daily is a stated requirement. HBR (2024) documents this as the key to their experimentation edge.
3. **Democratized tooling.** If only data scientists can run tests, velocity is capped at the data science team's bandwidth.
4. **Shared learnings archive.** Experiments that are not documented and shared are lost institutional knowledge.

### Common Org Blockers

| Blocker | Symptom | Fix |
|---------|---------|-----|
| Governance bottleneck | Every experiment needs VP approval | Define empowerment thresholds: teams approve tests below X traffic / X risk |
| No sample size discipline | Tests end early when results look good | Sample size calculator mandatory in experiment brief |
| Metric inconsistency | Different teams measure "conversion" differently | Certified metric library with canonical definitions |
| Engineering prioritization | Feature flags deprioritized vs feature work | Treat experimentation platform as product, track velocity separately |
| Novelty bias | Winners early that regress later | Minimum runtime policy regardless of early significance |

### Booking.com / Netflix / Airbnb Scale

- **Booking.com:** 25,000 tests/year, 1,000+ concurrent experiments, any employee can run a test, culture of confronting uncomfortable results
- **Netflix:** Designed platform for heterogeneous treatment effects — they test that the algorithm is better on average AND for specific user segments; documented in Netflix Research
- **Airbnb:** Open-sourced the Experimentation Analysis Framework (Minerva); pioneered CUPED for variance reduction to require smaller sample sizes

## Key questions to ask

- What is our current experiment velocity (tests launched per quarter)?
- How long does it take from "experiment idea" to "experiment running"? Where is the bottleneck?
- Do we have guardrail metrics that automatically flag experiments causing collateral damage?
- When did the last experiment produce a counter-intuitive result that changed a roadmap decision?
- Is our experimentation platform a dependency for experiments, or do teams route around it?

## Common mistakes

**Investing in platform before culture.** A sophisticated experimentation platform with a low-trust culture produces experiments that confirm pre-existing beliefs, not challenge them.

**No minimum runtime.** Stopping when you hit significance allows novelty effects and natural variance to produce false winners. Minimum two business cycles (typically two weeks).

**Testing the same feature area repeatedly.** Repeated testing in one area can exhaust the testable improvements. Expand scope to avoid local maxima.

**Confusing feature flags with experiments.** Feature flags are deployment tools; experiments are statistical tools. Using flags without proper randomization and control groups produces unreliable results.

**Testing without a pre-registered hypothesis.** If you look at results and then decide what you were testing for, you are doing HARKing (Hypothesizing After Results are Known) — not science.

## Quick reference

| Level | Velocity | Infrastructure | Culture |
|-------|----------|---------------|---------|
| 1 — Ad hoc | < 5 tests/year | None | Skeptical |
| 2 — Structured | 5–50/year | Testing tool | Supportive |
| 3 — Scaled | 50–500/year | Platform + data warehouse | Enthusiastic |
| 4 — Embedded | 500+/year | Full automation + bandits | Experimentation is the default |

## Sources

- [HBR: How Booking.com Sustains a Culture of Innovation (2024)](https://hbr.org/podcast/2024/06/how-booking-com-sustains-a-culture-of-innovation)
- [HBR: Building a Culture of Experimentation](https://hbr.org/2020/03/building-a-culture-of-experimentation)
- [ABSmartly: How to Experiment Like Booking.com](https://absmartly.co/blog/how-to-experiment-like-booking-com)
- [Netflix Research: Lessons from Designing Netflix's Experimentation Platform](https://research.netflix.com/publication/lessons-from-designing-netflixs-experimentation-platform)
- [Aakash Gupta: How the Fastest-Growing Companies Build a Culture of Experimentation](https://aakashgupta.medium.com/how-the-fastest-growing-companies-build-a-culture-of-experimentation-5358a43f86cd)
- [HDSR: Online Experimentation — Benefits and Challenges](https://hdsr.mitpress.mit.edu/pub/aj31wj81)

[[pm-knowledge-base]]
