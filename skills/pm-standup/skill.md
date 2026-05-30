---
name: pm-standup
description: Prepare or run a standup. Formats updates for async (Slack) or sync (meeting). Surfaces blockers. Use daily.
mcp_output:
  primary: slack
  fallback: markdown
agent: true
artifact_output: .pm/artifacts/progress-report.md
---

<!-- GEMINI: Do not run any shell commands. When invoked as agent, first read .pm/artifacts/sprint-plan.md and .pm/STATE.md, then generate progress-report.md as described in ## Agent Output. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output

## Knowledge Base
- `~/.headless/pm/knowledge/pm-rituals.md` — use the async standup template and weekly product review agenda to structure daily updates; apply the async-first patterns to reduce synchronous meeting load
- `~/.headless/pm/knowledge/linear-jira-best-practices.md` — pull ticket statuses and blockers directly from the sprint board; use workflow state transitions to validate standup accuracy against actual ticket state

## Agent Input

When invoked as agent, read before generating output:
1. `.pm/artifacts/sprint-plan.md` — committed items, goals, capacity
2. `.pm/STATE.md` — current sprint N, phase
3. MCP (Jira/Linear if connected): current ticket statuses, updated today/this week


# /pm-standup — Daily Standup

## Output Template
Every response MUST include all three sections, even if empty:
- **Done:** bullet list of completed items (not "nothing" — use "No completed items since last standup")
- **Today:** bullet list with owners
- **Blocked:** item + who unblocks it + by when — if none, write "No blockers"
- **Sprint goal health:** On track / At risk / Off track — required in Mode B (team facilitation)

## Agent Output

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-standup
  Проблема:  {from situation.md — one PM-language sentence about what is blocking the team or what daily progress needs capturing}
  Читаю:     .pm/artifacts/sprint-plan.md, .pm/STATE.md (2 файла)
  Делаю:     generating standup summary: done, today, blockers
  ···
```

**Closing block — output after writing artifact, before appending to orchestrator.log:**
```
✓ pm-standup  ({elapsed})
  Результат: {standup.md summary: N done items, N blockers, N items for today}
  Артефакт:  .pm/artifacts/standup.md
  Дальше:    /pm-status  — blockers identified, stakeholder status update needed
```

When invoked as agent, write progress report to `.pm/artifacts/progress-report.md`:
- Sprint {N} Progress — {date}
- Done since last standup: items with IDs
- In progress: items with % complete estimate
- Blocked: item + blocker description + owner
- Burndown: points completed / total committed
- Risk flag: on track / at risk / off track with reason

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-standup/progress completed → .pm/artifacts/progress-report.md
```

## Two modes

Ask: "Are you preparing your own update or facilitating the team standup?"

## Mode A — Your update

Ask: "What did you do yesterday, what's today, any blockers?"

Format:
```
✓ Yesterday
  - [specific thing completed]
  - [specific thing completed]

→ Today
  - [specific task]
  - [specific task]

⚠ Blocked
  - [item] — need [what] from [who]

📌 FYI
  - [anything the team should know]
```

Related skills: `/pm-sprint` (full sprint cycle context for standup health), `/pm-status` (escalate blocker-heavy standups into a stakeholder status report), `/pm-brief` (roll up the week's standups into an end-of-week brief)

If Slack MCP: post to #standup or #pm channel.

## Mode B — Facilitate team standup

Ask each person for their update. After all updates:

Surface:
- **Blockers needing PM action**: [items where PM must unblock]
- **Dependencies risked**: [items that block other teams]
- **Sprint goal health**: on track / at risk / off track

```
## Standup — [date] — Sprint [N] Day [D]

Sprint goal: [one sentence]
Goal health: 🟢 On track / 🟡 At risk / 🔴 Off track

Blockers for PM:
- [item] → action: [what PM does today]

Team updates: [summarized if async]
```
