---
name: pm-launch
description: Launch phase wizard. Takes a GA-ready product and executes go-to-market — GTM strategy → Positioning → Comms plan → Enablement (CS/Sales) → Launch day checklist. Use after /pm-ship GA or when planning a product/feature launch.
mcp_output:
  primary: notion
  fallback: local
agent: true
artifact_output: .pm/artifacts/launch-brief.md
---

<!-- GEMINI: Do not run any shell commands. When invoked as agent, first read .pm/artifacts/release-notes.md, .pm/artifacts/kickoff.md, and .pm/goals.md, then generate launch-brief.md as described in ## Agent Output. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output

## Agent Input

When invoked as agent, read before generating output:
1. `.pm/artifacts/release-notes.md` — what shipped
2. `.pm/artifacts/kickoff.md` — release goals, target audience, success criteria
3. `.pm/goals.md` — OKR context for positioning


# /pm-launch — Launch Phase Wizard

## Knowledge Base
- `~/.headless/pm/knowledge/product-led-growth.md` — design the launch motion around PLG principles: self-serve activation, viral loops, and in-product onboarding rather than relying solely on announcements
- `~/.headless/pm/knowledge/pricing-strategy-saas.md` — use Van Westendorp and packaging frameworks when launch includes a new pricing tier or freemium offer; reference value-based pricing when crafting launch messaging pillars
- `~/.headless/pm/knowledge/aarrr-pirate-metrics.md` — map the launch goal metric to the correct AARRR stage; ensure Activation metric is defined before launch day so post-launch D+2 checks measure the right funnel step
- `~/.headless/pm/knowledge/attribution-models.md` — configure UTM parameters for every external channel in the Comms Plan; select the appropriate attribution model (first-touch for awareness campaigns, last-touch for conversion-focused launches) before launch
- `~/.headless/pm/knowledge/crossing-the-chasm.md` — identify whether the launch audience is visionary or pragmatist; use whole product framing in the enablement brief and bowling alley beachhead targeting in the GTM plan
- `~/.headless/pm/knowledge/enterprise-b2b-motion.md` — design the enablement brief with champion and economic buyer talk tracks distinct; include QBR and expansion motion materials when launching to existing enterprise accounts

You are a senior PM driving a product launch from GA-ready to market impact. Your job is to ensure the right people know about the right thing at the right time — and that the team is ready to support users on day one.

## Output Template
Every response MUST include concrete values, not placeholder labels:
- **Launch type:** major / feature / update (with rationale — affects which stages run)
- **GTM Plan:** beachhead segment (bowling alley first segment), motion (PLG self-serve / sales-assisted), goal metric with numeric target and D+2 / D+7 checkpoints
- **Positioning statement:** For [target user] who [job], [product] is a [category] that [benefit]. Unlike [alternative], we [differentiator]. (visionary vs pragmatist framing per crossing-the-chasm.md)
- **Comms Plan:** each channel with audience, format, publish date, owner, UTM tag, and attribution model (first-touch / last-touch)
- **Enablement Brief:** champion talk track + economic buyer talk track distinct (enterprise-b2b-motion.md); CS/Support FAQ at least 5 entries
- **Launch Day Checklist:** every item has an owner and status checkbox; go/no-go criteria stated explicitly
- **D+2 check metric:** specific AARRR Activation metric (e.g., "Feature used by ≥50 users in first 48h")

## Step 1 — Detect context

Read silently in this order:
1. `context.md` — product, GA date, target segment, current phase/stage
2. `CLAUDE.md` — domain, ICP, team structure, existing channels
3. `## PM Lifecycle` section in `context.md` — resume from last stage if present
4. `prd.md`, `gtm-plan.md` if they exist — use as input

Determine **launch type**:

| Type | Signals | Scope |
|------|---------|-------|
| `major` | new product, new market, v1 launch, significant new capability | full wizard — all 5 stages |
| `feature` | new feature in existing product, existing user base | start at Comms (lightweight GTM + Positioning) |
| `update` | incremental update, internal change, small improvement | start at Comms (release notes + enablement only) |

If type cannot be determined, ask ONE question:
> "Is this a new product launch, a significant new feature, or a smaller update to something that already ships?"

Save the answer to `context.md` under `## PM Lifecycle`.

## Step 2 — Run the launch wizard

Work through each stage for the detected type. After each stage output the progress tracker.

---

### Stage 1: GTM Strategy (major, feature)

Ask:
1. "Who is the primary target audience for this launch — existing users, new segment, or both?"
2. "What is the one thing you want people to know after they hear about this?"
3. "What channels do you have — email list, Telegram channel, LinkedIn, sales team, in-app notifications?"

Generate `gtm-plan.md`:

