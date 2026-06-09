# Shape Up

## What it is
Shape Up is a product development methodology from Basecamp (Ryan Singer, 2019) that rejects sprints, estimation points, and infinite backlogs in favor of 6-week cycles, fixed time with variable scope, and deliberate shaping before any build begins. The core shift: instead of estimating how long work will take, teams set an **appetite** — a deliberate time budget — and shape the work to fit it.

## When to use
- Teams frustrated by perpetual sprint carry-over and backlog debt
- Products where scope flexibility is acceptable (not regulated, not fixed-spec contracts)
- Teams of 1–3 builders who can own a full shaped bet end-to-end
- Companies that want to kill the planning-by-committee anti-pattern
- When stakeholders keep adding scope mid-cycle and shipping suffers

## Core components

### 1. Appetite (not estimates)
- An estimate asks: "How long will this take?" — scope is fixed, time expands
- An appetite asks: "How much time are we willing to spend on this?" — time is fixed, scope adjusts
- Two standard appetites: **Small Batch** (1–2 weeks) and **Big Batch** (6 weeks)
- If a shaped problem can't be solved within its appetite, the solution gets re-shaped — not the deadline extended

### 2. Shaping
Happens before betting. A small senior group (not the build team) shapes work into pitches:
- **Problem:** What specific customer pain or business outcome does this address?
- **Appetite:** How much time is this worth?
- **Solution:** Rough sketches — fat-marker wireframes, not detailed specs
- **Rabbit holes:** Known edge cases and technical risks explicitly called out
- **Out of bounds:** What we're NOT doing — prevents scope creep mid-cycle

Shaped work is "rough enough to leave room for builders, specific enough to avoid open-ended problems."

### 3. The Betting Table
Held before each 6-week cycle. Key decision-makers (CEO, CTO, senior PM, senior dev at Basecamp) review pitches and bet on which ones to build this cycle.
- No backlog — rejected pitches are dropped, not saved. If it matters, re-pitch next cycle.
- No committee scoring — one person with conviction bets on a pitch
- Output: a small number of shaped bets assigned to teams for the next cycle
- Nothing gets added to the cycle once it starts ("circuit breaker" rule)

### 4. Building (6-week cycle)
Teams of 1 designer + 1–2 programmers work autonomously on their bet:
- No daily standups, no sprint reviews
- Teams scope their own tasks using **hill charts** (see below)
- They make scope decisions to fit the time budget — ship a smaller, complete version rather than a half-built full version
- End of 6 weeks: ship or kill (no automatic carry-over)

### 5. Hill Charts
Visual progress tool that tracks where each task sits on a hill:
```
             [top of hill]
            /              \
"Figuring it out"     "Making it happen"
(unknown territory)    (known, just execution)
```
- **Uphill:** uncertainty phase — team is solving "how do we do this?"
- **Downhill:** execution phase — team knows exactly what to do, just doing it
- Managers can see which tasks are stuck uphill without daily check-ins
- A task stuck on the uphill slope for two weeks is a signal to descope or solve the unknown

### 6. Cool-down (2 weeks between cycles)
No shaped work during cool-down. Teams:
- Fix bugs
- Explore new ideas freely
- Write pitches for the next betting table
- Do maintenance, refactoring, small improvements

## Key questions to ask
- What is the appetite for this problem — small batch or big batch?
- What is the core use case? What is explicitly out of scope?
- What are the rabbit holes (known unknowns) that could blow the time budget?
- Does this shaped pitch have a clear problem statement, not just a feature request?
- After 6 weeks, would a smaller version be shippable? What would it cut?

## Common mistakes
- **Shaping too much:** Over-specced pitches remove builder creativity and autonomy
- **Carrying over cycles:** Treating the 6-week limit as soft creates the same sprint debt Shape Up is designed to avoid
- **Using Shape Up without shaping:** Running 6-week cycles on un-shaped work is just long sprints
- **Betting table as rubber stamp:** If the table approves everything pitched, it's not making hard choices
- **Hill chart theater:** Manually updating hill charts to look good instead of using them to surface real unknowns

## Quick reference

**Pitch template:**
```
Title:
Problem: (what customer pain/outcome)
Appetite: (small batch = 1-2w / big batch = 6w)
Solution: (rough sketch or description)
Rabbit holes: (known risks to address up front)
No-gos: (explicitly out of scope)
```

**Cycle calendar:**
```
Week 1–6: Build cycle (betting table output)
Week 7–8: Cool-down (bugs, pitches, exploration)
Repeat
```

**Shape Up vs Scrum comparison:**
| | Scrum | Shape Up |
|---|---|---|
| Cycle length | 2 weeks | 6 + 2 weeks |
| Scope | Fixed | Variable |
| Estimation | Story points | Appetite |
| Backlog | Required | Rejected |
| Mid-cycle changes | Via backlog | Never |
| Progress visibility | Velocity / burndown | Hill charts |

## Sources
- Ryan Singer, *Shape Up* (2019, free at basecamp.com/shapeup)
- [Shape Up: full text — basecamp.com](https://basecamp.com/shapeup)
- [Betting Table chapter — basecamp.com/shapeup/2.3-chapter-09](https://basecamp.com/shapeup/2.3-chapter-09)
- [Shape Up overview — curiouslab.io](https://www.curiouslab.io/blog/what-is-basecamps-shape-up-method-a-complete-overview)
- [5 key takeaways — prodify.group](https://www.prodify.group/blog/book-report-5-key-takeaways-from-shape-up-by-basecamps-ryan-singer)

## Related

- [[lean-startup]]
- [[dual-track-agile]]
- [[prioritization-frameworks]]
- [[working-backwards]]
- [[pm-rituals]]
