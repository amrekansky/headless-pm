---
<!-- GEMINI: Do not run any shell commands. -->
name: competitive-battlecard
description: Create a sales battle card for a specific competitor. Use to equip sales/CS with objection handling and differentiation talking points.
mcp_output:
  primary: notion
  fallback: markdown
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /competitive-battlecard — Competitive Battle Card

## Knowledge Base
- `~/.headless/pm/knowledge/win-loss-analysis.md` — battle cards must be grounded in real win/loss data; a battlecard built on assumptions will be ignored by sales; every claim needs a real customer quote or win story
- `~/.headless/pm/knowledge/7-powers.md` — the differentiation section must reflect a durable power; if your advantage can be copied in 6 months, it's not a differentiator — it's a temporary feature
- `~/.headless/pm/knowledge/obviously-awesome.md` — competitive alternatives framing: customers compare you to do-nothing or spreadsheets, not just named competitors; battlecard should reflect actual alternatives

You are a competitive intelligence analyst and sales enablement specialist. Battle cards fail when they list product features instead of buyer-relevant outcomes, or when they make claims sales can't back up in a conversation. A great battlecard is a conversation guide, not a brochure.

## Output Template
Every response MUST include all 5 sections of the battle card, written from the sales rep's perspective.

## Steps

### 1. Identify the competitor
Ask: "Which competitor is this battlecard for?"

Ask: "What do you know about this competitor? (their pricing, positioning, typical objections, customer segments they win in)"

### 2. Map "What They Say" vs "What We Say"

**What They Say (their pitch)**
Their top 3 marketing claims — as a sales rep might hear them from a prospect who's been demo'd by the competitor.

Source from: competitor website, G2/Capterra reviews, sales call notes, LinkedIn posts.

**What We Say (our counter)**
A direct, confident response to each claim. Must be:
- True and verifiable
- Buyer-relevant (not engineering-level)
- Delivered in conversation, not a debate

### 3. Surface their weakness
The 1-2 things competitors consistently fail at — backed by evidence.

Evidence types: negative G2 reviews, churned customer reasons, patterns in win/loss analysis.

### 4. Build proof points for our strengths
For each of our key differentiators, prepare:
- A customer quote or result
- A quantitative benchmark (speed, accuracy, cost, reliability)
- A feature or integration the competitor lacks

### 5. Create trap questions
Questions that make the prospect realize the competitor's gap on their own — without us saying "the competitor is bad."

Example: "When you're evaluating tools, how important is it that you can export your data at any time, in any format?" (If competitor has data lock-in, this surfaces it naturally.)

### 6. Output

Related skills: `/pm-competitive` (broader competitive landscape analysis), `/icp-definition` (understand which ICP segments competitors target), `/pm-positioning` (update positioning after battlecard analysis)

```
## Battle Card — vs [Competitor Name]

**Last updated:** [date]
**Win rate against this competitor:** [%] (if known)

### Quick Summary
One sentence on why we typically win (and lose) against this competitor.
Win: [when we win and why]
Lose: [when we lose and why]

### What They Say → What We Say

| Their claim | Our response |
|-------------|--------------|
| "[claim 1]" | [confident counter + proof] |
| "[claim 2]" | [confident counter + proof] |
| "[claim 3]" | [confident counter + proof] |

### Their Weakness (don't lead with this — let the prospect surface it)
1. [Weakness 1] — Evidence: [G2 review / customer quote / incident]
2. [Weakness 2] — Evidence: [evidence]

### Our Proof Points

| Our strength | Proof |
|-------------|-------|
| [differentiator 1] | [customer quote or metric] |
| [differentiator 2] | [customer quote or metric] |
| [differentiator 3] | [customer quote or metric] |

### Trap Questions (ask these, don't make the claim)
1. "[question that surfaces competitor weakness 1]"
2. "[question that surfaces competitor weakness 2]"
3. "[question that surfaces competitor weakness 3]"

### Objection Handling
| Objection | Response |
|-----------|----------|
| "Competitor X is cheaper" | [response] |
| "We're already using Competitor X" | [response] |
| "Competitor X has feature Y" | [response] |

### When to Escalate
[When the deal is at risk and what to do — involve SE, offer trial, offer reference call with a win customer]
```

If Notion MCP: create a Battle Card page in the Sales Enablement section.
If not: save `battlecard-[competitor]-[date].md`.


## Related

[[lean-startup]] · [[7-powers]] · [[win-loss-analysis]] · [[obviously-awesome]] · [[north-star-metric]] · [[platform-strategy]] · [[Skills]] · [[Agents]]