# Notion for PMs

## What it is

Notion for PMs is a set of structures, databases, and templates that turn Notion from a general-purpose wiki into a functioning product management system. A well-configured Notion workspace handles: roadmap tracking, backlog management, spec writing, OKR tracking, meeting notes, and decision logging — with linked databases that surface the right view at the right moment.

The challenge with Notion is that its flexibility is also its failure mode: without an intentional structure, PM workspaces become an unnavigable dump of half-written docs. The frameworks here draw from Tiago Forte's PARA system (Projects/Areas/Resources/Archive), public product team setups from Notion's own case studies, and patterns shared by PMs at Figma, Linear, and Vercel who have published their Notion systems publicly.

## When to use

- When setting up a Notion workspace for a new product team
- When the current workspace has become too cluttered to navigate efficiently
- When you need a linked system that connects roadmap → specs → tickets
- When setting up OKR tracking that stays current without manual updates
- When onboarding new PMs and needing a shared documentation system

## Core components / steps

### Core Databases

A PM Notion workspace is built from 5 linked databases. Everything else is views on these databases.

**1. Roadmap Database**

Properties:
- Name (title)
- Status: `Now` | `Next` | `Later` | `Icebox` | `Done`
- Quarter: Q1/Q2/Q3/Q4 + year select
- Owner: person
- Team: select (platform, growth, core product, etc.)
- Outcome: relation → OKR Database
- Spec: relation → Specs Database
- Size: `S` | `M` | `L` | `XL`
- Launch date: date

Views:
- Board view grouped by Status — for roadmap discussions
- Table view filtered by Quarter — for planning
- Timeline view — for stakeholder communication

**2. Backlog / Sprint Database**

Properties:
- Name (title)
- Status: `Triage` | `Backlog` | `Sprint` | `In Progress` | `Done`
- Priority: `P0` | `P1` | `P2` | `P3`
- Type: `Feature` | `Bug` | `Tech Debt` | `Discovery`
- Sprint: date (start of sprint week)
- Initiative: relation → Roadmap Database
- Assignee: person
- Story points: number

Views:
- Board view grouped by Status — active sprint
- Table view filtered by Sprint date — sprint planning
- Table view filtered by Priority = P0 or P1 — triage queue

**3. Specs Database**

Properties:
- Name (title)
- Status: `Draft` | `In Review` | `Approved` | `In Development` | `Shipped`
- Initiative: relation → Roadmap Database
- Author: person
- Review date: date
- Engineering owner: person

Template for each spec (the inline page template):
```
## Problem
[What user problem are we solving? Evidence?]

## Success metrics
[Primary metric, guardrail metrics, leading indicators]

## Scope
[What is in / explicitly out of scope]

## Solution
[Proposed approach — diagrams, mockups, flows as needed]

## Open questions
[Unresolved decisions — owner + deadline for each]

## Launch plan
[How we communicate, gradual rollout, feature flags]
```

**4. OKR Database**

Properties:
- Name (objective or key result, title)
- Type: `Objective` | `Key Result`
- Parent objective: relation → self (for KR → O linking)
- Owner: person
- Target: number
- Current: number
- Progress formula: `round(Current / Target * 100)` + `%`
- Quarter: select

Views:
- Nested list view showing Objectives with KRs indented below
- Table view filtered by owner — for 1:1s

**5. Decision Log**

Properties:
- Name (decision, title)
- Date: date
- Decision made: text (the actual decision in one sentence)
- Options considered: text (alternatives that were evaluated)
- Rationale: text
- Owner: person
- Initiative: relation → Roadmap Database

The decision log is the most underused PM tool in Notion. It prevents "why did we build it this way?" questions from consuming hours months later.

### Workspace Structure

```
📌 Home
  → My sprint (filtered: assignee = me, sprint = current)
  → This week's priorities

📋 Roadmap
  → Now/Next/Later board
  → Q[X] planning table

📝 Specs
  → Active specs (status ≠ Shipped)
  → All specs archive

🎯 OKRs
  → This quarter
  → All time

📅 Meetings
  → Weekly product review (template)
  → Sprint planning (template)
  → Design critique (template)

📚 Knowledge
  → Team handbook
  → Technical reference
  → User research repository
```

### Templates Worth Building

**Weekly product review template:**
```
## [Date] Weekly Product Review

**Metrics pulse**
- [Metric 1]: [value] vs last week (↑/↓ %)
- [Metric 2]: ...

**What shipped**
- [Feature/fix]: [impact sentence]

**Week priorities**
- [Top 2 things team should complete]

**Blockers**
- [Specific ask, owner, deadline]
```

