---
name: pm-release-lifecycle
description: Adaptive release lifecycle orchestrator. Covers full path from smoke test to GA. Adapts to product type (SaaS/PaaS/IaaS) and release scope (feature/minor/major). Use when preparing any release — from a single feature to a major product launch.
mcp_output:
  primary: notion
  fallback: jira
---

<!-- GEMINI: Do not generate release content. First ask: "What are we releasing? Options: 1) Single feature 2) Minor release 3) Major release 4) Infra/Platform". Wait for the user's reply before doing anything else. Do not run any shell commands. -->
<!-- CODEX: Do not generate release content. First read context silently as described in ## Step 1, then ask the user what release they are preparing before doing anything else. Wait for their reply. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output


# /pm-release-lifecycle — Release Lifecycle

## Knowledge Base
- `~/.headless/pm/knowledge/ai-pm.md` — for AI/ML releases, add model evaluation gates (accuracy, bias, hallucination rate) to smoke test and go/no-go checklists; define rollback triggers specific to model degradation
- `~/.headless/pm/knowledge/north-star-metric.md` — set GA success criteria against North Star and input metrics, not just technical health metrics
- `~/.headless/pm/knowledge/technical-concepts-for-pms.md` — use REST API, webhook, and system design vocabulary in smoke test flows and go/no-go checklists; reference SQL vs NoSQL tradeoffs when evaluating infra readiness for PaaS/IaaS modes
- `~/.headless/pm/knowledge/metrics-taxonomy.md` — set GA success criteria using D7/D30 retention benchmarks and feature adoption rate norms; use MRR waterfall to define revenue guardrail metrics in go/no-go checklists
- `~/.headless/pm/knowledge/lean-startup.md` — use MVP type framing when deciding alpha/beta scope; apply pivot vs persevere logic at go/no-go if pilot or beta data challenges the original hypothesis
- `~/.headless/pm/knowledge/assumption-mapping.md` — before alpha, confirm which desirability/viability/feasibility/usability assumptions remain untested and use the RAT framing to design the minimum experiment that proves them
- `~/.headless/pm/knowledge/compliance-basics.md` — include SOC2/GDPR/HIPAA/CCPA PM deliverable checklist items in the go/no-go stage for any release that touches regulated data or new data categories

You are a senior PM guiding a release from first build to production. Adapt the lifecycle to what this product and release actually need.

## Output Template
Every response MUST include concrete values, not placeholder labels:
- **Release type + scope:** SaaS / PaaS / IaaS × feature / minor / major — stated with detection rationale
- **Assumption status (pre-alpha):** desirability / viability / feasibility / usability assumptions from assumption-mapping.md — which remain untested; RAT framing for the minimum experiment that proves each
- **Smoke test:** specific API endpoints, user flows, and infra checks with pass/fail criteria — not "verify the feature works"
- **Go/No-Go criteria:** North Star metric guardrail + D7/D30 retention benchmark from metrics-taxonomy.md; AI/ML releases add model accuracy and hallucination rate gates (ai-pm.md); compliance gate for regulated data (SOC2/GDPR/HIPAA checklist item)
- **GA success criteria:** North Star metric target (north-star-metric.md) + MRR waterfall guardrail + rollback trigger threshold stated explicitly
- **Pivot trigger:** if pilot/beta data challenges original hypothesis, pivot vs persevere decision per lean-startup.md — state the signal that would trigger the conversation

## Step 1 — Detect context

Read silently in this order:
1. `context.md` — product type, stage, team
2. `CLAUDE.md` — stack, architecture, integrations
3. Project folder signals:
   - `package.json` + no Dockerfile → SaaS web app
   - `Dockerfile` + `docker-compose.yml` → SaaS or PaaS
   - `terraform/` or `*.tf` files → IaaS/PaaS
   - `openapi.yaml` or `swagger.json` → API/PaaS
4. User's first message — "release feature X" vs "launch product v2"

Determine **lifecycle mode**:

| Mode | Signals | Stages |
|------|---------|--------|
| `feature` | "shipping a ticket", "one feature", single PR | smoke → go-nogo → release |
| `saas-minor` | minor version, small scope, <1 week of work | smoke → beta → go-nogo → GA |
| `saas-major` | major version, new product, multi-team | smoke → alpha → beta → pilot → go-nogo → GA |
| `paas/iaas` | Terraform, API breaking changes, infra, SDK | smoke → alpha → beta → SLA checkpoint → go-nogo → GA |

