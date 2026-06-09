# Conjoint Analysis

## What it is

Conjoint analysis is a survey-based statistical technique that measures how people value different product attributes by forcing trade-off choices. Instead of asking "do you want feature X?" (everyone says yes), it asks "would you pick product A or product B?" and infers valuations from the pattern of choices. It reveals the relative importance of features and their monetary value — what customers will actually give up to get something.

## When to use

- Pricing decisions: what price premium does a feature justify?
- Prioritization: which of 10 candidate features drives the most willingness-to-pay?
- Packaging: how to bundle features into tiers
- Go-to-market: which segment values which feature combination most?
- Pre-build validation: before committing engineering time, test if the feature changes purchase intent

Not the right tool for: discovering unknown needs (use qualitative first), testing usability (use usability testing), or when your sample is under 50 people.

## Core components / steps

### 1. Define attributes and levels
Attributes are the dimensions you want to test (price, feature set, support tier). Levels are the values each attribute can take. Best practice: 3–7 attributes, 2–5 levels each. More than that creates cognitive overload.

Example for a SaaS PM tool:
- Price: $0/mo, $29/mo, $79/mo
- AI features: none, basic suggestions, full autopilot
- Integrations: 3, 15, unlimited
- Support: community, email, dedicated CSM

### 2. Choose conjoint type

**Choice-Based Conjoint (CBC)** — most common. Respondents pick their preferred option from sets of 3–5 full product profiles, repeated 8–15 times. Mirrors real purchase decisions. Good for 4+ attributes. Output: market share simulation.

**Max-Diff (Best-Worst Scaling)** — respondents pick the best AND worst item from a set. Simpler task, works well for feature lists (10–30 items). Does not give monetary value, only relative ranking. Use when you need to quickly rank a large backlog of candidate features.

**Rating-Based Conjoint** — older method, respondents rate profiles. Less realistic than CBC because it does not force trade-offs.

### 3. Field the survey
- Minimum viable sample: 150–200 respondents for CBC; 100 for Max-Diff
- Screen for your ICP — responses from non-buyers are noise
- Keep the survey under 15 minutes; 8–12 choice tasks is the sweet spot
- Test with 5 people before launch to catch confusing attribute descriptions

### 4. Analyze: part-worth utilities
The output of CBC analysis is part-worth utilities — a numeric score for each level of each attribute. Higher utility = more preferred. The gap between levels shows how sensitive customers are to that dimension.

From utilities you can calculate:
- **Relative importance** of each attribute (what percentage of decisions does it drive?)
- **Willingness-to-pay** (WTP) for a specific feature (convert utility points to dollars using the price attribute as a ruler)
- **Market share simulation** (given competitor A offers X, what share do we capture with Y?)

### 5. Tools
- **Conjointly** — purpose-built, outputs WTP and market share simulation directly
- **Qualtrics** — enterprise, advanced analytics, requires stats knowledge
- **SurveyMonkey** — basic conjoint module, simpler but less powerful
- **1000minds** — specialized for PAPRIKA method, good for healthcare/public sector

## Key questions to ask

- What attributes matter most to your ICP — are you testing the right dimensions?
- Are the levels realistic and distinct enough to make choices non-obvious?
- Does your sample represent buyers, not just users?
- What decision will change based on this data? (If the answer is "nothing," skip the study)

## Common mistakes

**Testing too many attributes.** Respondents can only hold ~5 things in mind at once. More attributes = noise, not signal.

**Levels that are not mutually exclusive.** "Basic AI" and "Advanced AI" mean nothing if respondents cannot distinguish them. Use concrete, specific descriptions.

**Skipping screening.** Running conjoint on anyone who completes the survey inflates willingness-to-pay for segments that would never buy.

**Confusing importance with urgency.** A feature can rank high on conjoint but low on current need (e.g., enterprise SSO — important for deals but not what users think about daily).

**Treating part-worth utilities as absolute values.** They are relative to your attribute set. Change the attributes, the utilities change.

## Quick reference

| Method | Best for | Sample size | WTP output? |
|--------|----------|-------------|-------------|
| CBC | Pricing + packaging | 150–300 | Yes |
| Max-Diff | Feature ranking (10–30 items) | 100–150 | No |
| Rating | Simple, low budget | 50+ | Approximate |

**Kano vs Conjoint:** Kano identifies which features are basic (expected), performance (linear satisfaction), or delighter (unexpected). Run Kano first to sort features into categories, then run conjoint to prioritize among performance and delighter features where trade-off value is meaningful.

## Sources

- [Conjointly: What is Conjoint Analysis?](https://conjointly.com/guides/what-is-conjoint-analysis/)
- [Qualtrics: Types of Conjoint Analysis](https://www.qualtrics.com/experience-management/research/types-of-conjoint/)
- [LogRocket: Conjoint analysis for product management](https://blog.logrocket.com/product-management/conjoint-analysis)
- [Driver Research: Choice-Based Conjoint Analysis Guide](https://www.driveresearch.com/market-research-company-blog/choice-based-conjoint-analysis/)
- [HBS Online: What is Conjoint Analysis?](https://online.hbs.edu/blog/post/what-is-conjoint-analysis)

## Related

- [[user-research-methods]]
- [[pricing-strategy-saas]]
- [[obviously-awesome]]
- [[jobs-to-be-done]]
- [[assumption-mapping]]
