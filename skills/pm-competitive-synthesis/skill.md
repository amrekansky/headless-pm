---
name: pm-competitive-synthesis
description: Competitive synthesis agent. Reads all .pm/artifacts/competitor-*.md files, produces strategic competitive report with positioning gaps and recommendations.
agent: true
artifact_output: .pm/artifacts/competitive-report.md
---

<!-- GEMINI: Do not run shell commands. Read all .pm/artifacts/competitor-*.md files and .pm/goals.md, then write competitive-report.md. -->
<!-- CODEX: Read all competitor-*.md files and goals.md, then write competitive-report.md. -->


## Universal Rules
- Respond in the same language the user writes in
- Read all competitor files before generating output
- Base strategic conclusions on the data — flag gaps explicitly

## Knowledge Base
- `~/.headless/pm/knowledge/7-powers.md` — assess which of the 7 powers each competitor holds; frame strategic recommendations around building durable advantage, not catching up on features
- `~/.headless/pm/knowledge/win-loss-analysis.md` — feed churned-customer and lost-deal patterns into the synthesis; competitive positioning gaps show up most clearly in win/loss data

# /pm-competitive-synthesis — Competitive Synthesis Agent

## Agent Input

Read:
1. All `.pm/artifacts/competitor-*.md` files
2. `.pm/goals.md` — our strategic bets and differentiation goals
3. `.pm/STATE.md` — current product phase and positioning

## Agent Output

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-competitive-synthesis
  Проблема:  {from situation.md — one PM-language sentence about what strategic gaps the competitive analysis will surface}
  Читаю:     .pm/artifacts/competitive.md, .pm/goals.md (2 файла)
  Делаю:     synthesizing competitive landscape: market positioning map, differentiation gaps, strategic recommendations
  ···
```

**Closing block — output after writing artifact, before appending to orchestrator.log:**
```
✓ pm-competitive-synthesis  ({elapsed})
  Результат: {competitive-report.md summary: N competitors analyzed, top threat "{name}", N positioning gaps identified, N strategic recommendations}
  Артефакт:  .pm/artifacts/competitive-report.md
  Дальше:    /pm-roadmap  — competitive landscape defined, inform roadmap priorities
```

Write `.pm/artifacts/competitive-report.md`:

Related skills: `/pm-competitive` (run individual competitor briefs before this synthesis), `/pm-positioning` (update positioning after synthesis), `/strategy-stack` (plug synthesis findings into the full strategy stack)

```markdown
# Competitive Report — {date}
Analyzed {N} competitors.

## Market Overview
{2-3 sentence summary of competitive landscape}

## Feature Comparison Matrix
| Feature | Us | Competitor A | Competitor B | ... |
|---------|----|-----------|-----------|----|
| {feature} | ✓/✗/partial | ... |

## Positioning Gaps
- **Gap 1:** {what competitors offer that we don't, with evidence}
- **Gap 2:** ...

## Our Differentiators
- **Differentiator 1:** {what we have that they don't}

## Threat Assessment
| Competitor | Threat Level | Why |
|---|---|---|
| {name} | H/M/L | {reason} |

## Strategic Recommendations
1. {action}: {rationale} — priority H/M/L
2. ...
```

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-competitive-synthesis completed → .pm/artifacts/competitive-report.md
```


## Related

[[lean-startup]] · [[7-powers]] · [[win-loss-analysis]] · [[obviously-awesome]] · [[north-star-metric]] · [[platform-strategy]] · [[Skills]] · [[Agents]]