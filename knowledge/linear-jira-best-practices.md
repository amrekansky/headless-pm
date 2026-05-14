# Linear and Jira Best Practices

## What it is

Linear and Jira are the two dominant ticket tracking systems used by product and engineering teams. Both manage the flow of work from backlog to production, but they make different design tradeoffs: Linear is fast, opinionated, and focused on developer experience; Jira is flexible, extensible, and built for enterprise workflows. The best practices here cover workflow setup, labeling taxonomies, sprint hygiene, cycle time metrics, and triage processes that apply to both tools.

The frameworks draw from the Kanban method (David Anderson), Agile sprint execution (Scrum Guide), Linear's own workflow design philosophy, and Atlassian's Jira best practices guides. The key principle: the tool should reflect reality, not aspirations. A ticket system full of stale issues and impossible sprint commitments is worse than no ticket system.

## When to use

- When setting up a new team's ticket workflow from scratch
- When an existing workflow has become messy — too many statuses, unused labels, sprint carryover
- When you need to produce meaningful cycle time or throughput metrics
- When a team is struggling with triage discipline and "everything is P0"
- When migrating from Jira to Linear, or evaluating the tradeoff

## Core components / steps

### Workflow States

The core principle: fewer states = cleaner signal. Every state should answer one question: where is this ticket in the process?

**Minimal effective workflow:**

| State | Meaning |
|---|---|
| `Triage` | New ticket, not yet evaluated |
| `Backlog` | Evaluated, not yet scheduled |
| `Todo` | Committed to current sprint or cycle |
| `In Progress` | Actively being worked |
| `In Review` | PR open, waiting for review or QA |
| `Done` | Shipped to production |

**Avoid**: `Won't Fix`, `Duplicate`, `Blocked`, `Waiting` as first-class states. Use labels for these transient conditions; states should reflect the delivery pipeline, not every possible condition.

**Linear**: Uses "Cycles" (2-week time boxes) instead of sprints. States are team-specific, defined in team settings. Linear's default workflow is close to the minimal set above.

**Jira**: Workflows are project-specific and infinitely customizable — which is the problem. Most teams add states whenever they encounter a gap. Audit quarterly: states with < 5% of tickets are candidates for removal.

### Labeling Taxonomy

Labels answer "what kind of thing is this?" and "what does it need?" They should not duplicate information already in properties (assignee, milestone, priority, project).

**Useful label categories:**

**Type labels** (what kind of work):
- `feature` — user-visible new functionality
- `bug` — regression or defect
- `tech-debt` — internal improvement, no user-visible change
- `discovery` — research task with a deliverable document
- `chore` — maintenance (dependency updates, config changes)

**Domain labels** (which area of the product):
- `auth`, `billing`, `onboarding`, `analytics`, `notifications`, etc.
- Keep domain labels specific to your product; do not use generic names like `backend` or `frontend`

**Signal labels** (what the ticket needs next):
- `needs-design` — blocked on design asset
- `needs-spec` — requirements unclear, PM needs to fill in
- `needs-data` — decision pending metrics analysis
- `blocked-external` — dependency on another team or vendor

**Anti-pattern labels** (do not use these):
- `important` — everything is important; use priority instead
- `quick-win` — tickets that look small often aren't; don't create false urgency
- `low-hanging-fruit` — same problem
- `v2` — creates a graveyard; put in backlog with proper priority

**Label hygiene**: Quarterly audit — any label applied to fewer than 10 tickets is a candidate for removal.

### Priority Levels

P0 through P3 — but only works if P0 is actually rare.

| Priority | Meaning | Expected response |
|---|---|---|
| `P0` | Production down or data loss in progress | Drop everything, fix now |
| `P1` | Significant user impact, major feature broken | Fix in current sprint |
| `P2` | Important but not urgent | Schedule in next 2 sprints |
| `P3` | Nice to have, low impact | Backlog, no SLA |

**The P0 problem**: When everything is P0, nothing is. If more than 5% of active tickets are P0, the priority system has broken down. Run a calibration session: review every P0 together and ask "would we actually drop everything for this?" Demote anything that gets a "probably not."

### Sprint / Cycle Hygiene

**Sprint planning rules:**
1. Never commit to more work than the team completed in the last sprint (velocity-based planning)
2. Leave 20% of capacity unplanned for interruptions, bugs, and scope that expands
3. Every ticket committed to the sprint must have: clear definition of done, owner assigned, size estimate

**Sprint review / retrospective:**
- Calculate sprint completion rate: `tickets completed / tickets committed`
- Target: 80–90% completion rate. Below 70% means planning is over-committed. Above 95% means planning is under-committed.
- Carryover: tickets that slip move to the next sprint with the same priority, not a new ticket

**The carryover trap**: Teams that create new tickets instead of carrying over the old one lose cycle time history and make velocity metrics meaningless. Always carry over, never duplicate.

**Linear Cycles**: Linear auto-creates cycles on a schedule. Incomplete issues roll over automatically. This is the correct behavior — do not resist it.

### Cycle Time Metrics

Cycle time = time from `In Progress` to `Done`. It is the most reliable leading indicator of team health.

