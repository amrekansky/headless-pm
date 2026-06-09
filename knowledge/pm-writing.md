# PM Writing

## What it is

PM writing is the craft of communicating product decisions, requirements, and strategy in written form. PMs write more than almost any other role: PRDs, specs, executive emails, roadmap narratives, board updates, strategy memos, interview briefs, and launch announcements. Poor PM writing is one of the most common causes of misalignment, missed deadlines, and wasted engineering effort — because ambiguous specifications get built ambiguously.

The intellectual foundation comes from Barbara Minto's *The Pyramid Principle* (MECE thinking and BLUF structure), William Strunk and E.B. White's *The Elements of Style* (clarity and brevity), and Amazon's internal writing culture (6-pagers, PR/FAQ, and the ban on slide decks in decision meetings). The modern PM writing canon also includes Shreyas Doshi's frameworks on PRDs vs one-pagers vs strategy docs.

## When to use

- When writing a PRD, spec, or brief that will guide engineering work
- When escalating to leadership or the board with a recommendation
- When writing a roadmap narrative for cross-functional stakeholders
- When onboarding a new teammate to a complex product area
- Any time a decision needs to be durable, reviewable, and shareable

## Core components / steps

### The Pyramid Principle (BLUF)

Barbara Minto's key insight: readers want the conclusion first, then the supporting evidence. Most PMs write chronologically (here is the context → here is the analysis → here is the recommendation). Pyramid writing reverses this.

**BLUF — Bottom Line Up Front:**

```
[ONE SENTENCE: What you recommend and why]
  ├── Supporting argument 1 (data or logic)
  ├── Supporting argument 2 (data or logic)
  └── Supporting argument 3 (data or logic)
        └── Details and caveats below
```

**Example (bad):**
"We have been looking at our onboarding data for the last quarter and noticed some interesting patterns. Activation rates have been declining. We also did 12 user interviews and found several pain points. We think we should redesign the onboarding flow."

**Example (good, BLUF):**
"I recommend we redesign the onboarding flow. Activation has dropped from 65% to 48% over Q3, costing us ~$120K ARR. User interviews (n=12) identified three fixable root causes. A 4-week redesign would recover 10–15 points of activation."

### PRD Structure

A Product Requirements Document specifies what to build, for whom, and how success is measured. It does not specify how to build it.

**Minimal viable PRD structure:**

1. **Problem statement** (1 paragraph): What pain exists? Who experiences it? What does it cost?
2. **Goal** (1–2 sentences): What will be true after we ship? Measurable outcome.
3. **Non-goals** (bullet list): What we are explicitly NOT building. Prevents scope creep.
4. **Requirements** (structured list): What the product must do. User-focused, not implementation-focused.
5. **Success metrics** (3–5 metrics): How we know it worked. Include baseline and target.
6. **Open questions** (bullet list): Decisions not yet made. Assign each to an owner with a date.
7. **Appendix**: Supporting research, mockup links, past decisions.

**PRD anti-patterns:**
- Requirements written as implementation ("we will store the data in Redis") — that is an engineering decision
- Vague requirements ("the feature should be fast") — specify "p95 response < 200ms"
- Missing non-goals — engineers will build scope creep into ambiguous spaces
- No success metrics — creates a feature with no definition of done

### One-Pager Spec Format

For smaller features or exploratory work, a one-pager replaces the full PRD.

```
## [Feature Name] — One-Pager

**What**: One-sentence description of the feature
**Why**: Problem being solved, with data (1–2 sentences)
**Who**: User persona or segment
**How** (high-level): 3–5 bullet points describing the approach
**Success**: Metric → from X to Y in N weeks
**Not doing**: 2–3 explicit exclusions
**Open questions**: 1–3 questions to resolve before engineering starts
**Owner**: PM name | Eng lead | Design lead
**Timeline**: Target ship date
```

### Writing for Engineers vs Executives

**Engineers need:**
- Precise requirements (not vague directives)
- Clear decision boundaries ("PM decides X, engineering decides Y")
- Explicit non-goals
- Edge cases named, not left as exercises
- Links to mockups and related tickets

**Executives need:**
- Conclusion first (BLUF)
- Numbers, not narrative
- Risks surfaced proactively
- One-page maximum per topic
- What you're asking them to decide (not just informing)

