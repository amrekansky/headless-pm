# Porter's Five Forces

## What it is

Porter's Five Forces is a competitive analysis framework created by Michael Porter (1979) that maps the five structural forces determining industry profitability. It goes beyond direct competition: you are not just competing with other products but fighting for profit against suppliers, buyers, substitutes, and potential entrants. For PMs, it answers: "Why is this market structurally attractive or unattractive, and where do we have leverage?"

## When to use

- Building or reviewing product strategy (not daily roadmap work)
- Entering a new market or launching a new product line
- Evaluating an M&A target or a market pivot
- Pre-seed/Series A: understanding whether the market is structurally winnable
- Competitive moat assessment: what is keeping margins healthy or compressing them?

Not for: tactical roadmap prioritization, sprint planning, or quarterly execution reviews. This is a quarterly-to-annual strategy exercise.

## Core components / steps

### Force 1: Threat of New Entrants
How easy is it for a new competitor to enter? High threat = compressed margins.

Tech-specific entry barriers:
- Network effects (Slack, LinkedIn) — hard to replicate
- Data moats (medical AI trained on proprietary data)
- Regulatory switching costs (SOC 2, HIPAA certification is expensive to duplicate)
- Open source and cloud have dramatically lowered entry barriers in most SaaS categories: AWS + LLMs mean a solo founder can build an MVP in weeks

PM question: What would it take for a well-funded startup to undercut us in 18 months?

### Force 2: Bargaining Power of Suppliers
Who do you depend on, and can they squeeze your margins? For software companies:
- Cloud providers (AWS, GCP, Azure) — high dependency, but commoditized enough to limit extraction
- LLM API providers (OpenAI, Anthropic) — currently high power; switching costs are real
- Specialized talent — senior ML engineers have high bargaining power
- Open source dependencies — low power (no one to negotiate with, but security/maintenance risk)

PM question: Which of our key inputs could be repriced or withdrawn, and how would that break our unit economics?

### Force 3: Bargaining Power of Buyers
How much leverage do your customers have?

High buyer power signals:
- Customers buy in large volumes (enterprise with $500K ARR deal has enormous leverage)
- Products are standardized — easy to switch
- Buyers have full pricing information (G2 reviews, open pricing pages)
- Low switching costs (month-to-month SaaS without data lock-in)

Low buyer power signals:
- Fragmented customer base (SMB with 10,000 accounts)
- Deep workflow integration (data lives in your system)
- High re-training cost to switch

PM question: How many customers could leave in one quarter and still leave us viable?

### Force 4: Threat of Substitutes
Not just competitors — adjacent solutions that serve the same job-to-be-done differently.

Examples in tech:
- Notion vs. Confluence vs. a shared Google Doc — the substitute is not always in the same category
- No-code tools substituting custom software
- Generalist AI assistants substituting specialized tools (ChatGPT substituting many B2B SaaS point solutions)

AI era update: LLMs are acting as universal substitutes across knowledge work categories. Any product that primarily provides information retrieval or text generation faces substitution pressure.

PM question: What would a customer do if our product didn't exist? Is that path becoming easier or harder over time?

### Force 5: Competitive Rivalry
Intensity of competition among existing players. Factors:

High rivalry signals:
- Many similarly-sized competitors (no clear leader)
- Slow market growth (share is won only by taking it from others)
- Low differentiation / feature parity
- High exit barriers (companies fight to stay alive even when unprofitable)

Low rivalry signals:
- Clear market leader with 60%+ share
- Fast-growing market (rising tide, everyone grows)
- High switching costs across the category

PM question: Is our competitive advantage durable, or will rivals copy the differentiator within 12 months?

## Key questions to ask

1. Which of the five forces is currently most threatening to our margins?
2. Is our moat located in a force we can actually influence?
3. How does AI change the threat of substitutes and new entrants in our category?
4. Where do we have structural advantage a competitor cannot easily replicate?
5. Which force would deteriorate fastest if we grew 10x?

## Common mistakes

**Treating it as a one-time exercise.** Market structure shifts. Run the analysis annually, or when a major external change occurs (new funded competitor, LLM breakthrough, regulatory shift).

**Ignoring substitutes that are not direct competitors.** The iPhone substituted point-and-shoot cameras before camera companies realized it. Substitutes are often cross-category threats.

**Confusing strong forces with bad strategy.** High buyer power is a market reality — the strategic response is to build switching costs, not to ignore the force.

**Running the analysis at too broad a level.** "SaaS" is not useful. "Project management tools for distributed product teams under 50 people" gives actionable signal.

**Stopping at description without deriving strategic implications.** Each force should generate at least one strategic action or decision.

## Quick reference

| Force | Key question | Lever to reduce it |
|-------|-------------|-------------------|
| New entrants | How easy to copy us? | Build network effects, data moats, compliance barriers |
| Supplier power | Who can raise our costs? | Diversify dependencies, build abstractions |
| Buyer power | How easy to leave? | Deepen integration, own the data |
| Substitutes | What else solves this? | Expand the job-to-be-done, bundle |
| Rivalry | How competitive is the field? | Differentiate, focus on a defensible niche |

## Sources

- [Aakash Gupta: Porter's 5 Forces for Product](https://www.news.aakashg.com/p/porters-5-forces-for-product)
- [MTLC: Revising Porter's Five Forces in the Age of AI](https://www.mtlc.co/revising-porters-five-forces-analysis-in-the-age-of-ai/)
- [Cascade: Porter's Five Forces Complete Guide](https://www.cascade.app/blog/porters-5-forces)
- [Flevy: Five Forces Technology Company Case Study](https://flevy.com/topic/porters-five-forces-analysis/case-porters-five-forces-analysis-refresh-technology-software-company)
