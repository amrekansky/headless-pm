## Quick reference
- **Use when:** Competing initiatives with strong stakeholder opinions, or preparing quarterly roadmap reviews
- **Key concepts:** Value vs effort, reach, impact, confidence, willingness-to-pay, strategic alignment
- **Core frameworks:** RICE, ICE, Kano Model, MoSCoW, Opportunity Scoring, Weighted Scoring
- **Output:** Ranked backlog with defensible rationale; stakeholder-ready scoring matrix

---

# Prioritization Frameworks

## What it is
A collection of structured methods for deciding which product work to do next. Each framework is a different lens on the same core question: "Given limited time, what will deliver the most value?" No single framework is universally correct — the right choice depends on what data you have, who your stakeholders are, and how mature the product is.

## When to use
**Use a framework when:**
- Multiple competing initiatives and stakeholders with strong opinions
- Leadership asks "why are we doing X instead of Y?" and the answer is "gut feel"
- Team is adding scope without removing anything (prioritization debt)
- Preparing quarterly roadmap reviews

**Don't use a framework when:**
- Prioritizing a single obvious customer emergency (just do it)
- Exploring new product space where you lack the data inputs frameworks require

## Core frameworks

### 1. RICE
**Formula:** `RICE Score = (Reach × Impact × Confidence) / Effort`

| Input | What it measures | How to estimate |
|---|---|---|
| **Reach** | Users affected per time period (e.g., per quarter) | # of users who hit this flow |
| **Impact** | Magnitude of effect per user | 3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal |
| **Confidence** | How sure you are about R, I, E | 100%=high, 80%=medium, 50%=low |
| **Effort** | Person-months to build | Estimate from engineering |

**Example:**
```
Feature: Onboarding checklist
Reach: 500 users/quarter
Impact: 2 (high — directly affects activation)
Confidence: 80% (0.8)
Effort: 1 person-month

RICE = (500 × 2 × 0.8) / 1 = 800
```

**Best for:** Teams with user data, competing feature requests, quarterly roadmap planning.
**Weakness:** Effort estimates are often wrong; impact multipliers are subjective.

### 2. ICE
**Formula:** `ICE Score = Impact × Confidence × Ease`

Simpler than RICE — no Reach input. Faster to run.

| Input | Scale | Notes |
|---|---|---|
| **Impact** | 1–10 | How much does this move the needle? |
| **Confidence** | 1–10 | How sure are you? |
| **Ease** | 1–10 | Inverse of effort: 10 = trivially easy |

**Best for:** Early-stage teams without user data, rapid experimentation queues, growth teams scoring a/b test ideas.
**Use RICE instead when:** You have reach data — RICE prevents overvaluing niche features that feel high-impact but serve 5% of users.

### 3. MoSCoW
**Categories:**
- **Must Have:** Non-negotiable. Product fails without this. MVP gate.
- **Should Have:** Important, high value, not required for launch viability.
- **Could Have:** "Nice to have." Include if time permits; cut without heartburn.
- **Won't Have (this time):** Explicitly out of scope for this cycle. Not "never" — just not now.

**Key discipline:** Must-Have items should be ≤ 60% of available capacity. If everything is Must-Have, nothing is.

**Best for:** Aligning stakeholders before a release, sprint scope decisions, managing executive feature requests.
**Weakness:** Doesn't rank within categories — if you have 10 Must-Haves and capacity for 6, you need a secondary framework.

