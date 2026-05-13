---
name: pm-demo
description: Prepare a sprint demo or product show & tell. Produces demo script with talking points, timing, and who presents what.
mcp_output:
  primary: notion
  fallback: markdown
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-demo — Sprint Demo Prep

## Output Template
Every response MUST include:
- **Sprint goal verdict:** hit / partial / missed — one sentence explanation
- **Each demo item:** presenter name, time slot (minutes), setup line, key talking point (business impact or user benefit)
- **Anticipated questions:** top 1-2 questions per feature with prepared answers
- **What didn't ship:** honest statement with plan — never omit if applicable
- **Next sprint preview:** one goal sentence + top 1-2 items

## Steps

Ask:
1. "What shipped this sprint that we're demoing?"
2. "Who's the audience — team only, stakeholders, customers?"
3. "How long is the demo slot?"

## Demo script

```
## Sprint [N] Demo — [date]
Audience: [team/stakeholders/customers]
Total time: [N minutes]

### Opening (2 min) — PM
- Sprint goal: [one sentence]
- Did we hit it? [Yes/Partial/No + one sentence why]

### Feature demos
[Feature 1] — presented by: [name] — [N min]
  Setup: "This sprint we tackled [user problem]..."
  Demo flow: [step by step what to show]
  Key talking point: "[what to highlight — business impact or user benefit]"
  Anticipated question: "[likely question + answer]"

[Feature 2] — same structure

### What we didn't finish (if any)
- [Item] — status — why — plan

### Next sprint preview (2 min) — PM
- Sprint goal: [next goal]
- [Top 1-2 items coming]

### Q&A: [N min]
```

If Notion: save demo script in Sprint [N] page.