**Sprint planning template:**
```
## Sprint [#] — [dates]

**Goal**: [one sentence sprint goal]

**Committed:**
[list of tickets from Backlog DB, status → Sprint]

**Capacity notes:**
[vacations, interruptions, capacity % adjustment]

**Carryover from last sprint:**
[tickets that didn't complete]
```

**1:1 template:**
```
## 1:1 — [Person] — [Date]

**Updates**
- [Their updates]

**Priorities**
- [Their top 3 this week]

**Blockers / needs**
- [What they need from me]

**Follow-ups**
- [ ] [Action item, owner, date]
```

### Notion AI for PMs

Notion AI (built-in since 2023) is useful for PM workflows:
- **Summarize meeting notes**: Paste transcript → ask for action items and decisions
- **Draft spec sections**: Provide context in the doc → ask AI to draft the "Open questions" section
- **Generate templates**: Ask AI to create a spec template for your specific domain
- **Search across workspace**: Natural language workspace search finds related docs faster than manual navigation

**Limits**: Notion AI does not understand your product context. It generates plausible-looking content, not accurate content. Always review AI-generated spec sections before sharing.

### Notion vs Linear for Ticket Tracking

Notion Backlog works for teams of 1–3 PMs. Beyond that, use a dedicated tool:

| Use Notion for | Use Linear/Jira for |
|---|---|
| Roadmap (strategic, quarterly) | Sprint execution (daily ticket tracking) |
| Specs and decision logs | Bug tracking and engineering workflow |
| OKR tracking | Cycle time and engineering metrics |
| Meeting notes and async docs | Integration with GitHub/CI/CD |

The hybrid: Notion owns strategy + docs; Linear/Jira owns execution. The relation between them is a Notion property that links to the Linear/Jira project URL.

## Key questions to ask

- Does every team member know where to find the current roadmap, sprint, and OKRs in under 30 seconds?
- Is the workspace structured by usage (frequent → top) rather than by category?
- Are specs linked to roadmap items, so the connection between strategy and execution is visible?
- Is the decision log being maintained, or is institutional knowledge living in Slack threads?
- Is Notion doing too much — would Linear handle the sprint tracking better?

## Common mistakes

- **Database sprawl**: Creating a new database for every problem instead of adding a property to an existing one. Five databases is enough for most PM workspaces.
- **Views no one looks at**: Building 10 database views that nobody uses. Start with 2 views per database — add more only when a specific need arises.
- **Notion as a roadmap substitute**: A Notion page is not a roadmap. A roadmap communicates strategy to stakeholders. A database view is a tracking tool. Know the difference.
- **Stale specs**: Specs that were written 6 months ago and never updated create confusion. Archive specs that are more than 2 sprints old (status = shipped or cancelled).
- **Missing templates**: Without a standard spec template, specs diverge in structure. New team members cannot find the information they need. Enforce the template with a Notion database template.

## Quick reference

```
5 core databases:
  Roadmap:        Now/Next/Later/Icebox status + quarter + outcome relation
  Backlog:        Triage → Sprint → Done + priority + initiative relation
  Specs:          Draft → Approved → Shipped + spec template
  OKRs:           Objective + Key Results (self-relation) + progress formula
  Decision Log:   Decision + options + rationale + initiative relation

Workspace structure: Home → Roadmap → Specs → OKRs → Meetings → Knowledge

Notion AI: good for summarizing, drafting — not for product judgment
Notion vs Linear: Notion owns strategy+docs; Linear owns sprint execution
```

| Database | Primary view | Purpose |
|---|---|---|
| Roadmap | Board by status | Roadmap discussions |
| Backlog | Board by status | Sprint tracking |
| Specs | Table by status | Review workflow |
| OKRs | Nested list | Weekly check-in |
| Decision Log | Table by date | Audit trail |

## Sources

- [Notion for Product Managers — Notion blog](https://www.notion.so/blog/product-manager-templates)
- [PARA Method — Tiago Forte (Forte Labs)](https://fortelabs.com/blog/para/)
- [Building a PM System in Notion — Lenny Rachitsky thread](https://twitter.com/lennysan)
- [Notion AI Overview — Notion product docs](https://www.notion.so/product/ai)
- [Notion Product Roadmap Template — Notion.so/templates](https://www.notion.so/templates/product-roadmap)

[[pm-knowledge-base]]
