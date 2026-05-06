# Compliance Basics

## What it is

Compliance frameworks define legal and security standards that products must meet to operate in certain markets or handle certain data types. PMs who don't understand compliance basics will design features that block enterprise sales, create legal liability, or require expensive re-engineering. This document covers the four frameworks most commonly encountered by SaaS PMs: SOC 2, GDPR, HIPAA, and CCPA.

## When to use

- Designing features that store, process, or transmit user data
- Evaluating whether you can sell to enterprise, healthcare, or EU customers
- Planning a security roadmap or responding to a security questionnaire
- Deciding what data to collect, how long to retain it, and who can access it

## Core components / steps

### SOC 2 — Service Organization Control 2

**What it is**: An auditing standard created by the AICPA that certifies a software company's security controls. Required by most mid-market and enterprise B2B buyers before signing a contract.

**Type I vs. Type II**:
- **SOC 2 Type I**: Auditor confirms your controls *are designed* correctly at a single point in time. Think of it as "we have the right policies on paper." Takes 4–8 weeks. Cheaper.
- **SOC 2 Type II**: Auditor confirms your controls *actually worked* over a period of 3–12 months. Tests operating effectiveness. This is what enterprise buyers actually want. Most customers reject Type I alone.

**Five Trust Service Criteria** (choose which apply):
1. **Security** (required): System protection against unauthorized access
2. **Availability**: System is available as committed
3. **Processing Integrity**: Complete, valid, accurate processing
4. **Confidentiality**: Protected confidential information
5. **Privacy**: Personal information collected/used/retained/disclosed appropriately

**PM impact**: SOC 2 requires audit logs, access controls, encryption, incident response procedures, and change management. Plan 3–6 months of engineering work for readiness plus $12k–$30k for the audit. Go straight for Type II — saves money and time vs. doing Type I then upgrading.

**Timing to start**: When your first enterprise prospect asks for it. Realistically, if you're targeting mid-market, start the process at Series A or $1M ARR.

---

### GDPR — General Data Protection Regulation

**What it is**: EU regulation (2018) governing how organizations collect, process, store, and delete personal data of EU residents. Applies to any company serving EU customers regardless of where the company is based.

**Seven principles (Article 5)**:
1. **Lawfulness, fairness, transparency** — have a legal basis for processing; be honest about it
2. **Purpose limitation** — collect data only for stated purposes; don't repurpose without consent
3. **Data minimization** — collect only what is strictly necessary
4. **Accuracy** — keep data correct and up to date
5. **Storage limitation** — don't retain data longer than needed
6. **Integrity and confidentiality** — protect against unauthorized access, loss, or destruction
7. **Accountability** — be able to demonstrate compliance

**Key rights PMs must design for**:
- **Right to access**: User can request all data you hold on them (respond within 30 days)
- **Right to erasure ("right to be forgotten")**: User can request deletion; you must comply unless legal retention obligation overrides
- **Right to portability**: User can request their data in a machine-readable format
- **Consent**: Must be freely given, specific, informed, and unambiguous. Pre-ticked checkboxes and "by continuing to use" do not count. Withdrawing consent must be as easy as giving it.

**What PMs must build**:
- Consent management (granular, logged, revocable)
- Data deletion pipeline (not just soft-delete — cascade through all datastores)
- Data export endpoint for portability requests
- Privacy settings UI that surfaces all consent choices clearly
- No dark patterns — 97% of EU apps still use them; GDPR fines are €20M or 4% of global annual turnover, whichever is higher

**Data Processing Agreement (DPA)**: Any processor (third-party SaaS, AWS, etc.) you share EU personal data with requires a signed DPA. If you use HubSpot, Mixpanel, Intercom — you need DPAs with all of them.

---

### HIPAA — Health Insurance Portability and Accountability Act

**What it is**: US federal law governing Protected Health Information (PHI) — any data that could identify a person in connection with their health condition, treatment, or payment.

**PHI definition** (18 identifiers): Name, address, dates (except year), phone, fax, email, SSN, medical record numbers, health plan beneficiary numbers, account numbers, certificate/license numbers, vehicle identifiers, device identifiers, URLs, IP addresses, biometric identifiers, full-face photos, and any other unique identifying numbers.

