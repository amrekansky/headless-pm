# North Star Metric Framework

## What it is
The North Star Metric (NSM) framework, developed and popularized by Amplitude, is a product management model centered on a single metric that best captures the value customers get from the product. It serves as the bridge between the product team's daily work and long-term sustainable revenue. An NSM is neither a pure business metric (revenue, MAU) nor a pure vanity metric (downloads) — it sits at the intersection of customer value delivered and business outcome generated.

## When to use
- When the product team's work feels disconnected from business results
- When different team members optimize for different metrics and pull in opposite directions
- When you need a single rallying point for roadmap decisions across teams
- When leadership asks "is the product healthy?" and the honest answer is "we're not sure"
- NOT as a replacement for tracking a hierarchy of supporting metrics — the NSM is the top of a tree, not the only node

## Core components

### 1. The North Star Metric
One metric that:
- Measures **customer value delivered** (not internal activity)
- Is a **leading indicator** of sustainable revenue (not a lagging output)
- Can be **directly influenced** by the product team's decisions
- Is **understandable** by all team members without data training
- **Aligns** customer success with business success

**Canonical examples by product type:**
| Product | North Star Metric |
|---|---|
| Spotify | Time spent listening |
| Airbnb | Nights booked |
| Slack | Messages sent by connected users |
| Facebook | Daily Active Users (DAU) |
| HubSpot | Weeks with 5+ activities by a company |
| Duolingo | Daily Active Users completing a lesson |

### 2. Leading vs. Lagging Indicators

**Leading indicators:**
- Predict future outcomes; close to the team's daily work
- Can be directly influenced by product decisions
- Move before revenue/retention metrics do
- Examples: feature activation rate, time-to-value, days active per week

**Lagging indicators:**
- Tell you what already happened; further from daily work
- Cannot be directly controlled — only indirectly influenced
- Move slowly; expensive to learn from in fast-moving product development
- Examples: Monthly Recurring Revenue, Annual Revenue, NPS, churn rate

**The NSM positioning:**
```
[Daily actions] → [Leading inputs] → [North Star Metric] → [Revenue / Retention]
     ^team controls                        ^NSM sits here          ^lagging outputs
```
The NSM should sit in the middle of this spectrum — measurable weekly, influenced by product choices, predictive of long-term revenue.

### 3. The Input Metrics (NSM Tree)
Supporting metrics that directly feed the NSM. Typically 3–5 inputs:

**Structure:**
```
North Star Metric
    ├── Input 1: Breadth (how many users reach the value moment)
    ├── Input 2: Depth (how deeply they engage with core value)
    ├── Input 3: Frequency (how often they return)
    ├── Input 4: Efficiency (how quickly they reach value)
    └── Input 5: Revenue per user (monetization of delivered value)
```

Teams own specific inputs, not the NSM directly. The NSM emerges from inputs moving together.

### 4. Bad North Star Metrics to Avoid
| Metric | Why it Fails |
|---|---|
| Revenue / MRR | Lagging output; doesn't tell you if customers got value |
| Downloads / Installs | Activity without value; disconnected from retention |
| Registered Users | Acquisition metric; no signal of delivered value |
| Page Views | Volume metric; easily inflated without value |
| App Opens | Frequency without substance |

**Test for a bad NSM:** "Can this metric go up while the product gets worse?" If yes, it's a vanity metric, not a North Star.

### 5. Evolving the NSM
NSMs should be stable over years, not changed quarterly. However, they do evolve when:
- The product's core value proposition fundamentally changes
- The business model shifts (e.g., from engagement to transactions)
- The NSM is no longer leading (the product matures and revenue becomes more stable)

## Key questions to ask
- What is the one moment when a user genuinely gets value from our product?
- Can this metric go up while the product is actually getting worse?
- Can the product team take actions this sprint that predictably move this metric?
- Do all teams — engineering, design, marketing, sales — understand and align to this metric?
- What are the 3–5 inputs that most directly drive the NSM?

## Common mistakes
- **Revenue as NSM:** Revenue is the output of value delivered, not the value itself — optimizing for it directly leads to dark patterns
- **Too many North Stars:** One metric, not five. Five metrics is a dashboard, not a North Star
- **Breadth-only NSMs (MAU/DAU):** Count users who log in, not users who experience value — a user who opens the app and leaves is counted the same as one who completes a task
- **Ignoring the input tree:** The NSM is the destination; without input metrics, teams don't know what levers to pull
- **NSM theater:** Leadership approves an NSM but teams continue optimizing local metrics disconnected from it

## Quick reference

**NSM selection criteria checklist:**
- [ ] Measures customer value, not company activity
- [ ] Is a leading indicator (not revenue or NPS)
- [ ] Can be influenced by product decisions within 1–2 sprints
- [ ] Is understandable without data training
- [ ] Aligns customer and business interests
- [ ] Would going up while product gets worse be possible? (Must answer: no)

**NSM definition template:**
```
North Star Metric: [metric name]
Definition: [precise definition — how measured, what counts]
Target: [current baseline] → [12-month goal]
Measurement frequency: [daily / weekly]

Input metrics:
1. [Breadth input] — owned by [team]
2. [Depth input] — owned by [team]
3. [Frequency input] — owned by [team]
```

**Leading/lagging test:**
```
Question: "If this metric moves, how long until we see revenue impact?"
< 30 days → Leading indicator (good NSM candidate)
30-90 days → Middle ground
> 90 days → Lagging indicator (poor NSM candidate)
```

## Sources
- [North Star framework — amplitude.com/books/north-star](https://amplitude.com/books/north-star/about-north-star-framework)
- [Every product needs a North Star — amplitude.com](https://amplitude.com/blog/product-north-star-metric)
- [Good vs bad NSM — amplitude.com](https://amplitude.com/blog/good-bad-north-star-metric)
- [Leading vs lagging indicators — amplitude.com](https://amplitude.com/blog/map-your-metrics)
- [Amplitude NSM playbook — amplitude.com/books/north-star/amplitudes-north-star-metric-and-inputs](https://amplitude.com/books/north-star/amplitudes-north-star-metric-and-inputs)

[[pm-knowledge-base]]
