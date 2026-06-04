# headless-pm in Claude Cowork — Getting Started

You installed headless-pm through the Claude plugin menu. You now have 101 PM slash commands available in every Claude conversation. Here is how to actually use them.

---

## First thing to do

Type this in any Claude conversation:

```
/pm-orchestrator I need to plan next sprint
```

Claude will ask you a few questions about your product and sprint, then run the right PM workflow. That is the whole experience — no setup, no files, no terminal.

---

## The 9 commands available to you

| Command | What it does |
|---------|-------------|
| `/pm-orchestrator` | Describe what you are working on → gets routed to the right skill |
| `/pm-discovery` | Explore a problem space, frame opportunities, write a PRD brief |
| `/pm-strategy` | Set OKRs, build a roadmap, define positioning |
| `/pm-customer-research` | Run Mom Test interviews, build personas, synthesize segments |
| `/pm-market-research` | Size a market (TAM/SAM/SOM), map the competitive landscape |
| `/pm-execution` | Plan a sprint, groom the backlog, estimate features, write a retro |
| `/pm-gtm` | Plan a launch, write release notes, manage a rollout |
| `/pm-analytics` | Define metrics, design an A/B test, track feature adoption |
| `/pm-stakeholder` | Map stakeholders, write an exec brief, manage alignment |

Use `/pm-orchestrator` when you are not sure which one fits. Use the specific commands when you know what domain you are in.

---

## Real examples

**You are preparing for sprint planning:**
```
/pm-execution I need to plan next week's sprint. We have 6 engineers, 8 carry-over items, and a deadline to ship the onboarding flow by end of month.
```
Claude will run through capacity calculation, help you commit to a sprint goal, and produce a structured sprint plan you can paste into Jira or Notion.

**You are getting ready for a customer interview:**
```
/pm-customer-research I have an interview tomorrow with a B2B customer who churned. I want to understand why they left.
```
Claude will run the switch interview methodology — the full question sequence to uncover the timeline, competing solution, and the moment they decided to leave.

**You have a vague problem and need to frame it:**
```
/pm-discovery Our activation rate dropped 15% last month and we don't know why. Help me structure this.
```
Claude walks you through a discovery session: what you know, what you don't, where to look, what hypotheses to test.

**You need to brief your CEO on a delay:**
```
/pm-stakeholder I need to tell my CEO we are slipping the launch by 2 weeks. Help me draft the message.
```
Claude will ask what the reason is, what the new date is, and what you are doing about it — then write the exec brief.

---

## One thing you need to know

**There is no memory between conversations.** When you close the chat and open a new one, Claude does not know what you worked on before. Every conversation starts fresh.

This means:
- Copy outputs (sprint plans, PRDs, briefs) into Notion, Docs, or wherever you keep your work
- Paste in context at the start of a new session if you want continuity — e.g. paste your backlog before running `/pm-execution`

This is a Claude architecture constraint that affects all Cowork plugins, not just headless-pm.

---

## What you cannot do in Cowork

- **Save files to your computer** — all output lives in the chat
- **Connect to Notion, Jira, or Linear** — MCP integrations require the terminal version
- **Pick up where you left off automatically** — no `.pm/STATE.md` workspace file

---

## When to switch to the terminal version

You will hit the limits of Cowork when:
- You want Claude to remember your product, team, and sprint across sessions
- You want output saved directly into Notion or Jira without copy-paste
- You want the `/pm` autopilot — where Claude reads your current state and runs the right workflow without you picking a command

To install the terminal version:

```bash
npm install -g headless-pm
npx headless-pm install
```

Requires Node.js and a terminal. Node check: `node --version` — if you see a version number, you are ready.

For the `/pm` autopilot: [headlesspm.com](https://headlesspm.com)

---

## Quick reference

```
Not sure where to start?      /pm-orchestrator [describe what you're working on]

Discovery & problem framing   /pm-discovery
Strategy & roadmap            /pm-strategy
Customer interviews           /pm-customer-research
Market sizing & competition   /pm-market-research
Sprint planning & execution   /pm-execution
Launch & release              /pm-gtm
Metrics & analytics           /pm-analytics
Stakeholder communication     /pm-stakeholder
```
