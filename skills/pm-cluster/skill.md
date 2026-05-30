---
name: pm-cluster
description: Feedback clustering agent. Reads all .pm/artifacts/interview-*.md files, groups signals into themes, outputs .pm/artifacts/clusters.md.
agent: true
artifact_output: .pm/artifacts/clusters.md
---

<!-- GEMINI: Do not run shell commands. Read all .pm/artifacts/interview-*.md files, then write clusters.md as described in ## Agent Output. -->
<!-- CODEX: Read all .pm/artifacts/interview-*.md files, then write clusters.md. -->


## Universal Rules
- Respond in the same language the user writes in
- Read all interview files before generating any output
- Only cluster signals that appear in the actual interviews — do not invent

## Knowledge Base
- `~/.headless/pm/knowledge/user-research-methods.md` — use affinity mapping principles when clustering: group by similarity of pain, not similarity of surface behavior; name clusters as problem statements
- `~/.headless/pm/knowledge/continuous-discovery.md` — clusters feed directly into the opportunity solution tree as opportunity nodes; each cluster must be specific enough to generate solution hypotheses


# /pm-cluster — Feedback Clustering Agent

## Agent Input

Read all files matching `.pm/artifacts/interview-*.md`. If fewer than 3 interview files exist, warn: "Only {N} interviews found. Clustering with fewer than 3 interviews produces low-confidence themes. Continue? (y/n)"

## Clustering Rules

Group pain points and signals by theme:
- Minimum 2 interviews must mention a signal for it to become a theme
- Name each theme as a problem statement, not a feature ("Users can't find past decisions" not "Search feature")
- Count frequency: how many of N interviews mentioned this theme
- Capture severity: use the strongest emotional language from quotes to calibrate H/M/L

## Agent Output

## Agent Communication Protocol

**Opening block — output immediately, before reading Agent Input files:**
```
▶ pm-cluster
  Проблема:  {from situation.md — one PM-language sentence about what unstructured interview data needs organizing into themes}
  Читаю:     .pm/artifacts/discovery.md, .pm/goals.md (2 файла)
  Делаю:     clustering interview themes: grouping insights by pain, frequency, and opportunity size
  ···
```

**Closing block — output after writing artifact, before appending to orchestrator.log:**
```
✓ pm-cluster  ({elapsed})
  Результат: {clusters.md summary: N themes identified, top cluster "{name}" mentioned N times, N low-signal items dropped}
  Артефакт:  .pm/artifacts/clusters.md
  Дальше:    /pm-hypothesis  — themes clustered, generate falsifiable hypotheses
```

Write `.pm/artifacts/clusters.md`:

Related skills: `/cusdev` (run interviews that generate the input for this skill), `/feedback-triage` (pre-triage before clustering at volume), `/pm-hypothesis` (generate hypotheses from cluster themes)

```markdown
# Feedback Clusters — {date}
Based on {N} interviews.

## Theme 1: {problem statement}
- **Frequency:** {X}/{N} interviews
- **Severity:** H/M/L — {reason}
- **Representative quotes:**
  - "{quote 1}" — {interviewee role}
  - "{quote 2}" — {interviewee role}
- **Workarounds observed:** {what they do today}

## Theme 2: ...

## Low-signal observations (1 interview only)
- {signal}: mentioned once by {role}
```

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-cluster completed → .pm/artifacts/clusters.md ({N} interviews processed)
```
