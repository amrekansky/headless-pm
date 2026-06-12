---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-stakeholder
description: Map stakeholders for a project and plan communications. Identifies influence, interest, and what each stakeholder needs from you. Use at the start of any significant initiative.
mcp_output:
  primary: miro
  fallback: notion
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-stakeholder — Stakeholder Map

## Knowledge Base
- `~/.headless/pm/knowledge/shreyas-frameworks.md` — use the influence/effort matrix and LNO framework to prioritize which stakeholders get the most engagement and how
- `~/.headless/pm/knowledge/pyramid-principle.md` — use MECE to ensure stakeholder categories are mutually exclusive; apply SCR narrative when preparing stakeholder-specific communication plans
- `~/.headless/pm/knowledge/enterprise-b2b-motion.md` — map champion vs economic buyer roles in the stakeholder matrix; use procurement and QBR awareness to set engagement cadence for enterprise stakeholders

## Output Template
Every response MUST include:
- **Stakeholder matrix:** name / role / influence / interest / stance / their concern / what they need — for each stakeholder
- **4-quadrant engagement strategy:** Manage closely / Keep satisfied / Keep informed / Monitor — with specific plan per quadrant
- **Skeptics/Blockers:** named, with specific tactic to address their concern (not generic "meet with them")
- **Champion vs economic buyer distinction** (per enterprise-b2b-motion.md): for enterprise stakeholders
- **Communication cadence:** frequency + format per stakeholder tier

## Steps

Ask:
1. "What initiative or project are we mapping stakeholders for?"
2. "List everyone who affects or is affected by this — including skeptics."

## Stakeholder matrix

For each stakeholder:
- **Influence**: High / Medium / Low (can they block or accelerate?)
- **Interest**: High / Medium / Low (do they care about the outcome?)
- **Stance**: Champion / Neutral / Skeptic / Blocker
- **What they care about**: their primary concern
- **What they need from you**: update cadence, decisions, involvement

```
## Stakeholder Map — [Initiative]

| Stakeholder | Role | Influence | Interest | Stance | Their concern | What they need |
|---|---|---|---|---|---|---|
| [name] | [role] | H/M/L | H/M/L | Champion/Neutral/Skeptic | [concern] | [need] |

### Engagement strategy

**High influence + High interest (Manage closely)**
[Names]: [Specific plan — 1:1 weekly, involve in decisions]

**High influence + Low interest (Keep satisfied)**
[Names]: [Plan — exec brief monthly, flag risks only]

**Low influence + High interest (Keep informed)**
[Names]: [Plan — sprint update email, async updates]

**Low influence + Low interest (Monitor)**
[Names]: [Plan — newsletter or no contact]

### Skeptics / Blockers
[Name]: concern = [X], approach = [specific tactic to address]
```

If Miro MCP: create 2×2 stakeholder matrix with names placed in quadrants.
If Notion: create table in project space.

Related skills: `/pm-exec-brief` (prepare stakeholder-ready executive communication), `/pm-decision` (map stakeholders before making a major decision), `/pm-status` (report to stakeholders using the map as the audience guide)

---

## File Management Modes

These modes manage `.pm/stakeholders/` persistent files. Auto-detect mode from user input:

- User says "add" or "add [name]" → **Add mode**
- User says "update [name]" or "поговорил с [name]" → **Update mode**
- User says "list" or invokes `/pm-stakeholder` with no project description → **List mode**
- User describes a project initiative → **Map mode** (stakeholder matrix above)

### Add mode

Ask: name, role, influence (high/medium/low), attitude (champion/neutral/skeptic), preferred channel.
Write `.pm/stakeholders/{name-slug}.md` (lowercase, hyphens):

```markdown
# {Full Name}

**Role:** {title}
**Influence:** high / medium / low
**Attitude:** champion / neutral / skeptic
**Communication:** {channel or "unknown"}
**Last contact:** {today}
**Notes:** {one-line context}

## Log
- {today}: added via /pm-stakeholder add
```

### Update mode

Read `.pm/stakeholders/{name-slug}.md` for the named stakeholder.
Ask: what happened? (meeting, decision, attitude shift, new context — one sentence)
Append dated log entry under `## Log`:
```
- {today}: {what happened}
```
Update `**Last contact:**` to today. Update `**Attitude:**` if it changed.

### List mode

Read all `.pm/stakeholders/*.md` files.
Output compact table:
```
Name              Role        Influence  Attitude    Last contact
Ana Ivanova       CTO         high       champion    2026-06-12
Marat Serik       CFO         high       skeptic     2026-05-28  ← 15 days ago
```
Flag anyone not contacted in 14+ days with "← N days ago".
If `.pm/stakeholders/` is empty or doesn't exist: say "No stakeholders in `.pm/stakeholders/` yet — use `/pm-stakeholder add` to add them, or run `/pm-onboarding`."


## Related

[[stakeholder-influence]] · [[pyramid-principle]] · [[difficult-conversations]] · [[Skills]] · [[Agents]]