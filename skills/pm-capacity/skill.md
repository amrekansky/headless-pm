---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-capacity
description: Calculate team capacity for a sprint. Accounts for OOO, ceremonies, and realistic throughput. Use before sprint planning.
mcp_output:
  primary: notion
  fallback: markdown
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-capacity — Capacity Planning

## Knowledge Base
- `~/.headless/pm/knowledge/shape-up.md` — use Shape Up's appetite concept alongside capacity; capacity tells you how many days you have, appetite tells you how many you're willing to spend on a given problem
- `~/.headless/pm/knowledge/dual-track-agile.md` — reserve a portion of sprint capacity for discovery work; delivery-only sprints erode product quality over time

## Output Template
Every response MUST include:
- **Headcount:** N people, names of OOO with dates
- **Available person-days:** formula shown (N people x D days - OOO days - ceremony overhead)
- **Velocity target:** X SP — labeled per person, per sprint
- **Confidence multiplier:** 0.8 applied for unplanned work — shown explicitly
- **Risk flags:** if capacity < 70% of norm — call it out explicitly with recommendation

## Steps

Ask:
1. "How many engineers on the team?"
2. "Sprint length in days?"
3. "Anyone OOO? How many days each?"
4. "What's your historical velocity in story points?"

## Calculation

```
Gross capacity = [N people] × [D days] = [total person-days]
OOO deductions = [sum of OOO days]
Net person-days = gross - OOO

Ceremony overhead (15%):
  Sprint planning: [N hrs] → [person-days]
  Daily standups: [N people × D days × 15min]
  Retro + demo: [N hrs]
  Total ceremony overhead: [X person-days]

Available for development: net - ceremony = [Y person-days]

Confidence multiplier: 0.8 (unplanned work always appears)
Realistic capacity: [Y × 0.8 person-days]

Story point conversion:
  Historical velocity: [V SP/sprint]
  This sprint target: [V × (realistic/avg capacity)] ≈ [SP]
```

Output:
Related skills: `/pm-sprint-plan` (use capacity output to fill the sprint), `/pm-dependencies` (check cross-team dependencies before committing capacity), `/pm-estimation` (estimate items before applying capacity targets)

```
## Capacity — Sprint [N]
Team: [N] engineers
Days: [D]
OOO: [list]

Recommended story point target: [SP]
(based on [V] SP historical velocity, adjusted for [X] OOO days)

⚠ Buffer: leave [10-15]% unallocated for unplanned requests
```


## Related

[[dual-track-agile]] · [[shape-up]] · [[story-mapping]] · [[working-backwards]] · [[pm-rituals]] · [[Skills]] · [[Agents]]