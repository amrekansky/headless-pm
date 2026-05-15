---
name: pm-status
description: Generate a status update for one or more projects/features. For stakeholders, execs, or weekly digests. Use weekly or when asked for a project update.
agent: true
artifact_output: .pm/artifacts/status-report.md
mcp_output:
  primary: confluence
  fallback: slack
---

<!-- GEMINI: Do not run any shell commands. Read .pm/artifacts/progress-report.md, .pm/artifacts/sprint-plan.md, .pm/situation.md, and .pm/goals.md, then write status-report.md as described in ## Agent Output. -->
<!-- CODEX: Read progress-report.md, sprint-plan.md, situation.md, then write status-report.md. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


## Agent Input

When invoked as agent, read before generating output:
1. `.pm/artifacts/progress-report.md` — sprint progress data (if exists)
2. `.pm/artifacts/sprint-plan.md` — committed items and goals
3. `.pm/situation.md` — current blockers and deadlines
4. `.pm/goals.md` — OKR progress context


# /pm-status — Status Report

## Knowledge Base
- `~/.headless/pm/knowledge/pyramid-principle.md` — lead the executive variant with BLUF; use SCR narrative to frame risks and blockers so the audience understands situation before complication

## Output Template
Every response MUST include (Pyramid Principle: answer-first):
- **Overall RAG status:** Green / Yellow / Red with one-sentence rationale
- **Sprint goal:** stated, with hit/miss/partial verdict
- **Shipped items:** with business impact per item (not just feature name)
- **Blocked items:** blocker owner + consequence if unresolved by [date]
- **Decisions needed:** named decision-maker + deadline
- **Audience adaptation:** executive variant = one paragraph BLUF; team variant = full detail

## Ask first
"Who is this for — team, stakeholders, or executives?"

Team → more detail, technical context ok
Stakeholders → outcome-focused, risks prominent
Executives → one page, business impact only

## Steps

Ask:
1. "What project(s) are you reporting on?"
2. "What's the current sprint or timeframe?"
3. "What shipped, what's in progress, what's blocked?"

## Output format

```
## Status Report — [Project] — [Date]
**Overall:** 🟢 On track / 🟡 At risk / 🔴 Off track
**Sprint:** [N] | **Goal:** [one sentence]

### Shipped ✓
- [Feature/fix] — [business impact, one line]

### In Progress
- [Item] — [% done] — ETA: [date]

### Blocked ⚠
- [Item] — Blocker: [description] — Need: [from whom] — Impact if unresolved: [consequence]

### Upcoming
- [What's next and why it matters]

### Risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [risk] | H/M/L | H/M/L | [action] |

### Decisions needed
- [Decision] — needed from [who] — by [when]
```

If Confluence MCP: create/update status page in project space.
If Slack MCP: post summary to #product-updates or #[project] channel.
If Notion: save to project page.

## Agent Output

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-status
  Проблема:  {from situation.md — one PM-language sentence about what sprint health or stakeholder visibility gap needs addressing}
  Читаю:     .pm/artifacts/sprint-plan.md, .pm/STATE.md, .pm/situation.md (3 файла)
  Делаю:     writing sprint status report: progress vs plan, risk flags, stakeholder-ready summary
  ···
```

**Closing block — output after writing artifact, before appending to orchestrator.log:**
```
✓ pm-status  ({elapsed})
  Результат: {status-report.md summary: Sprint {N} — {X}% complete, N blockers, N items at risk, overall: on-track/at-risk/off-track}
  Артефакт:  .pm/artifacts/status-report.md
  Дальше:    /pm-exec-brief  — status captured, prepare executive summary for stakeholders
```

When invoked as agent, write status report to `.pm/artifacts/status-report.md`:
- **Status:** Green / Yellow / Red
- **Period:** {date range}
- **Completed:** {items done since last report}
- **In progress:** {items with % complete}
- **Blocked:** {blockers with owner and since-date}
- **Next 7 days:** {planned deliverables}
- **Risks:** {items at risk with mitigation}

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-status-report completed → .pm/artifacts/status-report.md
```
