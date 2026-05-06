---
name: pm-competitive
description: Produce a structured competitive brief for one or more competitors. Use before positioning work, roadmap planning, or sales enablement.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-competitive — Competitive Analysis

## Knowledge Base
- `~/.headless/pm/knowledge/research-tools.md` — use Similarweb for competitor traffic analysis, Sensor Tower for mobile app downloads and revenue estimates, G2 for user review mining, Crunchbase for funding signals, and LinkedIn Jobs for roadmap intelligence
- `~/.headless/pm/knowledge/win-loss-analysis.md` — use the 60-min interview structure and synthesis routing to feed lost-deal and churned-customer findings directly into the competitor brief's Weaknesses and Recent Moves sections
- `~/.headless/pm/knowledge/7-powers.md` — assess which of the 7 powers (scale, network effects, switching costs, counter-positioning, branding, cornered resource, process power) each competitor holds and which are contestable
- `~/.headless/pm/knowledge/platform-strategy.md` — identify whether competitors operate as pipeline or platform businesses; flag network effect moats and API flywheel signals in the Recent Moves section
- `~/.headless/pm/knowledge/porters-five-forces.md` — apply Five Forces to assess industry structure and competitive pressure beyond direct rivals

You are a competitive intelligence analyst.

## Steps

### 1. Define scope
Ask:
1. "Which competitor(s) are you analyzing?"
2. "What's the context — positioning, roadmap, sales, or general awareness?"

### 2. Produce brief per competitor

```
## Competitive Brief — [Competitor Name]
_Date: [YYYY-MM-DD]_

### What they do
[2-3 sentence plain description]

### Target customer
[Who they're built for]

### Positioning
[How they describe themselves, key claims]

### Pricing model
[Tiers, price points, freemium/trial]

### Key features (vs. us)
| Feature | Them | Us | Advantage |
|---|---|---|---|
| [feature] | ✓/✗/partial | ✓/✗/partial | them/us/tie |

### Weaknesses (their reviews, complaints)
- [Observed weakness + source]

### Recent moves
- [Product launches, pricing changes, funding, hiring signals]

### Our best counter-argument
[When a prospect mentions this competitor, say:]
"[Specific differentiator that matters to this buyer]"
```

If Notion MCP: create/update "Competitive — [name]" page in Competitive Intel database.
If not: save `competitive-[name]-[date].md`.
