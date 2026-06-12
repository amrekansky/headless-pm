# Enterprise B2B Motion

## What it is

Enterprise B2B deals involve multiple stakeholders with different motivations, veto power, and evaluation criteria. A single-threaded sale — talking only to one contact — almost always loses. PMs must understand the buying committee structure to design features that satisfy all stakeholders, help sales close, and ensure long-term retention after the deal.

## When to use

- When your product sells to companies with 100+ employees
- When deal cycles exceed 30 days
- When multiple teams are involved in approval (IT, Security, Procurement, Finance)
- When designing enterprise features (SSO, audit logs, admin controls)
- When partnering with sales on win/loss analysis

## Core components / steps

### The Buying Committee

According to Forrester 2024 research, the average B2B buying group has 13 members in enterprise. Gartner puts it at 11 for large tech deals. Practically, every deal involves at least these roles:

**Champion**
The internal advocate for your product. Typically an end user or manager who experienced the pain directly. Stakes their professional reputation on the outcome. Without a Champion, there is no deal — you will never reach the Economic Buyer without them. Key PM question: *Does our product make the Champion look good to their boss?*

**Economic Buyer**
Director, VP, or C-suite who controls the budget and makes the final decision. Cares about ROI, risk, and strategic fit. Will not evaluate the product in detail — they trust the Champion's recommendation and want a business case. They enter late and must be convinced quickly. Key PM question: *Can we quantify the outcome in money or time?*

**End Users**
The people who will actually use the product daily. If they resist adoption, the renewal is at risk even if the deal closed. Vocal end user resistance can kill a deal late in the cycle. Key PM question: *Is onboarding fast enough that users see value in week one?*

**IT / Technical Buyer**
Evaluates security posture, infrastructure requirements, integration complexity, and compliance. Can block a deal with a failed security review. Key PM question: *Do we have SOC 2 Type II, SSO, data residency options, and an API?*

**Legal / Procurement**
Reviews contracts, SLAs, data processing agreements (DPAs), and vendor risk questionnaires. Enters late and adds weeks to months to close. Key PM question: *Do we have standard DPAs and MSAs ready? Can we fill out security questionnaires quickly?*

**Executive Sponsor**
Provides organizational air cover for large purchases. Often involves the buyer's C-suite and your C-suite relationship. Needed for seven-figure deals.

### The Buying Process (typical stages)

1. **Problem recognized** — Champion experiences pain, starts researching solutions
2. **Internal alignment** — Champion builds business case, secures executive interest
3. **Vendor evaluation** — RFP, demos, POC / pilot
4. **Security and IT review** — Technical questionnaire, security audit, SSO integration test
5. **Legal and procurement** — Contract redline, MSA / DPA, indemnification clauses
6. **Budget approval** — Economic Buyer signs off
7. **Closed-won** — Contract signed

PMs typically impact stages 3 (demo quality, POC success) and 4 (enterprise readiness).

### What PMs must build for enterprise

| Stakeholder | Must-have features |
|-------------|-------------------|
| End users | Fast onboarding, intuitive UI, good documentation |
| IT | SSO/SAML, audit logs, role-based access control (RBAC), data export |
| Security | SOC 2 Type II report, pen test results, DPA, encryption at rest/in transit |
| Procurement | Standard MSA, clear pricing tiers, DPA template |
| Economic Buyer | ROI metrics, executive dashboard, usage reports |

### QBR — Quarterly Business Review

QBRs are structured conversations between your team and the customer's key stakeholders every 90 days. Purpose: demonstrate value delivered, align on goals for next quarter, expand usage. PM contribution: usage data, feature adoption metrics, roadmap preview relevant to customer goals.

QBR structure:
1. Progress against last quarter's goals (10 min)
2. Usage and outcome metrics (15 min)
3. Customer business update — what changed for them (10 min)
4. Roadmap alignment for next quarter (15 min)
5. Expansion discussion (10 min)

### Expansion motion

Enterprise revenue rarely ends at initial contract value. Expansion paths:
- **Seat expansion**: More users in the same team
- **Land and expand**: New teams or departments within the account
- **Upsell**: Higher tier, more storage, advanced features
- **Cross-sell**: Additional products

PMs drive expansion by building features that create natural expansion pressure — usage dashboards that show non-users, collaboration features that require inviting colleagues, admin tools that make it easy to add seats.

## Key questions to ask

- Who is our Champion in this account? How strong are they?
- Does our product make the Champion look good internally?
- What does the Economic Buyer care about — cost reduction, revenue growth, or risk reduction?
- What will IT and Security flag during their review? Do we have answers ready?
- Are end users adopting in week one, or are we at risk of a "shelfware" churn?
- What is the natural expansion path from this initial contract?

## Common mistakes

- **Single-threaded selling**: Relying on one contact. If that person leaves, the deal collapses and the renewal is at risk.
- **Skipping the business case**: Talking to end users and Champions without equipping them to present ROI to the Economic Buyer.
- **Underinvesting in enterprise readiness**: Losing deals to competitors who have SOC 2 and SSO when you don't. Security reviews block more deals than missing features.
- **Ignoring procurement timelines**: Enterprise legal and procurement adds 4–12 weeks. Not surfacing this early leads to missed quarter-end commits.
- **No expansion motion**: Treating close as the finish line. In enterprise, initial contract is the beginning — net revenue retention (NRR) is the real metric.

## Quick reference

| Role | Primary concern | How PMs help |
|------|----------------|-------------|
| Champion | Looks good internally | Make them the hero. Give them data to share. |
| Economic Buyer | ROI and risk | Quantified outcomes, business case template |
| End User | Daily usability | Fast onboarding, time-to-value < 1 hour |
| IT | Security + integrations | SOC 2, SSO, RBAC, audit logs |
| Procurement | Contract risk | Standard DPA, MSA, clear SLAs |

## Sources

- [Champion vs. Economic Buyer: Why Confusing Them Kills Enterprise Deals — Spotlight.ai](https://www.spotlight.ai/post/champion-vs-economic-buyer)
- [How to Sell to Enterprise: B2B Software Guide — Steerlab](https://www.steerlab.ai/blog/how-to-sell-to-enterprise)
- [Mapping the B2B Buying Committee — TractionComplete](https://tractioncomplete.com/articles/mapping-the-b2b-buying-committee/)
- [What Is an Economic Buyer — Flow State Sales](https://flowstatesales.com/resource-hub/economic-buyer/)
- [MEDDPICC — Think Insights](https://thinkinsights.net/consulting/meddpicc)

[[pm-knowledge-base]]
