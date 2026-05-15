---
name: pm-release
description: Write release notes in three formats — changelog (technical), user-facing (benefit-led), executive summary (one line). Use when shipping.
mcp_output:
  primary: confluence
  fallback: slack
agent: true
artifact_output: .pm/artifacts/release-notes.md
---

<!-- GEMINI: Do not run any shell commands. When invoked as agent, first read .pm/artifacts/sprint-plan.md, .pm/artifacts/retro.md, and .pm/artifacts/kickoff.md, then generate release-notes.md as described in ## Agent Output. -->


## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output

## Agent Input

When invoked as agent, read before generating output:
1. `.pm/artifacts/sprint-plan.md` — committed items for this release
2. `.pm/artifacts/retro.md` — what shipped, what was cut
3. `.pm/artifacts/kickoff.md` — release goal and success criteria
4. MCP (Jira/Linear): closed tickets tagged for this release; merged PRs


# /pm-release — Release Notes

## Knowledge Base
- `~/.headless/pm/knowledge/mobile-pm.md` — when writing release notes for mobile, include ASO-relevant feature descriptions and note any changes affecting push notifications or DAU/MAU tracking

## Output Template
Every response MUST include concrete values, not placeholder labels:
- **Three formats always produced:** changelog (technical/internal) + user-facing (benefit-led) + executive summary (one sentence, business impact)
- **Changelog:** semver or date header; Added / Changed / Fixed sections with concrete descriptions — no marketing language
- **User-facing:** lead with the user benefit, not the feature name (e.g., "You can now export reports in 3 clicks" not "Added export functionality"); mobile releases include ASO-relevant description and note any DAU/MAU tracking changes (mobile-pm.md)
- **Executive summary:** one line — "[Feature] ships [date]. Expected impact: [metric] by [date]." — ties to a business outcome, not a feature description
- **Audience mapping:** each format states its target audience and distribution channel (Slack #changelog / email / in-app banner / App Store notes)

## Steps

Ask: "What shipped? List the changes (technical terms ok — I'll translate)."

## Three formats

### Changelog (technical/internal)
```
## [version or date]

### Added
- [Technical description of new feature]

### Changed
- [What changed in existing behavior]

### Fixed
- [Bug descriptions]

### Deprecated / Removed
- [If applicable]
```

### User-facing (benefit-led, plain language)
```
## What's new in [product] — [month year]

**[Feature name]**
[2-3 sentences: what you can now do and why it helps]

**[Bug fixes]**
We fixed [N] issues including [most impactful one].
```

### Executive summary
```
[Product] released [N] updates on [date]:
[Feature 1] — [one-line business impact]
[Feature 2] — [one-line business impact]
```

If Confluence MCP: publish changelog to Release Notes page.
If Slack MCP: post user-facing version to #product-updates.
If not: save `release-[version]-[date].md`.

## Agent Output

When invoked as agent, write release notes to `.pm/artifacts/release-notes.md`:
- Release name + version
- What's new: user-facing features grouped by theme
- Fixes: bug fixes with ticket references
- Breaking changes (if any): migration instructions
- Known issues

Append to `.pm/orchestrator.log`:
```
{ISO timestamp} pm-release completed → .pm/artifacts/release-notes.md
```
