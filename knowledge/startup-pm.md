# PM in Startups

## What it is

Being a PM at a startup is structurally different from being a PM at a growth-stage or public company. The startup PM operates with minimal data, unlimited ambiguity, direct founder relationships, and existential stakes on every product decision. The role blends classic product management with fundraising fluency, board communication, and the ability to build a PM function from scratch.

The canonical startup PM frameworks come from YC (Paul Graham's essays on doing things that don't scale, default alive), Ben Horowitz's *The Hard Thing About Hard Things*, and Marty Cagan's *Inspired* — which specifically addresses pre-PMF product work. The key tension: startup PMs must ship fast to learn while also not building so much that pivots become expensive.

## When to use

- When joining a pre-Series B company as first or early PM
- When building a 0→1 product in an innovation team inside a larger company
- When the company is approaching a fundraise and product milestones need to be tied to the round
- When the PM needs to present to the board or investors for the first time
- When evaluating whether to take a "PM at startup" role

## Core components / steps

### Fundraising Basics for PMs

PMs at startups are not the fundraisers — but they generate all the evidence that makes fundraising possible. Understanding the stage thresholds helps PMs prioritize.

**Stages and what investors are actually buying:**

| Stage | Typical check | What they're funding | PM evidence needed |
|-------|---------------|---------------------|-------------------|
| Pre-seed | $250K–$1M | Team + vision | Product exists or prototype |
| Seed | $1M–$4M | Problem validation | Users exist, some retention signal |
| Series A | $5M–$20M | PMF evidence | Retention curve flattening, cohort data |
| Series B | $20M–$50M | Growth efficiency | LTV:CAC, CAC payback, expansion |
| Series C+ | $50M+ | Scale mechanics | NRR, market share, competitive moat |

**What PMs control**: retention, activation, engagement metrics, NPS, expansion revenue signals — all of which appear in investor decks. A PM who can articulate "our 6-month retention is 78% vs the 40% industry benchmark" is directly supporting the A round.

### Pitch Deck Structure

PMs often help build pitch decks or are referenced in them. The canonical structure (YC Demo Day, a16z standard):

1. **Problem** — Specific, painful, large. One slide. No jargon.
2. **Solution** — What you built. Demo or screenshot.
3. **Market** — TAM/SAM/SOM. Investors care about SAM more than TAM.
4. **Traction** — Numbers that show real demand. Revenue, growth rate, retention, key customers.
5. **Business Model** — How you make money. Pricing, margins.
6. **Competition** — 2×2 matrix or competitor table. Why you win.
7. **Team** — Why this team for this problem.
8. **Ask** — How much, what it unlocks (milestones), use of proceeds.

**PM's contribution to the deck**: own the traction and product slides. Be ready to explain every number.

### Board Communication

Most PMs at Series A+ startups eventually present to the board or prepare materials for board meetings.

**Board deck format (monthly or quarterly):**
- Scorecard: 5–8 key metrics vs target vs last period
- Narrative: What happened, what we learned, what we're changing
- Product milestones: shipped vs committed, next quarter plan
- Risks: honest list, not sanitized

**Writing for the board:**
- Lead with numbers, not narrative
- Use traffic light (red/yellow/green) for metric status
- Don't bury bad news — lead with it and follow with the plan
- One page per topic maximum

**The board is not your customer**: boards make capital allocation and governance decisions. They want signal, not detail. A PM presenting to the board should be prepared for "why" questions, not "how" questions.

### Runway Management and Product Decisions

**Default alive vs default dead** (Paul Graham): at current burn and growth rate, does the company reach profitability before running out of money? If not, every product decision has a runway implication.

**Runway-constrained product decisions:**
- Cut features that delay the next fundraising milestone by > 2 months
- Prioritize anything that improves retention (LTV) over acquisition (top of funnel)
- Avoid long infrastructure bets unless they directly unlock the next milestone
- Be explicit about the "fundraising feature" — the one thing that, if it works, proves the thesis to the next investor

**Burn multiple** (Bessemer Ventures): Total net burn / Net new ARR. If it takes $2 of burn to generate $1 of ARR, your burn multiple is 2×. Investors want this below 1.5× at Series B.

### Scaling the PM Function

At a 10-person startup, there is no PM function — the founder is the PM. At 30–50 people, a PM joins. At 100+, a PM function forms. The first PM is responsible for building the practices:

**What to establish first (priority order):**
1. Customer interview cadence (minimum 5 discovery calls per month)
2. Product spec template (even a simple one-pager)
3. Prioritization framework (even basic ICE scoring)
4. Metrics dashboard (define 3–5 key metrics, measure them weekly)
5. Roadmap communication (stakeholders need to know what's coming)

**What to defer:**
- Formal product review processes (adds overhead too early)
- Elaborate OKR systems (overhead before PMF)
- Hiring a second PM (first PM should operate for 6–12 months before scaling)

## Key questions to ask

- Are we default alive at our current burn and growth trajectory?
- What are the 2–3 metrics that will determine whether the next round closes?
- Does the product roadmap have a clear path to the Series A evidence we need?
- Is the board seeing the same product reality as the team, or is the narrative sanitized?
- Are we building for learning speed (right pre-PMF) or building for scale (right post-PMF)?

## Common mistakes

- **Confusing activity with progress**: Pre-PMF startups often ship many features. The right question is: are users changing behavior because of what we shipped?
- **Ignoring the fundraising milestone**: PMs sometimes optimize for great product work without connecting it to "what does the next investor need to see?"
- **Over-building before PMF**: Clean architecture, test coverage, and scalability do not matter if nobody wants the product. Cut scope to learn faster.
- **Sanitizing board decks**: Boards make better decisions with accurate information. PMs who hide problems slow the company's ability to fix them.
- **Hiring PMs too early**: The first PM hire should be made when the founding team is overwhelmed with product decisions — not as a status symbol or to follow a playbook.

## Quick reference

```
Fundraising milestones (what PMs must prove):
  Seed    → users exist, some retention
  Series A → PMF evidence (retention curve flattening)
  Series B → growth efficiency (LTV:CAC, burn multiple)

Burn multiple = Net Burn / Net New ARR
  Target: < 1.5x at Series B

Default alive check: growth revenue > monthly burn → alive
                     growth revenue < monthly burn → dead

Board communication: numbers first → narrative → risk → ask
```

| Stage | PM priority | Avoid |
|-------|-------------|-------|
| Pre-seed | Build prototype, talk to 50 users | Roadmaps, processes |
| Seed | Find PMF signal, obsess over retention | Scaling features |
| Series A | Prove growth efficiency | Large rewrites |
| Series B | Build the PM function | Hiring too fast |

## Sources

- [Default Alive or Default Dead — Paul Graham (2015)](http://www.paulgraham.com/aord.html)
- [The Hard Thing About Hard Things — Ben Horowitz (2014)](https://www.harpercollins.com/products/the-hard-thing-about-hard-things-ben-horowitz)
- [Inspired: How to Create Tech Products Customers Love — Marty Cagan (2nd ed., 2018)](https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/)
- [Burn Multiple — Bessemer Venture Partners](https://www.bvp.com/atlas/eight-laws-for-a-cloud-business)
- [Pitch Deck Guide — YC Startup School](https://www.startupschool.org/library)
- [SaaS Metrics for Fundraising — David Skok (ForEntrepreneurs)](https://www.forentrepreneurs.com/saas-metrics-2/)

## Related

- [[lean-startup]]
- [[7-powers]]
- [[tam-sam-som]]
- [[hiring-pms]]
- [[shape-up]]
