# Jobs-to-be-Done (JTBD)

Jobs-to-be-Done is a theory of customer motivation. People don't buy products — they hire them to make progress in a specific situation. The "job" is the progress customers are trying to make: functional (get a task done), social (how I'm perceived), or emotional (how I feel). Understanding the job explains why people switch from one solution to another and what they truly value.

---

## Three Schools of JTBD

### 1. Clayton Christensen — The Originator
**Core framing:** People hire products to do a job. The same product can be hired for different jobs by different people. Understanding which job it's being hired for determines which competitors are real and which improvements actually matter.

**Milkshake story:** McDonald's discovered morning commuters were hiring milkshakes to (1) keep them occupied during a boring drive and (2) last long enough to satisfy until lunch — not for taste or nutrition. The real competition was bananas, bagels, and Snickers bars, not other milkshakes. This insight only became visible when the team asked "what job is this being hired to do?" instead of "who is the typical milkshake buyer?"

**Functional, social, emotional dimensions:**
- **Functional:** The practical task to accomplish ("get from A to B quickly")
- **Social:** How the customer wants to be seen by others ("look professional in the meeting")
- **Emotional:** How the customer wants to feel ("feel in control, not anxious")
All three dimensions are present in every job. Products that address only the functional dimension leave value on the table.

**Implication:** A competitor isn't just a product in the same category — it's anything the customer might hire for the same job, including doing nothing.

---

### 2. Bob Moesta — The Practitioner (Demand-Side Sales / Switch Interview)
**Core framing:** Progress isn't linear. People oscillate between energy to change and resistance. The moment of "hire" follows a causal sequence of events that can be mapped and understood.

#### 4 Forces of Progress
These four forces operate simultaneously in every purchase decision. Net progress happens only when Push + Pull > Anxiety + Habit.

| Force | Direction | Definition |
|-------|-----------|------------|
| **Push** | Away from current | The frustration or limitation in the current situation that motivates change |
| **Pull** | Toward new | The attraction of the new solution — what it promises |
| **Anxiety** | Against new | Fear of the unknown, implementation risk, switching costs |
| **Habit** | Against change | "The way I do it now" — inertia, comfort, sunk cost |

**Insight:** Most product teams focus on Pull (making their product more attractive) while ignoring Anxiety (what stops people from switching). Reducing Anxiety is often more lever than increasing Pull.

#### Timeline of Switching Moments
Moesta identified 5 phases in the customer's path from status quo to hire:

1. **First Thought** — The moment something triggers the idea that change might be needed ("I've been struggling with this for a while")
2. **Passive Looking** — Vaguely aware of alternatives, not actively searching ("I noticed an ad, I mentioned it to a colleague")
3. **Active Looking** — Committed to finding a solution, evaluating options
4. **Decision** — The hire event (purchase, sign-up, commitment)
5. **First Use / Ongoing Use** — The actual experience of the job being done (or not done)

**Why this matters:** The "struggling moment" (the trigger in First Thought) is the most valuable discovery. It tells you exactly what situation drives people to seek change. Product messaging that matches the struggling moment converts better than generic value prop language.

#### The Struggling Moment
The struggling moment is the specific situation where Push overcomes Habit — the "I've had enough" moment. It's almost always:
- Concrete (a specific event, not a general feeling)
- Emotionally charged (frustration, embarrassment, anxiety)
- The same for similar customer segments

Finding the struggling moment tells you: (1) what marketing trigger to use, (2) which situation to feature in demos, (3) what "before state" to reference in copy.

---

### 3. Tony Ulwick — Outcome-Driven Innovation (ODI)
**Core framing:** Jobs are stable — solutions change. The job doesn't change as technology changes. "Communicate with people far away" is a job that was done by letters, then telegrams, then phone calls, then email, then messaging apps. The job is constant; what changes is the best solution.

**ODI job statement format:**
> [Direction] + [metric] + [object of control] + [context/clarifier]

Example: "Minimize the time it takes to share a document with a colleague while working remotely"

- Direction: Minimize / Maximize / Increase / Decrease
- Metric: time, likelihood, number of, frequency of
- Object: what the customer is controlling or acting on
- Context: constraints, conditions, situations

**Job map:** Ulwick maps the job as a sequence of universal steps customers go through:
1. Define → Plan → Prepare → Execute → Monitor → Modify → Conclude

