---
type: concept
title: "Unit Economics for Cloud Infrastructure"
aliases:
  - "Unit Economics Cloud Infra"
  - "Unit Economics"
tags:
  - knowledge
  - financial-modeling
status: mature
---

# Unit Economics for Cloud Infrastructure

## What it is

The per-unit cost and revenue analysis for cloud and infrastructure businesses, where "unit" is a physical resource: a server, a GPU, a rack, or a compute-hour. Unlike SaaS unit economics (which center on CAC/LTV per customer seat), infrastructure unit economics must account for hardware depreciation, power and cooling costs, facility fees, and utilization-driven margin variability. A cloud business that does not model unit economics at the hardware level will misquote pricing, under-invest in utilization management, and systematically miss margin targets. PMs at IaaS, GPUaaS, and data center businesses need to work fluently in the language of depreciation schedules, PUE coefficients, and rack utilization — not just MRR and churn.

## When PMs use this

- Calculating cost per compute-hour for pricing a new GPU or CPU product
- Validating whether a proposed pricing tier achieves target gross margin
- Building the COGS section of a financial model for a cloud or infra business
- Evaluating the margin impact of hardware procurement decisions (3yr vs 5yr depreciation, owned vs leased)
- Diagnosing why actual gross margins are below forecast (common cause: PUE underestimated, utilization below plan)
- Benchmarking gross margin performance against public infrastructure company comps

## Core Concepts / Framework

### Hardware Depreciation

Infrastructure hardware is capitalized and depreciated over its useful life. The depreciation schedule is a direct input to monthly COGS.

**Standard depreciation schedules:**
- General-purpose servers (x86): 3–5 years straight-line. 5 years is conservative; 3 years reflects reality of rapid obsolescence and cooling/maintenance cost increases after year 3.
- GPUs (A100, H100): 3 years strongly preferred. GPU generations turn over every 2–3 years (H100 → B200 → next arch). Hardware held beyond 3 years has declining rental value and increasing failure rates.
- Networking equipment (switches, NICs): 5–7 years.
- Storage (NVMe SSDs): 3–5 years depending on write endurance.

**Depreciation formula:**
```
Monthly Depreciation = Purchase Price / (Useful Life in Years × 12)

Example — H100 SXM5 80GB:
  Purchase price: $30,000
  Useful life: 36 months
  Monthly depreciation: $30,000 / 36 = $833/month per GPU

Example — 1U General Server (dual socket, 512GB RAM):
  Purchase price: $12,000
  Useful life: 48 months
  Monthly depreciation: $12,000 / 48 = $250/month per server
```

**Volume negotiation:** List prices above are illustrative. At >100 unit volumes, vendors typically offer 10–25% discounts. Model at negotiated price, not list price.

### Power Cost per kW

Power cost is a major component of infrastructure COGS. It varies significantly by geography and facility type.

**Typical ranges:**
- Owned data center, US average commercial rate: $0.07–$0.12/kWh
- Colocation facility (includes cooling, facility overhead): Equivalent to $0.10–$0.18/kWh effective rate, OR $80–$150/kW/month flat fee
- Hyperscaler-owned DC (custom power contracts): $0.02–$0.06/kWh in favorable markets (Iceland, Norway, Pacific Northwest US)

**Monthly power cost formula:**
```
Monthly Power Cost = Rated TDP (watts) × 730 hours × $/kWh / 1000

Example — H100 SXM5 (TDP 700W):
  700W × 730h × $0.10/kWh / 1000 = $51.10/month per GPU (at 1.0 PUE)
  With PUE 1.4: $51.10 × 1.4 = $71.54/month per GPU

Example — Standard 1U server (TDP 250W):
  250W × 730h × $0.10/kWh / 1000 = $18.25/month per server
```

### PUE Coefficient

Power Usage Effectiveness (PUE) is the ratio of total data center facility power to IT equipment power. PUE > 1.0 always; lower is more efficient.

```
PUE = Total Facility Power / IT Equipment Power

Effective Power Cost = IT Equipment Power Cost × PUE
```

**PUE benchmarks:**
| Facility Type | PUE Range | Interpretation |
|---|---|---|
| Hyperscaler (Google, Meta, AWS) | 1.10–1.20 | World-class; purpose-built cooling, renewable power |
| Modern Tier III colocation | 1.30–1.50 | Typical for well-operated commercial DC |
| Older / legacy data center | 1.50–1.80 | Poor insulation, older cooling, higher waste |
| Edge / non-DC facility | 1.80–2.50 | Air conditioning only; very inefficient |

**PM implication:** A facility choice between PUE 1.2 and PUE 1.6 increases effective power cost by 33%. For a 1MW IT load at $0.10/kWh, that is $24,000/month difference in pure power cost. Model PUE explicitly in COGS — never assume 1.0.

### Rack Utilization Rates

Physical rack utilization determines how much of the fixed COGS (rack space, power allocation, cooling) is spread across billable compute units. Low utilization = high COGS per billable unit.

**Utilization targets:**
- Minimum viable: 60% (below this, fixed COGS per unit increases rapidly)
- Target operating range: 70–85%
- Upper bound: 90% (above this, reliability risk increases; no headroom for failures or spikes)

**Utilization vs Effective Cost per Compute Unit:**