**Common pairing:** MoSCoW to filter (what's in scope?) + RICE to rank (what order within scope?).

### 4. Kano Model
Classifies features by their effect on customer satisfaction:

| Category | Present | Absent | Implication |
|---|---|---|---|
| **Must-Be (Basic)** | Neutral | Dissatisfied | Table stakes — don't delight, but absence kills |
| **Performance (Linear)** | More = more satisfied | Less = less satisfied | Core differentiators — invest here |
| **Attractive (Delighter)** | Delighted | No dissatisfaction | Surprise features — high ROI when discovered |
| **Indifferent** | No change | No change | Cut or deprioritize |
| **Reverse** | Dissatisfied | Satisfied | Some users actively don't want this |

**How to run a Kano survey:**
For each feature, ask two questions:
1. Functional: "How would you feel if this feature IS present?" → I like it / I expect it / I'm neutral / I can live with it / I dislike it
2. Dysfunctional: "How would you feel if this feature IS NOT present?" → same scale
Cross the answers on the Kano evaluation table to classify each feature.

**Best for:** Feature triage in mature products, customer research-backed roadmap decisions.
**Weakness:** Requires survey design and data collection — too slow for rapid decisions.

### 5. WSJF (Weighted Shortest Job First)
From SAFe (Scaled Agile). Prioritizes by cost of delay relative to job size.

**Formula:** `WSJF = Cost of Delay / Job Duration`

**Cost of Delay = Business Value + Time Criticality + Risk Reduction / Opportunity Enablement**

| Input | 1–10 | Notes |
|---|---|---|
| **Business Value** | 10 = highest | Revenue impact, strategic value |
| **Time Criticality** | 10 = urgent | Does delay compound cost? Compliance deadline? |
| **Risk Reduction / Opportunity Enablement** | 10 = critical | Unblocks other work? Mitigates major risk? |
| **Job Duration** | 1 = small | Relative size estimate (not hours) |

**Example:**
```
Feature: EU data compliance
Business Value: 3
Time Criticality: 10 (legal deadline in 30 days)
Risk Reduction: 8
Job Duration: 5

Cost of Delay = 3 + 10 + 8 = 21
WSJF = 21 / 5 = 4.2
```

**Best for:** SAFe environments, compliance-driven roadmaps, enterprise product teams with regulatory pressures.
**Weakness:** Requires consistent team calibration to avoid score gaming.

## Choosing the right framework

| Situation | Use |
|---|---|
| Competing feature requests, have user data | RICE |
| No user data, need quick scoring | ICE |
| Aligning stakeholders on scope | MoSCoW |
| Understanding customer satisfaction drivers | Kano |
| SAFe/enterprise, time-sensitive items | WSJF |
| Large portfolio, mixed initiative types | MoSCoW to filter + RICE to rank |

## Key questions to ask
- Do I have reach/usage data, or am I estimating? (determines RICE vs. ICE)
- Am I prioritizing features for a release (MoSCoW) or ranking a backlog (RICE)?
- Are stakeholders confused about why certain things are Must-Have? (Run a MoSCoW workshop)
- Is there a time-critical external driver (legal, competitor move)? (WSJF's Time Criticality input)

## Common mistakes
- **Precision theater:** Spending hours debating whether Impact is 2 or 3 — frameworks give relative order, not absolute truth
- **Single-framework dogma:** RICE for everything, even when you have no reach data
- **Must-Have inflation:** Everything becomes Must-Have when no one is willing to own the trade-offs
- **Ignoring Kano basics:** Building delighters without fixing Must-Be gaps destroys satisfaction
- **Score gaming:** Teams learn what inputs produce the desired score and work backwards

## Quick reference

**RICE formula:** `(Reach × Impact × Confidence%) / Effort`
**ICE formula:** `Impact × Confidence × Ease` (all 1–10)
**WSJF formula:** `(Business Value + Time Criticality + Risk Reduction) / Job Size`

**Prioritization session agenda (60 min):**
```
0-10 min:  List all candidates (post-its or sheet)
10-20 min: Define scoring criteria for the chosen framework
20-40 min: Score each item individually, then compare
40-50 min: Debate outliers (items with big score disagreements)
50-60 min: Final ranking + explicit "Won't Do This Cycle" list
```

## Sources
- [RICE framework — intercom.com originator](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)
- [RICE vs ICE vs MoSCoW comparison — productlift.dev](https://www.productlift.dev/blog/product-prioritization-framework-comparison/)
- [WSJF in SAFe — scaledagileframework.com](https://scaledagileframework.com/wsjf/)
- [Kano model guide — kanosurveys.com](https://www.kanosurveys.com/articles/kano-questionnaire-format)
- [Prioritization frameworks comparison — altexsoft.com](https://www.altexsoft.com/blog/most-popular-prioritization-techniques-and-methods-moscow-rice-kano-model-walking-skeleton-and-others/)
- [Atlassian prioritization guide — atlassian.com](https://www.atlassian.com/agile/product-management/prioritization-framework)

[[pm-knowledge-base]]
