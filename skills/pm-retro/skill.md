---
name: pm-retro
description: Facilitate a sprint retrospective. Structured, action-oriented — one concrete experiment per retro. Outputs to Miro or Notion.
mcp_output:
  primary: miro
  fallback: notion
agent: true
artifact_output: .pm/artifacts/retro.md
---

<!-- GEMINI: Do not run any shell commands. When invoked as agent, first read .pm/artifacts/sprint-plan.md and .pm/artifacts/progress-report.md, then generate retro.md as described in ## Agent Output. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output

## Agent Input

When invoked as agent, read before generating output:
1. `.pm/artifacts/sprint-plan.md` — what was committed this sprint
2. `.pm/artifacts/progress-report.md` — what actually happened, blockers encountered
3. MCP (Jira/Linear): closed tickets, merged PRs, velocity for this sprint


# /pm-retro — Retrospective

## Knowledge Base
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — reference industry benchmarks for activation, retention, and feature adoption when evaluating whether sprint outcomes moved the needle or fell short of norms
- `~/.headless/pm/knowledge/okr-implementation.md` — tie the "one experiment" outcome to a specific KR so the retro produces measurable process improvement; use CFR (Conversations, Feedback, Recognition) framing to structure the retro discussion rather than generic Start/Stop/Continue

## Output Template
Every response MUST include:
- **Went well:** 3+ items
- **Painful:** 3+ items — each with a root cause hypothesis (5-whys), not just description
- **Try next sprint:** exactly ONE action — owner, success metric, due date
- **Shape Up circuit breaker check:** did any work exceed its appetite this sprint? Name it.
- **Retro health signal:** participation count, psychological safety note

## Format
Start/Stop/Continue + one experiment. Time-boxed to 45 min.

## Steps

### 1. Set the stage (5 min)
Remind the team: this is a safe space. We improve systems, not blame people.
Focus period: [last sprint dates].

### 2. Individual reflection (5 min silent)
Each person writes:
- What went well?
- What was painful or slowed us down?
- What should we try differently?

### 3. Share & cluster (15 min)
Group similar items. Vote on top 3 pains.

### 4. Dig into top pain (10 min)
5 Whys on the highest-voted pain:
Why → Why → Why → Why → Why → Root cause

### 5. One experiment (10 min)
Identify ONE specific change to try next sprint:
- What: [specific action]
- Owner: [one person]
- Success looks like: [measurable outcome]
- Check-in: [when we evaluate it]

### Output

```
## Retro — Sprint [N] — [date]

### Went well (keep doing)
- [item]

### Painful (stop or fix)
- [item] (top voted)

### Root cause of top pain
Why [pain]? → [answer]
Why [answer]? → [answer]
...
Root cause: [statement]

### Experiment next sprint
What: [specific action]
Owner: [name]
Success: [what we'll observe if it worked]
Check-in: sprint [N+1] retro

### Retrospective health
Participation: [N/N people]
Psychological safety: felt safe / had one quiet person / dominated by one voice
```

If Miro MCP: create retro board — three columns (went well / painful / try), add voted stickies, document experiment card.
If Notion: save retro page linked to sprint.

## Agent Output

When invoked as agent, write retro to `.pm/artifacts/retro.md` using existing Output Template format. Add at the end:
- **Agent summary:** 1-sentence status for orchestrator log

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-retro completed → .pm/artifacts/retro.md
```
