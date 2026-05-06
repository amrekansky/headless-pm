# Assumption Mapping

## What it is

Assumption mapping is a structured technique for surfacing and prioritizing the beliefs that must be true for a product idea to succeed — before committing engineering resources to build it. The goal is to find and test your riskiest assumptions with the cheapest possible experiment. It sits upstream of the MVP and replaces "build first, learn later" with "learn first, then build."

## When to use

- Before starting a new initiative, feature, or product line
- When a roadmap item feels obvious but hasn't been validated
- When leadership is pushing to build something based on intuition
- After discovery interviews surface a potential opportunity worth pursuing
- Anytime the cost of being wrong is high

## Core components / steps

### Step 1 — List all assumptions

Write down every belief that must be true for this idea to work. Think across four categories:

| Category | Question to ask |
|----------|----------------|
| **Desirability** | Do users want this? Will they actually use it? |
| **Viability** | Can we make money from it? Does the business model hold? |
| **Feasibility** | Can we build it with available tech and team? |
| **Usability** | Can users figure out how to use it without hand-holding? |

Aim for 10–20 assumptions per initiative. Write each as a falsifiable belief: "Users will pay $50/month for X" not "users like X."

### Step 2 — Map on a 2x2

Plot each assumption on a grid:
- **Y axis**: Importance to success (low → high)
- **X axis**: Current knowledge / evidence (unknown → known)

The top-left quadrant (high importance, low knowledge) = your riskiest assumptions. These must be tested before you write a single line of code.

### Step 3 — RAT before MVP

**RAT (Riskiest Assumption Test)** targets the single assumption that, if false, would kill the entire idea. Test it with the cheapest possible experiment:

| Assumption type | Cheap test |
|----------------|-----------|
| Desirability | Landing page with waitlist / fake door |
| Willingness to pay | Pricing page before product exists |
| Usage behavior | Wizard of Oz (manual backend, real frontend) |
| Feasibility | Technical spike / proof of concept |
| Viability | One real customer pre-pays before build |

**RAT vs MVP distinction**:
- **MVP** = smallest thing you can build that delivers real value. Assumes you know what the value is.
- **RAT** = smallest experiment to test whether value exists at all. Used *before* MVP.

Sequence: RAT → learning → MVP (if RAT passes).

### Step 4 — Test hierarchy (cheapest first)

1. Secondary research (existing data, competitors, benchmarks) — free
2. Customer interviews (1 hour, 5 people) — nearly free
3. Prototype / mockup testing — 1–2 days
4. Fake door / landing page — 1–3 days
5. Concierge / Wizard of Oz — 1 week
6. Technical spike — 1–2 weeks
7. MVP — weeks to months

Never jump to step 6 or 7 if steps 1–3 can answer the question.

## Key questions to ask

- What single assumption, if false, makes this entire idea worthless?
- What is the cheapest way to test whether that assumption is true?
- Are we confusing "users said they'd use it" with "users actually used it"?
- Which assumptions are we treating as facts without evidence?
- How long will it take to get a meaningful signal?

## Common mistakes

- **Testing easy assumptions instead of risky ones**: Teams gravitate toward assumptions they already believe are true. The 2x2 forces you to confront the scary quadrant.
- **Building the MVP to test what a RAT could test**: A 2-month MVP to test whether users want a feature is always the wrong call when a 2-day fake door would tell you the same thing.
- **Confusing assumption testing with user research**: Interviews reveal *what* to test. A RAT produces a *measurable signal* (conversion, payment, repeat use).
- **Only testing desirability**: Viability and feasibility assumptions kill just as many products. A feature users love but can't be monetized is still a failed bet.
- **Not documenting results**: Assumption tests have a half-life. Write down what you tested, what signal you got, and when so future teams don't repeat the same test.

## Quick reference

```
Assumption Map (2x2):

High importance │ RISKY → test first │ KNOWN STRENGTHS
                │                    │ (protect these)
────────────────┼────────────────────┼─────────────────
Low importance  │ LOW PRIORITY       │ NICE TO KNOW
                │                    │
                └────────────────────┴─────────────────
                  Low knowledge        High knowledge
```

**Assumption types**: Desirability / Viability / Feasibility / Usability

**RAT test formats**: Fake door, landing page, Wizard of Oz, concierge, prototype test, pre-sale

## Sources

- [Riskiest Assumption Test vs. MVP — Clutch.co](https://clutch.co/resources/riskiest-assumption-test-vs-mvp-whats-the-difference)
- [Why Your RAT Is The Real MVP — Medium / Moving Digital Health](https://medium.com/mindsea-development-inc/why-your-rat-riskiest-assumption-test-is-the-real-mvp-177d66cde3e1)
- [Riskiest Assumption Test — ModelThinkers](https://www.modelthinkers.com/mental-model/riskiest-assumption-test)
- [The MVP is dead. Long live the RAT — HackerNoon](https://hackernoon.com/the-mvp-is-dead-long-live-the-rat-233d5d16ab02)
- [Validating product ideas using the RAT — Red Badger](https://content.red-badger.com/resources/validating-product-ideas)
