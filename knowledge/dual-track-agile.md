# Dual-Track Agile

## What it is

Dual-Track Agile is a product development approach where two work streams run simultaneously: a **Discovery track** (figuring out what to build and whether it will work) and a **Delivery track** (building and shipping validated solutions). Originally called "Dual-Track Scrum" by Marty Cagan and Jeff Patton around 2012, Cagan later moved away from the term and now calls it Continuous Discovery and Continuous Delivery — the same idea, but with emphasis on principles over process.

The core insight: discovery and delivery should never stop for each other. While engineers ship last sprint's validated work, the PM/designer/researcher team is validating next sprint's ideas.

## When to use

- Your team is constantly building features customers don't use
- Discovery happens in a "big bang" phase before development starts, creating long feedback loops
- You're transitioning from a feature factory (stakeholders hand you requirements) to an empowered product team
- Sprint planning feels like a guessing game because no one validated the ideas

**Not a fit when:** you're a solo operator, the product is purely execution (zero uncertainty), or your team lacks the research access to run continuous discovery.

## Core components / steps

### The Two Tracks

**Discovery Track** (PM + Designer + 1-2 Engineers)
- Runs at least 1-2 sprints ahead of delivery
- Activities: customer interviews, prototype testing, technical feasibility spikes, assumption mapping
- Output: validated product backlog items (not just ideas — tested ideas)
- Metric: learning velocity

**Delivery Track** (Full Engineering Team)
- Takes validated items from discovery as input
- Builds, tests, ships with confidence
- Metric: shipping velocity

### Empowered Teams vs Feature Teams

| Feature Team | Empowered Team |
|---|---|
| Executes a roadmap handed from above | Owns a problem space and is responsible for outcomes |
| PM = project manager / backlog groomer | PM = mini-CEO of the product area |
| Discovery happens (if at all) before sprints | Discovery is continuous, runs parallel |
| Success = features shipped | Success = customer/business outcomes |

### The Opportunity Backlog vs Delivery Backlog

- **Opportunity Backlog**: unvalidated ideas, customer problems, bets. Messy and large.
- **Discovery Backlog**: ideas actively being tested right now. Small and focused.
- **Delivery Backlog**: validated, refined, ready to build. Only promoted from discovery.

### How Discovery Informs Delivery (Without Blocking It)

1. PM/Designer/Engineer spike runs prototype or experiment
2. Customer feedback validates (or kills) the approach
3. Validated solution gets refined into delivery-ready spec
4. Passes to full team — engineers already understand context from the spike
5. Delivery ships, team measures outcome, feeds back to discovery

## Key questions to ask

- Do we have validated evidence that this item in our delivery backlog solves a real customer problem?
- Who is doing discovery right now, while the team is building?
- How far ahead is our discovery track? (Target: 1-2 sprints minimum)
- Are engineers involved in discovery? (They should be — feasibility is part of validation)
- Are we measuring outcomes (behavior change) or outputs (features shipped)?

## Common mistakes

- **Treating discovery as a separate phase** — "we do discovery in Q1, delivery in Q2" is not dual-track
- **Discovery track with no engineers** — skips feasibility validation, creates rework
- **Discovery produces documents, not experiments** — validation means testing with real users, not writing specs
- **Delivery track never sees customers** — engineers lose empathy and context
- **Confusing dual-track with double the workload** — it's a reallocation of PM/designer time, not extra work
- **Shipping unvalidated items under deadline pressure** — defeats the entire model

## Quick reference

```
Opportunity Backlog
       ↓
  [Discovery Track]  ←── customer interviews, prototypes, spikes
       ↓
  Validated + feasible?
       ↓ YES
  [Delivery Backlog]
       ↓
  [Delivery Track]   ←── build, test, ship
       ↓
  Outcome measurement → feeds back to Discovery
```

**Key Cagan quote:** "Our higher order objective is to validate our ideas the fastest, cheapest way possible."

**Discovery ≠ UX research.** Discovery involves PM, designer, and engineers together testing desirability (customer wants it), viability (business can support it), and feasibility (we can build it).

## Sources

- [Dual-Track Agile — SVPG (Marty Cagan)](https://www.svpg.com/dual-track-agile/) [CITED]
- [Dual-Track Agile — Productfolio](https://productfolio.com/dual-track-agile/) [CITED]
- [Dual-Track Agile — LogRocket Blog](https://blog.logrocket.com/product-management/dual-track-agile-continuous-discovery/) [CITED]
- [Let's Talk Dual Track — Ant Murphy / Medium](https://antmurphy.medium.com/lets-talk-dual-track-continuous-discovery-delivery-891fa171cd7c) [CITED]
