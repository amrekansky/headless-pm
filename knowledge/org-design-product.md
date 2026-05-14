# Org Design for Product Teams

## What it is

Org design for product teams is the practice of structuring engineering and product groups to optimize for fast, autonomous delivery. The central insight from Team Topologies (Skelton & Pais, 2019) is that organizational structure determines software architecture — Conway's Law states that systems reflect the communication structures of the organizations that build them. PM-aware org design uses this to intentionally shape both the team structure and the resulting product.

The canonical frameworks are: Team Topologies (Skelton & Pais), the Spotify model (squads, tribes, chapters, guilds), Google's SRE org model, and Marty Cagan's empowered product team model from *Inspired*. The underlying principle is that reducing cognitive load on individual teams — giving each team a clear, bounded problem — produces faster delivery and better software quality.

## When to use

- When a new product area is spinning up and team structure is not yet defined
- When delivery is slow and root cause analysis points to team dependency chains
- When scaling from one PM to multiple PMs across product areas
- When designing the relationship between a platform team and the product teams that use it
- When org structure is producing architecture problems (tight coupling, integration bottlenecks)

## Core components / steps

### Team Topologies: Four Team Types

**Stream-aligned team**: Aligned to a flow of work from a segment of the business domain (a product line, a user journey, a customer segment). This is the primary delivery team type.
- Owns end-to-end delivery: feature ideation → development → production operations
- Minimizes dependencies on other teams to ship
- Has a clear business metric they own (activation rate, retention, revenue from segment)

**Platform team**: Provides a self-service platform that stream-aligned teams use to ship faster.
- Does not ship features to end users directly
- Success metric: platform adoption rate and developer satisfaction (NPS) among stream-aligned teams
- The product is the API/SDK/CLI/portal, not the business outcome

**Enabling team**: Helps stream-aligned teams acquire skills or capabilities they lack.
- Temporary by nature — the goal is to transfer capability, not to create dependency
- Examples: security review, accessibility audits, ML capability uplift
- When the stream-aligned team is capable, the enabling team moves on

**Complicated-subsystem team**: Owns a specific component that requires deep specialist knowledge.
- Examples: recommendation engine, payments processing engine, real-time data pipeline
- Provides a stable interface; stream-aligned teams consume the interface, not the internals

### Interaction Modes

**Collaboration**: Two teams work closely together for a defined period to solve a problem. Appropriate when the solution space is unclear. Expected to resolve into a clearer ownership boundary.

**X-as-a-Service**: One team consumes the output of another (an API, a platform, a tool) with minimal interaction. The interface is stable, documented, and versioned. High autonomy for the consumer team.

**Facilitating**: One team helps another team learn or improve. An enabling team works alongside a stream-aligned team temporarily.

The goal is to move from collaboration (high coordination cost) toward X-as-a-Service (low coordination cost) over time.

### Inverse Conway Maneuver

Conway's Law says org structure → software architecture. The inverse maneuver is: decide what architecture you want, then structure the org to produce it.

**PM application**: If you want a microservices architecture with independent deployability, create teams with clear domain ownership that can deploy without coordinating. If you create a team that owns authentication AND payments AND user profile, they will build a tightly coupled system.

**Before org design**: Define the target architecture and domain boundaries. Team boundaries should map to service/module boundaries.

### Cognitive Load and Team Size

Team Topologies defines three types of cognitive load:
- **Intrinsic load**: Complexity inherent to the domain (e.g., tax calculation rules)
- **Extraneous load**: Complexity from tooling, infrastructure, and process (e.g., deployment pipelines)
- **Germane load**: Complexity that builds team expertise over time (e.g., deep product domain knowledge)

**PM principle**: Platform teams should reduce extraneous cognitive load for stream-aligned teams. If stream-aligned teams spend > 30% of their time on deployment, security, or infrastructure concerns, the platform is not doing its job.

**Team size**: Two-pizza rule (Bezos) — 6–10 people per team. PM + engineering lead + 4–8 engineers. Teams smaller than 4 cannot sustain interruptions; teams larger than 10 develop sub-groups and communication overhead.

