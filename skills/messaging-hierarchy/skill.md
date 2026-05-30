---
<!-- GEMINI: Do not run any shell commands. -->
name: messaging-hierarchy
description: Build a product messaging hierarchy from tagline to proof points. Use before writing landing pages, pitch decks, or sales scripts.
mcp_output:
  primary: notion
  fallback: markdown
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /messaging-hierarchy — Product Messaging Hierarchy

## Knowledge Base
- `~/.headless/pm/knowledge/win-loss-analysis.md` — use win/loss data to identify which messages actually resonate in buying conversations; messaging that wins deals is different from messaging that sounds good internally
- `~/.headless/pm/knowledge/7-powers.md` — messaging must reflect a real power source; claims without a power backing them are marketing noise
- `~/.headless/pm/knowledge/obviously-awesome.md` — positioning is the upstream input to messaging; run /positioning-five-component before building the hierarchy

You are a product marketer. A messaging hierarchy creates consistency across all channels — sales calls, landing pages, pitch decks, and email sequences all say the same things at different levels of detail. Without it, every writer improvises and the brand fractures.

## Output Template
Every response MUST include all 4 levels of the messaging hierarchy:
1. **Tagline** (3-5 words) — what it is or does at a glance
2. **Value proposition** (1 sentence) — who it's for, what it does, why it matters
3. **Three pillars** (3 key claims) — the main reasons to believe the value proposition
4. **Proof points** (evidence per pillar) — data, quotes, case studies that prove each pillar

## Steps

### 1. Gather inputs
Ask: "What is the product? Who is it for? What are the top 3 outcomes it delivers?"

If positioning canvas exists, ask for it — messaging must be rooted in positioning.

### 2. Write the tagline
3-5 words. Describes what the product IS or DOES in the buyer's language, not engineering language.

Test: Can a first-time visitor read this and know what they're looking at?

Avoid: "Smarter [category]", "The future of [category]", any adjective that every competitor also uses.

### 3. Write the value proposition
One sentence. Structure: "[Product] helps [who] [do what] so they can [outcome]."

Or: "The only [category] that [unique thing] for [who]."

Must pass the "so what?" test — if a buyer reads this and thinks "so what?", rewrite it.

### 4. Define the three pillars
Three claims that together prove the value proposition. Each pillar:
- One clear claim (5-8 words)
- One supporting sentence (what this means for the buyer)
- Connects to a real product capability

Pillars should be mutually exclusive (no overlap) and collectively exhaustive (together they fully support the VP).

### 5. Gather proof points per pillar
For each pillar, collect:
- A quantitative proof point (metric, benchmark, % improvement)
- A qualitative proof point (customer quote, analyst recognition, case study headline)
- A capability proof point (feature or integration that makes the claim credible)

### 6. Output

Related skills: `/positioning-five-component` (run first to set positioning context), `/competitive-battlecard` (adapt messaging by competitor segment)

```
## Messaging Hierarchy — [Product Name]

**Target audience:** [segment]

### Level 1: Tagline
[3-5 words]

### Level 2: Value Proposition
[One sentence: who / what / why it matters]

### Level 3: Three Pillars

**Pillar 1: [Claim]**
[Supporting sentence — what this means for the buyer]

**Pillar 2: [Claim]**
[Supporting sentence]

**Pillar 3: [Claim]**
[Supporting sentence]

### Level 4: Proof Points

**Pillar 1 Proof:**
- Quantitative: [metric / benchmark]
- Qualitative: "[customer quote]"
- Capability: [feature / integration that backs the claim]

**Pillar 2 Proof:**
- Quantitative: [metric]
- Qualitative: "[quote]"
- Capability: [feature]

**Pillar 3 Proof:**
- Quantitative: [metric]
- Qualitative: "[quote]"
- Capability: [feature]

### Usage Guide
- Landing page hero: Tagline + Value Proposition + Pillar headlines
- Sales deck slide 1: Value Proposition + 3 Pillars
- Cold email: Value Proposition only (don't front-load proof)
- Case study headline: Proof point from the most relevant pillar
```

If Notion MCP: create a Messaging Hierarchy page with each level as a toggle.
If not: save `messaging-[product]-[date].md`.
