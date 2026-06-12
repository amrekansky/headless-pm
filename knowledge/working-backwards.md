# Working Backwards (Amazon PR/FAQ Method)

## What it is
Working Backwards is Amazon's internal product development discipline: before writing a line of code or allocating headcount, a team writes a press release announcing the finished product from the customer's perspective — and a detailed FAQ covering both external and internal hard questions. The discipline forces clarity about customer value before any resources are committed. Used to launch AWS, Kindle, Prime Video, and Alexa.

## When to use
- Before starting any significant new product or feature (before spec writing, not after)
- When a team can describe what they want to build but can't articulate why a customer would care
- To force alignment between PM, engineering, marketing, and leadership on what success looks like
- As a forcing function when stakeholders have conflicting visions of a product
- NOT for incremental iteration on an already-shipped, well-understood feature

## Core components

### 1. The Press Release (PR)
Written as if the product has just launched. Always less than one page. Structure:
- **Headline:** What is the product, in customer terms
- **Subheadline:** Who is the customer and what do they gain
- **Problem paragraph:** The customer's world before this product existed
- **Solution paragraph:** How the product solves that problem
- **Quote from a company executive:** What this means for the company's mission
- **Call to action:** How customers get started

**Key rule:** Write for a customer, not for an engineer or an exec. If a sentence requires product knowledge to understand, rewrite it.

### 2. The Frequently Asked Questions (FAQ)
Two sections, total length 5 pages or less:

**External FAQ (customer-facing):**
- Questions a curious customer would ask after reading the PR
- What does it do? How does it work? What does it cost? What are limitations?

**Internal FAQ (business-facing — harder and more valuable):**
- What is the business case? What are the input and output metrics?
- What does the technical architecture require?
- What are the biggest risks and how do we mitigate them?
- What assumptions are we making that could be wrong?
- What is the competitive landscape?
- Why would this fail?

### 3. Input Metrics vs. Output Metrics
One of the most important distinctions in the Working Backwards philosophy:

**Output metrics (lagging, result):**
- Revenue, profit, market share, NPS, customer satisfaction
- Tell you what happened — can't be directly controlled
- Wrong thing to set as team targets

**Input metrics (leading, controllable):**
- The specific actions that causally drive the output
- Examples: "Number of unique items available" → drives "Sales revenue"; "Delivery speed" → drives "Customer satisfaction"
- The team's daily and weekly focus should be on moving input metrics

**The test:** Can your team take a direct action today that will measurably change this metric within a week? If yes: input metric. If no: output metric.

### 4. The PR/FAQ Meeting
- Document circulated at the start of the meeting
- 15–20 minutes of silent reading by all attendees
- Discussion is truth-seeking, not selling — the goal is to stress-test the idea
- Authors take notes; the meeting is not a presentation
- It is normal and expected to have 10+ drafts and 5+ review meetings before a PR/FAQ is finalized for a major product

### 5. Iteration Before Investment
The entire value of Working Backwards is that refinement happens in prose, not in code. An insight that would cost 3 months of engineering to discover in production costs 30 minutes to discover in a PR/FAQ review. Teams that skip the method often build the right product but the wrong version of it.

## Key questions to ask
- Can you explain this product to a customer in one clear headline?
- Who specifically is the customer, and what does their life look like before this product?
- What are the input metrics this team can directly control to drive the desired outcome?
- What are the three hardest internal FAQ questions, and do you have credible answers?
- If you had to cut 50% of the scope, what would you keep, and does the PR still make sense?

## Common mistakes
- **Writing the PR as a feature list:** A list of capabilities is not a press release — it must tell a customer story
- **Internal FAQ that avoids hard questions:** The value is precisely in the questions you don't want to answer
- **Treating first draft as good enough:** Amazon teams typically write 10+ drafts; most product teams stop at 1
- **Confusing input and output metrics:** Setting "increase revenue by 20%" as a team goal is an output target — teams need the input metric that drives revenue
- **Writing for the boss:** PRs that use executive language or internal jargon defeat the purpose — test it: could a non-employee customer understand it?

## Quick reference

**PR/FAQ one-page structure:**
```
PRESS RELEASE

[Product Name] + [Launch Date]
[City, Date] —

Headline: [Product name] Does [Core Value] for [Customer]

[Opening paragraph: who benefits and how]

[Problem paragraph: customer's world before]

[Solution paragraph: how the product solves it]

"[Quote from executive about mission alignment]"

[Call to action: how to get started]

---
EXTERNAL FAQ
Q: [customer question]
A: [answer]
... (5-10 questions)

INTERNAL FAQ
Q: What are the input metrics for success?
A: ...
Q: What is the biggest technical risk?
A: ...
Q: Why would this fail?
A: ...
```

**Input vs. output metric test:**
```
Metric → "Can the team take a direct action this week that moves this?"
Yes → Input metric (use as team target)
No  → Output metric (use as success check, not daily focus)
```

## Sources
- Colin Bryar & Bill Carr, *Working Backwards* (2021)
- [PR/FAQ process — workingbackwards.com](https://workingbackwards.com/concepts/working-backwards-pr-faq-process/)
- [PR/FAQ template — workingbackwards.com](https://workingbackwards.com/resources/working-backwards-pr-faq/)
- [Amazon Working Backwards deep dive — coda.io/@colin-bryar](https://coda.io/@colin-bryar/working-backwards-how-write-an-amazon-pr-faq)
- [AWS prescriptive guidance — docs.aws.amazon.com](https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-product-development/start-with-why.html)

[[pm-knowledge-base]]
