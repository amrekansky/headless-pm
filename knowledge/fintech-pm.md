# Fintech PM

## What it is

Fintech product management requires fluency in financial regulation, payment infrastructure, and compliance-first product design. Unlike most software products, fintech products operate under legal and regulatory constraints that directly shape what can be built, how fast, and for whom. Shipping a feature without understanding the regulatory implications can result in fines, license revocation, or criminal liability — not just bugs.

The key frameworks come from: PSD2 (the EU payment directive that opened open banking), Card Network Operating Regulations (Visa/Mastercard rules that govern billions of transactions), FATF guidance on AML (Anti-Money Laundering), and FinCEN/FCA regulatory frameworks. The canonical book is *The Anatomy of Financial Regulation* (various) and *Breaking Banks* by Brett King.

## When to use

- When working on a payment, banking, lending, or investment product
- When your product handles money movement, even indirectly (marketplace payouts, B2B invoicing)
- When evaluating a fintech feature that could trigger regulatory requirements
- When scoping a new market that has different financial regulations
- When a compliance or legal team is blocking features — understanding the constraints helps find compliant alternatives

## Core components / steps

### PSD2 and Open Banking

**PSD2** (Payment Services Directive 2, EU 2018) mandated that banks expose APIs to licensed third parties. This created:

- **AISPs** (Account Information Service Providers): read bank account data with user consent. Enables budgeting apps, credit underwriting, accounting software.
- **PISPs** (Payment Initiation Service Providers): initiate payments directly from bank accounts without going through card networks. Lower fees than card payments.
- **Strong Customer Authentication (SCA)**: Two-factor auth required for payments over €30 in EU. PMs must design checkout flows that accommodate SCA without destroying conversion.

**Open banking outside EU**: UK Open Banking (2018, similar to PSD2), US has no mandate yet (CFPB proposed rules in 2023), Australia CDR (Consumer Data Right). Each market has different API standards and consent requirements.

**Product implications**: If you're building in the EU or UK, your checkout flow must handle SCA challenges. Your data aggregation must use PSD2-licensed connectivity, not screen scraping. Building an AISP or PISP requires FCA/national license.

### Card Network Rules

Visa and Mastercard are not just payment rails — they are rule-makers. Their Operating Regulations (hundreds of pages, updated regularly) govern:

- **Interchange fees**: The fee the card issuer earns per transaction. Ranges from ~0.2% (debit, EU) to ~2.5% (premium rewards, US). PMs at merchants or fintechs must understand interchange because it affects margin.
- **Card-not-present (CNP) rules**: E-commerce transactions have different fraud liability rules than in-person. Chargebacks fall on the merchant if 3D Secure is not used.
- **Chargeback thresholds**: Merchants with > 1% chargeback rate face fines and potential network termination.
- **BIN ranges**: Bank Identification Numbers identify the issuing bank and card type. PMs building payment features need to understand BIN routing for regional optimization.
- **Surcharging rules**: Rules vary by country on whether merchants can charge customers extra for card payment.

**Product implications**: Your refund policy, dispute handling, and fraud detection are card network compliance, not just good UX.

### KYC and AML

**KYC (Know Your Customer)** is the process of verifying the identity of customers before they can use financial services. Required by anti-money-laundering regulations globally.

**KYC tiers for product design:**

| Tier | Verification | Use case | Transaction limit |
|------|-------------|----------|------------------|
| Tier 1 | Email + phone | Pre-verification access | Low or zero |
| Tier 2 | Government ID + selfie | Basic financial services | $1K–$10K/day typical |
| Tier 3 | Enhanced due diligence | High-value customers, business accounts | Unlimited |

**AML (Anti-Money Laundering)**: Detecting and reporting suspicious transactions. Regulated by FinCEN (US), FCA (UK), FATF globally. PMs building payment products must include:
- Transaction monitoring (rule-based or ML — flag unusual patterns)
- SAR (Suspicious Activity Report) filing workflows
- PEP (Politically Exposed Person) screening
- Sanctions list checking (OFAC in US, EU Consolidated List)

**Product implications**: KYC friction is a major onboarding conversion killer. The PM job is to minimize friction while satisfying regulatory requirements. Progressive disclosure (verify more as usage increases) is the standard pattern.

### Regulatory Approval Timelines

Getting licensed to operate as a financial services company takes far longer than shipping software:

