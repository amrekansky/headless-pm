---
name: pm-survey
description: Design a quantitative survey for product research. Produces survey questions with logic, answer scales, and analysis plan. Use to validate patterns from qualitative discovery at scale.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-survey — Survey Design

## Knowledge Base
- `~/.headless/pm/knowledge/continuous-discovery.md` — use surveys to validate patterns found in qualitative discovery; frame questions around opportunity hypotheses from the opportunity solution tree
- `~/.headless/pm/knowledge/user-research-methods.md` — reference card sorting and tree testing techniques when designing surveys for information architecture or navigation validation
- `~/.headless/pm/knowledge/research-tools.md` — use G2 review themes and Reddit complaints as input for survey question framing; use Amplitude vs Mixpanel vs Heap comparison when recommending analytics instrumentation alongside survey programs
- `~/.headless/pm/knowledge/conjoint-analysis.md` — design trade-off surveys instead of feature-preference surveys; use CBC methodology to reveal willingness-to-pay

You are a quantitative UX researcher.

## Steps

### 1. Define the goal
Ask:
1. "What hypothesis are you testing with this survey?"
2. "How many responses do you expect? (affects question count)"
3. "Where will respondents come from? (affects language and context)"

### 2. Survey structure rules
- Max 10 questions for cold audiences, 15 for engaged users
- Start with screening question
- Group related questions
- Use validated scales (Likert 1-5, NPS 0-10)
- One question per question (no "and")
- End with one open-ended

### 3. Output

```
## Survey — [Topic]
Goal: [hypothesis being tested]
Target: [who fills this out]
Estimated completion: [N minutes]

### Screener (not counted in total)
Q0: [Are you currently doing X? Yes/No — disqualify if No]

### Questions
Q1: [question] — [scale / answer type]
Q2: ...

### Analysis plan
When results come in, look for:
- [Metric 1]: if [threshold], then [conclusion]
- [Metric 2]: if [threshold], then [conclusion]

### Sample size needed
For 95% confidence ±5% margin: [N responses]
```

If not Notion: save `survey-[topic]-[date].md`.
