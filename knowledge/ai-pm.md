# AI PM — Managing AI-Powered Features

## What it is
AI PM is the practice of managing products where AI/ML is a core component of the user experience — not a supporting tool but a functional layer that directly shapes outputs. The role requires the standard PM toolkit plus fluency in evaluation design, probabilistic product behavior, failure mode taxonomy, and the tradeoffs between model accuracy, latency, safety, and cost. As of 2025, AI evals are to AI PMs what A/B testing was to digital PMs a decade ago.

## When to use this document
- Scoping, speccing, or roadmapping any feature that uses an LLM, ML model, or generative AI
- Defining success metrics for an AI-powered feature
- Designing the feedback loop between user behavior and model improvement
- Making build vs. buy decisions for AI components
- Communicating AI feature progress to stakeholders who expect deterministic products

## Core components

### 1. Eval-Driven Development
An **eval** is a structured test that measures AI output quality across a defined set of inputs. Evals are the primary tool for:
- Measuring progress when you change a model, prompt, or retrieval pipeline
- Detecting regressions before they reach production
- Setting a quality baseline for a new AI feature

**Golden test set:** A curated dataset of representative inputs with known-good (or human-rated) expected outputs. Created once, maintained over time.
```
Golden set structure:
- Input examples covering the full distribution of real user inputs
- Edge cases and failure-inducing inputs
- "Red team" cases: adversarial, off-topic, harmful intent
- Expected output or quality criteria per case
```

**When to run evals:**
- Every prompt change
- Every model version upgrade
- Every RAG/retrieval pipeline modification
- Pre-release regression gate

### 2. Failure Mode Taxonomy
For every AI feature, define the five ways it can go wrong *before* building:

| Failure Mode | What Happens | Graceful Fallback |
|---|---|---|
| **Hallucination** | Model confidently states false facts | Cite sources; show confidence score; add disclaimer |
| **Stale context** | Model uses outdated information | Timestamp data; surface freshness warnings |
| **Toxic output** | Harmful, biased, or offensive response | Hard filters + human review queue |
| **Slow response** | Latency exceeds user tolerance (> 5s) | Progressive streaming; loading states; timeout fallback |
| **Silent failure** | Model "succeeds" but output is useless | Define a minimum quality threshold; offer retry |

**Key PM discipline:** Specify the graceful fallback users will actually see *before* engineering builds the happy path.

### 3. AI Feature Metrics Stack
Standard product metrics (DAU, retention) are insufficient for AI features. Layer three categories:

