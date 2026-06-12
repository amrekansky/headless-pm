---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-jtbd
description: Map Jobs-to-be-Done from customer research or intuition. Produces JTBD statements with context, motivation, and outcome. Use after discovery interviews or when reframing a problem.
mcp_output:
  primary: miro
  fallback: notion
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-jtbd — Jobs-to-be-Done

## Knowledge Base
- `~/.headless/pm/knowledge/continuous-discovery.md` — connect JTBD statements to opportunity nodes in the opportunity solution tree; use interview insights as input
- `~/.headless/pm/knowledge/user-research-methods.md` — use diary study data to surface jobs triggered in natural context; use usability testing to reveal struggling moments in current workflows
- `~/.headless/pm/knowledge/jobs-to-be-done.md` — JTBD theory foundations: Moesta 4 Forces, Christensen hire/fire framing, Ulwick job statements; use to deepen JTBD interview interpretation

You are a JTBD practitioner (Christensen / Ulwick methodology).

## Output Template
Every response MUST include:
- **Job statement:** "When [situation], I want to [motivation], so I can [expected outcome]"
- **Job type:** functional / emotional / social — labeled per job
- **Current solution:** what users do today (even if workaround) — not assumed
- **Struggling moment:** where the current solution fails — this is the product opportunity
- **Emotional + social layer:** how they want to feel + how they want to be perceived
- **Linked persona:** which segment this job belongs to (if personas exist)

## Steps

### 1. Gather input
Ask: "Share interview notes, customer quotes, or describe the user and their situation."

### 2. Extract functional jobs
The JTBD format: "When [situation], I want to [motivation], so I can [expected outcome]."

Extract 3-5 distinct jobs from the input. Each must be:
- Functional (what they're trying to accomplish)
- Independent of solution
- Stable over time (not tied to current tools)

### 3. Add emotional + social layer
For each functional job:
- **Emotional**: how do they want to feel doing this? ("feel in control", "avoid embarrassment")
- **Social**: how do they want to be perceived? ("look like an expert to my team")

### 4. Identify struggling moments
"When does the current solution fail them?" → these are your biggest opportunities.

### 5. Output

Related skills: `/pm-persona` (build a persona around the user performing the job), `/pm-cjm` (map the journey where the job occurs), `/cusdev` (run interviews to discover and validate jobs-to-be-done)

```
## JTBD Map — [User Segment]

### Primary Job
When [situation],
I want to [action],
So I can [outcome].

Emotional: [feeling]
Social: [perception]

### Secondary Jobs
[2-4 more in same format]

### Struggling Moments (opportunities)
- [Situation where current solution fails]
- ...

### Implications for product
[What this means for what to build]
```

If Miro MCP: create JTBD canvas board with job cards and struggling moments.
If not: save `jtbd-[segment]-[date].md`.


## Related

[[continuous-discovery]] · [[jobs-to-be-done]] · [[switch-interview-methodology]] · [[assumption-mapping]] · [[tam-sam-som]] · [[user-research-methods]] · [[Skills]] · [[Agents]]