# PM Memory Layer v2 — Design Spec
_Date: 2026-06-12 | Status: approved_

## Problem

The `.pm/` workspace has 9 files/dirs, but most of them are created empty and never updated:
- `goals.md`, `decisions.md`, `risks.md`, `open-questions.md` — created as blank templates, no skill writes to them
- `stakeholders/` — created during onboarding (max 5 files), never updated after
- `situation.md` — written by pm-radar, but /pm has no staleness check before trusting it
- `initWorkspace` (CLI) vs `/pm-onboarding` (skill) create .pm/ through different paths, producing inconsistent workspace state

Result: `.pm/` is a good idea with poor follow-through. Most files are noise, not memory.

---

## Changes

### 1. `/pm-stakeholder` — new skill

New file: `headless-pm/skills/pm-stakeholder/skill.md`

Three modes, auto-detected from user input:

**`/pm-stakeholder add`**
Asks: name, role, influence (high/medium/low), attitude (champion/neutral/skeptic), preferred channel.
Writes `.pm/stakeholders/{name-slug}.md`.
No cap — create as many as named.

**`/pm-stakeholder update [name]`** (or just `/pm-stakeholder [name]`)
Reads the existing file for the named stakeholder.
Asks: what happened? (meeting, decision, attitude shift, new context)
Appends a dated log entry under `## Log` section:
```
## Log
- 2026-06-12: Met re: Q3 roadmap. Shifted neutral → champion after seeing metrics. Wants monthly update.
```
Updates `**Last contact:**` and `**Attitude:**` fields if changed.

**`/pm-stakeholder list`** (or `/pm-stakeholder` with no args)
Reads all `.pm/stakeholders/*.md` files.
Outputs a compact table:
```
Name              Role        Influence  Attitude    Last contact
Ana Ivanova       CTO         high       champion    2026-06-12
Marat Serik       CFO         high       skeptic     2026-05-28  ← 15 days ago
```
Flags anyone not contacted in 14+ days with a "← N days ago" marker.

**File format** (addition: `## Log` section):
```markdown
# Full Name

**Role:** title
**Influence:** high / medium / low
**Attitude:** champion / neutral / skeptic
**Communication:** channel / unknown
**Last contact:** YYYY-MM-DD
**Notes:** one-line context

## Log
- YYYY-MM-DD: entry
```

**Related skills:** `[[pm-onboarding]]` · `[[pm-stakeholder-comms]]` · `[[pm-retro]]`

---

### 2. `pm-onboarding` — become single workspace init

