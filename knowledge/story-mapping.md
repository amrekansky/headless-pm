# User Story Mapping

## What it is

User story mapping is a visual technique developed by Jeff Patton that arranges user stories in a two-dimensional map: left-to-right shows the sequence of user activities over time (the user journey), and top-to-bottom shows priority within each activity (must-have at top, nice-to-have at bottom). The result is a spatial representation of the whole product story that makes it impossible to lose sight of the user while slicing releases. It replaces the flat backlog — a one-dimensional list that optimizes for developer task management at the cost of user context.

## When to use

- **New product discovery:** map the full user journey before writing a single story
- **Release planning:** identify the thinnest valuable slice rather than building everything
- **Scope reduction under time pressure:** cut features while preserving coherent user experience
- **Onboarding new team members:** the map communicates the product faster than reading a backlog
- **Cross-functional alignment:** design, engineering, CS, and leadership can all read a story map without translation

Not the right tool for: incremental feature work within a well-understood domain, or when the user journey is already fully understood and stable.

## Core components / steps

### 1. The Backbone (top row — activities)

The backbone is the oversimplified user journey — the high-level activities a user performs, arranged left to right in time sequence. Each card represents a major phase of the user's experience.

Example for a project management tool:
`Set up project → Invite team → Add tasks → Assign work → Track progress → Report results`

The backbone is fixed: you cannot cut it without losing the coherence of the user story. These are the activities that must exist in any version of the product.

### 2. The Walking Skeleton (one row below the backbone)

Below each activity, list the minimum stories that make the activity functional. Together, the backbone + one story per activity = the walking skeleton. It is the thinnest possible version of the product that a user can walk through end to end.

The walking skeleton is the foundation of Release 1. Not the ideal version — the survivable version. It can be ugly. It must be usable.

### 3. Release slices (horizontal cuts)

Additional stories are placed below the walking skeleton in descending priority. Release slices are drawn as horizontal lines that cut across the map, grouping stories into deployable increments.

- **Release 1:** backbone + walking skeleton
- **Release 2:** next row of priority stories across all activities
- **Release 3:** further enhancements

The key insight: horizontal cuts preserve user experience coherence. Vertical cuts (ship one activity completely, then the next) produce unusable partial products.

### How to run a story mapping session

**Preparation (15 min before):**
- Clear a physical or virtual wall (Miro, FigJam)
- Sticky notes in two colors: one for activities (backbone), one for stories
- Invite: PM, design lead, 2–3 engineers, and at least one person who has observed real users

**Session flow (2–3 hours):**

1. **Frame the purpose (15 min)** — who is the user, what outcome are they trying to achieve?
2. **Build the backbone (30 min)** — write activities on the top row, arrange left to right in time. Argue until the sequence feels right.
3. **Decompose each activity (45 min)** — under each activity, write the stories that enable it. Do not prioritize yet — generate first.
4. **Tell the story (15 min)** — walk left to right across the map narrating the user experience. Find gaps. Add missing cards.
5. **Draw release lines (30 min)** — identify the walking skeleton, draw Release 1 line. Then Release 2. Be honest about what users can live without.
6. **Photograph and digitize (15 min)** — if physical, capture the map before people leave.

### Output

The output is not a document — it is a shared mental model. The map should be visible in the team's workspace throughout development. When a story is ambiguous, the team should look at the map to see where it lives and what it enables.

## Key questions to ask

- Who is the user, and have we observed them actually trying to do this?
- Is the backbone in the right time sequence, or are we showing our org chart instead of the user journey?
- If we drew the Release 1 line here, would a real user be able to do something meaningful?
- Which stories are below any release line — should they be on the map at all?
- Does every card connect to user value, or have implementation tasks crept in?

## Common mistakes

**Building the map as a documentation exercise after the backlog is already written.** The map should drive the backlog, not reflect it. If you are mapping stories that already exist, you are doing it backwards.

**Making the backbone too granular.** The backbone should have 5–10 activities for most products. If you have 30 activities, you are at the user story level, not the activity level.

**Treating the walking skeleton as Release 1.** The walking skeleton is the minimum coherent experience — it is the floor, not the plan. Most Release 1s need a few rows above the skeleton to be useful, depending on your market.

**Using story maps to replace engineering estimation.** The map is for user experience thinking. Engineering complexity is a separate conversation; do not conflate the two dimensions.

**Losing the map after the kickoff.** A story map that lives only in the kickoff presentation has no ongoing value. It must be updated as the product evolves.

## Quick reference

**Two-axis structure:**

```
[Activity 1] → [Activity 2] → [Activity 3] → [Activity 4]   ← BACKBONE
[Story 1a]     [Story 2a]     [Story 3a]     [Story 4a]      ← WALKING SKELETON
─────────────────────────────────────────────────────────    ← RELEASE 1 LINE
[Story 1b]     [Story 2b]     [Story 3b]     [Story 4b]
─────────────────────────────────────────────────────────    ← RELEASE 2 LINE
[Story 1c]     [Story 2c]     [Story 3c]     [Story 4c]
```

**Story map vs flat backlog:**

| Flat backlog | Story map |
|-------------|-----------|
| One dimension (priority) | Two dimensions (user journey + priority) |
| Loses user context | Preserves user narrative |
| Releases are arbitrary cuts | Releases are coherent user experience slices |
| New team members need weeks to understand | Map communicates product in one session |

## Sources

- [Jeff Patton: The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/)
- [jpattonassociates.com: Story Map Concepts PDF](https://www.jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf)
- [Avion: User Story Mapping Complete Guide](https://www.avion.io/what-is-user-story-mapping/)
- [Wall-Skills: User Story Mapping](https://wall-skills.com/2016/user-story-mapping/)
- [Product Mindset: User Story Mapping Guide](https://productmindset.substack.com/p/48-user-story-mapping)

[[pm-knowledge-base]]