For each step, the customer has desired outcomes (metrics they want to optimize). Unmet outcomes = opportunities.

**Importance-Satisfaction analysis:** Survey customers on:
- How important is [outcome]? (1–10)
- How satisfied are you with current solutions at [outcome]? (1–10)

**Opportunity score:** Importance + max(Importance - Satisfaction, 0) → identifies the highest-leverage unmet needs.

---

## JTBD vs Personas

| | Personas | JTBD |
|--|---------|------|
| Unit of analysis | Type of person | Situation + desired progress |
| Stability | Changes as demographics shift | Stable across time and technology |
| Predictive power | Low (demographics don't cause purchase) | High (situation + struggle cause purchase) |
| Key question | "Who is our customer?" | "What job are they hiring us to do?" |
| Failure mode | Optimizing for persona attributes that don't predict behavior | Confusing the job with the task or the feature |

**Key insight:** The same person has different jobs in different contexts. A project manager in a Monday morning leadership review is hiring different tools than the same person in a Friday afternoon planning session. JTBD captures this contextual variation; personas cannot.

---

## Switch Interview Protocol

The switch interview is Moesta's technique for extracting the causal story of a hire. Unlike standard user interviews that ask about preferences and opinions, the switch interview reconstructs the timeline of events.

### 5 Interview Phases (reverse-chronological, then forward):
1. **First Use:** "Walk me through the first day you used [product]. What happened?" — surfaces unmet expectations, real use case
2. **Decision:** "Walk me back to the moment you decided to try [product]. What triggered that?" — the hire event
3. **Active Looking:** "What else did you consider? What made you choose [product] over [X]?" — competitive frame
4. **Passive Looking:** "Before you started looking, was there a moment when the idea first occurred to you?" — the struggling moment trigger
5. **First Thought:** "What was happening in your life at that time? What was the thing that finally pushed you?" — the Push force

### Switch Interview Rules:
- Interview recent switchers (within 3 months) — memory is fresh, motivation is real
- Interview both ways: people who switched TO your product AND who switched AWAY
- Avoid hypotheticals ("would you...") — only ask about what actually happened
- Follow the emotion — when affect rises, slow down and probe
- Don't ask about features — ask about situations and events

---

## JTBD Opportunity Statements

When turning JTBD interview findings into actionable insights, write opportunity statements in this format:

> "When [specific situation], [customer type] struggle(s) with [specific friction]."

Rules:
- **Solution-agnostic:** No product features mentioned
- **Specific situation:** Concrete context, not "always" or "in general"
- **Customer language:** Their words, not PM language
- **Grounded:** At least one quote or observed behavior as evidence

Examples:
- "When preparing for a board presentation the night before, senior product managers struggle with quickly finding the right metrics to tell a coherent story."
- "When onboarding a new team member, engineering managers struggle with explaining which decisions were already made and why."

---

## Anti-Patterns

**Confusing the job with the task:**
- Task: "Write a performance review"
- Job: "Be seen as a fair, thoughtful manager by my team and HR"
The job includes the social and emotional dimensions. Optimizing for task completion (speed, templates) while ignoring the job (looking good, feeling confident) misses the real opportunity.

**Confusing the job with the feature:**
- Feature: "Commenting on documents"
- Job: "Align stakeholders on direction without endless meetings"
Features are solutions. Jobs are the progress customers want. A feature can serve multiple jobs; a job can be served by multiple features.

**Using JTBD language to dress up persona thinking:**
- Bad: "Our JTBD customer is a 30-year-old product manager who wants to be more productive"
- This is a persona with JTBD words. The actual job would be situation-specific and solution-agnostic.

**Interviewing non-switchers:**
People who have always used your product or who have never switched reveal their rationalizations, not their causal motivations. The switch interview requires a recent purchase event to reconstruct.

---

## Application in Skill Workflows

- `/switch-interview` — operationalizes the Moesta timeline interview protocol
- `/pm-jtbd` — applies JTBD framing to PM discovery work
- `/continuous-interview-synthesis` — aggregates JTBD findings across interview cycles
- `/attitudinal-segmentation` — attitudes often correlate with the job being hired, not demographics
- `/opportunity-solution-tree` — opportunity nodes should be written as JTBD opportunity statements
