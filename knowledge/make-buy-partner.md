# Make / Buy / Partner

## What it is

The make-buy-partner framework (also called build-buy-partner or MBP) is a structured decision process for choosing how to add a capability to your product or organization: build it yourself (make), purchase an existing solution (buy), or collaborate with another company (partner). It is one of the most common and consequential PM decisions because it determines technical architecture, vendor dependency, competitive moat, and time-to-market simultaneously.

The framework originates in operations research and supply chain management, but entered product management through enterprise strategy (Michael Porter's value chain analysis, "Does this activity create competitive differentiation?") and was popularized in tech PM circles through companies like Amazon (which uses a structured MBP review for most capability additions) and Stripe (whose philosophy of buying infrastructure to focus on differentiation is a classic example).

## When to use

- When adding a capability that does not yet exist in your product
- When evaluating whether to replace an internal system with a vendor
- When a competitor ships a feature and the question is "should we build this too?"
- When engineering is at capacity and scope must be cut or outsourced
- When evaluating M&A targets (acquisition is a buy decision at scale)
- When setting technology strategy for a new product line or market

## Core components / steps

### Step 1: Define the capability clearly

Before evaluating options, write a one-paragraph description of what the capability must do, who uses it, and what "good" looks like. Vague capability definitions lead to wrong MBP decisions. "We need authentication" is too vague. "We need passwordless email-link auth with SSO (SAML/OIDC) for enterprise customers and MFA for all users, with a self-serve admin portal" is specific enough to evaluate.

### Step 2: Apply the Strategic Differentiation Test

**The core question: does this capability create competitive differentiation?**

If users choose your product *because of* this capability → it belongs inside (make or acquire).
If users assume this capability exists and are not differentiating on it → consider buy or partner.

| Capability | Strategic? | Recommendation |
|------------|-----------|----------------|
| Core AI recommendation engine | Yes | Make |
| Email delivery infrastructure | No | Buy (Sendgrid, Postmark) |
| Authentication | Depends | Buy (Auth0) unless auth IS your product |
| Payment processing | No | Buy (Stripe) |
| Search within your product | Depends | Make if search is core differentiation; buy (Algolia) if it is table stakes |
| PDF export | No | Buy |

**Amazon's test**: "Would we be embarrassed if a customer knew we outsourced this?" If yes, make. If no, buy or partner.

### Step 3: Total Cost of Ownership (TCO) Comparison

Build costs are consistently underestimated. True build TCO includes:
- Initial engineering (typically 2–5× the first estimate)
- Ongoing maintenance (20–30% of initial build per year)
- Opportunity cost of engineering time not spent on differentiated work
- Security patches, compliance updates, incident response
- Technical debt accumulation

Buy costs include:
- License or usage fees (often opaque — get pricing for 3× your expected scale)
- Integration engineering cost (often 4–8 weeks minimum)
- Switching cost if you need to change vendors later
- Vendor risk (startup vendors can disappear or pivot)

**Rule of thumb**: If a vendor solution costs < 20% of annual build+maintain cost, buy. If vendor cost exceeds 50% of build cost, evaluate seriously before buying.

### Step 4: Time-to-Market Pressure

- If the capability is blocking a launch: buy or partner, even at higher cost
- If time-to-market is flexible: build is often the right long-term choice for strategic capabilities
- If you need to test whether users even want this capability: buy (MVP with vendor), then evaluate building later

### Step 5: Vendor Lock-in Risk Assessment

**Lock-in dimensions to evaluate:**
1. **Data portability**: Can you export all customer data if you leave the vendor?
2. **API standardization**: Is the vendor using open standards (OIDC, SAML, WebHooks) or proprietary APIs?
3. **Switching cost**: How long and expensive would it be to replace this vendor in 3 years?
4. **Vendor stability**: Is this vendor profitable, well-funded, or in a market at risk?
5. **Market alternatives**: Are there 3+ competing vendors, or is this a monopoly?

High lock-in + high strategic importance = strong signal to make instead of buy.

### Step 6: Partner vs License vs Acquire

When "buy" is the right answer, there are three variants:

- **License/SaaS**: Pay a vendor for API or software access. Fastest, least commitment. Right for non-strategic capabilities.
- **OEM/resell partnership**: Embed a vendor's product in your offering, co-market, revenue-share. Right for capabilities that add value to your product but are not your core.
- **Acquire**: Buy the company. Right for strategic capabilities where the team and IP are the asset, and building or licensing would be too slow or too shallow.

### The Make-Buy-Partner Decision Matrix

| Dimension | Make | Buy | Partner |
|-----------|------|-----|---------|
| Strategic differentiation | High | Low | Medium |
| Time available | Long | Short | Medium |
| Engineering capacity | Available | Constrained | Constrained |
| Vendor market maturity | Low (no good vendors) | High | Medium |
| Lock-in tolerance | Low | Medium | Low |
| TCO advantage | Long-term | Short-term | Depends |

## Key questions to ask

- If we outsource this, can a competitor get the same capability for the same price? If yes, it is not strategic.
- What is the realistic 3-year TCO of building vs buying?
- How long would it take engineering to build a production-quality version of this — including edge cases, security, and maintenance?
- If this vendor goes out of business or raises prices 10×, what is our exit plan?
- Are we making this decision based on engineering preference ("not invented here" bias) or business reality?

## Common mistakes

- **"Not invented here" syndrome**: Engineers and PMs often prefer building because it feels more interesting. The discipline is to evaluate objectively.
- **Underestimating build cost**: Initial estimates rarely include maintenance, incident response, compliance updates, and opportunity cost.
- **Buying without exit planning**: Contracts with no data portability or API export options create dangerous lock-in.
- **Treating partnership as a shortcut**: Partnerships require ongoing management. A poorly managed partner relationship can be worse than building.
- **Ignoring TCO at scale**: A vendor that seems cheap at 10K users may be unaffordable at 1M users. Always model at 10× current scale.
- **Conflating "we could build this" with "we should"**: Engineering can build almost anything given enough time. The question is whether that time creates more value than alternatives.

## Quick reference

```
Decision criteria (in order):
1. Strategic differentiation → if yes: make or acquire
2. Time-to-market → if urgent: buy
3. TCO comparison → buy if vendor < 20% of build cost
4. Lock-in risk → if high + strategic: make
5. Vendor market maturity → if immature: make

MBP options:
Make    = build internally, own the IP, long-term investment
Buy     = SaaS license, fastest, watch for lock-in
Partner = OEM/resell/API, shared economics, ongoing relationship
Acquire = buy the company, right when team+IP is the asset
```

| Signal | Make | Buy | Partner | Acquire |
|--------|------|-----|---------|---------|
| Core differentiator | ✓ | | | ✓ |
| Commoditized capability | | ✓ | ✓ | |
| Needs fast time-to-market | | ✓ | ✓ | |
| Vendor market immature | ✓ | | | |
| High lock-in risk + strategic | ✓ | | | |
| Team/IP is the asset | | | | ✓ |
| Shared distribution needed | | | ✓ | |

## Sources

- [The Build vs. Buy Decision — Ben Horowitz (a16z)](https://a16z.com/2014/06/23/the-build-vs-buy-decision/)
- [Michael Porter, Competitive Advantage (1985) — Value Chain Analysis](https://en.wikipedia.org/wiki/Value_chain)
- [Make vs Buy vs Partner — Pragmatic Institute](https://www.pragmaticinstitute.com/resources/articles/product/make-buy-or-partner/)
- [Amazon's Approach to Technology Decisions — Werner Vogels](https://www.allthingsdistributed.com/)
- [Stripe on buying infrastructure — Patrick Collison interviews](https://www.foundersatwork.com/)

## Related

- [[7-powers]]
- [[platform-strategy]]
- [[technical-concepts-for-pms]]
- [[infrastructure-pm]]
- [[compliance-basics]]
