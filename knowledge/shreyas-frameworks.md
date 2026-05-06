# Shreyas Doshi Frameworks

## What it is
A collection of practical mental models from Shreyas Doshi — ex-PM at Google, Yahoo, Twitter, and Stripe (4th PM, first PM manager, scaled function from 5 to 50+). His frameworks focus on the meta-skills most PMs neglect: task prioritization quality, pre-failure analysis, influence mechanics, and the three levels where product work actually lives.

## When to use
- When you're busy but not impactful (LNO)
- Before any major launch, feature release, or organizational change (pre-mortem)
- When you need to drive decisions without direct authority (influence equation)
- When your team debates execution when the real problem is strategy (three levels)

## Core components

### 1. LNO Framework (Task Prioritization)
**L = Leverage | N = Neutral | O = Overhead**

Every task a PM works on falls into one category:
- **Leverage tasks:** Effort yields 10x–100x return. Requires full energy, deep thinking, creative output. Examples: defining strategy, shaping a new bet, writing a crisp spec, customer discovery.
- **Neutral tasks:** Effort yields roughly equal return (~1x). Competent execution, not exceptional. Examples: routine 1:1s, standard PRDs for well-understood features.
- **Overhead tasks:** Necessary but below 1x return. Should be done with minimum viable quality — not with the same effort as Leverage work. Examples: status updates, recurring reports, scheduling.

**The trap:** Most PMs apply uniform effort to all three categories — they do Overhead work with the same care as Leverage work, which burns capacity on low-return tasks and starves the high-return ones.

**Application:**
1. Label every task on your list: L, N, or O
2. For O tasks: do them fast and "good enough," not perfectly
3. For L tasks: block uninterrupted time, bring full energy
4. If your week is mostly O tasks: structural problem — escalate or delegate

### 2. Pre-Mortem
**What:** A structured failure analysis done *before* launch, not after. Teams project forward to a failure state ("It's one year from now and this product/feature failed") and identify the most likely causes.

**Three categories (Doshi's innovation over standard pre-mortem):**
- **Tigers:** Clear, visible threats everyone sees — and must act on now
- **Paper Tigers:** Apparent threats that actually aren't serious — name them to stop wasting energy
- **Elephants:** The uncomfortable risks no one is talking about — the most valuable category to surface

**Process:**
1. Frame: "Assume one year has passed and this launch was a failure. What happened?"
2. Each person writes independently first (avoids groupthink)
3. Group shares by category: Tigers → Paper Tigers → Elephants
4. For each Tiger/Elephant: assign owner and mitigation action

**When to run:** Before any major feature launch, significant process change, or team reorganization.

### 3. Three Levels of Product Work
Every piece of product work exists at three levels simultaneously. Misalignment between team members — or between PM and leadership — almost always stems from people talking at different levels.

- **Impact level:** What outcome is this trying to drive? What metric? For whom?
- **Execution level:** What will we actually build? What are the decisions and tasks?
- **Optics level:** How will this be perceived by stakeholders, customers, the market?

**Why it matters:** PMs get fired for execution failures, but most execution failures are actually strategy failures (wrong impact level target). Meanwhile, ignoring optics creates organizational friction even when impact and execution are sound.

**Diagnostic question:** "When my team debates X, are we disagreeing at the impact level, the execution level, or the optics level?" — Name the level before trying to resolve the disagreement.

### 4. Influence Without Authority
PMs have accountability without control. Influence must be earned, not assumed.

**Influence Equation (Doshi):**
```
Influence = f(Storytelling, Alignment, Trust, Rigor, Charisma, [formal Authority])
```
Formal authority is one input among six — and the least reliable for sustaining influence.

**Permissionless influence tactics:**
- Write a short Google Doc with a crisp proposal and share it widely — no permission required
- Frame proposals in terms of the audience's goals, not your own
- Build trust through consistent follow-through on small commitments before asking for large ones
- Use data and narrative together: data alone doesn't move people, narrative alone doesn't survive scrutiny

**High Agency principle:** "Finding a way to get what you want without waiting for conditions to be perfect or blaming the circumstances." High agency PMs ship influence by doing, not by waiting to be granted authority.

### 5. Execution vs. Strategy Diagnosis
Doshi's key insight: *Most problems that look like execution failures are actually strategy failures.*

When a team ships something no one uses: often not because they built it wrong, but because they built the wrong thing — a strategy failure disguised as an execution problem.

**Diagnostic heuristic:** If the same execution problem recurs across multiple cycles, stop fixing execution and examine the strategy. Ask: Is the desired outcome correct? Is the target customer right? Is the problem real?

### 6. Editing as a Core PM Skill
Editing is not polishing — it is *choosing what your team works on*. The PM who says "we'll do all 12 features this quarter" is not a product manager; they're a backlog manager.

Strategic editing = deciding what to cut. The capacity freed by cutting low-value work is the capacity that makes high-value work excellent.

## Key questions to ask
- For each task this week: is this L, N, or O?
- Before we ship: what's the most likely reason this fails? Who's not talking about it?
- Are we disagreeing at the impact, execution, or optics level?
- What would I do if I had zero formal authority to make this happen?
- Is this recurring execution problem actually a strategy problem?

## Common mistakes
- Treating all tasks equally (LNO trap)
- Running pre-mortems as blame avoidance theater instead of genuine Tiger/Elephant hunts
- Confusing optics-level objections with impact-level disagreements
- Assuming authority = influence
- Shipping 10 mediocre features instead of 3 excellent ones

## Quick reference

**LNO task label template:**
```
[ ] Task name — [L/N/O] — [time budget]
L tasks: full energy, schedule dedicated block
N tasks: competent, normal pace
O tasks: 20% quality, just enough to close
```

**Pre-mortem agenda (60 min):**
```
0-5 min:   Framing ("One year from now, this failed. What happened?")
5-15 min:  Individual silent writing
15-35 min: Share round-robin, sort into Tigers / Paper Tigers / Elephants
35-50 min: Prioritize top 3 Elephants + top 3 Tigers
50-60 min: Assign owners + mitigation actions
```

## Sources
- [LNO Framework — coda.io/@shreyas/lno-framework](https://coda.io/@shreyas/lno-framework)
- [LNO explained — dualoop.com](https://dualoop.com/blog/shreyas-doshi-the-lno-effectiveness-framework)
- [Pre-mortems template — coda.io/@shreyas/pre-mortems](https://coda.io/@shreyas/pre-mortems)
- [Shreyas on Lenny's Podcast — lennysnewsletter.com](https://www.lennysnewsletter.com/p/episode-3-shreyas-doshi)
- [Influence, Power and Product Management — shreyasdoshi.substack.com](https://shreyasdoshi.substack.com/p/influence-power-and-product-management)
