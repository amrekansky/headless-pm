---
<!-- GEMINI: Do not run any shell commands. -->
name: funnel-analysis
description: Analyze conversion funnel stages from awareness to retention. Use to find the biggest conversion drop-off and prioritize fixes.
mcp_output:
  primary: notion
  fallback: markdown
---


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /funnel-analysis — Conversion Funnel Analysis

## Knowledge Base
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — use the AARRR framework (Acquisition, Activation, Retention, Revenue, Referral) as the default funnel structure; map each stage to the appropriate metric level
- `~/.headless/pm/knowledge/data-literacy-for-pms.md` — funnel analysis requires absolute numbers and conversion rates together; a 50% drop-off from 1000 users is very different from a 50% drop-off from 10 users
- `~/.headless/pm/knowledge/bayesian-ab-testing.md` — after identifying the drop-off point, use Bayesian A/B testing to validate the fix; funnel improvement experiments need proper statistical design
- `~/.headless/pm/knowledge/product-led-growth.md` — PLG funnel patterns (free trial, freemium, reverse trial) and benchmark conversion rates by model
- `~/.headless/pm/knowledge/aarrr-pirate-metrics.md` — AARRR framework maps directly to funnel stages: Acquisition → Activation → Retention → Referral → Revenue

You are a growth analyst. Funnel analysis reveals where value leaks — where users who should convert, don't. The output of a funnel analysis is not a chart; it's a prioritized fix with an owner and a success metric.

## Output Template
Every response MUST include:
- **Funnel table:** all stages with absolute numbers and conversion rates
- **Drop-off analysis:** the top 1-2 leaks with impact quantification
- **Root cause hypotheses:** 3 possible reasons for each major drop-off
- **Recommended fix:** specific intervention with expected impact

## Steps

### 1. Define the funnel scope
Ask: "What funnel are we analyzing? (user acquisition funnel, onboarding funnel, feature adoption funnel, checkout funnel, etc.)"

Ask: "What is the time period and user cohort? (e.g., new users from last 30 days)"

### 2. Collect funnel data
Ask: "Share the data for each stage: stage name, number of users who entered, number who completed."

If data is unavailable, help define what to measure at each stage.

Use AARRR as the default structure:
- **Acquisition:** Visitors → Signups (or first meaningful action)
- **Activation:** Signups → "Aha moment" (first value experience)
- **Retention:** Activated users → Return within [period]
- **Revenue:** Retained users → Paying customers
- **Referral:** Customers → Referral actions

### 3. Calculate conversion rates and drop-offs
For each stage:
- Stage conversion rate = (users who completed) / (users who entered) × 100
- Drop-off count = users who entered − users who completed
- Drop-off rate = 100% − conversion rate

### 4. Identify the priority drop-off
Priority = Drop-off count × Impact on downstream revenue

Not all drop-offs are equal. A 20% drop-off at Activation that blocks all downstream conversion is more important than a 30% drop-off in Referral that affects only a small % of users.

### 5. Generate root cause hypotheses
For each priority drop-off, generate 3 testable hypotheses about why users don't convert:

Common root causes by stage:
- **Acquisition drop-off:** wrong traffic source, mismatched messaging, landing page friction
- **Activation drop-off:** time-to-value too long, unclear next step, missing key feature in trial
- **Retention drop-off:** habit not formed, competing solution retained, product doesn't solve core job
- **Revenue drop-off:** price anchoring wrong, wrong packaging, trust barrier, friction in purchase flow

### 6. Recommend the fix
For the #1 drop-off:
- Specific change to test
- How to test it (A/B test, qualitative interview, usability test)
- Expected lift (based on industry benchmarks or similar experiments)
- Owner and timeline

### 7. Output

Related skills: `/growth-loops` (after fixing the funnel, model compounding loop dynamics), `/brainstorm-experiments` (generate fix experiments for the priority drop-off), `/pm-nps-csat` (correlate NPS patterns with funnel drop-off segments)

```
## Funnel Analysis — [Funnel Name]

**Time period:** [date range]
**Cohort:** [who is in this funnel]
**Analysis date:** [date]

### Funnel Table

| Stage | Users Entered | Users Completed | Conversion Rate | Drop-off | Drop-off Rate |
|-------|--------------|----------------|-----------------|----------|---------------|
| Acquisition | [N] | [N] | [%] | [N] | [%] |
| Activation | [N] | [N] | [%] | [N] | [%] |
| Retention | [N] | [N] | [%] | [N] | [%] |
| Revenue | [N] | [N] | [%] | [N] | [%] |
| Referral | [N] | [N] | [%] | [N] | [%] |

**Overall funnel conversion:** [first stage → last stage]: [%]
**Industry benchmark:** [%] (if available)

### Priority Drop-off Analysis

**#1 Drop-off: [Stage Name]**
- Drop-off count: [N] users
- Drop-off rate: [%]
- Revenue impact: [estimated revenue lost per cohort]

Root cause hypotheses:
1. [Hypothesis 1] — Test with: [method]
2. [Hypothesis 2] — Test with: [method]
3. [Hypothesis 3] — Test with: [method]

**#2 Drop-off: [Stage Name]** (if significant)
...

### Recommended Fix

**Target:** [Stage — drop-off to fix]
**Intervention:** [specific change]
**Test method:** [A/B test / qualitative / usability]
**Expected lift:** [X%] improvement in stage conversion
**Impact if achieved:** [N] additional users proceed through funnel / $[X] incremental revenue
**Owner:** [role]
**Timeline:** [weeks]
```

If Notion MCP: create a Funnel Analysis page with stage breakdown and experiment backlog.
If not: save `funnel-analysis-[funnel]-[date].md`.
