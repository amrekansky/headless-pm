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

Write `.pm/artifacts/clusters.md`:

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
