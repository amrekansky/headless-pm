---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-dependencies
description: Map dependencies between teams, systems, or initiatives. Identifies critical path, risks, and owners. Outputs to Miro.
mcp_output:
  primary: miro
  fallback: notion
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-dependencies — Dependency Map

## Knowledge Base
- `~/.headless/pm/knowledge/dual-track-agile.md` — track discovery dependencies separately from delivery dependencies; discovery blockers require different resolution paths than engineering blockers
- `~/.headless/pm/knowledge/shape-up.md` — use Shape Up's scope mapping to identify which dependencies are within a shaped bet vs. outside it; external dependencies are a risk to the bet's fixed-time constraint

## Output Template
Every response MUST include:
- **Critical path:** linear chain from first dependency to ship date
- **Dependency matrix:** From / To / What / Due / Type (Hard/Soft/External) / Risk (H/M/L)
- **At-risk dependencies:** insufficient lead time or unclear ownership — flagged explicitly
- **Actions:** one owner per at-risk dependency + due date
- **External dependencies:** called out separately — outside your control requires escalation path

## Steps

Ask:
1. "What's the initiative or epic we're mapping dependencies for?"
2. "Which teams or systems are involved?"

### Identify dependencies

For each team/system pair:
- What does team A need from team B?
- By when?
- What happens if it's late?
- Who owns the dependency?

### Classify each dependency

- **Hard** (blocks progress completely)
- **Soft** (slows but doesn't block)
- **External** (outside your control — 3rd party, other BU)

### Output

Related skills: `/pm-epic` (identify epic-level dependencies before detailing stories), `/pm-plan` (integrate dependency map into the delivery plan), `/risk-escalation` (escalate hard dependencies that block the critical path)

```
## Dependency Map — [Initiative]
Date: [YYYY-MM-DD]

### Critical path
[Team A] → [deliverable] → [Team B] → [deliverable] → Ship

### Dependency matrix
| From | To | What's needed | Due | Type | Risk |
|---|---|---|---|---|---|
| [team] | [team] | [deliverable] | [date] | Hard/Soft | H/M/L |

### At-risk dependencies
[Dependencies with insufficient lead time or unclear ownership]

### Actions
- [dependency] — owner: [name] — action: [what to do] — by: [date]
```

If Miro MCP: create dependency diagram with team nodes and arrows.
If Notion: create table in project space.


## Related

[[continuous-discovery]] · [[prioritization-frameworks]] · [[okr-implementation]] · [[impact-mapping]] · [[pm-writing]] · [[shreyas-frameworks]] · [[Skills]] · [[Agents]]