**Model evaluation metrics (technical):**
- Task success rate (did the output accomplish the user's goal?)
- Hallucination rate (% of responses with factual errors, measured by eval)
- Latency P50/P95 (median and 95th percentile response time)
- Token cost per interaction (economics of scale)

**User experience metrics (behavioral):**
- Acceptance rate (user took action on AI output vs. dismissed/regenerated)
- Edit rate (how often users modify AI output before using it)
- Escalation rate (how often users fall back to manual process)
- Trust indicators: does repeat usage increase, or do users abandon after first try?

**Business metrics (outcomes):**
- Task completion rate with vs. without AI feature
- Time-to-task-completion delta
- Support ticket deflection (for AI-assisted support)
- Revenue or retention impact attributed to AI feature cohort

### 4. Accuracy vs. Latency vs. Cost Triangle
Every AI product operates within a three-way tradeoff:
```
          Accuracy
         /        \
       /            \
  Latency ——————— Cost
```
Improving one typically degrades the others:
- Better model → higher accuracy but higher latency and cost
- Streaming responses → lower perceived latency but not faster time-to-complete
- Caching → lower cost and latency but stale answers

**PM's job:** Define what "good enough" looks like for each dimension given the use case. A medical diagnosis tool needs 99%+ accuracy with acceptable latency. A writing assistant needs low latency with acceptable accuracy.

### 5. Prompt as Product
In LLM-based features, the system prompt is a product artifact — it defines behavior, guardrails, persona, and output format. Treat it like code:
- Version-controlled
- Regression-tested against the golden set on every change
- Owned by a named person (PM + prompt engineer collaboration)
- Never changed without running evals first

**Prompt failure patterns:**
- Over-instruction: prompt so constrained the model can't handle edge cases
- Under-instruction: model improvises in ways that fail brand/safety standards
- Persona drift: model breaks character mid-conversation
- Jailbreak surface: prompt can be overridden by user-injected instructions

### 6. Human-in-the-Loop (HITL) Design
Not all AI outputs should go directly to users. Design a confidence threshold:
```
High confidence output → Auto-deliver to user
Medium confidence → Deliver with explicit uncertainty signal
Low confidence → Queue for human review or present multiple options
Failed eval threshold → Block + graceful fallback
```
**HITL is not failure:** It is a product decision to route based on risk and confidence. The alternative — shipping all outputs with equal confidence — trains users to distrust the feature after encountering errors.

### 7. Model Governance Loop
For production AI features, set up a lightweight governance cycle:
1. **Pre-prod gate:** Golden set eval must pass before any model/prompt change ships
2. **Post-launch monitoring:** Track acceptance rate, edit rate, and error categories in production
3. **Drift detection:** Alert when production distribution drifts from golden set (user inputs evolve)
4. **Retraining / re-prompting trigger:** When drift or metric regression crosses defined threshold

## Key questions to ask
- What is the activation event that proves this AI feature delivered value?
- What are the five failure modes, and what is the graceful fallback for each?
- Have we built a golden test set that covers real user input distribution?
- What is the minimum acceptable accuracy for this use case? What is the latency budget?
- How will we detect when the model regresses after a future update?
- What user behavior signal indicates trust vs. abandonment of the AI feature?

## Common mistakes
- **Accuracy-only metrics:** High accuracy with poor UX (latency, clarity, editability) leads to low adoption
- **No golden set:** Teams change prompts or models without knowing if quality improved or regressed
- **Hallucination blindness:** Shipping without hallucination rate baseline — first user bug report reveals it in production
- **Deterministic spec for probabilistic feature:** Writing specs like "the AI will always..." — AI features need behavior envelopes, not exact specs
- **Ignoring cost at scale:** Feature economics that work at 1,000 users may break at 100,000 — model per-query cost must be in the business case
- **Skipping HITL threshold design:** Treating all outputs as equally trustworthy destroys user trust after the first high-stakes error

## Quick reference

**AI feature spec template additions:**
```
## AI Behavior Spec
- Model / provider: [e.g., Claude Sonnet, GPT-4o]
- Primary task: [what the AI is doing in plain language]
- Input: [what user data goes in]
- Output: [what format, what constraints]
- Confidence threshold for auto-delivery: [%]
- Failure modes + fallbacks: [per taxonomy above]
- Latency budget: [P50 target / P95 max]
- Cost per query: [token estimate × price]

## Eval Plan
- Golden set size: [N examples]
- Eval metrics: [task success rate, hallucination rate, ...]
- Eval trigger: [on every prompt/model change]
- Pre-prod quality gate: [pass criteria]
```

**AI PM weekly cadence:**
```
Monday: Review last week's acceptance rate, edit rate, error logs
Wednesday: Run eval suite if any prompt/model changes pending
Friday: Update golden set with new edge cases from production errors
```

## Sources
- [AI Evals for PMs — productboard.com](https://www.productboard.com/blog/ai-evals-for-product-managers/)
- [Why AI eval is must-have skill — productschool.com](https://productschool.com/blog/artificial-intelligence/ai-evals-product-managers)
- [AI Product Manager 101 (2025) — labs.adaline.ai](https://labs.adaline.ai/p/ai-product-manager-101-in-2025)
- [PM guide to AI evaluations — saptak.in](https://saptak.in/writing/2025/04/17/product-managers-guide-ai-evaluations)
- [How AI changes product management — reforge.com](https://www.reforge.com/blog/how-ai-changes-product-management)
- [AI evals error analysis — productcompass.pm](https://www.productcompass.pm/p/evaluating-ai-products-error-analysis)
