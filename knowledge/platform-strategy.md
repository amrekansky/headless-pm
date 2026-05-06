# Platform Strategy

## What it is

A platform is a business that creates value by facilitating interactions between two or more distinct user groups. Unlike a pipeline business (which creates and delivers value in a linear chain: company → product → customer), a platform enables external participants to create value for each other. Facebook connects users and advertisers. iOS connects app developers and iPhone users. Stripe connects merchants and banks. Understanding platform mechanics is essential for PMs building any product with network effects, API ecosystems, or marketplace dynamics.

## When to use

- Deciding whether to open an API and allow third-party integrations
- Evaluating whether your product has network effects worth investing in
- Designing a developer ecosystem or marketplace
- Diagnosing why growth has plateaued despite adding features
- Setting pricing strategy for multi-sided products

## Core components / steps

### Platform vs. Pipeline

| Dimension | Pipeline business | Platform business |
|-----------|------------------|------------------|
| Value creation | Internal (company builds) | External (participants exchange) |
| Scaling constraint | Adds cost with scale | Marginal cost approaches zero |
| Moat | Product quality | Network effects |
| Key metric | Revenue per unit | Network size and interaction rate |
| Example | A SaaS product with a feature set | Slack (teams + integrations + apps) |

Many products start as pipelines and evolve into platforms as they grow. Salesforce started as a CRM and became a platform (AppExchange). Notion is transitioning from pipeline (writing tool) toward platform (templates, API integrations).

### Network Effects — Types

**Direct (Same-Side) Network Effects**
Value increases as more users of the *same type* join. Every new WhatsApp user makes WhatsApp more valuable to all existing WhatsApp users.

- Strongest type of network effect
- Winner-takes-most dynamic at scale
- Key metric: daily active users, message volume

**Indirect (Cross-Side) Network Effects**
Value to users in one group increases when more users from a *different group* join.
- More iPhone users → more developers build iOS apps → more apps → more users buy iPhones
- More Airbnb guests → more hosts list properties → more options for guests

Indirect network effects create a chicken-and-egg bootstrapping problem: which side do you seed first?

**Data Network Effects**
More users → more data → better product → more users. A flywheel driven by machine learning.
- Google Search: more queries → better understanding of intent → better results → more queries
- Spotify Discover Weekly: more listens → better recommendations → more engagement

**Negative Network Effects**
Value can *decrease* as a platform grows:
- Congestion (traffic, noise, spam)
- Declining quality (marketplace race-to-bottom)
- Loss of exclusivity (luxury goods platforms)

Watch for negative network effects at scale — they reverse your moat.

### The API Economy

APIs (Application Programming Interfaces) are the technical mechanism by which platforms extend their value to third-party developers. Opening an API converts a pipeline product into a platform component.

**Developer ecosystem flywheel:**
```
Open API → Developer builds integration → User gets new use case
→ User tells others → More users → API more valuable
→ More developers build on it → Flywheel compounds
```

**Why it matters for PMs**:
- Every integration a developer builds is a feature you didn't have to build
- Integrations create switching costs (see: 7 Powers)
- Developer ecosystems attract enterprise buyers who need custom integrations
- API revenue (usage-based billing) scales without proportional cost increase

**Openness vs. control trade-off**:
- More open = more third-party innovation, more ecosystem value
- More open = less ability to monetize integrations, more risk of ecosystem players becoming competitors
- Amazon opened AWS; developers built critical infrastructure on it → now enterprise depends on AWS (switching cost for Amazon)
- Apple tightly controls the App Store (30% cut, review process) → monetizes the ecosystem but creates developer friction

### Chicken-and-Egg Problem

Every multi-sided platform must solve the chicken-and-egg problem: neither side joins without the other.

**Common solutions**:

1. **Seed one side manually**: Craigslist manually populated listings in San Francisco before there were buyers. Provide value to Side A without Side B.
2. **Standalone value for one side**: Make the platform valuable to one side even with zero participants on the other side. GitHub was valuable to developers as version control before it was a social network.
3. **Subsidize one side**: Make one side free to attract critical mass (typical: subsidize supply, charge demand). Credit card networks give merchants free terminals; charge cardholders.
4. **Constrained launch**: Launch in one geography or niche where critical mass is achievable. Uber launched in San Francisco only.
5. **Bring both sides simultaneously**: Works when switching sides is easy — one person can be both buyer and seller (Etsy: many makers are also shoppers).

### Openness vs. Control Spectrum

| Strategy | Pros | Cons | Example |
|----------|------|------|---------|
| Fully open | Max ecosystem innovation | Ecosystem eats margin | AOSP Android |
| Curated open | Quality + innovation | Developer friction | iOS App Store |
| Closed | Full monetization | Limited ecosystem | WeChat Mini Programs (controlled) |

Most B2B SaaS platforms land at "curated open": public API with documentation, ISV partner program, marketplace with revenue share.

## Key questions to ask

- Is our product a pipeline today that could evolve into a platform? What would it take?
- Which type of network effect is (or could be) active in our product?
- What is the minimum critical mass needed for each side to find value on the platform?
- Who should we seed first in the chicken-and-egg problem?
- What is the right openness level for our API — fully open, curated marketplace, or partner-only?
- Are we seeing any negative network effects (congestion, quality decline) as we scale?

## Common mistakes

- **Treating all network effects as equivalent**: Direct network effects are much stronger moats than indirect ones. Confusing them leads to overconfidence in defensibility.
- **Opening an API without a monetization strategy**: Free APIs attract developers but give platform operators no leverage. Define monetization before opening.
- **Subsidizing the wrong side**: Subsidize the scarcer, harder-to-get side — not the side that would show up anyway. Usually this is supply (creators, sellers, developers).
- **Ignoring platform governance**: As an ecosystem grows, bad actors exploit it. Content moderation, quality controls, and trust mechanisms are not optional.
- **Building for everyone instead of dominating a niche**: The chicken-and-egg problem requires a focused launch. Trying to be everywhere at once means you have critical mass nowhere.

## Quick reference

| Concept | Definition | PM action |
|---------|-----------|----------|
| Direct NE | Same-side value growth | Build virality and social features |
| Indirect NE | Cross-side value growth | Solve chicken-and-egg; seed harder side |
| Data NE | More data → better product → more users | Invest in ML feedback loops |
| API economy | Third parties build on your platform | Open API, documentation, developer program |
| Chicken-and-egg | Neither side joins without the other | Seed one side; provide standalone value |
| Openness trade-off | Open = ecosystem; closed = control | Define monetization before opening |

## Sources

- [Platform Economics: Network Effects and Multi-Sided Markets — Beyond the Backlog](https://beyondthebacklog.com/2024/08/15/platform-economics-in-product-strategy/)
- [Network Effects and Ecosystems — Jeremy Alexander on Medium](https://jeremy-alexander.medium.com/network-effects-and-ecosystems-for-product-managers-14e4b3090b11)
- [Using Network Properties to Overcome the Chicken-or-Egg Problem — Harvard Business School Online](https://online.hbs.edu/blog/post/chicken-or-egg-problem)
- [7 Strategies for Solving the Chicken and Egg Problem — Applicoinc](https://www.applicoinc.com/blog/7-strategies-solving-chicken-egg-problem-startup/)
- [So you've solved the chicken-and-egg problem — Platform Papers](https://platformpapers.substack.com/p/so-youve-solved-the-chicken-and-egg)