**The key difference**: engineers implement what you write — so be precise. Executives approve or resource what you write — so be persuasive and brief.

### Executive Email Structure

```
Subject: [Decision needed / FYI / Action required] — [Topic] by [Date if needed]

[BLUF: One sentence. Recommendation + strongest supporting fact.]

Background (2–3 sentences max):
[Context they need to understand the recommendation]

The ask:
[One specific action. "Approve $30K budget" or "Review and reply by Friday"]

Supporting evidence (optional, below the fold):
[Data, analysis, trade-offs — for those who want to dig deeper]
```

**Subject line conventions:**
- `[Decision needed]` — you need approval or a choice
- `[FYI]` — informing, no action needed
- `[Action required by DATE]` — time-sensitive

### Amazon 6-Pager Format

For complex product or strategy decisions at Amazon (and increasingly elsewhere), the 6-page narrative memo replaces slide decks in decision meetings. Attendees read silently for 20–30 minutes before discussion begins.

**Structure:**
1. **The question being answered** (half page)
2. **Background and context** (1 page)
3. **Options considered** (1 page)
4. **Recommendation** (1 page)
5. **FAQ / anticipated objections** (1 page)
6. **Appendix**: data, mockups, references

**Why it works**: writing forces clarity. You cannot hide vague thinking in a slide. A 6-pager that cannot be written clearly is a sign that the thinking is not clear.

## Key questions to ask

- If someone reads only the first sentence of this document, will they understand what I'm recommending and why?
- Are there any words in this document that could be interpreted two different ways?
- Have I specified what we are NOT building as clearly as what we are building?
- Would an engineer reading this have enough information to start without asking clarifying questions?
- Am I writing to inform or to drive a decision? (The format should differ.)

## Common mistakes

- **Burying the lead**: Chronological storytelling that saves the recommendation for last. Use BLUF.
- **Vague requirements**: "Should be intuitive" or "should be fast" are not requirements. Name a metric.
- **Missing non-goals**: Engineering will fill ambiguous scope. Filling it yourself (explicitly) is faster.
- **Writing for the author's knowledge**: Readers don't know what you know. State assumptions.
- **Over-writing**: A 20-page PRD for a 2-week feature signals a PM who cannot prioritize. Match length to scope.
- **No owner, no date on open questions**: Unresolved questions without owners remain unresolved forever.
- **Spec-as-substitute for conversation**: Writing a PRD and throwing it over the wall is not alignment. Docs support conversations; they do not replace them.

## Quick reference

```
BLUF: Conclusion → Supporting evidence (not: context → evidence → conclusion)

PRD sections (minimum):
  1. Problem statement
  2. Goal (measurable)
  3. Non-goals (explicit)
  4. Requirements (user-focused)
  5. Success metrics (baseline → target)
  6. Open questions (owner + date)

Writing for engineers: precision > brevity
Writing for executives: brevity > completeness
```

| Document type | Length | Lead with | Decision at |
|---------------|--------|-----------|------------|
| Executive email | 5 sentences | BLUF | Opening |
| One-pager spec | 1 page | What + Why | Top of doc |
| PRD | 2–5 pages | Problem statement | Goal section |
| 6-pager | 6 pages | The question | Section 4 |
| Board update | 1 slide | Scorecard | Visible immediately |

## Sources

- [The Pyramid Principle — Barbara Minto (1987)](https://www.barbaraminto.com/)
- [The Elements of Style — Strunk & White (4th ed., 1999)](https://en.wikipedia.org/wiki/The_Elements_of_Style)
- [Writing at Amazon — Jeff Bezos shareholder letters](https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/annual-reports/default.aspx)
- [Good Product Specs — Shreyas Doshi](https://twitter.com/shreyas/status/1037850310912409600)
- [How to Write a Good PRD — Martin Cagan (SVPG)](https://www.svpg.com/assets/Files/goodprd.pdf)
- [Bottom Line Up Front (BLUF) — US Army Writing Standards](https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN36735-AR_25-50-000-WEB-2.pdf)

## Related

- [[pyramid-principle]]
- [[pm-rituals]]
- [[working-backwards]]
- [[stakeholder-influence]]
- [[difficult-conversations]]
