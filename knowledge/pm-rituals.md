# PM Rituals

## What it is

PM rituals are recurring ceremonies, reviews, and communication cadences that keep a product team aligned, focused, and productive. Unlike one-time events (a launch, a sprint planning), rituals happen on a regular schedule and create the operating rhythm of the product function. The most effective PM rituals reduce the need for ad-hoc alignment because stakeholders know when and how information flows.

The frameworks come from Agile/Scrum (sprint ceremonies), the Amazon operating cadence (weekly business reviews, OP1/OP2 planning), and research on high-performing product teams (Teresa Torres on continuous discovery, Marty Cagan on product review rhythms). The key design principle: every ritual should have a decision it enables or a misalignment it prevents — if it just informs, it might be a document instead.

## When to use

- When joining a new team and establishing a working rhythm
- When a team has too many ad-hoc meetings and no predictable cadence
- When recurring misalignment or surprises suggest the current rituals are insufficient
- When scaling a product team beyond 3–4 PMs and needing structure
- When designing the operating model for a new product area

## Core components / steps

### Weekly Product Review

**Purpose**: Surface blockers, align on priorities for the week, review metrics signals.

**Frequency**: Weekly, 30–45 minutes
**Attendees**: PM, engineering lead, design lead, data analyst (optional)
**Not required**: executives, stakeholders outside the core team

**Agenda structure:**
1. Metric pulse (5 min): Top 3 product metrics — trend vs last week. No deep dives here; flag anomalies.
2. Ship status (10 min): What shipped this week? What was blocked and why?
3. Priority for this week (10 min): Confirm the top 1–2 things the team should complete by EOW.
4. Blockers (5 min): Any cross-team dependencies, approvals needed, or stuck decisions?
5. Open items (5 min): Anything else that needs surfacing.

**Output**: A Slack message or doc with the week's top priority, any blockers, and the metrics snapshot. This doubles as a stakeholder update.

**Anti-patterns**: Weekly review becomes a status theater where nobody changes anything. If the meeting consistently produces no decisions, replace it with a written async update.

### Monthly Roadmap Review

**Purpose**: Align stakeholders on what is and is not on the roadmap, review progress against quarterly goals, handle scope change requests.

**Frequency**: Monthly, 60 minutes
**Attendees**: PM, engineering lead, design lead, + key stakeholders (sales, marketing, customer success)
**Not for**: Deep feature discussions, design reviews

**Agenda structure:**
1. Q progress (10 min): Are we on track for the quarter's goals? What changed since last month?
2. Roadmap status (15 min): What shipped, what's in flight, what's planned for next 4–6 weeks?
3. Scope change requests (20 min): Items stakeholders want added. For each: discuss priority impact, PM makes call or escalates.
4. Next milestone preview (10 min): What the team will focus on next month.
5. Q&A (5 min)

**The scope change request format**: Stakeholders who want to add items must submit in advance with: user need, expected impact, rough size. This prevents "just 5 minutes" requests from dominating the meeting.

**Output**: Updated roadmap shared within 24 hours. Declined scope change requests communicated in writing with reasoning.

### Design Critique

**Purpose**: Get substantive, actionable feedback on design work before it enters development — not after.

**Frequency**: As needed, tied to design milestones (weekly if design is active)
**Attendees**: Designers, PM, engineering lead. Optional: user researcher, relevant engineer.
**Not for**: Executive approval, final sign-off (that happens separately)

**Running effective design critique:**
1. **Context setting** (5 min, designer): What problem are we solving? Who is the user? What did we try previously?
2. **Walkthrough** (10 min, designer): Walk through the proposed solution without editorializing.
3. **Questions only** (5 min): Attendees ask clarifying questions — no feedback yet.
4. **Feedback round** (15 min): Structured feedback using the "I like / I wish / What if" format.
   - "I like" — what is working
   - "I wish" — what is not serving the user goal
   - "What if" — alternative approaches to explore
5. **PM decision** (5 min): PM synthesizes — what to explore further, what to proceed with, what to cut.

**PM's role in critique**: Not to give the most feedback, but to keep the discussion anchored to user outcomes and scope. The PM must own the decision at the end — "we'll proceed with option B" — so the meeting ends with direction, not open loops.

**Anti-pattern**: Design by committee. If more than 6 people are giving feedback, the meeting is too large. Split into a decision-maker round (PM + design + eng) and a stakeholder preview round.

### Sprint Retrospective (PM Perspective)

**Purpose**: Review what helped and what hurt the team's ability to ship. Identify 1–2 process improvements per sprint.

**Frequency**: End of each sprint (typically every 2 weeks)
**Facilitator**: Usually Scrum Master or EM — PM participates but does not facilitate
**PM focus**: What product decisions, unclear requirements, or late scope changes caused sprint pain?

