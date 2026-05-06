# OKR Implementation

## What it is

OKRs (Objectives and Key Results) are a goal-setting framework popularized by John Doerr in *Measure What Matters* (2018), tracing back to Intel's Andy Grove and later Google's use from 1999 onward. An Objective is a qualitative, inspiring direction. Key Results are quantitative measures that prove the Objective was achieved. The framework creates alignment, focus, and a culture of ambitious goal-setting across organizations, teams, and individuals.

## When to use

- At the start of a planning cycle (quarterly or annual)
- When a team is pulling in different directions without shared priorities
- When key results from last quarter were all green but the product didn't meaningfully improve
- When you want to distinguish "output delivery" (tasks done) from "outcome achievement" (impact delivered)
- When introducing accountability and stretch culture to a team

## Core components / steps

### The fundamental formula

**"I will [Objective] as measured by [Key Results]."**

- **Objective**: What do you want to achieve? Must be qualitative, memorable, and inspiring. Not a metric itself.
- **Key Results**: How will you know you achieved it? Must be quantitative, specific, and measurable. 3–5 per Objective.

**Example (Product team):**
- Objective: Make onboarding effortless for new enterprise customers
- KR1: Reduce median time-to-first-value from 14 days to 3 days
- KR2: Increase 7-day activation rate from 34% to 65%
- KR3: Achieve NPS > 50 from customers who completed onboarding in Q3

### Objective vs. Key Result distinction

| Objective | Key Result |
|-----------|-----------|
| "Become the go-to tool for remote teams" | NOT a KR |
| Not measurable | "Increase DAU/MAU ratio from 0.3 to 0.5" — is a KR |
| Qualitative, inspiring | Quantitative, falsifiable |
| Direction | Proof of arrival |

**The test**: If you can score it on a 0–1 scale, it's a Key Result. If you can't, it might be an Objective or a task.

### Stretch goals — 70% is success

OKRs should be ambitious enough that hitting 100% means you set them too low. Doerr and Google's rule of thumb:
- **0.7–1.0**: Exceptional — you crushed it
- **0.4–0.6**: Good — you made meaningful progress
- **0.0–0.3**: Failure — something went wrong or the goal was wrong

This means a team that consistently scores 1.0 on all KRs is sandbagging. The culture must accept that 70% of an ambitious goal is better than 100% of a safe one.

**Important**: Because OKRs are stretch goals, they must NOT be tied to compensation or performance reviews. Once bonuses depend on OKRs, employees sandbag immediately.

### Cascading OKRs

OKRs work at multiple levels and should connect:

```
Company OKRs
  └── Team OKRs (contribute to company OKRs)
        └── Individual OKRs (contribute to team OKRs)
```

**Cascading ≠ copy-pasting**: Each level translates the level above into its own sphere of influence. A product team's KR becomes the input context for an engineer's individual Objective — not the same metric repeated.

**Bottom-up contribution**: Doerr recommends roughly 50% of OKRs be set by teams themselves, in consultation with managers. Top-down-only OKRs destroy motivation. Shared authorship creates ownership.

### CFRs — Conversations, Feedback, Recognition

OKRs without CFRs are just spreadsheets. Doerr added CFRs as the "operating system" that makes OKRs work:
- **Conversations**: Regular 1:1s that check in on goal progress, unblock obstacles, and update OKRs when context changes
- **Feedback**: Ongoing peer and manager feedback — not annual reviews
- **Recognition**: Celebrating progress and effort publicly, not just end-of-quarter results

OKRs can be modified mid-cycle if circumstances materially change. Goals that become irrelevant should be updated, not abandoned silently.

### Grading

At cycle end, score each Key Result from 0.0 to 1.0. Average to get Objective score.

| Score | Meaning |
|-------|---------|
| 1.0 | Fully achieved |
| 0.7 | Strong progress (expected for stretch goals) |
| 0.4 | Partial progress |
| 0.0 | No meaningful progress |

**Grade honestly**: The goal is learning, not performance theater. A 0.3 with a clear retrospective (what blocked us, what we'd change) is more valuable than a 0.9 achieved by adjusting the definition of "done."

### Limit: 3–5 OKRs per cycle

Doerr's rule: a maximum of 3–5 Objectives per team per quarter, with no more than 5 Key Results per Objective. More than this signals a team that cannot prioritize. The discipline of choosing what NOT to pursue is the point.

## Key questions to ask

- Is this Key Result measuring an output (feature shipped) or an outcome (user behavior changed)?
- Would achieving all Key Results at 1.0 prove the Objective was truly accomplished?
- Is the goal ambitious enough that 70% is the expected score, not the failure threshold?
- Are we setting OKRs based on what we can guarantee, or what we're genuinely trying to achieve?
- Do our team OKRs actually contribute to company OKRs, or are they parallel tracks?

## Common mistakes

- **Output Key Results instead of outcome KRs**: "Launch the onboarding redesign" is a task, not a Key Result. "Increase activation from 34% to 65%" is a KR. This is the most common failure.
- **Tying OKRs to compensation**: Destroys stretch culture immediately. Everyone sandbaggs. Separate performance management from OKR grading.
- **Too many OKRs**: A team with 12 Objectives has no priorities. Three to five forces real choices.
- **Business-as-usual goals**: OKRs written around work you'd do anyway are not OKRs — they're a task list. OKRs should represent meaningful improvement over the current trajectory.
- **Never updating mid-cycle**: The world changes. An OKR written in January may be irrelevant in February. Updating it is not failure; ignoring it is.
- **Grading as performance review**: Teams inflate scores to look good. Treat OKR grades as learning data, not report cards.
- **Skipping retrospectives**: A scored OKR without a retrospective is wasted learning. What did we learn? What would we change? This is the compounding value of OKRs.

## Quick reference

```
Objective: Qualitative, inspiring, memorable
  └── KR1: Number — baseline → target
  └── KR2: Number — baseline → target
  └── KR3: Number — baseline → target

Scoring: 0.0–1.0 per KR | 0.7 = expected for stretch goals
Limit: 3–5 Objectives | 3–5 KRs each
Never: Tie to comp | Set easy targets | Use output KRs
Always: CFRs | Mid-cycle updates | Retrospectives
```

| Mistake | Fix |
|---------|-----|
| "Launch X" as KR | "Increase metric Y from A to B by end of quarter" |
| 0.3 = failure | 0.7 = expected; recalibrate expectation |
| 100% score = great | 100% = you sandbagged |
| OKRs tied to bonus | Separate comp from OKR grading |

## Sources

- [Measure What Matters — whatmatters.com (John Doerr)](https://www.whatmatters.com/)
- [Common OKR Mistakes — whatmatters.com](https://www.whatmatters.com/faqs/common-okr-mistakes)
- [Measure What Matters Summary — Graham Mann](https://grahammann.net/book-notes/measure-what-matters-by-john-doerr)
- [OKRs: The Ultimate Guide — Atlassian](https://www.atlassian.com/agile/agile-at-scale/okr)
- [John Doerr on OKRs: The Original Interview — BetterWorks](https://www.betterworks.com/magazine/keys-okr-success-qa-john-doerr)
