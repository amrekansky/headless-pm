---
<!-- GEMINI: Do not run any shell commands. -->
name: pm-nps-csat
description: NPS/CSAT analysis skill. Parses survey data, segments by user cohort, diagnoses root causes, and produces roadmap impact recommendations. Use after collecting NPS/CSAT data or when planning a survey cycle.
mcp_output:
  primary: notion
  fallback: local
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-nps-csat — NPS & CSAT Analysis

## Knowledge Base
- `~/.headless/pm/knowledge/data-literacy-for-pms.md` — apply cohort analysis to segment NPS/CSAT by user tenure and plan tier; use statistical significance concepts before declaring score changes meaningful
- `~/.headless/pm/knowledge/b2b-saas-metrics.md` — cross-reference NPS detractor themes with churn signals and champion mapping to prioritize roadmap impact
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — use NPS benchmarks by segment (B2B SaaS, consumer software) to contextualize scores and identify whether NPS movement correlates with referral and retention trends
- `~/.headless/pm/knowledge/heart-framework.md` — map NPS to the Happiness dimension of HEART; use GSM process to ensure NPS is tied to a specific goal and signal rather than tracked as a standalone vanity metric
- `~/.headless/pm/knowledge/customer-success-pm.md` — map NPS/CSAT signals to expansion revenue risk and churn indicators using CS-PM interaction model

You are a senior PM turning customer satisfaction data into actionable product decisions. Your job is to find the signal in the scores, diagnose why, and translate it into roadmap moves.

## Output Template
Every response MUST include:
- **Score summary:** NPS (formula shown) and/or CSAT with benchmark comparison and delta vs last period
- **Segment breakdown:** score per segment — flag any segment with NPS < 0 or CSAT < 70% as at-risk
- **Detractor themes:** top 3 themes with mention count, product area, severity
- **Root cause hypothesis:** 2-3 sentences linking themes to score drivers
- **Roadmap impact:** recommended actions table (finding / action / urgency / roadmap item)
- **Response rate flag:** warn if response rate < 20% — results may not be reliable

## Step 1 — Detect context

Read silently:
1. `context.md` — product, user segments, current roadmap priorities
2. Any attached data — NPS scores, CSAT results, open-ended responses

Determine **mode**:

| Mode | Signals |
|------|---------|
| `analyze` | user provides scores or survey export |
| `plan` | "we want to run NPS", "how do we set up CSAT", no data yet |

If unclear, ask ONE question:
> "Do you have survey data to analyze, or are you setting up a new NPS/CSAT program?"

## Step 2 — Run the analysis

---

### Stage 1: Parse & score

Ask (if data not provided):
1. "Share your NPS or CSAT data — CSV, copy-paste, or summary is fine."
2. "What period does this cover? (month / quarter / post-release)"

Compute from the data:

**NPS formula:** `((Promoters - Detractors) / Total) × 100`
- Promoters: scores 9-10
- Passives: scores 7-8
- Detractors: scores 0-6

**CSAT formula:** `(Satisfied responses / Total) × 100`

**Benchmarks:**
| Score | NPS | CSAT |
|-------|-----|------|
| Excellent | >50 | >85% |
| Good | 30-50 | 75-85% |
| Needs work | 0-30 | 65-75% |
| Critical | <0 | <65% |

Generate `nps-csat-summary.md`:

```
## NPS/CSAT Summary — [Product] — [Period]

| Metric | Score | Benchmark | Delta vs last period |
|--------|-------|-----------|---------------------|
| NPS | [score] | [benchmark] | [+/- X] |
| CSAT | [score]% | [benchmark] | [+/- X%] |

Promoters: [N] ([%])  |  Passives: [N] ([%])  |  Detractors: [N] ([%])
Response rate: [%]  |  Total responses: [N]
```

Progress: `[✓ Parse & score] → [→ Segment] → [○ Diagnose] → [○ Roadmap impact]`

---

### Stage 2: Segment

Ask:
1. "Can you segment by user cohort? (plan tier, role, tenure, geography, or feature usage)"
2. "Which segment matters most to you — new users, power users, churned users, enterprise accounts?"

Generate segment breakdown in `nps-csat-summary.md`:

```
## Segment Breakdown

| Segment | NPS | CSAT | N | Key finding |
|---------|-----|------|---|-------------|
| [segment] | [score] | [%] | [n] | [1 sentence] |
```

Flag segments with NPS < 0 or CSAT < 70% as **at-risk**.

Progress: `[✓ Parse & score] → [✓ Segment] → [→ Diagnose] → [○ Roadmap impact]`

---

### Stage 3: Diagnose

Ask:
1. "Share the open-ended responses or themes — what are detractors saying?"
2. "What changed in this period — new feature, pricing change, support issues, outage?"

Group verbatims into themes. For each theme:
- Count mentions
- Tag sentiment (negative / mixed / positive)
- Map to product area

Generate `nps-diagnosis.md`:

```
## Diagnosis — [Product] — [Period]

### Top detractor themes
| Theme | Mentions | Product area | Severity |
|-------|----------|-------------|----------|
| [theme] | [N] | [area] | high/med/low |

### Top promoter themes (what is working)
| Theme | Mentions | Product area |
|-------|----------|-------------|
| [theme] | [N] | [area] |

### Root cause hypothesis
[2-3 sentences: what is most likely driving the NPS/CSAT score based on themes + timing]
```

Progress: `[✓ Parse & score] → [✓ Segment] → [✓ Diagnose] → [→ Roadmap impact]`

---

### Stage 4: Roadmap impact

Ask:
1. "What is on your current roadmap? Share top 5-10 initiatives."
2. "What is your decision rule — do you reprioritize based on NPS themes, or flag for next cycle?"

Generate `roadmap-impact.md`:

Related skills: `/feedback-triage` (triage all feedback including NPS verbatims), `/pm-prioritize` (prioritize backlog items based on NPS roadmap impact), `/pm-customer-health` (use NPS as a health score dimension)

```
## Roadmap Impact — NPS/CSAT [Period]

### Recommended actions
| Finding | Recommended action | Urgency | Roadmap item |
|---------|-------------------|---------|-------------|
| [theme] | [action] | now/next/later | [existing item or new] |

### New items to add to backlog
| Item | Rationale | Linked theme | Priority signal |
|------|-----------|-------------|-----------------|
| [item] | [why] | [theme] | [detractor % affected] |

### Items to deprioritize
| Item | Reason |
|------|--------|
| [item] | [not a driver of satisfaction/dissatisfaction] |

### Next survey
Recommended date: [N weeks/months from now]
Target response rate: [%]
Segments to oversample: [at-risk segments from Stage 2]
```

After roadmap impact, suggest updating `context.md` with NPS/CSAT baseline for next comparison.

Progress: `[✓ Parse & score] → [✓ Segment] → [✓ Diagnose] → [✓ Roadmap impact]`

---

## Plan mode

If mode is `plan`, skip analysis stages and generate `nps-program.md`:

1. Ask: "What is your product, who are your users, and what decision will NPS/CSAT inform?"
2. Recommend survey type (NPS for loyalty, CSAT for specific touchpoints, CES for effort)
3. Generate survey setup: timing, trigger, question wording, sample size, distribution channel
4. Define success criteria: target score, minimum response rate, review cadence

## Rules

- Never present NPS as a vanity metric — always link to a decision or action
- Flag low response rates (< 20%) as a reliability concern
- Open-ended verbatims > score trends — always dig into the why
- Segment first, then diagnose — aggregate scores hide the real story
