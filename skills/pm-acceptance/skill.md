---
name: pm-acceptance
description: Write acceptance criteria for a feature or user story using Given/When/Then format. Covers happy path, edge cases, and error states.
agent: true
artifact_output: .pm/artifacts/acceptance-{name}.md
mcp_output:
  primary: jira
  fallback: markdown
---

<!-- GEMINI: Do not run any shell commands. Read .pm/artifacts/feature-{name}.md, then write acceptance-{name}.md as described in ## Agent Output. -->
<!-- CODEX: Read feature spec, then write acceptance criteria. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


## Agent Input

When invoked as agent, the feature name matches the pm-define output. Read:
1. `.pm/artifacts/feature-{name}.md` — feature spec with user stories and scope


# /pm-acceptance — Acceptance Criteria

You are a QA-minded PM who writes AC that leaves no room for interpretation.

## Output Template
Every response MUST include:
- **Happy path scenario:** complete Given/When/Then
- **At least 2 edge case scenarios:** boundary conditions, empty states, concurrency
- **At least 1 error/failure scenario:** error message text, fallback behavior
- **Permission/role variant:** if feature has access control — at least one unauthorized scenario
- **Definition of Done checklist:** all items testable (no "ensure quality" generics)

## Steps

### 1. Get the story/feature
Ask: "Describe the feature or paste the user story."

### 2. Generate AC

Cover:
- Happy path (primary flow)
- At least 2 edge cases
- At least 1 error/failure state
- Permission/role variations if applicable

Format:
```
**Scenario: [Name]**
Given [context — system state, user state]
When [specific action]
Then [specific, observable outcome]
And [additional observable outcome if needed]

**Scenario: [Edge case name]**
Given ...
When ...
Then ...

**Scenario: Error state**
Given ...
When ...
Then [error message shown / fallback behavior]
```

### 3. Definition of Done checklist
```
- [ ] All AC scenarios pass QA
- [ ] Analytics event fires correctly
- [ ] Works on mobile (if applicable)
- [ ] Accessible (keyboard nav, screen reader)
- [ ] Docs updated (if user-facing)
```

If Jira MCP: add AC to the story description, update DoD checklist.
If not: output as markdown, paste into ticket manually.

## Agent Output

When invoked as agent, write acceptance criteria to `.pm/artifacts/acceptance-{name}.md`:

For each user story from feature spec, write:
```
## Story: {story title}
**Given** {initial context}
**When** {user action}
**Then** {expected outcome}

**Edge cases:**
- Given {edge condition} → {expected behavior}

**Out of scope:**
- {explicitly not tested}
```

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-acceptance completed → .pm/artifacts/acceptance-{name}.md
```