**Key metrics:**

| Metric | Definition | Healthy range |
|---|---|---|
| Cycle time | In Progress → Done (per ticket) | < 3 days for S, < 1 week for M |
| Lead time | Triage → Done | Depends on backlog depth |
| Throughput | Tickets/week completed | Stable > growing > shrinking |
| WIP | Tickets In Progress at a time | Per-person: 1–2 max |

**How to use cycle time as a PM:**
- A sudden increase in cycle time means something is blocking the team. Investigate before the sprint ends, not at the retrospective.
- Long-tailed tickets (> 2 weeks in progress) are either too large (need to break down) or genuinely blocked (need PM intervention).
- Do not use cycle time to evaluate individual engineer performance — it measures process, not people.

### Triage Process

Triage is the process of evaluating new tickets and moving them from `Triage` to `Backlog` (with priority) or closing them. Without a regular triage cadence, the triage queue becomes a graveyard.

**Triage cadence:**
- Daily async: engineering lead reviews new tickets, tags obvious bugs for P0/P1
- Weekly sync (15 min): PM + engineering lead review triage queue together, set priority, close duplicates and invalid tickets

**Triage decision criteria:**
1. Is this a real bug or a misuse / known limitation? If misuse: close with documentation link.
2. Is it a duplicate? If yes: link to the original ticket, close.
3. What is the user impact? Set priority using the P0–P3 framework.
4. Is there enough information to act on it? If not: set `needs-spec` label, assign to PM.

**Triage queue health**: The triage queue should be empty at the end of each weekly triage. If it grows faster than you can process, either tickets are being created too liberally (tighten the intake) or the triage meeting needs more time.

### Linear vs Jira Decision

| Use Linear if | Use Jira if |
|---|---|
| Team is < 50 engineers | Enterprise, > 50 engineers or multiple orgs |
| Speed of issue creation matters | Complex custom workflows are required |
| You want opinionated defaults | You need deep Atlassian product integrations |
| GitHub-first development workflow | Confluence, Bitbucket, or ServiceNow integration |
| Developers complain about Jira | Stakeholders demand Jira for reporting |

**Migration note**: Migrating from Jira to Linear typically reduces ticket management overhead by 30–40% based on team reports. The migration is painful for 2–4 weeks; the payoff is permanent.

## Key questions to ask

- How many tickets are in our triage queue right now, and when were most of them created?
- What is our sprint completion rate over the last 3 sprints?
- How many P0 tickets are currently open? Does that number feel accurate?
- What is the average cycle time for a medium-sized feature?
- How many workflow states do we have that have had < 5 tickets in the last 30 days?

## Common mistakes

- **Too many workflow states**: States that describe every possible condition (blocked, waiting, needs design, needs review, needs QA) obscure the actual state of delivery. Use labels for transient conditions.
- **P0 inflation**: When teams mark everything as P0 to get attention, the priority system stops functioning. Enforce P0 definition with examples in the team handbook.
- **Sprint over-commitment**: Committing to 140% of velocity because "this sprint feels different" is not planning — it is wishful thinking. Trust the historical data.
- **Stale backlog**: A backlog with tickets from 18 months ago is not a backlog — it is a graveyard that demoralizes the team and distorts prioritization. Archive anything > 6 months old that isn't explicitly P1 or P2.
- **Cycle time theater**: Measuring cycle time but never acting on the signals. Cycle time data is only useful if it changes planning or process decisions.

## Quick reference

```
Workflow states (minimal): Triage → Backlog → Todo → In Progress → In Review → Done

Label categories:
  Type: feature, bug, tech-debt, discovery, chore
  Domain: (product-specific)
  Signal: needs-design, needs-spec, needs-data, blocked-external

Priority:
  P0 = production down → fix now
  P1 = major broken → this sprint
  P2 = important → next 2 sprints
  P3 = nice to have → backlog

Sprint health:
  Completion rate target: 80–90%
  WIP per person: 1–2 tickets max
  Triage queue: empty after each weekly triage

Cycle time targets:
  S ticket: < 3 days in progress
  M ticket: < 1 week in progress
  Investigate: any ticket > 2 weeks in progress
```

| Metric | Healthy | Warning | Fix |
|---|---|---|---|
| Sprint completion rate | 80–90% | < 70% | Reduce commitment, add buffer |
| P0 ticket count | 0–2 active | > 5 | Run priority calibration |
| Triage queue age | All < 1 week | Any > 1 month | Archive or triage immediately |
| WIP per person | 1–2 | > 3 | Enforce WIP limits |
| Cycle time (M ticket) | < 5 days | > 10 days | Investigate blocker |

## Sources

- [Kanban Method — David Anderson (2010)](https://www.amazon.com/Kanban-Successful-Evolutionary-Technology-Business/dp/0984521402)
- [Scrum Guide — Schwaber & Sutherland (2020)](https://scrumguides.org/)
- [Linear Docs — linear.app/docs](https://linear.app/docs)
- [Jira Best Practices — Atlassian](https://www.atlassian.com/software/jira/guides/getting-started/best-practices)
- [Engineering Metrics That Matter — LinearB Blog](https://linearb.io/blog)
