---
name: pm-release
description: Write release notes in three formats — changelog (technical), user-facing (benefit-led), executive summary (one line). Use when shipping.
mcp_output:
  primary: confluence
  fallback: slack
---

# /pm-release — Release Notes

## Knowledge Base
- `~/.headless/pm/knowledge/mobile-pm.md` — when writing release notes for mobile, include ASO-relevant feature descriptions and note any changes affecting push notifications or DAU/MAU tracking

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