**Who must comply**: Covered entities (healthcare providers, insurers) AND their business associates — software companies that handle PHI on their behalf. If your product stores or processes PHI, you are a business associate and must sign a **BAA (Business Associate Agreement)** with covered entities.

**Technical safeguards PMs must design for**:
- Encryption at rest and in transit (required)
- Access controls and audit logs (required)
- Automatic logoff after inactivity
- Data backup and recovery procedures
- No sharing PHI with third-party tools without BAAs (Mixpanel, Slack, etc. typically don't sign BAAs)

**Practical PM impact**: Build an "enterprise / HIPAA" tier if you serve healthcare. Audit every third-party integration for BAA availability. Google Workspace and AWS offer BAAs; most consumer analytics tools do not.

**Penalties**: $100–$50,000 per violation, up to $1.9M per violation category per year.

---

### CCPA — California Consumer Privacy Act

**What it is**: California's privacy law (effective 2020, strengthened by CPRA in 2023). Applies to for-profit businesses that collect California residents' personal information and meet at least one of: $25M+ annual gross revenue, buying/selling/sharing data of 100,000+ consumers annually, or 50%+ revenue from selling consumers' personal information.

**Key rights**:
- Right to know what personal information is collected and why
- Right to delete personal information
- Right to opt out of sale or sharing of personal information
- Right to non-discrimination for exercising rights

**PM impact**: Add "Do Not Sell or Share My Personal Information" link to footer. Honor opt-out signals (Global Privacy Control browser signal must be respected). Data mapping — you must be able to answer "what data do we have on this California resident?"

**Difference from GDPR**: CCPA does not require opt-in consent for all data collection (unlike GDPR). It requires opt-out for sale/sharing. Simpler baseline, weaker than GDPR but expanding.

## Key questions to ask

- Does our product handle any EU user data? (If yes: GDPR applies)
- Does our product handle any PHI? (If yes: HIPAA applies, need BAA process)
- Do enterprise prospects ask for SOC 2? (If yes: start Type II now)
- Are we collecting data we don't actually need? (Data minimization prevents future liability)
- Do we have a data deletion pipeline that works end to end across all datastores?

## Common mistakes

- **Confusing SOC 2 Type I with what enterprise buyers want**: Most will ask for Type II or reject Type I as insufficient.
- **Ignoring DPAs for SaaS tools**: Signing the Stripe DPA but missing the Mixpanel DPA means you are still non-compliant.
- **Building "delete account" that only soft-deletes in the main DB**: GDPR erasure must cascade to all datastores including analytics, backups (within reasonable timeframe), and third-party processors.
- **Using dark patterns for consent**: Cookie banners designed to obscure the "reject all" option are now routinely fined by EU regulators.
- **Handling PHI in tools without BAAs**: Logging PHI to Datadog or Slack without a BAA is a HIPAA violation. Audit every data flow.

## Quick reference

| Framework | Applies when | Key PM deliverable |
|-----------|-------------|-------------------|
| SOC 2 Type II | Enterprise B2B buyers ask for it | Audit logs, RBAC, encryption, incident response |
| GDPR | Any EU user data | Consent flow, erasure pipeline, DPAs, data minimization |
| HIPAA | Any health data / healthcare customers | BAAs, PHI audit, no-PHI analytics pipeline |
| CCPA | CA users + revenue threshold | Opt-out flow, data mapping, deletion endpoint |

## Sources

- [What is SOC 2 — Secureframe](https://secureframe.com/hub/soc-2/what-is-soc-2)
- [SOC 2 Type 2 Compliance: A Beginner's Guide — Drata](https://drata.com/learn/soc-2/type-2-overview)
- [Privacy by Design GDPR — Secure Privacy](https://secureprivacy.ai/blog/privacy-by-design-gdpr-2025)
- [Right to be Forgotten: GDPR Erasure Rights Guide — ComplyDog](https://complydog.com/blog/right-to-be-forgotten-gdpr-erasure-rights-guide)
- [Data Minimization under GDPR, CCPA — TrustArc](https://trustarc.com/resource/data-minimization-gdpr-ccpa-privacy-laws/)
- [Art. 5 GDPR — gdpr-info.eu](https://gdpr-info.eu/art-5-gdpr/)
