---
name: pm-chat
description: Conversational workspace capture — write anything in natural language (meeting notes, decisions, risks, stakeholder updates, stream of consciousness) and the skill extracts structured data into the right .pm/ files. No special syntax needed. Free tier.
---

<!-- GEMINI: Do not run shell commands. Read .pm/ files, extract signals, present capture summary, ask for confirmation before writing. -->
<!-- CODEX: Read .pm/ files. Extract signals. Present capture summary. Write to .pm/ files only after user confirms. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-chat — Conversational Capture

One-shot capture: write anything and the skill routes it to the right `.pm/` file.

**Works for:**
- Meeting notes: "говорил с Арой, она скептична по срокам"
- Decisions: "решили убрать мобильное приложение из Q3"
- Risks: "новый риск — интеграция перенеслась на 15 авг"
- Open questions: "не понятно кто принимает решение по приоритетам"
- Stakeholder signals: "Марат теперь активно поддерживает инициативу"
- Mixed dump: all of the above in one message

## Knowledge Base
- `~/.headless/pm/knowledge/stakeholder-influence.md` — SCARF + Cialdini signals for stakeholder attitude extraction

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

## Step 1 — Read workspace context

Read these files to understand existing state (so you don't duplicate entries):
- `.pm/decisions.md` — existing decisions
- `.pm/risks.md` — existing risks
- `.pm/open-questions.md` — existing open questions
- `.pm/stakeholders/` — list existing stakeholder files

---

## Step 2 — Extract signals from user input

From the user's free-text input, extract ALL of the following signal types present:

**Stakeholder signals:**
- Person name + attitude change (supportive / skeptical / neutral / champion / blocker)
- Concern or topic they raised
- Communication channel if mentioned
- Contact date (today unless stated)

**Decisions:**
- What was decided (keep brief: action + scope)
- Provenance: `[documented]` if written down/ticket, `[verbal]` if said in meeting/call, `[intuition]` if inferred
- Date: today unless stated

**Risks:**
- Risk description
- Impact: H (project-level) / M (sprint-level) / L (nice-to-fix)
- Due date or trigger if mentioned
- Owner if mentioned

**Open questions:**
- Question text
- Due date if mentioned
- Who can answer if mentioned

If a signal type has no match in the input, skip it — do not invent.

---

## Step 3 — Show capture summary

Present what was extracted BEFORE writing anything:

```
/pm-chat — captured
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[show only categories that have extracted items]

Stakeholder: [name] → [attitude] — [concern/topic]
Decision:    [text] — [verbal/documented/intuition]
Risk:        [text] — Impact: [H/M/L] — Due: [date or —]
Open Q:      [text] — Due: [date or —]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Write to .pm/? (y / edit / skip)
```

If nothing was extracted, respond: "Nothing to capture — no decisions, risks, questions, or stakeholder signals found. Try: 'decided X', 'risk: Y', 'open question: Z', or 'spoke with [name], they said...'"

---

## Step 4 — Write to .pm/ files (after confirmation)

Wait for user to confirm (y / yes / да / write / записать). If "edit" or "skip" — ask what to change or stop.

**On confirm:**

**Stakeholder signals** → update `.pm/stakeholders/{name-slug}.md`
- If file exists: append signal under `## Notes` with date
- If file doesn't exist: create with template:
  ```markdown
  # [Name]
  - Role: [extracted or —]
  - Influence: [high/medium/low — infer from context or —]
  - Attitude: [champion/neutral/skeptic — from signal]
  - Communication channel: [extracted or —]
  - Last contact: [today]
  - Notes:
    - [date]: [signal text]
  ```

**Decisions** → append to `.pm/decisions.md`:
```markdown
| [date] | [decision text] | [verbal/documented/intuition] | — |
```

**Risks** → append to `.pm/risks.md`:
```markdown
| [risk text] | active | [Impact H/M/L] | [owner or —] | [date] |
```

**Open questions** → append to `.pm/open-questions.md`:
```markdown
| [question text] | [date] | [owner or —] | [due date or —] |
```

---

## Step 5 — Confirm what was written

```
✓ Written to .pm/
[list each file updated]
```

Related skills: `/pm-review` (weekly sweep of all .pm/ files for staleness), `/pm-save` (session wrap-up and git commit)


## Related

[[pm-rituals]] · [[shreyas-frameworks]] · [[linear-jira-best-practices]] · [[org-design-product]] · [[Skills]] · [[Agents]]