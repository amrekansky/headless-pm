---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-portfolio
description: Portfolio view across multiple products or teams. Tracks health, priorities, and resource allocation. Use for Directors, VPs, and PMO managing multiple teams.
mcp_output:
  primary: notion
  fallback: miro
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-portfolio — Portfolio Management

## Output Template
Every response MUST include:
- **Portfolio health table:** Product / Stage / RAG status / Top priority / Top risk / Resources — for each product
- **Resource allocation vs strategy:** % of resources per strategic priority — flag misalignments
- **Cross-portfolio risks:** shared dependencies, resource contention, competing audiences
- **Decisions needed:** named decision-maker + by-when per item
- **Spotlight:** 2-3 sentences on the product needing most cross-portfolio attention

## Steps

Ask:
1. "How many products/teams are in your portfolio?"
2. "What's your main concern — health, prioritization, or resource allocation?"

## Portfolio health dashboard

For each product/team:
- **Stage**: discovery / building / scaling / maintaining / sunsetting
- **Health**: 🟢 on track / 🟡 at risk / 🔴 off track
- **Top priority this quarter**
- **Top risk**
- **Resource**: [N engineers, N PMs]

```
## Portfolio — [Your Name/Team] — [Quarter]

| Product | Stage | Health | Priority | Top Risk | Resources |
|---|---|---|---|---|---|
| [product] | [stage] | 🟢/🟡/🔴 | [one item] | [risk] | [headcount] |

### Portfolio risks
[Cross-portfolio risks — shared dependencies, competing for same users, resource contention]

### Resource allocation vs. strategy
| Strategic priority | % portfolio resources | Assessment |
|---|---|---|
| [priority] | [%] | over/under/aligned |

### Decisions needed this quarter
| Decision | Who | By when |
|---|---|---|
| [decision] | [exec] | [date] |

### Spotlight: [product needing attention]
[2-3 sentences on what needs cross-portfolio attention and why]
```

If Notion: create/update Portfolio page in Leadership space.
If Miro MCP: create portfolio roadmap view with all products as swim lanes.
