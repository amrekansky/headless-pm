---
name: pm-radar
description: Situational awareness agent. Reads MCP sources + .pm/ workspace, synthesizes current project state into .pm/situation.md. Run before any orchestrated workflow.
agent: true
artifact_output: .pm/situation.md
---

<!-- GEMINI: Do not run shell commands. Read the files listed in ## Agent Input, then write .pm/situation.md as described in ## Agent Output. -->
<!-- CODEX: Read the files listed in ## Agent Input, then write .pm/situation.md as described in ## Agent Output. -->


## Universal Rules
- Respond in the same language the user writes in
- Read all listed files before generating any output
- Never invent data — only report what you actually read


# /pm-radar — Situational Awareness Agent

## Agent Input

Read in this order (skip gracefully if file missing):
1. `.pm/STATE.md` — current sprint N, phase, focus, blockers
2. `.pm/config.json` — product name, sprint cadence, anchor date
3. `.pm/goals.md` — OKRs and roadmap themes
4. `.pm/backlog.md` — backlog items if exists
5. `.pm/artifacts/` — list all files, note timestamps (stale = modified >7 days ago)
6. MCP sources if connected:
   - **Jira / Linear**: current sprint board — open tickets, blockers, velocity last 3 sprints
   - **Notion**: recent pages updated in last 7 days
   - **Miro**: board list (check if any boards have recent activity)

## Synthesis Rules

After reading all sources, analyze:
- **Sprint health**: days remaining, points completed vs committed, blocker count
- **Deadline proximity**: any deadline within 14 days → flag as urgent
- **Artifact gaps**: which `.pm/artifacts/*.md` files are missing or stale
- **Workflow recommendation**:
  - Sprint ends ≤5 days AND retro.md missing → `release-lifecycle`
  - No discovery interviews AND no insights.md → `discovery`
  - competitive-report.md missing OR older than 30 days → `competitive`
  - goals.md has only placeholder text → `strategy`
  - backlog.md has >10 items without priority score → `backlog`
  - Default: recommend workflow that addresses the most urgent gap

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-radar
  Проблема:  {from STATE.md or context — one PM-language sentence about what situation visibility gap this scan addresses}
  Читаю:     .pm/STATE.md, .pm/config.json, .pm/goals.md, .pm/backlog.md, .pm/artifacts/ (5 источников)
  Делаю:     scanning project state — sprint health, deadlines, artifact gaps, workflow recommendation
  ···
```

**Closing block — output after writing situation.md, before appending to orchestrator.log:**
```
✓ pm-radar  ({elapsed})
  Результат: {concrete: "Sprint N — X days remaining, N blockers, N artifact gaps, recommended: /skill-name"}
  Артефакт:  .pm/situation.md
  Дальше:    /{recommended_skill from ## Radar Output}  — {reason}
```

## Agent Output

Write `.pm/situation.md` with exactly this structure:

```markdown
# Situation — {YYYY-MM-DD}

## Sprint Status
Sprint {N} ends {date} ({X} days remaining). {Y}/{Z} points completed. Velocity: {V} pts/sprint.

## Deadlines
- {deadline name}: {X} days remaining — {urgency: urgent/watch/ok}
(list all known deadlines from STATE.md and goals.md; write "none known" if empty)

## Blockers
- {blocker description} — owner: {name or unknown}
(list from STATE.md + MCP; write "none" if empty)

## Artifact Gaps
- {artifact name}: missing / stale since {date}
(list missing or stale .pm/artifacts/; write "none" if complete)

## Recommended Workflow
{workflow-name}: {one sentence why this is the highest priority right now}

## Radar Output
recommended_skill: /{skill-name matching the workflow above — e.g. pm-hypothesis for discovery, pm-kickoff for release-lifecycle}
reason: {one-line reason — same substance as Recommended Workflow above, condensed}
```

After writing .pm/situation.md, append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-radar completed → .pm/situation.md
```
