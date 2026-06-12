# Impact Mapping

## What it is

Impact mapping is a strategic planning technique invented by Gojko Adzic (2012) that connects software deliverables to business goals through a causal chain: Why (goal) → Who (actors) → How (impacts) → What (deliverables). It is a mind map, not a timeline or backlog. Its primary function is to challenge scope — every proposed feature must answer the question "which actor does this change, how does it change their behavior, and does that behavior change move the goal?" If a feature cannot answer all three, it should not be built.

## When to use

- **At the start of a new initiative** — before a roadmap is written or stories are created
- **When scope keeps expanding** — to challenge "just one more feature" requests by asking which actor they impact
- **For strategic alignment** — when multiple stakeholders have different views on what to build
- **Quarterly roadmap reviews** — to test whether planned work is still connected to current business goals
- **When outcomes have drifted from outputs** — team is shipping features but metrics are not moving

Not the right tool for: execution planning, sprint ceremonies, or when the goal and actor landscape are already well-established and stable.

## Core components / steps

### The Four Levels

**Level 1 — Why (the goal)**
The business objective the team is trying to achieve. Expressed as a measurable outcome, not a feature or activity. It lives at the center of the mind map.

Good goals: "Increase monthly active teams from 500 to 1,000 in Q3" or "Reduce time-to-first-value from 7 days to 2 days."
Bad goals: "Build a dashboard" or "Improve the product" — these are deliverables, not goals.

**Level 2 — Who (actors)**
People or systems that can affect the goal — positively or negatively. Actors are external to the team. They include customers, users, stakeholders, partners, and even adversaries (actors whose behavior you want to prevent).

Key insight: if you cannot name an actor, you cannot identify an impact. If there is no actor, the feature probably should not be built.

Example actors for a PM tool: New PMs evaluating tools, existing PMs who have churned, enterprise procurement teams, dev leads who block adoption.

**Level 3 — How (impacts)**
The behavior change you need from each actor. Impacts are changes in what actors do — not features you build. This is the most important level and the most commonly skipped.

Wrong: "Actors will use the new export feature" (describes your output).
Right: "Procurement teams will include us in their RFP shortlist" (describes actor behavior change that drives the goal).

Each impact should be falsifiable: you should be able to measure whether the behavior change happened.

**Level 4 — What (deliverables)**
The software features, content, APIs, or other artifacts that enable the behavior change. These are what most roadmaps start with — impact mapping forces you to derive them from the first three levels instead.

Multiple deliverables can serve one impact. Multiple deliverables that share no impact are candidates for the cutting room floor.

### How to run an impact mapping session

**Before the session:**
- Confirm the goal with the most senior stakeholder who will be present
- Identify 4–8 candidate actors in advance to seed the discussion

**Session flow (2–3 hours):**

1. **Agree on the goal (20 min)** — write the measurable goal. If the room cannot agree, stop: the goal is not defined yet. That is the actual problem to solve.
2. **Identify actors (30 min)** — brainstorm who can influence this goal. Include actors who could frustrate it. Group similar actors.
3. **Map impacts per actor (45 min)** — for each actor: "What would they need to do differently for us to achieve the goal?" Write impacts, not features.
4. **Derive deliverables (30 min)** — only after actors and impacts are stable, ask: "What could we build to enable or support this behavior change?"
5. **Challenge and prune (20 min)** — for every deliverable: trace it back to impact → actor → goal. Remove anything that cannot complete the chain.
6. **Prioritize (15 min)** — which actor/impact combination has the highest leverage? Which deliverables enable multiple impacts?

### Impact map vs user story map

| Dimension | Impact Map | User Story Map |
|-----------|-----------|---------------|
| Question answered | Why are we building this? | How does the user do this? |
| Structure | Mind map (goal-centered) | Timeline (user journey) |
| Best for | Scope challenge, strategic alignment | Release slicing, UI/UX planning |
| When to use | Before building | When building |
| Output | Decision: what NOT to build | Plan: what to build next |

They are complementary, not competing. Run impact mapping first to decide scope; run story mapping after to plan execution.

## Key questions to ask

- Can every item on our roadmap be traced back to a specific actor impact on our stated goal?
- Are we listing impacts (behavior changes) or activities (things we do)?
- Who are the actors who could actively frustrate our goal, and are they on the map?
- Which actor/impact pair has the highest leverage — and are we building for that pair first?
- If we could only achieve one impact, which one would move the goal the most?

## Common mistakes

**Starting with deliverables.** Teams that already have a feature list will map backwards, using impact mapping as post-hoc justification. The value is in deriving deliverables from impacts, not rationalizing existing features.

**Confusing impacts with features or outputs.** "Users will see the new dashboard" is a feature. "Finance directors will approve budget without involving IT" is an impact. The test: could you achieve this impact without building the exact feature you have in mind? If yes, you have an impact.

**Naming the team as an actor.** Actors are external. "Our engineering team will build faster" is not an impact — it is an internal activity. Impact mapping is about changing the behavior of people outside your team.

**Not naming negative actors.** Some actors will work against your goal (churned users, competitors spreading negative reviews, internal gatekeepers). Including them surfaces mitigation strategies that would otherwise be invisible.

**Treating the map as static.** Goals shift, actors change, new impacts emerge. Review the impact map at least quarterly — or whenever a major external change occurs.

## Quick reference

**Mind map structure:**
```
                    [Goal]
                  /   |   \
          [Actor A] [Actor B] [Actor C]
          /   \        |
    [Impact] [Impact] [Impact]
      /  \      |
[Deliv] [Deliv] [Deliv]
```

**The challenge test for every deliverable:**
1. Which actor does this change?
2. What behavior change does it produce?
3. Does that behavior change move the goal?

If you cannot answer all three, the deliverable is not justified.

**Impact map vs user story map (when to use which):**
- Use impact map at the start of a quarter or initiative to decide scope
- Use story map once scope is decided to plan how to build it
- Use both together for complete coverage: why + who + how feeds into the what + when

## Sources

- [Gojko Adzic: Impact Mapping (official site)](https://gojko.net/books/impact-mapping/)
- [ImpactMapping.org: Making a big impact with software](https://www.impactmapping.org/book.html)
- [ProductPlan: Impact Mapping Glossary](https://www.productplan.com/glossary/impact-mapping)
- [Amplitude: The Art of Impact Mapping](https://amplitude.com/blog/impact-map)
- [Buildd: What is Impact Mapping?](https://buildd.co/product/impact-mapping)
- [Mark Dalgarno: What is Impact Mapping?](https://markdalgarno.medium.com/what-is-impact-mapping-2ced79a8b956)

[[pm-knowledge-base]]