| Rack Utilization | Gross Margin Impact | Notes |
|---|---|---|
| 50% | Gross margin severely compressed; likely below 40% | Significant idle hardware cost |
| 65% | Below target; margin drag ~5–8 pp vs 80% | Acceptable during ramp-up phase |
| 75% | Target range; healthy margin profile | Typical steady-state for well-run DC |
| 85% | Optimal economics; maximize margin | Requires good demand forecasting |
| 92%+ | Reliability risk; no failover headroom | Do not plan for sustained >90% |

**Formula:**
```
Effective COGS per Billable Unit = Total COGS per Rack / (Total Compute Units × Utilization %)

Example — 1 rack, 20 servers, 40 vCPUs per server, 4:1 oversubscription:
  Sellable vCPUs = 20 × 40 × 4 = 3,200
  At 80% utilization: 2,560 vCPUs effectively sold
  Monthly rack COGS = $5,000 (depreciation + power + DC fees)
  Effective COGS per vCPU-month = $5,000 / 2,560 = $1.95
```

### Gross Margin Benchmarks by Tier

Infrastructure gross margins vary by product type. These benchmarks are drawn from public company filings (2023–2025) and industry reports.

| Product Type | Gross Margin Range | Notes |
|---|---|---|
| Bare metal / dedicated server | 45–55% | Low because oversubscription not applicable |
| Shared VM / IaaS | 50–65% | Oversubscription improves margin vs bare metal |
| GPU compute (on-demand) | 55–70% | Hardware cost high but pricing premium offsets |
| Managed Kubernetes / PaaS | 65–80% | Software and management layer commands premium |
| Storage (object/block) | 55–70% | Drives cheap; oversubscription not applicable |
| CDN / edge | 60–75% | Bandwidth wholesale vs retail spread |

**Public company comps (indicative):**
- Vultr: ~55–60% (private, estimated from public disclosures)
- CoreWeave: targeting 65–70% GPU gross margin (S-1 filed 2025)
- DigitalOcean: 58–62% (public filings 2023–2024)
- Fastly (CDN/edge): 56–61% (public filings 2024)

### CAC/LTV for Infrastructure Businesses

Infrastructure unit economics differ from SaaS: customers expand usage over time (high NRR) but initial contracts are smaller and SMB CAC payback is often faster than enterprise.

**CAC benchmarks by segment:**
- SMB / startup (self-serve): $200–$2,000 (primarily marketing and trial infrastructure cost)
- Mid-market (inside sales + trials): $2,000–$15,000
- Enterprise (field sales, RFP cycles): $20,000–$150,000+

**LTV calculation:**
```
Monthly LTV = ARPU × Gross Margin % / Monthly Churn Rate

Example:
  ARPU: $1,200/mo
  Gross Margin: 60%
  Monthly Churn: 1.5%
  LTV = $1,200 × 0.60 / 0.015 = $48,000

LTV:CAC = $48,000 / $3,000 CAC = 16:1 (excellent)
```

**Payback period target:**
- SMB / startup: < 12 months (self-serve implies low acquisition cost; acceptable to recover faster)
- Mid-market: < 18 months
- Enterprise: < 24 months (long-term contracts and expansion justify longer payback)

**NRR benchmarks for healthy infra businesses:**
- Minimum healthy: > 110% (customers expand usage as they grow)
- Best-in-class: > 130%
- Warning: < 100% (revenue declining without new customers)

### Unit Economics Model Example — 1 Rack, 40 Servers

```
Hardware:
  40 servers × $8,000 each = $320,000 total
  Depreciation: 48 months → $320,000 / 48 = $6,667/month

Power:
  40 servers × 300W TDP = 12,000W = 12 kW
  Monthly power: 12 kW × 730h × $0.10/kWh = $876/month
  PUE 1.4 adjustment: $876 × 1.4 = $1,226/month

DC / Colocation:
  1 rack × $500/month (42U rack, colocation fee)

Personnel (prorated):
  1 NOC engineer manages 50 racks: $80,000/yr fully-loaded / 50 racks = $133/rack/month

Total Monthly Rack COGS: $6,667 + $1,226 + $500 + $133 = $8,526/month

Sellable vCPUs (4:1 oversubscription, 80 physical cores/server, 40 servers):
  40 × 80 × 4 = 12,800 vCPUs
  At 80% utilization: 10,240 vCPUs billable

Effective COGS per vCPU-month: $8,526 / 10,240 = $0.83
If priced at $2.00/vCPU-month: Gross Margin = ($2.00 − $0.83) / $2.00 = 58.5%
```

## Common Mistakes

- **Forgetting PUE in power cost calculations.** Modeling power at IT load without PUE multiplier understates power COGS by 30–80% depending on facility quality. Always apply PUE explicitly.
- **Using list price hardware cost instead of volume-negotiated price.** At any meaningful scale (>50 servers), negotiated pricing is 10–25% below list. Modeling at list price overstates COGS and understates potential margin.
- **Ignoring support labor in COGS.** On-call engineers, NOC staff, and hardware replacement labor are delivery COGS, not G&A. Misclassifying them inflates gross margin and hides true cost of service delivery.
- **Assuming utilization will be high from day one.** New infrastructure deployments ramp utilization over 6–12 months. Model the ramp explicitly; underestimating the low-utilization period produces optimistic early-month COGS estimates.
- **Treating GPU depreciation the same as server depreciation.** A 5-year depreciation schedule for GPUs misrepresents economic reality — H100s will have limited rental market value in year 4–5 as B200 and successors dominate. Use 3-year max for GPU assets.

## Related

[[Financial Modeling Framework]] · [[Cloud Infrastructure Pricing]] · [[Unit Economics]] · [[B2B SaaS Metrics]] · [[Infrastructure PM]]