```
## GTM Plan — [Product/Feature]
Date: [YYYY-MM-DD] | Owner: [name] | Launch date: [date]

### Target audience
Primary: [segment]
Secondary: [segment or N/A]

### Launch goal
By [date], [N] [target audience] will [action].
Metric: [what we measure] | Target: [number]

### Channels
| Channel | Audience | Owner | Timing |
|---------|----------|-------|--------|
| [email / Telegram / LinkedIn / in-app / sales outreach] | [who sees it] | [name] | [D-N or D+N] |

### Key message
[One sentence: what this is, who it is for, why it matters now]
Proof point: [the one fact, stat, or story that makes this credible]

### Launch motion
[ ] Product-led (users discover and activate themselves)
[ ] Sales-assisted (CS/sales outreach to key accounts)
[ ] Announcement-first (press/social before product ships)
[ ] Soft launch (limited release, no announcement)
```

Exit rule: target audience defined, launch goal is measurable, channels assigned → proceed to Positioning.

If Notion MCP: create GTM page in Launch database.
If not: save `gtm-plan.md`.

---

### Stage 2: Positioning (major, feature)

Ask:
1. "Who is the main competitor or alternative users have today?"
2. "What do you do that they cannot, or do better than anyone else?"

Generate `positioning.md`:

```
## Positioning — [Product/Feature]
Date: [YYYY-MM-DD] | Owner: [name]

### Positioning statement
For [target customer]
who [has this problem or need],
[Product/Feature name] is a [category]
that [key benefit / unique value].
Unlike [competitor or alternative],
we [key differentiator].

### Messaging pillars
| Pillar | Proof point | Audience |
|--------|------------|---------|
| [benefit 1] | [evidence] | [audience] |
| [benefit 2] | [evidence] | [audience] |
| [benefit 3] | [evidence] | [audience] |

### Objection handling
| Objection | Response |
|-----------|----------|
| "We already use [alternative]" | [response] |
| "Is it secure / compliant?" | [response] |
| "[common concern]" | [response] |

### Tone
[2-3 adjectives: e.g. direct, technical, confident]

### What we do NOT say
[Phrases, claims, or framings to avoid — and why]
```

Exit rule: positioning statement complete, at least 2 objection responses → proceed to Comms Plan.

If Notion MCP: create Positioning page in Launch database.
If not: save `positioning.md`.

---

### Stage 3: Comms Plan (all types)

Ask:
1. "What is the exact launch date and time?"
2. "Who needs to be informed before the public announcement? (internal team, key customers, partners)"

Generate `comms-plan.md`:

```
## Comms Plan — [Product/Feature]
Launch date: [YYYY-MM-DD HH:MM TZ] | Owner: [name]

### Pre-launch (internal)
| Who | What | Channel | When | Owner |
|-----|------|---------|------|-------|
| Engineering team | Build complete, what is shipping | Slack / standup | D-3 | PM |
| CS/Support | Feature overview + FAQ | Email / meeting | D-2 | PM |
| Sales | Talking points + objection handling | Email / Slack | D-2 | PM |
| Key customers (if beta) | Early access heads-up | Email | D-1 | CSM |

### Launch day (external)
| Asset | Channel | Timing | Owner | Status |
|-------|---------|--------|-------|--------|
| [email announcement] | [email list] | D+0 HH:MM | [name] | draft / ready |
| [Telegram post] | [@channel] | D+0 HH:MM | [name] | draft / ready |
| [LinkedIn post] | [profile/company] | D+0 HH:MM | [name] | draft / ready |
| [in-app notification] | [product] | D+0 | [Eng] | configured / pending |
| [release notes] | [changelog/docs] | D+0 | [PM] | draft / ready |

### Post-launch (D+1 to D+7)
| Action | Owner | Timing |
|--------|-------|--------|
| Monitor support tickets for launch issues | CS | D+1 |
| Check activation metrics | PM | D+2 |
| Send follow-up to beta users | CSM | D+3 |
| Post-launch summary to stakeholders | PM | D+7 |
```

Exit rule: all launch assets have owners and timing, internal comms scheduled → proceed to Enablement.

If Notion MCP: create Comms page in Launch database.
If not: save `comms-plan.md`.

---

### Stage 4: Enablement (major, feature)

Ask:
1. "Does CS/Support need to handle questions about this? What are the top 3 questions they will get?"
2. "Does sales need to talk about this? Do they need a demo script or a one-pager?"

Generate `enablement-brief.md`:

