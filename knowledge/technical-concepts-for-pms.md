# Technical Concepts for PMs

## What it is

The vocabulary and mental models that let PMs have productive conversations with engineers, write requirements that reflect technical reality, and make build/buy/scope decisions without constant translation from the team. You do not need to code. You need to understand the tradeoffs engineers face so you are not asking for things that cost 10x more than you realize.

## When PMs use this

- Writing technical requirements or API specs
- Scoping integrations with third-party services
- Estimating relative complexity during sprint planning
- Evaluating build vs. buy decisions
- Understanding why a feature is "harder than it looks"
- Reviewing technical debt prioritization with engineering leads

## Core Concepts / Framework

### REST APIs

REST (Representational State Transfer) is the dominant API style — over 80% of public APIs use it. REST APIs use standard HTTP methods to operate on resources:

- `GET /users/123` — retrieve a resource
- `POST /users` — create a new resource
- `PUT /users/123` — replace a resource
- `PATCH /users/123` — partially update a resource
- `DELETE /users/123` — remove a resource

**Status codes PMs should recognize:**
- `200` OK, `201` Created, `204` No Content
- `400` Bad Request (caller error), `401` Unauthorized, `403` Forbidden, `404` Not Found
- `429` Too Many Requests (rate limited), `500` Server Error, `503` Service Unavailable

**API versioning:** When an API changes in a breaking way, providers version it (`/v1/`, `/v2/`). As a PM, every time you change a public API surface, ask: does this break existing integrations? Breaking changes require versioning and a deprecation period.

### Webhooks

Webhooks are the inverse of APIs. Instead of your system asking "did anything change?" (polling), the external service pushes a notification to your URL the moment an event happens.

Example: Stripe sends a `payment.succeeded` event to your webhook endpoint the instant a payment completes. Your server processes it and updates the order.

**Why it matters for PMs:** Webhook-based integrations are near real-time and efficient. But they require your system to handle: delivery failures (the webhook might not arrive), duplicate events (it might arrive twice), and out-of-order delivery. When engineering says a webhook integration is "more complex than it sounds," this is why.

### Database Concepts

**SQL (relational) databases** — PostgreSQL, MySQL. Data stored in structured tables with defined relationships. ACID guarantees (Atomic, Consistent, Isolated, Durable) mean transactions are reliable. Best for structured business data: orders, users, payments.

**NoSQL databases** — MongoDB (document), Redis (key-value), Cassandra (wide-column). Flexible schema, scale horizontally. Best for unstructured data, caching, high-write workloads.

**When the distinction matters for PMs:** Schema changes in SQL require migrations — changing a column name or type takes engineering time and careful deployment. NoSQL is more flexible but loses query power. Neither is universally better.

**Indexes** — The reason queries are fast or slow. An unindexed column on a 10M-row table can make a query take 30 seconds. When engineering says "we need to add an index before this can go live," that is a real constraint, not an excuse.

### System Design Vocabulary

| Term | What it means | Why PMs care |
|------|--------------|--------------|
| **Latency** | Time from request to response | P50/P95/P99 — "median is fine, tail is bad" |
| **Throughput** | Requests per second the system handles | Capacity planning for traffic spikes |
| **Caching** | Storing computed results for fast re-use | Reduces load; introduces staleness risk |
| **CDN** | Content Delivery Network — serves static assets from edge locations | Reduces latency for global users; images, JS, CSS |
| **Rate limiting** | Capping API calls per time window | Prevents abuse; affects integration partners |
| **Queue** | Async task buffer (e.g., email sending, report generation) | Decouples slow tasks; adds eventual consistency |
| **Idempotency** | Same request produces same result if submitted multiple times | Critical for payments, critical operations |

**Latency budget:** The total time for an operation is the sum of every component. If your page load target is 200ms and the database query alone takes 150ms, there is no room for anything else.

### Technical Debt Scoring

Technical debt is the accumulated cost of past shortcuts. PMs need to triage it because not all debt is equal:

- **High severity:** Debt in load-bearing systems (auth, payments, core data models). A bug here cascades.
- **Medium:** Debt in frequently changed areas. Slows every sprint that touches the code.
- **Low:** Debt in stable, rarely-changed code. Cost of cleanup exceeds benefit.

Ask engineers to classify debt by: likelihood of touching this code in the next 6 months × blast radius if it breaks.

### Build vs. Buy Framework

| Criterion | Build | Buy |
|-----------|-------|-----|
| Core differentiator | Yes | No |
| Available solutions | None | Yes |
| Data sensitivity | High | Low–Medium |
| Integration complexity | Low | High — check before assuming |
| Long-term cost | Engineering + maintenance | Vendor pricing |
| Speed to market | Slow | Fast |

Default to buy for commodity infrastructure (auth, billing, email, search). Build only what creates competitive advantage or where vendor constraints would block key product decisions.

## Common Mistakes

- **Treating API integrations as free.** Every third-party integration adds: authentication, error handling, retry logic, webhook management, schema mapping, and ongoing maintenance as the vendor's API changes.
- **Ignoring rate limits in scope.** If you are building a feature that calls an external API per user action, check the rate limit. At 1000 DAU × 10 actions = 10,000 calls/day. Some APIs charge per call or cap at 100/minute.
- **Scoping schema changes as "small."** Adding a nullable column to a large table is fast. Adding a required column to a 100M-row table with backfill is a multi-hour migration requiring downtime planning.
- **Equating "NoSQL = faster."** NoSQL is not universally faster — it is designed for different access patterns. Using it wrong can make things slower.
- **Confusing synchronous and asynchronous.** If a feature relies on a queue, the result is not immediate. "The report will be ready in ~2 minutes" is a product decision, not an engineering limitation to route around.

## Quick Reference

```
REST: standard HTTP; GET/POST/PUT/PATCH/DELETE
Webhook: event push (vs. polling); handle duplicates + failures
SQL: structured, ACID, schema changes cost effort
NoSQL: flexible, scalable, weaker query power
Cache: fast but stale; invalidation is hard
Queue: async, non-blocking, eventual consistency
Build: core differentiator only
Buy: commodity, available, fast
```

## Sources

- [APIs Explained for Product Managers — Department of Product](https://www.departmentofproduct.com/blog/apis-explained-for-product-managers/)
- [Webhooks Explained for Product Managers — Department of Product](https://www.departmentofproduct.com/blog/webhooks-explained-for-product-managers/)
- [10 Essential API Definitions for PMs — Gravitee](https://www.gravitee.io/blog/10-essential-api-definitions-every-product-manager-should-know)
- [Understanding API Design Principles for PMs — Agile Seekers](https://agileseekers.com/blog/understanding-api-design-principles-for-product-managers)
- [REST vs GraphQL vs gRPC for PMs — Medium](https://medium.com/@pmlearnstech/rest-graphql-grpc-soap-websockets-webhooks-899d2c197d45)
