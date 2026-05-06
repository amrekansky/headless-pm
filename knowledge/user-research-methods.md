# User Research Methods

## What it is

The set of techniques PMs and designers use to learn what users need, how they behave, and where products break down. Research is divided along two axes: **attitudinal vs. behavioral** (what people say vs. what they do) and **qualitative vs. quantitative** (insights vs. statistics). Choosing the right method means choosing the right axis combination for the question you are trying to answer.

## When PMs use this

- Discovery: understanding whether a problem is real and worth solving
- Design validation: checking that a proposed solution is understandable
- Post-launch: diagnosing why metrics moved (or did not)
- Information architecture work: navigation, labels, taxonomy decisions
- Prioritization evidence: converting user pain into decision-making input

## Core Concepts / Framework

### Moderated Usability Testing

A researcher watches a participant complete tasks with a prototype or live product in real time. Researcher can ask follow-up questions.

**When to use:** Design validation, finding task-flow failures, diagnosing specific friction points before or after launch.

**Sample size:** 5 participants per user segment catches ~85% of usability problems (Nielsen Norman Group). Do not test more than 5 before iterating — each additional session past 5 adds diminishing returns.

**Tools:** Zoom (screenshare), UserTesting, Userlytics.

**Limitation:** Moderator presence changes behavior (social desirability bias). Best for qualitative insights, not statistical measurement.

### Unmoderated Usability Testing

Participants complete tasks independently, recording their screen and audio. No researcher present during the session.

**When to use:** You need faster turnaround, more participants, or geographic diversity. Good for quantitative task completion rates.

**Sample size:** 20–40 participants for meaningful completion-rate statistics.

**Tools:** Maze, UserTesting (unmoderated), Lyssna.

**Limitation:** Cannot probe unexpected behavior. Participants may abandon confusing tasks rather than articulating confusion.

### Diary Studies

Participants self-document their experiences and interactions with a product over 1–4 weeks, logging at the moment of occurrence.

**When to use:** Understanding long-term usage patterns, context that cannot be observed in a lab, how habits form or break around a product. Essential when the real usage context (commute, field work, family setting) cannot be replicated in a session.

**Sample size:** 10–20 participants. Longitudinal commitment means smaller samples than survey-based methods.

**Tools:** dscout, Notion (self-reported), custom Telegram-based journaling.

**Limitation:** High participant burden; dropout is common. Entries are retrospective summaries, not always real-time observations.

### Card Sorting

Participants group items (features, pages, content topics) into categories. Open card sorting: participants create their own categories. Closed card sorting: categories are predefined.

**When to use:** Designing or redesigning navigation. Understanding users' mental models for information grouping. Validating proposed taxonomy before building.

**Sample size:** At least 15 participants per user segment (Nielsen Norman Group). 20–30 for robust cluster analysis.

**Tools:** Maze, OptimalSort, Lyssna.

**Limitation:** Reveals how users think about labels, not whether the IA actually helps them complete tasks. Follow up with tree testing.

### Tree Testing

Participants navigate a text-only version of your site hierarchy to find items, without visual design or UI cues. Tests whether the structure works, not whether the design works.

**When to use:** After card sorting has produced a candidate IA, before building the UI. Or to diagnose navigation failures found in analytics.

**Sample size:** 50–150 participants for statistical reliability (Nielsen Norman Group).

**Tools:** Maze, Treejack (Optimal Workshop), Lyssna.

**Key metric:** Task success rate and directness (did they navigate without backtracking).

### 5-Second Test

Participants view a page or design for exactly 5 seconds, then answer questions about what they remember and understood.

**When to use:** Testing first impressions, value proposition clarity, whether a landing page or onboarding screen communicates its core message.

**Sample size:** 20–50 participants.

**Tools:** Lyssna (formerly UsabilityHub), Maze.

**Limitation:** Tests recall and first impression only — not whether the design helps users complete a task.

### Contextual Inquiry

A researcher observes and interviews a user in their natural work environment, watching them do their actual job (not artificial tasks).

**When to use:** Early discovery. When you suspect the problem you are solving is not the real problem. When users' stated needs differ from their actual workflow.

**Sample size:** 5–8 participants. Rich data per session compensates for small N.

**Tools:** In-person (preferred), video call with screenshare.

**Limitation:** Time-intensive to conduct and analyze. Scheduling is difficult.

## Key Metrics / Formulas

| Method | Primary Metric | Sample Size |
|--------|---------------|-------------|
| Moderated usability | Issues found, task completion | 5 per segment |
| Unmoderated usability | Task completion rate, time on task | 20–40 |
| Diary study | Behavioral themes, frequency | 10–20 |
| Card sorting | Category agreement %, mental model clusters | 15–30 |
| Tree testing | Task success rate, directness % | 50–150 |
| 5-second test | Recall accuracy, first impression score | 20–50 |
| Contextual inquiry | Themes, workflow maps | 5–8 |

## Common Mistakes

- **Running usability tests too late.** By the time engineering is done, findings require major rework. Run moderated tests on Figma prototypes, not shipped features.
- **Over-indexing on what users say.** Attitudinal methods (surveys, interviews) tell you preferences; behavioral methods (usability testing, analytics) tell you what actually happens. They often contradict.
- **Testing the wrong thing.** Card sorting tells you about mental models, not task success. Tree testing tells you about structure, not visual clarity. Match method to question.
- **Ignoring sample size guidelines.** 3 usability sessions is not "good enough." 500 card sort responses adds noise without insight. Use the standard sizes.
- **No synthesis.** Raw notes from sessions are not findings. Affinity mapping and theme extraction are required to turn observations into actionable insights.

## Quick Reference

```
Discovery question? → Contextual inquiry, diary study
Design validation? → Moderated usability test (5 users, Figma)
Navigation/IA?     → Card sorting then tree testing
First impression?  → 5-second test
Speed/scale?       → Unmoderated usability (Maze)
Long-term habits?  → Diary study
```

## Sources

- [When to Use Which UX Research Methods — Nielsen Norman Group](https://www.nngroup.com/articles/which-ux-research-methods/)
- [Why You Only Need to Test with 5 Users — Nielsen Norman Group](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/)
- [Card Sorting Definition — Nielsen Norman Group](https://www.nngroup.com/articles/card-sorting-definition/)
- [UX Research Methods — Maze Guide](https://maze.co/guides/ux-research/methods/)
- [How Many Users for a Usability Study — Nielsen Norman Group](https://www.nngroup.com/articles/how-many-test-users/)
- [UX Research Methods 2025 — Lyssna](https://www.lyssna.com/guides/ux-research/ux-research-methods/)
