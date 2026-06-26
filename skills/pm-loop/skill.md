---
name: pm-loop
description: Agentic verify-until-done loop for any PM artifact. Detects the artifact type, verifies it against a type rubric (and the active goal), revises what fails, and repeats until every criterion passes or the safety cap is hit — then appends a review trail. Run after producing a PRD, research synthesis, roadmap, brief, or any artifact you want to hold up. Free tier.
---

<!-- GEMINI: Do not run shell commands beyond `ls .pm/artifacts/`. Read the target artifact and the rubric, run the verify→revise→re-verify loop in-session, write the revised artifact and append the review trail. No scheduler, no background jobs. -->
<!-- CODEX: Read the target artifact and rubric. Run the loop in-session: verify, revise, re-verify until pass or cap. Append the review trail. Do not schedule anything. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-loop — Verify until it holds up

Runs an artifact through `verify → revise → re-verify` until it passes its rubric (the goal is verifiably met) or hits the safety cap. This is the "loops" and "review trail" stages of the workflow shape, made real. It runs **in-session on Claude, Gemini, or Codex** — no scheduler, no recurring jobs.

## Knowledge Base
- `~/.headless/pm/knowledge/loop-rubrics.md` — pick the rubric by artifact type; if type unknown use Generic; verify each criterion pass/fail before revising
- `~/.headless/pm/knowledge/goals-method.md` — when an active goal exists, include the goal-alignment criterion (reuse `/pm-goals check`)

## Scope Check

```bash
ls .pm/artifacts/ 2>/dev/null
```

If `.pm/` is not found, output exactly:
```
PM workspace not found. Run `npx headless-pm install` first.
```
Then stop.

## Config
- `maxIterations` — safety cap, default **3**. A clean first pass stops at iteration 1.
- `checkGoals` — default **on** when `.pm/goals.md` has at least one active Objective.

---

## Step 1 — Resolve target

- `/pm-loop [path]` → that file.
- `/pm-loop` (no argument) → the most recent file in `.pm/artifacts/`.
- If a preceding skill just produced an artifact in this conversation, that is the target.

If no artifact can be found, ask the user for a path. Do not invent one.

## Step 2 — Detect type, pick rubric

Infer the artifact type from frontmatter, filename, or content: PRD, research synthesis, roadmap, sprint plan, brief / stakeholder update, competitive, persona / JTBD, metrics. Match it to the rubric in `loop-rubrics.md`. Unknown type → **Generic**.

State the detected type and rubric before looping.

## Step 3 — The loop

Repeat until every criterion passes or `maxIterations` is reached:

1. **Verify** — score the artifact against each rubric criterion as `pass` or `fail`, with one line on what is missing for each fail. If `checkGoals` is on, add the goal-alignment criterion using the `/pm-goals check` routine (does this advance an active Objective?).
2. **If all pass** → stop (goal met).
3. **Revise** — fix only the failing criteria, editing the artifact in place. Do not rewrite passing sections.
4. **Re-verify** — go to step 1.

A clean artifact exits after one verify with no revision. Never loop past `maxIterations`; if criteria still fail at the cap, stop and report the remaining gaps honestly.

## Step 4 — Review trail

Append (or update) a `## Review trail` section at the end of the artifact:

```markdown
## Review trail
_Looped YYYY-MM-DD · type: <type> · <N> iteration(s) · verdict: passed | capped with gaps_

- iteration 1 — failed: <criteria> → fixed: <what changed>
- iteration 2 — failed: <criteria> → fixed: <what changed>
- final — all criteria pass  (or: remaining gaps: <list>)
```

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-loop {artifact} → {verdict} ({N} iterations)
```

## Step 5 — Report

```
/pm-loop — <artifact>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
type:     <type> rubric
result:   passed in <N> iteration(s)   (or: capped at 3 — <K> gaps remain)
fixed:    <one-line summary of what changed>
goal:     advances <Objective>   (or: no active goal / drift)
trail:    appended to <artifact>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

Related skills: `/pm-goals` (the active goal this loop verifies against), `/pm-prd` · `/pm-roadmap` · `/cusdev` · `/pm-competitive` (skills that produce artifacts you then loop)


## Related

[[continuous-discovery]] · [[pm-writing]] · [[shreyas-frameworks]] · [[Skills]] · [[Agents]]