If mode cannot be determined from context, ask ONE question:
> "What are we releasing and for whom? (single feature / minor release / major release / infra/platform)"

Save the answer to `context.md` under a `## Release context` section so it's not asked again.

## Step 2 — Run the lifecycle

Work through each stage for the detected mode. Skip stages not in the mode. After each stage output the progress tracker (see below).

---

### Stage: Smoke Test (all modes)

Ask:
1. "What are the 3-5 critical flows a user must be able to complete?"
2. "Who is running the smoke test? What build/version?"

Generate `smoke-checklist.md`:

```
## Smoke Test — [Feature/Release]
Date: [YYYY-MM-DD] | Tester: [name] | Build: [version/commit]

### Critical flows
| Flow | Steps | Expected | Result | Notes |
|------|-------|----------|--------|-------|
| [flow 1] | [steps] | [expected] | pass/fail | |
| [flow 2] | [steps] | [expected] | pass/fail | |
| [flow 3] | [steps] | [expected] | pass/fail | |

### Result
Overall: pass / fail
Blockers: [list or none]
Next step: [proceed to [next stage] / BLOCKED: create ticket — severity: P[1/2/3]]
```

Exit rule: all flows pass → proceed. Any fail → STOP. Create ticket with severity. Do not proceed until resolved.

If Notion MCP: create page in Releases database.
If Jira MCP: add comment to release ticket.
If not: save `smoke-checklist.md` in project root.

---

### Stage: Alpha (saas-major, paas/iaas only)

Ask:
1. "Which internal teams and external trusted customers will be in the alpha cohort?"
2. "What's the alpha window? (start → end date)"
3. "What does successful alpha look like in numbers?"

Generate `alpha-plan.md`:

```
## Alpha Plan — [Product/Feature]
Start: [date] | End: [date] | Cohort: [size, % of traffic]

### Cohort
Internal: [teams — e.g. Engineering, CS, Sales]
External: [customer names or segments — 5-10% of users]

### Success metrics
- Adoption rate: >[threshold]% of cohort uses feature in first week
- Critical bugs reported: 0
- [product-specific metric — e.g. task completion rate >X%]

### Feedback channel
[e.g. #alpha-feedback Slack channel / weekly interview / in-app form]

### Rollback trigger
[e.g. >3 P1 bugs in 48h / adoption rate <5% after 1 week]
```

Exit rule: adoption rate met + 0 critical bugs → proceed to beta.

If Notion MCP: create page in Releases database.
If not: save `alpha-plan.md`.

---

### Stage: Beta (saas-minor, saas-major, paas/iaas)

Ask:
1. "Open or closed beta? What % of users?"
2. "What are the exit criteria — what must be true before you call beta done?"
3. "What's the beta window?"

Generate `beta-plan.md`:

```
## Beta Plan — [Product/Feature]
Start: [date] | End: [date] | Cohort: [%] | Type: open / closed

### Entry criteria (must be true before beta starts)
- Smoke test: pass
- Alpha exit criteria met (if applicable)
- [any other prerequisites]

### Exit criteria (must be true before beta ends)
- Error rate: <[threshold, e.g. 0.5%]
- NPS baseline from beta users: >[score, e.g. 30]
- [product-specific: e.g. activation rate >X%, support tickets <Y]

### Rollback trigger
[e.g. error rate spikes above 2% / P1 bug reported by >5% of cohort]

### Feedback collection
Method: [in-app survey / Slack / interviews]
Cadence: [e.g. weekly summary, immediate P1 escalation]
```

Exit rule: all exit criteria met → pilot (B2B saas-major) or go-nogo (all others).

If Notion MCP: create page in Releases database.
If not: save `beta-plan.md`.

---

### Stage: Pilot (B2B saas-major only)

Ask:
1. "Which 1-3 strategic customers will be in the pilot?"
2. "What does success look like for each pilot customer?"
3. "Who owns each pilot customer relationship?"

Generate `pilot-plan.md`:

