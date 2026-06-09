# Healthcare PM

## What it is

Healthcare product management requires understanding how US (and international) medical device and software regulations define what you can build, how clinical workflows constrain UX, and how healthcare data privacy laws govern what you can store and share. Unlike consumer software, a shipped bug in a healthcare product can harm patients — which is why the FDA, HIPAA, and clinical workflow constraints are not optional.

The canonical regulatory sources are: FDA's Software as Medical Device (SaMD) guidance, the 21st Century Cures Act (interoperability mandates), HIPAA (Health Insurance Portability and Accountability Act), and HL7 FHIR (the interoperability standard). The practitioner canon includes *The Digital Doctor* by Robert Wachter and Andreessen Horowitz's health tech investment memos.

## When to use

- When building software that assists clinical decision-making or diagnoses
- When handling Protected Health Information (PHI)
- When integrating with Electronic Health Record (EHR) systems
- When evaluating whether a feature requires FDA clearance
- When designing for clinical users (nurses, physicians, pharmacists) vs patients vs administrators

## Core components / steps

### FDA Software as Medical Device (SaMD)

The FDA classifies software based on risk level. The classification determines what approval pathway applies.

**SaMD Risk Tiers (IMDRF / FDA):**

| Risk Level | Definition | Example | Pathway |
|-----------|-----------|---------|---------|
| Class I | Low risk — general wellness, administrative | Appointment scheduling, step counter | Exempt or 510k |
| Class II | Moderate risk — aids clinical decision | ECG interpretation assistant, diagnostic aid | 510k (most common) |
| Class III | High risk — sustains life, critical diagnosis | Insulin dosing algorithm, cancer screening AI | PMA (most rigorous) |

**Is your software a medical device?** FDA's key test: Does the software intend to diagnose, treat, cure, or prevent a disease or condition? If yes, it is likely a medical device.

**Clinical Decision Support (CDS) safe harbor**: Under 21st Century Cures Act, software that merely displays information for a clinician to independently review and act upon (not automated decision-making) may be exempt from device regulation. If your AI recommends action but a clinician must review and decide, you may qualify for CDS exemption.

### 510k vs De Novo vs PMA

**510k Premarket Notification** (most common for Class II):
- Requires demonstrating "substantial equivalence" to a predicate device already on the market
- Typical timeline: 3–12 months
- Cost: $50K–$500K+ in regulatory fees and preparation
- Does not require clinical trials if predicate is established

**De Novo Classification** (for novel devices with no predicate):
- For devices that are low-to-moderate risk but novel — no 510k predicate exists
- Typical timeline: 12–18 months
- Establishes a new predicate for future 510k submissions by others
- Used by first-movers in new diagnostic categories

**PMA — Premarket Approval** (Class III):
- Most rigorous — requires clinical evidence (trials)
- Timeline: 2–5 years
- Cost: $1M–$10M+
- Required for high-risk devices (cardiac rhythm management, novel cancer diagnostics)

**Product strategy implication**: PMs at medical device companies plan product roadmaps around regulatory milestones, not just engineering milestones. "FDA cleared" is a launch gate, not a post-launch event.

### HIPAA and Business Associate Agreements (BAA)

**HIPAA** governs how Protected Health Information (PHI) must be stored, transmitted, and handled. PHI includes: name, date of birth, SSN, medical record numbers, IP addresses linked to health data, geographic data below state level, and more.

**Covered Entities**: Healthcare providers, health plans, healthcare clearinghouses. Must comply with HIPAA by law.

**Business Associates (BA)**: Vendors who handle PHI on behalf of a covered entity. If your product processes PHI for a hospital or insurer, you are a BA and must sign a BAA.

**BAA implications for product PMs:**
- Your data infrastructure must meet HIPAA technical safeguards (encryption at rest + in transit, access controls, audit logs)
- AWS, Google Cloud, Azure all offer HIPAA-eligible services with BAAs — but you must activate and configure them correctly
- You cannot use standard analytics tools (Google Analytics, Mixpanel without BAA) on PHI data
- De-identification: PHI can be used for analytics after 18 specific identifiers are removed (Safe Harbor method) or via statistical certification

**Minimum Necessary standard**: Only access and transmit the minimum PHI required for the task. PMs must build this into data access controls.

### EHR Integration and HL7 FHIR

**EHR systems** (Epic, Cerner/Oracle Health, Meditech, Allscripts) are the system of record for patient data. Integration is essential but complex.

**HL7 FHIR** (Fast Healthcare Interoperability Resources) is the modern standard for healthcare data exchange. Required by the 21st Century Cures Act for EHR certification. FHIR R4 is the current standard.

