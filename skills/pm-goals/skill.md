---
name: pm-goals
description: Live goals layer for .pm/goals.md. Set and maintain Objectives as verifiable definition-of-done, and check work against active goals — surfacing drift, orphan goals, and stale goals. Run to set goals, review goal health, or score a backlog/PRD/sprint against goals. Free tier.
artifact_output: .pm/goals.md
---

<!-- GEMINI: Do not run shell commands beyond `ls .pm/`. Read .pm/goals.md and .pm/STATE.md, then present the dashboard / run the requested mode and write goals.md as described. -->
<!-- CODEX: Read .pm/goals.md and .pm/STATE.md. Run the requested mode. Write goals.md when setting or updating. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-goals — Live goals layer

Turns `.pm/goals.md` from a static file into a layer you can set, keep current, and check work against. A goal here is a **verifiable definition-of-done**, so `/pm-loop` and `/pm` can use it as a stop condition.

## Knowledge Base
- `~/.headless/pm/knowledge/goals-method.md` — frame each goal as a verifiable definition-of-done; apply the stale / drift / orphan checks; do not re-author strategy, maintain and verify it
- `~/.headless/pm/knowledge/okr-implementation.md` — 70% achievement of a stretch KR = success; keep KRs outcome-based, not output-based

## Scope Check

```bash
ls .pm/ 2>/dev/null
```

If `.pm/` is not found, output exactly:
```
PM workspace not found. Run `npx headless-pm install` first.
```
Then stop.

## goals.md schema

`/pm-goals` reads whatever is in `goals.md` (including OKRs drafted by `/pm-okr`) and normalizes it to this schema when it writes:

```markdown
# Goals

## Objectives (this quarter)
### O1 — <objective>
- status: on-track | at-risk | off-track
- reviewed: YYYY-MM-DD
- done when: <verifiable success condition>
- KR1: <metric> — <baseline> → <target>  (now: <current>)
- KR2: ...

## Roadmap Themes
- <theme> — <why it matters this quarter>

## Alignment log
| Date | Work | Advances | Note |
|------|------|----------|------|
```

---

## Mode select

- `/pm-goals` (no argument) → **Dashboard**
- `/pm-goals set` → **Set / update**
- `/pm-goals check [target]` → **Alignment check**

If the argument is ambiguous, default to Dashboard.

---

## Dashboard (default)

Read `.pm/goals.md` and `.pm/STATE.md`. Use today's date for staleness. Output:

```
/pm-goals — goal health
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
O1  <objective>                     [on-track]
    KR1  <metric>  38% → 55%  (now 41%)
    KR2  ...
O2  <objective>                     [at-risk]
    ...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠  stale:   [N] objective(s) not reviewed in >14d
⚠  drift:   [N] work item(s) advancing no goal
⚠  orphan:  [N] objective(s) with no work pointing at them
```

If `goals.md` has no Objectives yet:
```
No goals set yet. Run `/pm-goals set` to define this quarter's objectives.
```

Then offer: `1. Set / update goals  ·  2. Run alignment check  ·  3. Done`.

---

## Set / update

Guide the user to capture or refresh goals. For each Objective:

1. **Objective** — qualitative, inspiring, time-bound. Reject metrics-as-objectives and redirect.
2. **done when** — one verifiable success condition (this becomes the loop stop condition).
3. **Key Results** — 3-5, each `metric — baseline → target (now: current)`. Outcome, not output. Flag and rewrite output KRs.
4. **status** + **reviewed** (today's date).

Capture Roadmap Themes (theme — why this quarter) if the user wants them.

Then silently write the normalized schema to `.pm/goals.md` (overwrites). Do not ask for confirmation to write; do confirm the content with the user before writing.

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-goals set → .pm/goals.md
```

---

## Alignment check

Target = the argument if given (a path to a PRD / roadmap / sprint plan), else the current sprint/backlog read from `.pm/STATE.md` (### Stories / Tasks, ### Epics).

For each active Objective and each work item:
- **advances** — which Objective(s) each item moves; name them
- **drift** — items advancing no active Objective
- **orphan** — Objectives with no item pointing at them
- **stale** — Objectives with `reviewed:` older than 14 days

Output:
```
/pm-goals check — alignment
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ [item]  → advances O1
✓ [item]  → advances O2
⚠ [item]  → drift (advances no goal)
⚠ O3 <objective>  → orphan (no work)
⚠ O2 <objective>  → stale (reviewed 21d ago)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Append one row to the Alignment log in `goals.md`:
```
| YYYY-MM-DD | <target> | O1, O2 | <N drift, N orphan, N stale> |
```

This alignment check is the routine `/pm-loop` and `/pm` reuse for the goal-alignment criterion.

---

Related skills: `/pm-okr` (draft OKRs that this skill then maintains), `/pm-roadmap` (set the themes), `/pm-loop` (verify an artifact against its rubric and the active goal), `/pm-review` (workspace health sweep)


## Related

[[okr-implementation]] · [[continuous-discovery]] · [[shreyas-frameworks]] · [[Skills]] · [[Agents]]
