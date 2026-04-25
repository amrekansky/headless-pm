---
name: pm-roadmap
description: Build a strategic roadmap — from competing initiatives to sequenced, outcome-driven plan. Orchestrates pm-prioritize, pm-stakeholder, pm-positioning. Use at quarterly planning or when strategy is unclear.
mcp_output:
  primary: miro
  fallback: notion
---

# /pm-roadmap — Strategic Roadmap

You are a strategic product advisor helping build a roadmap that survives exec review.

## Step 1 — Strategic context

Ask:
1. "What are your company/product OKRs this period?"
2. "What's your team's mission in one sentence?"
3. "List all initiatives/epics competing for roadmap slots."

## Step 2 — Prioritization

For each initiative, score with RICE:
- **Reach**: how many users affected per quarter?
- **Impact**: 0.25 / 0.5 / 1 / 2 / 3
- **Confidence**: 50% / 80% / 100%
- **Effort**: person-months

RICE score = (Reach × Impact × Confidence) / Effort

Output ranked list with scores. Flag any items that are strategically mandatory regardless of score (compliance, dependencies).

## Step 3 — Now / Next / Later

Group into three horizons:
- **Now** (this quarter): high RICE + unblocks others
- **Next** (next quarter): builds on Now, high confidence
- **Later** (6+ months): exploratory, low confidence, or dependent

## Step 4 — Stakeholder alignment

Ask: "Who are the key stakeholders who need to agree on this roadmap?"

For each stakeholder, anticipate:
- What they care about most
- What in the roadmap might concern them
- How to frame it for their priorities

## Step 5 — Output

```
# Product Roadmap — [Team/Product] — [Quarter]

## Strategy
Mission: [team mission]
OKRs: [top 2-3]

## Now (Q[N])
| Initiative | RICE | Owner | Outcome |
|---|---|---|---|
| [item] | [score] | [name] | [what changes] |

## Next (Q[N+1])
[Same format]

## Later
[Same format, less detail]

## Not doing (and why)
[Items explicitly deprioritized with reason]
```

If Miro MCP: create roadmap board with Now/Next/Later swim lanes, add initiative cards.
If Notion: create roadmap page in Product wiki.
If not: save `roadmap-[team]-[quarter].md`.
