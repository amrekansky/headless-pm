---
type: concept
title: "Cloud Infrastructure Pricing"
aliases:
  - "Cloud Infrastructure Pricing"
tags:
  - knowledge
  - financial-modeling
status: mature
---

# Cloud Infrastructure Pricing

## What it is

The set of mechanisms for packaging and pricing compute, storage, GPU, and networking resources as a service. Cloud infrastructure pricing is structurally different from SaaS pricing: the unit of sale is a resource (vCPU-hour, GB-month, GPU-hour), not a seat or a workflow. This means pricing decisions are tightly coupled to hardware costs, utilization rates, and oversubscription strategy — and a miscalculation in any of these compounds directly into gross margin erosion. PMs at cloud, infrastructure, and GPUaaS companies must understand both the economics of the underlying hardware and the psychology of how cloud buyers evaluate price.

## When PMs use this

- Designing pricing for a new IaaS, GPUaaS, or PaaS offering from scratch
- Evaluating whether to add reserved or committed-use pricing tiers
- Modeling the margin impact of oversubscription strategy decisions
- Setting GPU pricing for on-demand vs monthly reserved vs spot products
- Diagnosing why gross margins are below benchmark for an existing cloud product
- Preparing competitive pricing analysis before a pricing committee review

## Core Concepts / Framework

### Consumption vs Subscription Models

**Pay-as-you-go (consumption):** Customer pays per resource-unit consumed (per hour, per GB, per request). Maximum flexibility, minimum commitment. Higher per-unit price — the provider bears demand risk. Best fit: bursty workloads, experimentation, startups without predictable usage.

**Reserved / committed use:** Customer commits to a volume or term (1-year, 3-year) in exchange for a discount, typically 30–50% off on-demand rates. Provider gets revenue certainty; customer gets cost predictability. Best fit: steady-state workloads, finance-driven buyers, compliance-oriented enterprises.

**Spot / preemptible:** Provider sells excess capacity at a steep discount (60–90% off on-demand). Caveat: instances can be interrupted with short notice (AWS Spot: 2-minute warning; GCP Preemptible: 30-second). Best fit: batch jobs, model training, non-latency-sensitive pipelines.

| Pricing Model | Margin Impact | Best For | Customer Risk |
|---|---|---|---|
| On-demand | Highest margin/unit; demand risk | Exploration, bursts | Low commitment, highest unit cost |
| Reserved 1yr | ~30% discount given; predictable COGS planning | Steady-state baseline | Medium — unused commitment = sunk cost |
| Reserved 3yr | ~50% discount given; best COGS efficiency | Enterprise, compliance | High — locked long-term |
| Spot / Preemptible | Excess capacity monetized; near-zero COGS margin loss | Batch, training | Interruption risk |
| Committed use (spend-based) | Predictable revenue floor | Hybrid workloads | Flexibility preserved, spend floor enforced |

### Reserved / On-demand / Spot Pricing Mechanics

AWS, GCP, and Azure all implement the same three-tier structure (on-demand / reserved / spot), which has become the industry expectation. When designing a competing or adjacent pricing structure, buyers benchmark against these three tiers implicitly. Key mechanics:

- **Spot discount:** 60–90% below on-demand. Varies by instance type, region, and current demand. Historical interruption rate: 5–15% for common instance types.
- **Reserved discount schedule:** 1-year no-upfront ~20–30% discount; 1-year all-upfront ~35–40%; 3-year all-upfront ~40–60%. All-upfront maximizes provider cash flow and locks customer in fully.
- **Capacity guarantees:** On-demand carries an implicit capacity guarantee (provider absorbs demand spikes). Reserved typically includes explicit capacity reservation in the same AZ. Spot has no guarantee.

### GPU Pricing Mechanics

GPU pricing has a distinct cost structure from CPU-based instances. Key parameters:

- **On-demand GPU rates (indicative, 2025):** H100 80GB SXM: $3.50–$4.10/hr; A100 80GB: $2.00–$3.20/hr; A10G: $0.90–$1.50/hr; L4: $0.70–$1.10/hr. Rates vary significantly by provider and region.
- **Monthly reserved discount:** 30–50% off hourly on-demand rates. A committed H100 at ~$2.00/hr vs $3.80/hr on-demand = 47% discount, ~$1,440/month committed vs ~$2,736/month on-demand.
- **Spot GPU discount:** 40–70% below on-demand. Interruption risk is real — production inference workloads cannot use spot. Training jobs with checkpointing can tolerate interruption.
- **Billing granularity:** Per-minute billing (GCP model) vs hourly minimum (AWS legacy model). Per-minute billing is favored by short-burst workloads; hourly minimums penalize sub-hour jobs.
- **Multi-GPU topology pricing:** 8× GPU nodes (NVLink interconnect) command a premium over equivalent single-GPU sum due to high-bandwidth interconnect and memory pooling. HGX H100 8-GPU pricing is typically 1.1–1.3× the per-GPU price × 8, not linear.

### Oversubscription Ratios for IaaS

Oversubscription is the practice of selling more virtual resources than physically exist, relying on the statistical reality that not all customers use their allocations simultaneously. Without oversubscription, IaaS gross margins would be unviable.

| Resource | Conservative Ratio | Typical Ratio | Aggressive Ratio | Margin Impact |
|---|---|---|---|---|
| vCPU | 2:1 | 4:1 | 8:1–12:1 | Higher ratio = lower per-unit COGS |
| RAM | 1.0:1 | 1.2:1–1.5:1 | 2:1 | RAM oversubscription is risky — swap degrades performance |
| NVMe / SSD | 1.0:1 | 1.0:1 | 1.1:1 | No oversubscription — storage is fully consumed |
| Network | 3:1 | 5:1 | 10:1 | Soft — burst bandwidth is statistical |

**RAM oversubscription risk:** Unlike CPU, RAM oversubscription triggers actual performance degradation (swap I/O) visible to customers. Most providers cap RAM oversubscription at 1.2:1 for performance-tier VMs. Memory-intensive workloads (databases, in-memory caches) require 1:1 provisioning.

**GPU oversubscription:** GPUs are not oversubscribed for dedicated compute instances. Time-sharing (MIG on A100/H100, MPS on older GPUs) is a separate product tier — not standard oversubscription.

### Pricing Psychology for Cloud

**Hourly vs monthly display:** Customers evaluate cloud infrastructure pricing by comparing monthly totals, but displaying per-hour rates makes prices feel accessible. A $3.80/hr H100 feels cheaper than $2,736/mo even though they are identical. Show both.

**Commitment discount psychology:** 30% annual discount is a well-established psychological anchor in the market. Below 25%: customers feel the commitment is not worth the lock-in risk. Above 50%: customers question whether on-demand pricing is inflated.

**Free tier as acquisition mechanics:** AWS, GCP, and Azure all use free tiers to reduce onboarding friction. Free tier converts to paid through usage growth, not features gating. Infrastructure free tiers work because marginal cost of light usage is near zero and the switching cost once integrated is high.

**Egress fee controversy:** Egress pricing (charging for data leaving a cloud region) is a major point of friction. Customers view egress fees as lock-in mechanics, not fair pricing. The EU Data Act (2024) mandated zero egress fees for switching providers within the EU — a signal of direction. Engineering around egress fees in pricing design (e.g., flat-rate egress included up to a cap) is a competitive differentiator for mid-market IaaS buyers.

## Common Mistakes

- **Pricing only on COGS without oversubscription factor.** If you price per vCPU at 1:1 COGS, you are giving away the margin that makes IaaS viable. Apply oversubscription ratio to calculate effective unit COGS before setting price.
- **Listing GPU at hourly rate only without a monthly reserved option.** Customers who want committed infrastructure will go to a provider offering a monthly rate. Losing committed revenue in favor of on-demand-only is a GTM mistake.
- **Ignoring egress in pricing math.** Bandwidth costs (especially cross-region and internet egress) can represent 10–20% of a customer's total cloud bill. If your pricing does not account for egress COGS, you will see surprise margin compression at scale.
- **Conflating spot availability with capacity planning.** Spot pools fill unpredictably. Building a product where customer-facing SLAs depend on spot instance availability is an operational time bomb.
- **Benchmarking reserved discounts against wrong baseline.** A 30% reserved discount is only compelling if on-demand rates are competitive. If on-demand is overpriced, the relative discount feels generous but absolute price is still above market.

## Related

[[Financial Modeling Framework]] · [[Unit Economics Cloud Infra]] · [[Pricing Strategy SaaS]] · [[Infrastructure PM]] · [[Unit Economics]]
