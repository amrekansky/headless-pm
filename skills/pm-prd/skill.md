---
name: pm-prd
description: Write a complete PRD from discovery notes or a problem statement. Engineering-ready. Use when moving from discovery to delivery.
agent: true
artifact_output: .pm/artifacts/prd.md
mcp_output:
  primary: notion
  fallback: confluence
---

<!-- GEMINI: Do not run any shell commands. Read .pm/artifacts/insights.md and .pm/goals.md, then write prd.md as described in ## Agent Output. -->
<!-- CODEX: Read insights.md and goals.md, then write prd.md. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output

## Agent Input

When invoked as agent, read before generating output:
1. `.pm/artifacts/insights.md` — validated insights and opportunity areas
2. `.pm/goals.md` — OKRs this PRD must serve
3. `.pm/artifacts/clusters.md` — raw user signals for evidence section
4. `.pm/STATE.md` — current phase and product context


# /pm-prd — Product Requirements Document

## Knowledge Base
- `~/.headless/pm/knowledge/working-backwards.md` — draft the press release and FAQ before writing requirements; ensures the PRD is outcome-driven rather than feature-driven
- `~/.headless/pm/knowledge/ai-pm.md` — if the product involves AI/ML, add capability framing, failure modes, confidence thresholds, and human-in-the-loop requirements to the PRD
- `~/.headless/pm/knowledge/technical-concepts-for-pms.md` — use REST API, webhook, and system design vocabulary when writing technical requirements and dependencies; apply build vs buy framing in the options section
- `~/.headless/pm/knowledge/pyramid-principle.md` — structure the TL;DR as a BLUF statement; ensure requirements sections are MECE so engineers can act without overlap or ambiguity
- `~/.headless/pm/knowledge/assumption-mapping.md` — before finalizing requirements, map desirability/viability/feasibility/usability assumptions and flag the riskiest assumption as the RAT to validate first
- `~/.headless/pm/knowledge/compliance-basics.md` — add a compliance requirements section covering SOC2, GDPR, HIPAA, or CCPA PM deliverables relevant to the feature's data handling
- `~/.headless/pm/knowledge/developer-experience.md` — include DX requirements (API clarity, SDK ergonomics, error messages) when PRD covers developer-facing features

You are a senior PM writing a PRD that engineers and designers can act on without follow-up questions.

## Output Template
Every response MUST include (Pyramid Principle structure):
- **TL;DR (BLUF):** 3 sentences — problem, solution, why now
- **Problem statement:** what pain, for whom, what evidence — quantified if possible
- **Goals table:** metric / baseline / target / timeframe — outcome-based, not output-based
- **Non-goals:** explicit list — prevents scope creep in eng discussions
- **Open questions:** numbered list with owner + due date — unresolved decisions that block design/eng
- **Launch criteria:** specific, testable conditions — not "QA passes"
- **RAT identified** (per assumption-mapping.md): riskiest assumption flagged before requirements are final

## Ask first
"Do you have discovery notes/insights to work from, or are we starting from scratch?"

If from notes: read them before generating.
If from scratch: ask the minimum questions below.

## Minimum questions (only if no notes provided)
1. "What problem does this solve and for whom?"
2. "What does success look like — measurable outcome?"
3. "What's out of scope?"

## PRD structure

Related skills: `/pm-epic` (decompose the PRD into epics and stories), `/pm-acceptance` (write acceptance criteria for each PRD requirement), `/pm-define` (the full feature definition process that this PRD is part of)

```markdown
# PRD — [Feature Name]
_Owner: [PM name] | Status: Draft | Date: [YYYY-MM-DD]_

## TL;DR
[3 sentences: problem, solution, why now]

## Problem statement
- Who has this problem?
- What's the pain (quantified if possible)?
- Why hasn't it been solved yet?

## Users
[Primary user — JTBD statement]
[Secondary user if applicable]

## Goals
| Metric | Baseline | Target | Timeframe |
|---|---|---|---|
| [metric] | [value] | [value] | [date] |

## Non-goals (explicitly out of scope)
- [item]

## Solution overview
[2-4 paragraphs describing what we're building. Not wireframes — concepts.]

## User flows
### Flow 1: [Happy path name]
1. User does X
2. System does Y
3. User sees Z

### Flow 2: [Edge case / alternate path]
...

## Requirements
### Must have (launch blocker)
- [ ] [Requirement — testable, specific]

### Should have (high value, not blocker)
- [ ] [Requirement]

### Nice to have (if time)
- [ ] [Requirement]

## Open questions
| Question | Owner | Due |
|---|---|---|
| [question] | [name] | [date] |

## Dependencies
- [Team/system] — [what we need from them] — [by when]

## Launch criteria
- [ ] [Specific condition that must be true to ship]

## Analytics & instrumentation
- Event: [event name] — fires when: [trigger]
```

If Notion MCP: create page in Product / PRDs database, set status = Draft.
If Confluence MCP: create page in Product space.
If not: save `prd-[feature]-[date].md`.

## Agent Output

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-prd
  Проблема:  {from situation.md — one PM-language sentence about what is undefined that blocks the team from starting to build}
  Читаю:     .pm/artifacts/insights.md, .pm/goals.md, .pm/situation.md (3 файла)
  Делаю:     writing product requirements document: problem, scope, success metrics, implementation plan
  ···
```

**Closing block — output after writing artifact, before appending to orchestrator.log:**
```
✓ pm-prd  ({elapsed})
  Результат: {prd.md summary: "{feature name}" — N success metrics defined, X story points estimated, N open questions flagged}
  Артефакт:  .pm/artifacts/prd.md
  Дальше:    /pm-backlog  — PRD approved, decompose into backlog items
```

When invoked as agent, write full PRD to `.pm/artifacts/prd.md` using existing Output Template. Add evidence section referencing clusters.md quotes.

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-prd completed → .pm/artifacts/prd.md
```


## Memory Write

After PRD output is confirmed, silently append to `.pm/decisions.md` (create file with header if missing):
```
- {today}: {one-line product decision — what we're building and why} — {core rationale in one clause}
```
Do not ask for confirmation. Do not announce the write.


## Related

[[continuous-discovery]] · [[prioritization-frameworks]] · [[okr-implementation]] · [[impact-mapping]] · [[pm-writing]] · [[shreyas-frameworks]] · [[Skills]] · [[Agents]]