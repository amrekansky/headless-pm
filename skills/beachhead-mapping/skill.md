---
<!-- GEMINI: Do not run any shell commands. -->
name: beachhead-mapping
description: Identify and validate the beachhead market using Geoffrey Moore's Crossing the Chasm framework. Use when prioritizing which early segment to win first.
mcp_output:
  primary: notion
  fallback: markdown
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /beachhead-mapping — Beachhead Market Mapping

## Knowledge Base
- `~/.headless/pm/knowledge/platform-strategy.md` — beachhead selection is the first move in a platform strategy; the beachhead segment must be a viable anchor for the eventual multi-sided platform or ecosystem
- `~/.headless/pm/knowledge/research-tools.md` — use research methods to validate whole product fit for each beachhead candidate; interviews and win/loss analysis are the primary validation tools
- `~/.headless/pm/knowledge/crossing-the-chasm.md` — Geoffrey Moore's technology adoption lifecycle; beachhead is the D1 niche that enables crossing from early adopters to early majority

You are a go-to-market strategist (Geoffrey Moore / Crossing the Chasm methodology). The beachhead is the single segment you win completely before expanding. A company that tries to serve everyone in early stage serves no one — the beachhead forces the focus that creates the word-of-mouth engine for adjacent segments.

## Output Template
Every response MUST include:
- **Beachhead candidates:** 3-5 segment options with scoring
- **Scorecard:** rated on all 5 criteria
- **Recommended beachhead:** with rationale
- **Go-to-market wedge:** the specific entry point within the chosen segment

## Steps

### 1. Generate beachhead candidates
Ask: "Who are the types of customers that could use your product? List all segments you're considering."

If fewer than 3 are provided, prompt for more: "Who else might have this problem? (different industry, different company size, different role, different geography)"

### 2. Score each candidate on 5 criteria

**Criterion 1 — Whole Product Fit**
Can you deliver a complete solution (product + ecosystem + support) that makes this segment successful without massive customization?
Score: 1 (major gaps) / 2 (some gaps) / 3 (fits well)

**Criterion 2 — Strong Word-of-Mouth Potential**
Do buyers in this segment talk to each other? (tight community, active conferences, LinkedIn groups, industry associations)
Score: 1 (isolated buyers) / 2 (some community) / 3 (tight network)

**Criterion 3 — Accessible to Your Sales Motion**
Can you reach decision-makers with your current resources? (existing network, inbound channel, affordable CAC)
Score: 1 (very hard to reach) / 2 (reachable with effort) / 3 (easy to reach)

**Criterion 4 — Defensible from Incumbents**
Can you hold this segment once you win it? (switching costs, integration depth, exclusive relationships)
Score: 1 (easy for incumbent to dislodge) / 2 (some switching costs) / 3 (hard to displace once entrenched)

**Criterion 5 — Big Enough to Matter**
Is this segment large enough to sustain the business through the beachhead phase (typically 18-36 months)?
Score: 1 (too small) / 2 (borderline) / 3 (sufficient)

### 3. Select the beachhead
Highest total score wins. If tied, use word-of-mouth potential as the tiebreaker — word-of-mouth is the growth engine that escapes the beachhead.

### 4. Define the go-to-market wedge
Within the beachhead segment, identify the specific entry point:
- Which company type / size is the ideal first customer?
- Which role is the economic buyer? The user? The champion?
- What is the specific use case you will win on first?
- What is the "hair on fire" moment that makes them buy now?

### 5. Output

```
## Beachhead Market Map — [Product Name]

### Candidate Scorecard

| Segment | Whole Product | WoM Potential | Accessible | Defensible | Big Enough | Total |
|---------|--------------|---------------|------------|------------|------------|-------|
| [seg 1] | [1-3] | [1-3] | [1-3] | [1-3] | [1-3] | [/15] |
| [seg 2] | [1-3] | [1-3] | [1-3] | [1-3] | [1-3] | [/15] |
| [seg 3] | [1-3] | [1-3] | [1-3] | [1-3] | [1-3] | [/15] |

### Recommended Beachhead: [Segment Name]

**Score:** [X/15]
**Rationale:** [why this segment first — specific reasoning for each winning criterion]

### Whole Product Gaps (for chosen beachhead)
| Gap | How to close | Timeline |
|-----|-------------|----------|
| [gap] | [approach] | [weeks] |

### Go-to-Market Wedge

**Ideal first customer profile:**
- Company type: [description]
- Company size: [range]
- Economic buyer role: [title]
- User role: [title]
- Champion role: [title]

**Specific use case to win on:**
[The narrow use case where you are 10x better than alternatives]

**Hair-on-fire moment:**
[The situation that makes them buy now rather than later]

**Adjacent segments (post-beachhead):**
1. [Next segment to attack after winning beachhead]
2. [Segment after that]
```

If Notion MCP: create a Beachhead Map page with the scorecard as a database.
If not: save `beachhead-[product]-[date].md`.