**Problem:** `initWorkspace()` in installer.js creates `manifest.json` + `config.json` + `STATE.md`. `/pm-onboarding` creates `STATE.md` + `context.md` + `stakeholders/`. If user never ran `npx headless-pm init` (it's no longer in getting-started.md), `manifest.json` and `config.json` are missing and `/pm` falls back to broken defaults.

**Fix:** pm-onboarding writes ALL workspace files itself at the end of the session (both Path A and Path B). No dependency on `npx headless-pm init`. `initWorkspace()` in installer.js stays as-is — not deleted, just no longer required.

After user confirms the summary, pm-onboarding creates:

```bash
mkdir -p .pm .pm/stakeholders .pm/artifacts
```

Files written:

| File | Content |
|------|---------|
| `.pm/config.json` | `{"product": "[name]", "phase": "[stage]", "sprintAnchor": "[today]", "sprintCadence": 14}` |
| `.pm/manifest.json` | `{"initialized": "[today]", "version": "1"}` — minimal stub, sufficient for /pm checks |
| `.pm/STATE.md` | product, phase, sprint focus, blockers (from onboarding answers) |
| `.pm/context.md` | full synthesis (already written today) |
| `.pm/goals.md` | goal from Q7 (Path B) or extracted goal from docs (Path A) |
| `.pm/decisions.md` | empty template with header |
| `.pm/risks.md` | empty template with table header |
| `.pm/open-questions.md` | empty template with header |
| `.pm/stakeholders/*.md` | one file per named stakeholder |

After writing, say:
> "Workspace ready. Run `/pm` to start — it'll pick up from here."

**Remove 5-stakeholder cap:** create a file per named stakeholder, no hard limit.
If user names more than 10 in one onboarding, ask: "That's a big list — want me to capture all of them now, or just the top ones by influence and add the rest with `/pm-stakeholder add` later?"

---

### 3. Staleness check in `/pm` — situation.md

**Problem:** `/pm` trusts `situation.md` without knowing its age. A week-old snapshot misdirects routing.

**Fix:** Add to `/pm` `## Step 1 — Read context silently`, after reading situation.md:

```
After reading .pm/situation.md: check the file's last-modified date (use bash: stat -f "%Sm" -t "%Y-%m-%d" .pm/situation.md).
If the file is older than 7 days, flag it in the Opening Dashboard:
  Радар: ⚠ снапшот устарел (N дней) — запускаю pm-radar
Then always proceed to Step 2 (pm-radar) — do not skip it based on situation.md age.
```

The flag is informational. pm-radar always runs in Step 2 anyway — this just makes the staleness visible to the user.

---

### 4. Wire decisions.md, risks.md, goals.md into existing skills

These files exist but nothing writes to them. Fix: add a `## Memory Write` block to 7 skills.

**decisions.md** — append one line per session when a key decision is made:
```
- 2026-06-12: [decision summary] — [rationale in one clause]
```

Skills to update:
- `pm-prd` — after PRD is confirmed: append the core product decision (what we're building and why)
- `pm-roadmap` — after roadmap is output: append the prioritization decision
- `pm-strategy` — after strategy output: append positioning or bet decision

**risks.md** — append new risks as a table row:
```
| Risk | Severity | Owner | Status | Last Reviewed |
|------|----------|-------|--------|---------------|
| [risk] | high/med/low | PM | open | YYYY-MM-DD |
```

Skills to update:
- `pm-sprint-plan` — after plan: append capacity / dependency risks
- `pm-competitive-scan` — after output: append competitive risks identified
- `pm-incident-response` — after triage: append incident as risk row if it reveals a systemic gap

**goals.md** — write once, update on OKR cycle:

Skills to update:
- `pm-onboarding` — after Path B Q7 ("success in 30 days"): write the goal to goals.md as:
  ```
  ## 30-Day Goal (set YYYY-MM-DD)
  [goal from onboarding]
  ```
- `pm-okr` — overwrite goals.md with structured OKR output when OKRs are set

**Format for `## Memory Write` block** (add to each skill's Output Template section):
```
## Memory Write
After output is confirmed, append to `.pm/decisions.md` (create if missing):
`- {today}: {one-line decision} — {rationale}`
Do not ask for confirmation. Do not announce it. Just write.
```

---

## Files changed

| File | Change |
|------|--------|
| `skills/pm-stakeholder/skill.md` | CREATE — new skill |
| `skills/pm-onboarding/skill.md` | UPDATE — remove 5-cap, add init check at end, write goals.md in Path B |
| `skills/pm/skill.md` | UPDATE — staleness check for situation.md in Step 1 |
| `skills/pm-prd/skill.md` | UPDATE — Memory Write block → decisions.md |
| `skills/pm-roadmap/skill.md` | UPDATE — Memory Write block → decisions.md |
| `skills/pm-strategy/skill.md` | UPDATE — Memory Write block → decisions.md |
| `skills/pm-sprint-plan/skill.md` | UPDATE — Memory Write block → risks.md |
| `skills/pm-competitive-scan/skill.md` | UPDATE — Memory Write block → risks.md |
| `skills/pm-incident-response/skill.md` | UPDATE — Memory Write block → risks.md |
| `skills/pm-okr/skill.md` | UPDATE — write goals.md on OKR output |

10 files. No installer.js changes. No new dependencies.

---

## Out of scope

- `open-questions.md` — not wired in this spec. Belongs in a future `/pm-questions` skill or as a follow-on.
- Automatic git commit of .pm/ files — out of scope (pm-save handles this separately).
- UI / landing page changes — out of scope.