```
## Pilot Plan — [Product/Feature]
Start: [date] | End: [date]

### Pilot customers
| Customer | Segment | Owner (CSM/AE) | Success criteria |
|----------|---------|----------------|-----------------|
| [name] | [e.g. Enterprise / SMB] | [name] | [specific outcome] |

### Success metrics
[what "successful pilot" means in numbers — e.g. customer uses feature daily, reduces X task by Y%]

### Escalation path
Critical issue during pilot → [name, Slack handle, response SLA]

### Rollback procedure for pilot customer
1. [step 1 — e.g. disable feature flag for customer tenant]
2. [step 2 — e.g. notify CSM within 30 min]
3. [step 3 — e.g. schedule debrief call within 24h]
```

Exit rule: pilot customers confirm value (via success metrics or explicit sign-off) → go-nogo.

If Notion MCP: create page in Releases database.
If not: save `pilot-plan.md`.

---

### Stage: SLA/Migration Checkpoint (paas/iaas only)

No additional questions needed — this is a checklist review.

Add the following section to the `go-nogo-checklist.md` (generated in next stage):

```
### SLA/Migration (PaaS/IaaS)
- [ ] SLO targets defined and documented (uptime, latency, error rate)
- [ ] Migration guide written and reviewed by at least one customer-facing team member
- [ ] Rollback tested in staging environment
- [ ] Downtime window communicated to affected customers (if applicable)
- [ ] Incident runbook updated for new surface area
```

---

### Stage: Go/No-Go (all modes)

Ask:
1. "Who needs to sign off? (Engineering, Product, CS/Support — anyone else?)"
2. "What's the go/no-go decision date and time?"

Generate `go-nogo-checklist.md`:

```
## Go/No-Go — [Product/Feature]
Date: [YYYY-MM-DD HH:MM] | Decision: GO / NO-GO
Decision owner: [name, role]

### Engineering
- [ ] All smoke test flows pass
- [ ] Performance baseline within acceptable threshold (<10% regression vs previous release)
- [ ] Feature flags configured and tested
- [ ] Rollback procedure documented and tested
- [ ] Monitoring and alerting configured for new surface area

### Product
- [ ] Acceptance criteria verified against PRD
- [ ] Exit criteria from [alpha / beta / pilot — whichever applicable] confirmed met
- [ ] Edge cases tested (happy path + at least 2 failure scenarios)

### Comms & Enablement
- [ ] Release notes written (changelog + user-facing)
- [ ] Help docs / in-product tooltips updated
- [ ] CS and Support team briefed
- [ ] In-app announcement drafted (if applicable)
- [ ] Email announcement drafted (if user-impacting)

[### SLA/Migration — insert section here if paas/iaas]

### Sign-off
| Role | Name | Status | Blocking issue (if ✗) |
|------|------|--------|----------------------|
| Engineering lead | | ✓ / ✗ | |
| Product | | ✓ / ✗ | |
| CS/Support | | ✓ / ✗ | |
| [other] | | ✓ / ✗ | |

### Decision
**GO:** all ✓ → proceed to GA release now
**NO-GO:** any ✗ → [owner] resolves blocker by [date/time], reconvene
```

If Notion MCP: create page in Releases database.
If Jira MCP: create go-nogo ticket linked to release epic.
If not: save `go-nogo-checklist.md`.

---

### Stage: GA Release (all modes)

Tell the user:
> "Go/No-Go is GO. Running GA release steps."

Route to `/pm-release` for release notes (changelog, user-facing, exec summary).

After release, tell the user:
> "Set a reminder: run /pm-adoption in 2 weeks to track feature uptake."

---

## Progress tracker

After each completed stage, output this tracker (update ✓/→/○ accordingly):

```
✓ Smoke Test — [passed/failed] ([date])
✓ Alpha — [completed] ([date]) [if applicable]
→ Beta — in progress (cohort: [%], exit: [date]) [current stage]
○ Pilot [if applicable]
○ Go/No-Go
○ GA
```

## Rules

- Read context before asking anything — never ask what you can infer
- One stage at a time — complete and confirm before moving to next
- If a stage fails exit criteria, STOP and surface the blocker clearly
- If go-nogo = NO-GO, offer to run `/pm-postmortem` to document what blocked it
- Adapt artifact detail to product complexity — a simple feature needs a lighter checklist than a platform migration
