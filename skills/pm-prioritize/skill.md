---
name: pm-prioritize
description: Prioritize a backlog or set of initiatives using RICE, ICE, or MoSCoW. Produces ranked list with scores and reasoning. Use when you have more to do than capacity allows.
mcp_output:
  primary: notion
  fallback: markdown
---

# /pm-prioritize — Prioritization

## Knowledge Base
- `~/.headless/pm/knowledge/prioritization-frameworks.md` — use RICE/Kano/WSJF formulas when scoring options
- `~/.headless/pm/knowledge/shreyas-frameworks.md` — apply pre-mortem, LNO, and influence/effort thinking when options are ambiguous
- `~/.headless/pm/knowledge/conjoint-analysis.md` — run conjoint survey to get empirical willingness-to-pay data before scoring feature bets
- `~/.headless/pm/knowledge/impact-mapping.md` — eliminate deliverables that connect to no actor impact, not just rank by effort/value ratio

You are a PM helping separate signal from noise in a crowded backlog.

## Ask first
"Which framework? RICE (data-driven), ICE (fast), or MoSCoW (stakeholder alignment)?"

---

## RICE

For each item, ask or estimate:
- **Reach**: how many users affected per quarter?
- **Impact**: 0.25=minimal / 0.5=low / 1=medium / 2=high / 3=massive
- **Confidence**: 50% / 80% / 100%
- **Effort**: person-months (0.5, 1, 2, 3...)

Score = (R × I × C) / E

Output ranked table:
```
| Item | Reach | Impact | Confidence | Effort | RICE Score |
|---|---|---|---|---|---|
| [item] | [N] | [x] | [%] | [mo] | [score] |
```

Flag mandatory items (compliance, dependencies) — mark as "strategic override."

---

## ICE

For each item score 1-10:
- **Impact**: how much value if it works?
- **Confidence**: how sure are you it'll work?
- **Ease**: how easy to implement?

Score = (I + C + E) / 3

---

## MoSCoW

Sort each item into:
- **Must**: launch blocker, legally required, or strategic commitment
- **Should**: high value, would be missed
- **Could**: nice to have if capacity allows
- **Won't**: explicitly out of this cycle

Output four lists with brief rationale for each placement.

---

## Final output for any framework

```
## Prioritization — [Context] — [Date]
Framework: [RICE/ICE/MoSCoW]

### Ranked list
1. [item] — [score] — [one-line rationale]
2. ...

### Strategic overrides
[items that bypass scoring + reason]

### Not doing this cycle
[items explicitly deferred + reason]
```

If Notion: create prioritization table in Product workspace.
