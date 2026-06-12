---
name: pm-kickoff
description: Release kick-off agent. Captures stakeholders, release goals, success criteria, risks, and timeline. Writes .pm/artifacts/kickoff.md.
agent: true
artifact_output: .pm/artifacts/kickoff.md
mcp_output:
  primary: notion
  fallback: none
---

<!-- GEMINI: Do not run shell commands. Read .pm/situation.md and .pm/goals.md first, then generate kickoff.md content as described in ## Agent Output. -->
<!-- CODEX: Read .pm/situation.md and .pm/goals.md first, then generate kickoff.md content. -->


## Universal Rules
- Respond in the same language the user writes in
- Read all Agent Input files before generating any output
- Never invent stakeholder names or numbers — ask if missing

## Knowledge Base
- `~/.headless/pm/knowledge/okr-implementation.md` — frame release goals as outcome-based OKRs rather than output milestones; each success criterion should trace to a measurable key result
- `~/.headless/pm/knowledge/shape-up.md` — set the release appetite at kickoff; agree on what gets cut if scope expands rather than sliding the deadline

# /pm-kickoff — Release Kick-off Agent

## Agent Input

Read before generating output:
1. `.pm/situation.md` — current sprint status, deadlines, recommended workflow context
2. `.pm/goals.md` — OKRs and roadmap themes this release should serve
3. `.pm/STATE.md` — product name, phase, current sprint

If the user provided a release name or goal in their message, use it. If not, ask:
"What is this release called and what is the primary goal?" with options:
1. Bug-fix / maintenance release
2. Feature release (new user-facing functionality)
3. Performance / infrastructure release
4. Enter your own

## Output Template

Every response MUST include:
- **Release name:** (e.g., v1.2, Q2 Feature Drop)
- **Release goal:** one sentence linking deliverables to business outcome
- **Stakeholders:** name + role + what they need from this release
- **Success criteria:** 3-5 measurable outcomes with numeric targets
- **Scope:** in-scope items (bullet list) + explicitly out-of-scope items
- **Risks:** top 3 risks with likelihood (H/M/L) and mitigation
- **Timeline:** key dates — sprint start, feature freeze, release date

## Agent Output

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-kickoff
  Проблема:  {from situation.md ## Recommended Workflow — one PM-language sentence about why a release kickoff is needed now}
  Читаю:     .pm/situation.md, .pm/goals.md, .pm/STATE.md (3 файла)
  Делаю:     writing release kickoff brief — scope, stakeholders, success criteria, risks, timeline
  ···
```

**Closing block — output after writing artifact, before appending to orchestrator.log:**
```
✓ pm-kickoff  ({elapsed})
  Результат: {kickoff.md summary: release name, N risks flagged, timeline X days, N success criteria defined}
  Артефакт:  .pm/artifacts/kickoff.md
  Дальше:    /pm-sprint  — release scope defined, ready to plan sprint capacity and backlog
```

Related skills: `/pm-sprint` (plan the sprint after the kickoff sets the release scope), `/pm-stakeholder` (map all stakeholders identified at kickoff), `/pm-plan` (build the full delivery plan from the kickoff brief)

Write the above to `.pm/artifacts/kickoff.md`.

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-kickoff completed → .pm/artifacts/kickoff.md
```


## Related

[[dual-track-agile]] · [[shape-up]] · [[story-mapping]] · [[working-backwards]] · [[pm-rituals]] · [[Skills]] · [[Agents]]