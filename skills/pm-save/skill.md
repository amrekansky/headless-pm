---
name: pm-save
description: Wrap up the current PM session. Updates context.md, CLAUDE.md, GEMINI.md, AGENTS.md, BACKLOG.md, .pm/goals.md, .pm/STATE.md, .pm/orchestrator.log, then commits everything to git. Run at the end of every session to preserve full context for next time.
---

<!-- GEMINI: Do not run shell commands. Follow the 11 steps in order. Use find to locate files before editing. Skip steps for missing files — do not stop. -->
<!-- CODEX: Follow the 11 steps in order. Skip steps for missing files — do not stop. Commit with: git add context.md CLAUDE.md GEMINI.md AGENTS.md BACKLOG.md .pm/ -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-save — Session Wrap-Up

Closes the current PM session and persists full context to git so the next session resumes exactly where this one stopped.

## Scope Check

**First:** check that `.pm/` directory exists in the current project.

```bash
ls .pm/ 2>/dev/null
```

If `.pm/` is not found, output exactly:
```
PM workspace not found. Run `npx headless-pm install` first.
```
Then stop. Do not proceed.

---

## Step 1 — Collect session data

From the current conversation, gather:
- What was accomplished (features, fixes, decisions, file changes)
- Which agents were invoked and what they produced
- Artifacts created (files in `.pm/artifacts/`)
- Open questions and blockers
- Top-3 next steps for the next session

---

## Step 2 — Update `context.md`

File lives in the project root. Prepend a new session block immediately after the `_Updated: YYYY-MM-DD_` line (update the date). Do not overwrite previous sessions.

Template:
```
## Session YYYY-MM-DD
### Progress
- [what was actually done this session]

### Decisions
- [key decisions made]

### Next Steps
1. [most urgent first]
2. ...
3. ...

### Open Questions
- [unanswered questions, blockers]
```

If `context.md` does not exist, create it with this header first:
```
# Context — [project name from CLAUDE.md or directory name]
_Updated: YYYY-MM-DD_
```

---

## Step 3 — Update `CLAUDE.md`

Make targeted edits only — do not rewrite the file.

1. Update `## Current Session` section (immediately after `# CLAUDE.md`):
   ```
   ## Current Session
   → [context.md](context.md) — updated YYYY-MM-DD
   ```

2. Update `## Active Issues`:
   - Remove issues resolved this session
   - Add new issues discovered

If `CLAUDE.md` does not exist, skip this step.

---

## Step 4 — Update `GEMINI.md`

Find the file first:
```bash
find . -name "GEMINI.md" -not -path "*/node_modules/*" 2>/dev/null
```

If found, apply the same changes as Step 3. If not found, skip.

---

## Step 5 — Update `AGENTS.md`

Find the file first:
```bash
find . -name "AGENTS.md" -not -path "*/node_modules/*" 2>/dev/null
```

If found, apply the same changes as Step 3. If not found, skip.

---

## Step 6 — Update `BACKLOG.md`

Find the file first:
```bash
find . -name "BACKLOG.md" -not -path "*/node_modules/*" 2>/dev/null
```

If found:
- Tasks completed this session: change `[ ]` or `[~]` → `[x]`
- Tasks started but not finished: change `[ ]` → `[~]`
- New tasks discovered: add as `[ ]` in the appropriate section
- Update the date header `_Updated: YYYY-MM-DD_`

Do not rewrite the structure — targeted changes only. If not found, skip.

---

## Step 7 — Update `.pm/goals.md`

Read `.pm/goals.md`. Based on session progress, mark any goals completed this session. Use whatever marker format is already in the file (e.g. `[x]`, `✓`, status field). Do not restructure the file.

If `.pm/goals.md` does not exist, skip.

---

## Step 8 — Update `.pm/STATE.md`

Update the following fields based on session activity:
- `last_activity` — today's date + one-line description of what was done
- `current_focus` — what the next session should focus on
- Any phase/sprint fields that changed

Preserve all other fields as-is.

---

## Step 9 — Append to `.pm/orchestrator.log`

Prepend a new session block at the top of `.pm/orchestrator.log`. Format:

```markdown
## Session YYYY-MM-DD
Agents: [comma-separated list of agents invoked, or "none"]
Artifacts: [comma-separated list of new files in .pm/artifacts/, or "none"]
Outcome: [one sentence — what was accomplished]
```

If `.pm/orchestrator.log` does not exist, create it with this block as the first entry.

---

## Step 10 — Git commit

```bash
git add context.md CLAUDE.md GEMINI.md AGENTS.md BACKLOG.md .pm/
git commit -m "docs(pm-save): session wrap-up YYYY-MM-DD"
```

Replace `YYYY-MM-DD` with today's date. Only `git add` files that actually exist and were modified.

If the commit fails, report the reason and continue to Step 11 — do not stop.

---

## Step 11 — Confirm to user

Output a completion summary:

Related skills: `/pm-radar` (run at the start of the next session to restore situational awareness), `/pm-standup` (generate the standup update after saving the session), `/pm-status` (share a status update with stakeholders after saving)

```
✅ context.md updated
✅ CLAUDE.md updated
✅ GEMINI.md updated         (or: ⏭ GEMINI.md — not found, skipped)
✅ AGENTS.md updated         (or: ⏭ AGENTS.md — not found, skipped)
✅ BACKLOG.md updated        (or: ⏭ BACKLOG.md — not found, skipped)
✅ .pm/goals.md updated      (or: ⏭ .pm/goals.md — not found, skipped)
✅ .pm/STATE.md updated
✅ .pm/orchestrator.log updated
✅ Git commit created

🚀 Next session:
1. [top priority from context.md]
2. [second priority]
3. [third priority]
```
