# Lean Startup

## What it is

The Lean Startup is a product development and company-building methodology introduced by Eric Ries in his 2011 book. Its core premise: startups operate under conditions of extreme uncertainty, so the goal is not to execute a plan but to learn as fast as possible whether the plan is right. The fundamental cycle is **Build-Measure-Learn**: create a small experiment (MVP), measure real user behavior, learn what to do next.

Validated learning — knowledge confirmed by real customer behavior, not opinions or assumptions — is the only currency that matters.

## When to use

- Early-stage product with high uncertainty about what customers actually want
- Entering a new market or launching a new feature set where assumptions haven't been tested
- Post-launch: you've shipped something but aren't sure why (or whether) it's working
- Teams that rely on intuition and internal debates instead of customer data

**Less useful when:** the problem is extremely well-defined and the solution is a known execution challenge (e.g., rebuilding an existing system), or regulatory constraints make rapid experimentation impractical.

## Core components / steps

### Build-Measure-Learn Loop

```
       ← ← ← ← ← ← LEARN ← ← ← ← ←
       ↓                              ↑
     BUILD                         (data + analysis)
       ↓                              ↑
      MVP  →→→→→→ MEASURE →→→→→→→→→→
```

**Build:** Create the minimum viable product (MVP) — the smallest thing that tests your hypothesis. Not the smallest thing you can ship. The smallest thing that generates validated learning.

**Measure:** Define in advance what metric change would prove or disprove your hypothesis. Collect data on real user behavior.

**Learn:** Decide: persevere or pivot?

### MVP Types

| Type | What it is | Best for |
|---|---|---|
| Landing page / Smoke test | Fake product page measuring signup intent | Demand validation |
| Concierge | You manually deliver the service | Workflow validation |
| Wizard of Oz | Looks automated, humans do the work | Feasibility bypass |
| Prototype | Clickable mockup | UX and flow validation |
| Single-feature | Real product, minimal scope | Core value validation |

### Pivot vs. Persevere

After measuring, the team faces a structured decision:

**Persevere** — data validates the hypothesis. Continue current direction, optimize, repeat the loop.

**Pivot** — data invalidates the hypothesis. Make a structured course correction. Ries identifies 10 pivot types; the most common:

| Pivot Type | Description |
|---|---|
| Zoom-in | One feature becomes the whole product |
| Zoom-out | The whole product becomes one feature of something larger |
| Customer segment | Same product, different customer |
| Platform | From application to platform (or vice versa) |
| Business architecture | High-margin niche ↔ high-volume mass market |
| Channel | Different distribution path |

A pivot is **not** a failure. It is a structured hypothesis change based on evidence.

### Innovation Accounting

Ries introduced this to replace vanity metrics with actionable tracking:

1. **Baseline**: measure current state honestly (even if terrible)
2. **Tune the engine**: run experiments to improve the metrics that matter
3. **Pivot or persevere**: if experiments fail to move the needle, pivot

### Vanity Metrics vs. Actionable Metrics

| Vanity Metric | Actionable Alternative |
|---|---|
| Total registered users | Weekly active users |
| Page views | Conversion rate from visitor to signup |
| Press mentions | Customer acquisition cost |
| App downloads | Day-7 retention rate |
| Total revenue | Revenue per cohort over time |

Vanity metrics go up and make you feel good. Actionable metrics tell you if your change caused the improvement.

### Three Engines of Growth

Ries defines three sustainable growth mechanisms:
- **Sticky engine**: retain users through habit/lock-in (churn < new user acquisition rate)
- **Viral engine**: users refer others (viral coefficient > 1)
- **Paid engine**: revenue > customer acquisition cost (LTV > CAC)

## Key questions to ask

- What is our riskiest assumption right now?
- What is the minimum experiment to test that assumption?
- What metric would change if our hypothesis is true — and what counts as "true enough"?
- Are we measuring behavior or opinions?
- Is this metric actionable (we can change it) or vanity (we can't do anything with it)?
- Have we defined pivot/persevere criteria before running the experiment?

## Common mistakes

- **Building the full product as the MVP** — over-engineering before validation
- **Measuring the wrong thing** — downloads instead of activation, signups instead of retention
- **Pivoting too fast** — one bad week is not a signal; look for patterns
- **Persevering too long** — "just one more sprint" before the obvious pivot
- **Using surveys instead of behavior** — what people say ≠ what people do
- **Skipping the "learn" step** — the loop exists to generate decisions, not just data
- **Treating MVP as a product version** — it's an experiment, not a release

## Quick reference

```
Hypothesis → MVP → Measure real behavior → Validated learning → Pivot or Persevere
```

**Core quote (Ries):** "The fundamental activity of a startup is to turn ideas into products, measure how customers respond, and then learn whether to pivot or persevere."

**The goal is not to build products. The goal is to learn what to build.**

## Sources

- [The Lean Startup Methodology (official)](https://theleanstartup.com/principles) [CITED]
- [Lean Startup Methodology 2024 — Business Strategy Toolkit](https://businessstrategytoolkit.com/blogs/2024-08/lean-startup-methodology-blog/) [CITED]
- [Build Measure Learn — Userpilot](https://userpilot.com/blog/build-measure-learn/) [CITED]
- [Lean Startup — Wikipedia](https://en.wikipedia.org/wiki/Lean_startup) [CITED]

## Related

- [[assumption-mapping]]
- [[design-sprint]]
- [[working-backwards]]
- [[shape-up]]
- [[continuous-discovery]]