**Integration tiers:**
- **FHIR API**: Read and write patient data with patient consent. Epic's App Orchard, Cerner's App Gallery, SMART on FHIR apps. Fastest growing integration path.
- **HL7 v2 messages**: Legacy standard — still dominant in hospital workflows (admission/discharge/transfer, lab results). Requires HL7 integration engine (Mirth Connect, Rhapsody).
- **Direct EHR integration**: Custom integration with Epic/Cerner via their proprietary APIs or connectors. Expensive, slow, but gives deeper access.

**Epic App Orchard**: Epic's app marketplace. Listing requires Epic review, integration testing, and in some cases a security review. Timeline: 3–12 months. Required for distribution to Epic-integrated hospitals.

### Clinical Workflow Constraints

Clinicians are time-constrained and context-switched. UX principles that work for consumer apps often fail in clinical settings:

- **Nurses have 2–3 seconds per screen interaction** at the point of care. Confirmation dialogs that take 5 clicks are skipped or worked around.
- **Alert fatigue**: Too many notifications causes clinicians to dismiss all of them, including critical ones. Design critical alerts to be rare and unambiguous.
- **Order entry workflow**: Physicians enter orders in EHR systems. Your product must insert into the order workflow, not create a separate step.
- **Shared devices**: Clinical devices are often shared — no persistent login, sessions expire, workflows must be resumable.
- **Interruption-resilient design**: Clinicians are constantly interrupted. A workflow must be able to pause and resume without data loss.

**Design principle for clinical products**: Every extra click is a patient safety risk.

## Key questions to ask

- Does our software intend to diagnose, treat, or manage a disease? If yes, FDA device classification is required.
- Are we handling PHI? If yes, is a BAA signed with every vendor in our data pipeline?
- Have clinical stakeholders (nurses, physicians) observed using the product in their actual workflow?
- Does our EHR integration plan account for the 6–12 month timeline for Epic/Cerner certification?
- Is our alert/notification design at risk of contributing to alert fatigue?

## Common mistakes

- **Assuming general wellness exemption**: "Wellness" apps are exempt, but if the app makes clinical claims, FDA may classify it as a device regardless of intent.
- **Shipping PHI to non-BAA-covered tools**: Sending de-identified data to Mixpanel but including IP addresses makes it PHI again. Review the 18 identifiers.
- **Designing for ideal clinical workflows**: Observational research in clinical settings consistently reveals that actual workflows differ dramatically from documented workflows.
- **Underestimating EHR integration timelines**: "We'll integrate with Epic in Q2" is almost never true. Allow 12+ months for Epic App Orchard.
- **Ignoring alert fatigue in notification design**: Adding more alerts feels like adding more safety. The opposite is often true.

## Quick reference

```
FDA classification:
  Class I  → low risk → exempt or simple 510k
  Class II → moderate risk → 510k (substantial equivalence to predicate)
  Class III → high risk → PMA (clinical trials required)
  Novel device, no predicate → De Novo

HIPAA:
  BAA required with all vendors that process PHI
  Encryption at rest + in transit mandatory
  18 identifiers must be removed for de-identification
  Minimum Necessary standard applies

EHR integration timeline: 3–12 months (FHIR API) | 6–18 months (Epic App Orchard)
FHIR R4: current standard — use for all new integrations
```

| Regulation | Key implication |
|-----------|----------------|
| HIPAA | BAA, encryption, audit logs, 18-identifier de-id |
| 21st Century Cures Act | FHIR R4 required for EHR interoperability |
| FDA SaMD | Device classification before clinical features ship |
| HITECH | Breach notification requirements for PHI |

## Sources

- [FDA Software as Medical Device Guidance — fda.gov](https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd)
- [21st Century Cures Act — congress.gov](https://www.congress.gov/bill/114th-congress/house-bill/34)
- [HIPAA for Developers — HHS.gov](https://www.hhs.gov/hipaa/for-professionals/index.html)
- [HL7 FHIR R4 Standard — hl7.org](https://www.hl7.org/fhir/R4/)
- [Epic App Orchard — open.epic.com](https://open.epic.com/)
- [The Digital Doctor — Robert Wachter (2015)](https://www.amazon.com/Digital-Doctor-Hope-Peril-Medicine/dp/0071849467)
- [IMDRF SaMD Risk Framework — imdrf.org](https://www.imdrf.org/documents/software-medical-device-samd-key-definitions)

## Related

- [[compliance-basics]]
- [[fintech-pm]]
- [[technical-concepts-for-pms]]
- [[stakeholder-influence]]
- [[difficult-conversations]]
