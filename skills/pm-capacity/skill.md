---
name: pm-capacity
description: Calculate team capacity for a sprint. Accounts for OOO, ceremonies, and realistic throughput. Use before sprint planning.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-capacity — Capacity Planning

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
```
## Capacity — Sprint [N]
Team: [N] engineers
Days: [D]
OOO: [list]

Recommended story point target: [SP]
(based on [V] SP historical velocity, adjusted for [X] OOO days)

⚠ Buffer: leave [10-15]% unallocated for unplanned requests
```