**PM takeaways from retrospectives:**
- Requirement clarity: Were specs complete when engineering started? If not, commit to writing specs earlier.
- Scope stability: How many tickets were added mid-sprint? If > 20%, sprint planning needs rigor.
- Blocker resolution: Were blockers resolved within 24 hours? PM owns unblocking cross-team issues.
- Discovery-delivery synchronization: Was there a design or research gap that blocked engineering?

**The 1–2 improvement rule**: Retrospectives that produce 10 action items produce zero changes. Commit to 1–2 changes with a named owner and a date. Review at the next retro.

### One-Pager Weekly Update

**Purpose**: Keep stakeholders informed without requiring a meeting; create a searchable record of product progress.

**Frequency**: Weekly (Friday or Monday)
**Distribution**: Team + stakeholders who need visibility (leadership, adjacent teams)
**Format** (async-first):

```
## Product Update — [Date]

**Shipped this week:**
- [Feature/fix with 1-sentence impact]

**In progress:**
- [Work in flight, expected completion]

**Metrics pulse:**
- [Key metric]: [value] vs [last week] (↑/↓)

**Blockers / decisions needed:**
- [Specific ask if any]

**Next week focus:**
- [Top 1-2 priorities]
```

**The 5-minute rule**: If the update takes more than 5 minutes to write, it is too long. Brevity respects readers' time and signals PM clarity.

### Async vs Sync Ritual Design

**Sync rituals are justified when:**
- A decision needs to be made in real time
- Trust or relationships need repair (hard to do async)
- The discussion requires back-and-forth iteration that async cannot support

**Async alternatives (documents) are better when:**
- The goal is information sharing
- Attendees are in different time zones
- The "meeting" consistently ends without a decision

| Ritual | Sync? | Can become async? |
|--------|-------|-------------------|
| Weekly product review | Yes (if decisions needed) | Yes — Slack update if no blockers |
| Monthly roadmap review | Yes | No — needs live discussion for scope conflicts |
| Design critique | Yes | Partially — async review + sync decision |
| Sprint retrospective | Yes | No — reflection needs real-time honesty |
| Weekly update | No | Always async |

## Key questions to ask

- Does each ritual produce a decision or prevent a misalignment? If not, replace with a document.
- Who owns each ritual — and are they actually running it with discipline?
- Are stakeholders getting enough visibility that they are not demanding ad-hoc updates?
- Are retrospective action items being tracked and reviewed, or just generated?
- Is the meeting load on engineers and designers justified, or are meetings interrupting deep work?

## Common mistakes

- **Rituals without outputs**: A meeting that ends with "good discussion" and no decision or action is overhead.
- **Too many attendees**: Every unnecessary attendee reduces decision quality and increases coordination cost.
- **Skipping retrospectives when things are going well**: That is exactly when retrospectives surface the improvements that prevent the next crisis.
- **Monthly roadmap review as a surprise session**: Stakeholders should not see the roadmap for the first time in the review. Share it 48 hours before; use the meeting for questions and decisions.
- **Conflating design critique with design approval**: Critique is for feedback; approval is a separate step with a separate audience.

## Quick reference

```
Weekly review:    30–45 min | team only | metric pulse + ship status + priorities + blockers
Monthly roadmap:  60 min | + stakeholders | progress + status + scope changes + preview
Design critique:  30 min | small team | context → walkthrough → Q&A → I like/wish/if → decision
Sprint retro:     45–60 min | team | 1–2 action items max
Weekly update:    Async | < 5 min to write | shipped + in-progress + metrics + blockers
```

| Meeting | Sync? | Decision | Owner |
|---------|-------|----------|-------|
| Weekly review | Yes | Weekly priority | PM |
| Roadmap review | Yes | Scope changes | PM |
| Design critique | Yes | Design direction | PM + Design |
| Sprint retro | Yes | 1–2 process fixes | Team |
| Weekly update | Async | None (inform) | PM |

## Sources

- [Continuous Discovery Habits — Teresa Torres (2021)](https://www.amazon.com/Continuous-Discovery-Habits-Discover-Products/dp/1736633309)
- [Inspired: PM Processes — Marty Cagan (2018)](https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/)
- [Amazon Operating Cadence — public descriptions from Amazon alumni](https://www.aboutamazon.com/)
- [Design Critique Best Practices — IDEO Design Kit](https://www.designkit.org/methods/)
- [Agile Retrospectives — Esther Derby & Diana Larsen (2006)](https://www.amazon.com/Agile-Retrospectives-Making-Teams-Great/dp/0977616649)

## Related

- [[dual-track-agile]]
- [[linear-jira-best-practices]]
- [[okr-implementation]]
- [[stakeholder-influence]]
- [[pm-writing]]
