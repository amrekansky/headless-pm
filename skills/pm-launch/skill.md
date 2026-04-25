---
name: pm-launch
description: Create a launch brief with checklist, rollout plan, and comms plan. Use when shipping anything that affects users externally.
mcp_output:
  primary: notion
  fallback: confluence
---

# /pm-launch — Launch Brief

## Steps

Ask:
1. "What are we launching?"
2. "Target launch date?"
3. "Launch scope: GA / limited beta / internal only?"

## Output

```
## Launch Brief — [Feature]
Date: [YYYY-MM-DD] | Target: [launch date] | Scope: [GA/beta/internal]

### What we're shipping
[2-3 bullets, plain language, outcome-focused]

### Who it's for
Primary: [user segment]
Secondary: [if any]

### Why now
[Business or user trigger]

### Rollout plan
Week 1: [% of users / cohort]
Week 2: [expand to %]
GA: [date if not immediate]
Rollback trigger: [metric threshold that triggers rollback]

### Launch checklist
**Engineering**
- [ ] Feature flags configured
- [ ] Analytics events instrumented and tested
- [ ] Performance baseline measured
- [ ] Rollback procedure documented

**Product**
- [ ] Acceptance criteria verified
- [ ] Edge cases tested
- [ ] Internal demo completed

**Comms & Enablement**
- [ ] Help docs updated
- [ ] CS/Support trained
- [ ] In-app announcement drafted
- [ ] Email announcement drafted (if applicable)
- [ ] Changelog entry written

**Go/No-go**
- [ ] Approved by: [names]
- [ ] Go/no-go decision: [date/time]

### Risks
| Risk | Mitigation |
|---|---|
| [risk] | [action] |
```

If Notion: create in Product / Launches.
If Confluence: create in Product space.