### Spotify Model (For Reference)

The Spotify model is widely cited but rarely implemented correctly:
- **Squad**: Autonomous cross-functional team (~6–10 people) with a long-term mission
- **Tribe**: Collection of squads working in a related area (~50–150 people)
- **Chapter**: Functional community within a tribe (all backend engineers in a tribe) — career home
- **Guild**: Cross-tribe community of interest (security guild, frontend guild)

**The caveat**: Spotify itself evolved away from this model. It is useful as vocabulary for thinking about cross-functional structure, but should not be implemented as a rigid framework.

### PM Org Patterns

**One PM per stream-aligned team**: PM owns the mission, partners with engineering lead and design lead. Clear accountability for outcomes.

**Platform PM**: A PM whose product is developer tools/APIs/SDKs consumed by internal teams. Metrics are developer NPS and adoption, not end-user outcomes.

**Group PM / Umbrella PM**: Manages 2–4 stream-aligned PMs, owns the strategy for a product area. Operates through the team PMs rather than directly on features.

**Centralized vs embedded design**: Embedded designers (sitting on stream-aligned teams) produce faster iteration; centralized design (design chapter) produces consistency. Hybrid: embedded designer with chapter membership for craft standards.

## Key questions to ask

- Can each team ship to production without waiting on another team? If not, what is the blocking dependency?
- What is the cognitive load of each team — are they spending more time on infrastructure problems than product problems?
- Does each team own a metric they can directly influence?
- Is the platform team measured by adoption and developer satisfaction, not by features shipped?
- Are team boundaries aligned with architectural boundaries, or fighting against them?

## Common mistakes

- **Teams aligned to technical layers, not domains**: A "frontend team" and "backend team" always need to coordinate; a "checkout team" can ship independently.
- **Too many dependencies between teams**: If 3 teams need to align to ship one feature, the boundary is wrong.
- **Platform team building for imagined users**: Platform teams must talk to stream-aligned teams constantly. Unused internal platforms are waste, not investment.
- **Enabling teams that become permanent fixtures**: An enabling team that runs security reviews forever has failed to transfer capability. Set a sunset date.
- **Ignoring Conway's Law**: Org changes and architecture changes must happen together. Restructuring teams without changing code ownership produces the same architecture.

## Quick reference

```
Team types:
  Stream-aligned:      primary delivery, owns business metric, end-to-end
  Platform:            internal self-service, owned API/portal, metrics = adoption + NPS
  Enabling:            temporary capability transfer, sets own sunset date
  Complicated-subsystem: deep specialty, stable interface for consumers

Interaction modes:
  Collaboration → X-as-a-Service → lower coordination cost over time
  Facilitating: enabling team works alongside, then exits

Cognitive load:
  Intrinsic = domain complexity (accept)
  Extraneous = tooling/process (platform teams reduce this)
  Germane = expertise building (grow this)

Team size: 6–10 (two-pizza rule)
Conway's Law: org structure → software architecture; inverse = design org for target architecture
```

| Anti-pattern | Fix |
|---|---|
| Layer teams (frontend/backend) | Domain teams (checkout, search, onboarding) |
| Dependency chains across teams | Clear ownership boundaries, X-as-a-Service interfaces |
| Platform with no consumers | Platform PM runs user research with stream-aligned teams |
| Enabling team that never exits | Time-boxed enablement with capability transfer milestones |
| Org change without architecture change | Migrate ownership alongside restructuring |

## Sources

- [Team Topologies — Matthew Skelton & Manuel Pais (2019)](https://teamtopologies.com/)
- [Inspired: How to Create Tech Products — Marty Cagan (2018)](https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/)
- [Conway's Law — Melvin Conway (1968)](http://www.melconway.com/Home/Conways_Law.html)
- [How Spotify Builds Products — Spotify Engineering (2014)](https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1/)
- [Accelerate: Building and Scaling High-Performing Technology Organizations — Forsgren, Humble, Kim (2018)](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339)
