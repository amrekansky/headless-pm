---
name: pm-review
description: Weekly sweep of all .pm/ workspace files. Flags stale risks, overdue questions, old decisions without implementation markers, and stakeholders without recent contact. Run weekly or when Opening Dashboard shows staleness warnings. Free tier.
---

<!-- GEMINI: Do not run shell commands. Read .pm/ files, compute staleness from today's date, present flagged items grouped by category. -->
<!-- CODEX: Read .pm/ files. Compute staleness from today's date. Show flagged items. Ask user what to update. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-review — Weekly Workspace Health Check

Sweeps all `.pm/` files for stale or overdue items and proposes updates.

## Scope Check

```bash
ls .pm/ 2>/dev/null
```

If `.pm/` is not found, output exactly:
```
PM workspace not found. Run `npx headless-pm install` first.
```
Then stop.

---

## Step 1 — Read all workspace files

Read these files:
- `.pm/risks.md`
- `.pm/open-questions.md`
- `.pm/decisions.md`
- `.pm/stakeholders/*.md` (all files)
- `.pm/STATE.md` (to get current date context)

---

## Step 2 — Apply staleness rules

Use today's date as reference. Flag items that match ANY of these rules:

**Risks:**
- Flag if "Last Reviewed" column is older than 7 days ago
- Flag if status is "active" but no "Last Reviewed" date exists

**Open Questions:**
- Flag if Due date is in the past
- Flag if Due date is within 2 days from today
- Flag if no Due date AND question is older than 14 days

**Decisions:**
- Flag if date is older than 30 days AND no `[implemented]` marker in the row
- Note: decisions with `[verbal]` provenance flagged after 14 days if unimplemented

**Stakeholders:**
- Flag if "Last contact" is older than 14 days
- Flag if no "Last contact" date exists

---

## Step 3 — Present health report

```
/pm-review — workspace health
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Risks:        [N] stale (>7d since last review)
Questions:    [N] overdue or due within 2d
Decisions:    [N] without [implemented] marker (>30d)
Stakeholders: [N] without recent contact (>14d)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Then list each flagged item:

```
⚠ RISKS
  · [risk text] — Last reviewed: [date or never] — [N days ago]
    → Update "Last Reviewed" or change status to mitigated/closed

⚠ QUESTIONS
  · [question text] — Due: [date] — [N days overdue]
    → Answer now or extend due date

⚠ DECISIONS
  · [decision text] — Decided: [date] — [N days without implementation]
    → Add [implemented] marker or note why still pending

⚠ STAKEHOLDERS
  · [name] — Last contact: [date or never] — [N days ago]
    → Schedule check-in or update attitude/notes
```

If all counts are 0:
```
✓ Workspace is healthy — no stale items found.
Run again next week.
```

---

## Step 4 — Offer update flow

After presenting the report, ask:

```
What would you like to do?
1. Update items one by one (I'll guide you through each flagged item)
2. Export summary to .pm/REVIEW.md and finish
3. Skip — just wanted to see the report
```

**If option 1 (update one by one):**
Go through each flagged item in order. For each:
- Show the item
- Ask: what's the update? (propose options based on item type)
- Apply the update to the file immediately
- Show confirmation
- Move to next item

**If option 2 (export):**
Write `.pm/REVIEW.md`:
```markdown
Last Updated: YYYY-MM-DD

# PM Review — [date]

## Summary
- Risks stale: [N]
- Questions overdue: [N]
- Decisions pending implementation: [N]
- Stakeholders to contact: [N]

## Flagged Items
[paste the full flagged items list from Step 3]

## Actions Taken
- [any updates made this session]
```

**If option 3 (skip):**
Output: "Review complete. Run `/pm-review` again next week or when Dashboard shows ⚠."

---

Related skills: `/pm-chat` (capture new signals from conversations), `/pm-save` (session wrap-up and git commit)
