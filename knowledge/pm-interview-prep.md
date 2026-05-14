# PM Interview Prep

## What it is

PM interviews are among the most structured and studied interview formats in the tech industry. Unlike engineering interviews (which test coding) or design interviews (which test craft), PM interviews test judgment, structure, communication, and product intuition simultaneously. Most top tech companies use a consistent set of question types: product design, estimation, analytical, execution, and behavioral.

The canonical prep resources are: *Cracking the PM Interview* (Gayle Laakmann McDowell), *Decode and Conquer* (Lewis Lin), Exponent's PM interview course, and company-specific guides shared by hiring managers at Google, Meta, and Amazon. The CIRCLES and STAR frameworks are the most commonly taught structures.

## When to use

- When preparing for a PM interview at any company
- When conducting PM interviews (to understand what good looks like)
- When coaching a teammate through the interview process
- When evaluating whether to take a PM role (interview difficulty signals company's PM bar)

## Core components / steps

### Product Design Questions

These are the most common PM interview question type. You are given a product challenge and must design a solution. Example: "Design a feature for Spotify for remote teams."

**The CIRCLES Method** (Lewis Lin):

| Step | Action | Example |
|------|--------|---------|
| **C**omprehend | Clarify the question | "Who is the target user? Are we optimizing for engagement or acquisition?" |
| **I**dentify | State the customer | "I'll focus on: remote knowledge workers who use Spotify during work hours" |
| **R**eport needs | List user goals and pain points | "They want focus music, but current playlists are too variable in energy level" |
| **C**ut | Prioritize the needs | "The biggest pain is unpredictable energy shifts mid-work session" |
| **L**ist solutions | Brainstorm without evaluating | "1. Focus mode 2. BPM filter 3. AI mood matching 4. Work timer integration" |
| **E**valuate | Score solutions on impact × effort | "Focus mode: high impact, low effort → top priority" |
| **S**ummarize | Recap recommendation | "I'd build a Focus Mode that locks BPM range and mutes lyric-heavy tracks" |

**Common mistakes in product design:**
- Jumping to solutions before defining the user
- Not asking clarifying questions at the start
- Proposing only one solution (shows narrow thinking)
- Not prioritizing (saying "all are important" signals weak judgment)

### Estimation Questions

These test quantitative reasoning and comfort with ambiguity. Example: "How many piano tuners are there in Chicago?"

**The Fermi estimation method:**

1. Break the problem into factors you can estimate
2. State your assumptions explicitly
3. Multiply through to a number
4. Sanity check the result

**Example: "How many Google searches happen per day?"**
- World population: ~8 billion
- Internet users: ~5 billion
- Users who use Google: ~60% = 3 billion
- Average searches per user per day: ~3–4
- Result: 3B × 3.5 = ~10.5 billion searches/day
- Sanity check: Google publicly reports ~8.5 billion/day — close enough

**Format for interviewers:**
- State your approach before calculating
- Narrate your assumptions as you make them
- Round to clean numbers — precision is not the point
- Sanity check at the end

### Analytical / Metrics Questions

These test product judgment around data. Common formats: "A key metric dropped 20% — what do you do?" or "How would you evaluate the success of [feature]?"

**Metric drop framework (structured debug):**
1. **Clarify**: Is the data correct? Instrument? Sampling bias? Timezone issue?
2. **Segment**: By platform (iOS/Android/web), geography, user cohort, acquisition channel
3. **Correlate**: Did anything ship that day? External event? Competitor action?
4. **Hypothesize**: Form 2–3 hypotheses based on segments
5. **Verify**: Propose the investigation that would confirm/deny each hypothesis

**Success metrics framework:**
- Primary metric (the one that proves the goal)
- Guardrail metrics (things you cannot hurt while optimizing the primary)
- Leading indicators (early signals the primary will move)

### Execution Questions

"You are the PM for Gmail. How do you decide what to build next?" or "A major feature just failed in production — what do you do?"

These test prioritization judgment and operational process.

**Prioritization answer structure:**
1. Understand the strategic goal of the product/business right now
2. Review the backlog through that lens
3. Use a framework (ICE, RICE, or narrative prioritization) to make the call
4. Communicate the decision to stakeholders with rationale

**Incident response answer structure:**
1. Immediate: Stop the bleeding (rollback, kill switch, circuit breaker)
2. Short-term: Communicate status to affected users and stakeholders
3. Medium-term: Root cause analysis
4. Long-term: Fix the root cause + process improvement to prevent recurrence

### Behavioral Questions (STAR Method)

Behavioral questions ("Tell me about a time when...") test for past experience as a predictor of future performance.

**STAR framework:**

| Component | Content |
|-----------|---------|
| **S**ituation | Context — what was the situation? 2–3 sentences |
| **T**ask | Your specific responsibility in that situation |
| **A**ction | What you did, specifically (use "I", not "we") |
| **R**esult | The measurable outcome. What changed because of your actions? |

**Common PM behavioral questions:**
- "Tell me about a time you had to push back on an engineer/designer/executive."
- "Tell me about a feature you shipped that failed. What did you learn?"
- "Tell me about a time you had to make a decision with incomplete data."
- "Describe a situation where you had to influence without authority."

**Behavioral answer rules:**
- Be specific — interviewers probe vague answers into specific ones
- Quantify outcomes where possible ("increased activation by 12%")
- Own failures honestly — humility and learning signal well
- Use "I" for your contribution even when the team did the work

### How Top Companies Differ

| Company | Focus | What "good" looks like |
|---------|-------|----------------------|
| Google | Structured thinking, data, scale | CIRCLES answer with data; metrics-based success definition |
| Meta | Speed, impact, user empathy | Focus on shipping and learning; quantified business impact |
| Amazon | Working Backwards, customer obsession | Start from customer pain; PR/FAQ-style framing |
| Apple | Craft, taste, system thinking | Design quality as first-class concern; ecosystem awareness |
| Startups | Bias to action, resource constraints | Scrappiness; doing more with less; founder-level ownership |

## Key questions to ask

- (In the interview) What does success look like for this role in the first 90 days?
- (In prep) Can I tell a compelling quantified story for every behavioral question type?
- (In design questions) Am I proposing multiple solutions and prioritizing, or just one?
- (In estimation) Am I narrating my assumptions, or just producing a number?

## Common mistakes

- **Jumping to solutions**: Product design questions should start with user definition and problem validation, not solutions.
- **Not asking clarifying questions**: Interviewers expect you to narrow scope before answering.
- **Vague STAR answers**: "We improved metrics" is not an answer. "We increased 30-day retention from 42% to 58%" is.
- **Memorized frameworks, no judgment**: CIRCLES is a scaffold, not a script. Interviewers want to hear your thinking, not a recitation.
- **Neglecting behavioral prep**: PM candidates often over-prepare product design questions and under-prepare behavioral ones. Behavioral questions sink more candidates.

## Quick reference

```
Product design: CIRCLES → Clarify → User → Needs → Prioritize → Brainstorm → Evaluate → Recommend
Estimation: State approach → Explicit assumptions → Multiply → Sanity check
Metric drop: Clarify data → Segment → Correlate with changes → Hypothesize → Verify
Behavioral: STAR → Situation (brief) → Task → Action ("I did...") → Result (quantified)
```

| Question type | Framework | Time allocation |
|--------------|-----------|----------------|
| Product design | CIRCLES | 15–20 min |
| Estimation | Fermi + narration | 5–10 min |
| Metric drop | Segment → correlate → hypothesize | 10–15 min |
| Behavioral | STAR | 3–5 min per story |

## Sources

- [Cracking the PM Interview — Gayle Laakmann McDowell & Jackie Bavaro (2013)](https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818)
- [Decode and Conquer — Lewis Lin (2013)](https://www.lewis-lin.com/decode-and-conquer)
- [Exponent PM Interview Prep — tryexponent.com](https://www.tryexponent.com/)
- [PM Interview Questions by Company — Glassdoor](https://www.glassdoor.com/)
- [The STAR Interview Method — Indeed](https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique)