| License type | Jurisdiction | Typical timeline | PM implication |
|---|---|---|---|
| EMI (Electronic Money Institution) | UK (FCA) | 12–18 months | Must have license before handling funds |
| Payment Institution | EU (various NCAs) | 6–12 months | Required for PISP/AISP services |
| Money Transmitter | US (state-by-state) | 2–4 years for all 50 states | Use partner/sponsor bank while applying |
| Banking charter | US (OCC/Fed) | 2–5 years | Most startups use BaaS instead |

**Banking-as-a-Service (BaaS)**: Sponsor bank partnerships (Sutton Bank, Evolve Bank, Column) let fintechs offer banking products without a charter. The BaaS provider is the regulated entity; the fintech operates under their charter. This is how Chime, Brex, and Stripe Treasury work. Product implication: you are bound by the sponsor bank's compliance requirements, which may be stricter than your own risk appetite.

### Compliance-First Product Design Principles

1. **Design for audit trails**: Every significant action (fund movement, identity verification decision, consent) must be logged with timestamp, actor, and context.
2. **Consent architecture**: Explicit user consent for data use and payment initiation must be stored, versioned, and revocable.
3. **Fail closed**: When compliance checks fail, default to blocking the action (not allowing it). The cost of a false positive is user friction; the cost of a false negative can be a regulatory fine.
4. **Jurisdictional flags**: Build country/state awareness into the product early. Features legal in one jurisdiction may be prohibited in another.

## Key questions to ask

- Does this feature involve moving money, storing money, or lending money? If yes, what licenses apply?
- What are the chargeback and fraud rates for this product type, and how does our design affect them?
- Have compliance and legal reviewed the feature spec before engineering starts?
- Is our KYC flow optimized for conversion within the regulatory minimums, or are we adding unnecessary friction?
- What happens to user funds if our company fails? (Safeguarding rules, FDIC pass-through insurance)

## Common mistakes

- **Shipping first, asking for permission later**: In fintech, regulatory violations can be existential. Unlike consumer software, regulators cannot be apologized to with a retrospective fix.
- **Treating KYC as a one-time event**: KYC re-verification is often required when users exceed thresholds or when regulations change.
- **Not planning for SCA in EU checkout**: SCA increases checkout friction. If not designed for, it kills conversion at payment.
- **Underestimating sanctions screening latency**: Real-time OFAC screening adds 100–500ms to transactions. Build for this in the SLA.
- **Assuming BaaS removes all compliance liability**: The fintech is still responsible for its own AML program even when using a sponsor bank.

## Quick reference

```
Open banking: PSD2 (EU) / Open Banking (UK) — AISPs + PISPs
SCA: Required for EU payments > €30 — design checkout for 2FA challenges
KYC tiers: email → ID + selfie → enhanced due diligence
AML: transaction monitoring + SAR filing + PEP/sanctions screening
Card network: < 1% chargeback rate threshold (Visa/MC)
BaaS: operate under sponsor bank charter — faster than own license
```

| Regulation | Region | PM impact |
|-----------|--------|-----------|
| PSD2 | EU | Open banking APIs, SCA in checkout |
| GDPR | EU | Data consent, right to erasure for financial data |
| BSA/AML | US | Transaction monitoring, SAR filing |
| CCPA | California | User data access and deletion requests |
| SOX | US public co | Audit trails for financial reporting |

## Sources

- [PSD2 Overview — European Banking Authority](https://www.eba.europa.eu/regulation-and-policy/payment-services-and-electronic-money/regulatory-technical-standards-on-strong-customer-authentication-and-secure-communication-under-psd2)
- [FATF Guidance on AML — fatf-gafi.org](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html)
- [FinCEN BSA/AML Requirements — fincen.gov](https://www.fincen.gov/resources/statutes-and-regulations)
- [Visa Operating Regulations (public summary) — visa.com](https://www.visa.com/rules/)
- [Breaking Banks — Brett King (2014)](https://www.amazon.com/Breaking-Banks-Innovators-Hustlers-New/dp/1118900936)
- [Stripe Treasury Docs (BaaS model example) — stripe.com](https://stripe.com/docs/treasury)

## Related

- [[compliance-basics]]
- [[healthcare-pm]]
- [[technical-concepts-for-pms]]
- [[unit-economics]]
- [[pricing-strategy-saas]]