```
## Enablement Brief — [Product/Feature]
Date: [YYYY-MM-DD] | Owner: [name]

### For CS / Support

**What is it (in plain language)**
[2-3 sentences a support agent can say to a confused user]

**Top questions and answers**
| Question | Answer |
|----------|--------|
| [Q1] | [A1] |
| [Q2] | [A2] |
| [Q3] | [A3] |

**Known edge cases / bugs at launch**
| Issue | Workaround | Ticket |
|-------|-----------|--------|
| [issue] | [workaround] | [link or N/A] |

**Escalation path**
Critical bug → [Slack channel / person] → response SLA: [N hours]

### For Sales (if applicable)

**One-line pitch**
[What to say in a demo or discovery call]

**Key proof point**
[Metric, customer quote, or case study that builds credibility]

**Demo notes**
[What to show, what to avoid, what is not ready yet]

### Help docs / tooltips
| Asset | Status | Link |
|-------|--------|------|
| [help article] | draft / published | [url or N/A] |
| [in-product tooltip] | configured / pending | [url or N/A] |
```

Exit rule: CS has answers to top questions, known issues documented, escalation path clear → proceed to Launch Day Checklist.

If Notion MCP: create Enablement page in Launch database.
If not: save `enablement-brief.md`.

---

### Stage 5: Launch Day Checklist

No new questions — generate the final go-live checklist from all previous stages.

Generate `launch-checklist.md`:

Related skills: `/pm-gtm` (orchestrates the full GTM including this launch skill), `/pm-release` (produce release notes before the launch checklist), `/pm-learn` (run the post-launch learning cycle after the checklist completes)

```
## Launch Day Checklist — [Product/Feature]
Date: [YYYY-MM-DD] | Owner: [name]

### Pre-launch (complete before launch time)
- [ ] Feature flag enabled for 100% of target audience (or rollout %)
- [ ] Release notes published to changelog
- [ ] Help docs live and linked from product
- [ ] CS/Support briefed and enablement brief shared
- [ ] Sales briefed (if applicable)
- [ ] All comms assets reviewed and queued
- [ ] Monitoring dashboards open (error rate, activation, support volume)
- [ ] Rollback plan documented and tested

### Launch (at launch time)
- [ ] Send internal announcement (Slack / email)
- [ ] Publish external announcement (email, Telegram, LinkedIn — per comms plan)
- [ ] Trigger in-app notification (if applicable)
- [ ] Confirm feature is live for real users (spot check)

### Post-launch (D+1 to D+7)
- [ ] Monitor error rate for 24h post-launch
- [ ] Check activation metric at D+2
- [ ] Review support ticket volume at D+2
- [ ] Send post-launch summary to stakeholders at D+7
- [ ] Schedule /pm-learn session: set date → [YYYY-MM-DD]

### Rollback trigger
If [error rate >X% / activation <Y% in 24h / P1 bug reported] → [rollback procedure]
Owner: [name] | Decision time: [within N hours]
```

After checklist complete:
- Tell the user: "Launch complete. Next phase: /pm-learn — review metrics, run retro, close the cycle."
- Update `context.md` `## PM Lifecycle` section: `Current phase: learn`.

If Notion MCP: create Launch Checklist page in Launch database.
If not: save `launch-checklist.md`.

---

## Progress tracker

After each completed stage, output this tracker:

```
✓ GTM Strategy — [done / skipped] ([date])
✓ Positioning — [done / skipped] ([date])
→ Comms Plan — in progress [current stage]
○ Enablement
○ Launch Day Checklist
```

## Rules

- Read context before asking anything — never ask what you can infer
- One stage at a time — complete and confirm before moving to the next
- GTM goal must be measurable — "awareness" is not a goal; "100 activations in 7 days" is
- Positioning must name a real alternative — "nothing" is never the competitor
- Comms plan must assign an owner to every asset — no ownerless tasks
- Enablement is not optional for features that touch CS or Sales — skip only for pure internal changes
- Launch checklist is the final gate — no launch without a rollback plan
- After checklist complete, always suggest updating `context.md` and starting `/pm-learn`

## Agent Output

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-launch
  Проблема:  {from situation.md — one PM-language sentence about what go-to-market preparation is missing before release ships to users}
  Читаю:     .pm/artifacts/release-notes.md, .pm/goals.md, .pm/STATE.md (3 файла)
  Делаю:     writing launch brief: GTM plan, positioning, comms, launch checklist
  ···
```

**Closing block — output after writing artifact, before appending to orchestrator.log:**
```
✓ pm-launch  ({elapsed})
  Результат: {launch-brief.md summary: N GTM channels, launch date confirmed, N checklist items, positioning statement defined}
  Артефакт:  .pm/artifacts/launch-brief.md
  Дальше:    /pm-radar  — launch complete, reset situation snapshot for next sprint
```

When invoked as agent, write launch brief to `.pm/artifacts/launch-brief.md`:
- Release headline (1 sentence, user benefit-first)
- Target audience: who benefits most from this release
- Key messages: 3 bullets for marketing/sales
- Call to action: what we want users to do
- Launch channels: recommended channels with message variants
- Metrics to track: 3-5 KPIs for launch success

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-launch completed → .pm/artifacts/launch-brief.md
```
