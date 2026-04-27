import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, rm, readdir, access } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { constants } from 'node:fs'

let tmpHome
test.before(async () => {
  tmpHome = await mkdtemp(join(tmpdir(), 'headless-pm-test-'))
  process.env.HOME = tmpHome
})
test.after(async () => {
  await rm(tmpHome, { recursive: true, force: true })
})

const { installTools } = await import('../lib/installer.js')

test('installTools creates ~/.headless/pm/ directory', async () => {
  await installTools()
  await access(join(tmpHome, '.headless', 'pm'), constants.F_OK)
})

test('installTools copies pm-interview-prep and pm-sprint-brief', async () => {
  await installTools()
  const tools = await readdir(join(tmpHome, '.headless', 'pm'))
  assert.ok(tools.includes('pm-interview-prep'))
  assert.ok(tools.includes('pm-sprint-brief'))
})

test('installTools copies paid tool stubs', async () => {
  await installTools()
  const tools = await readdir(join(tmpHome, '.headless', 'pm'))
  assert.ok(tools.includes('pm-feedback-cluster'))
  assert.ok(tools.includes('pm-competitive-scan'))
  assert.ok(tools.includes('pm-analytics-digest'))
})

test('run.sh in free tools is executable', async () => {
  await installTools()
  const runSh = join(tmpHome, '.headless', 'pm', 'pm-interview-prep', 'run.sh')
  await access(runSh, constants.X_OK)
})

test('pm-release-lifecycle skill file exists', async () => {
  const { fileURLToPath } = await import('node:url')
  const { dirname } = await import('node:path')
  const skillPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'pm-release-lifecycle', 'skill.md')
  await access(skillPath, constants.F_OK)
})

test('pm-discover skill file exists', async () => {
  const { fileURLToPath } = await import('node:url')
  const { dirname } = await import('node:path')
  const skillPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'pm-discover', 'skill.md')
  await access(skillPath, constants.F_OK)
})

test('pm-define skill file exists', async () => {
  const { fileURLToPath } = await import('node:url')
  const { dirname } = await import('node:path')
  const skillPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'pm-define', 'skill.md')
  await access(skillPath, constants.F_OK)
})

test('pm-plan skill file exists', async () => {
  const { fileURLToPath } = await import('node:url')
  const { dirname } = await import('node:path')
  const skillPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'pm-plan', 'skill.md')
  await access(skillPath, constants.F_OK)
})

test('pm-launch skill file exists', async () => {
  const { fileURLToPath } = await import('node:url')
  const { dirname } = await import('node:path')
  const skillPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'pm-launch', 'skill.md')
  await access(skillPath, constants.F_OK)
})


test('pm-learn skill file exists', async () => {
  const { fileURLToPath } = await import('node:url')
  const { dirname } = await import('node:path')
  const skillPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'pm-learn', 'skill.md')
  await access(skillPath, constants.F_OK)
})

test('/pm skill contains lifecycle orchestrator routing', async () => {
  const { fileURLToPath } = await import('node:url')
  const { dirname } = await import('node:path')
  const { readFile } = await import('node:fs/promises')
  const skillPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'pm', 'skill.md')
  const content = await readFile(skillPath, 'utf8')
  assert.ok(content.includes('PM Lifecycle'), 'should read ## PM Lifecycle from context.md')
  assert.ok(content.includes('/pm-discover'), 'should route to pm-discover')
  assert.ok(content.includes('/pm-define'), 'should route to pm-define')
  assert.ok(content.includes('/pm-plan'), 'should route to pm-plan')
  assert.ok(content.includes('/pm-release-lifecycle'), 'should route to pm-release-lifecycle (ship)')
  assert.ok(content.includes('/pm-launch'), 'should route to pm-launch')
  assert.ok(content.includes('/pm-learn'), 'should route to pm-learn')
})

const v02Skills = [
  'pm-incident-response',
  'pm-nps-csat',
  'pm-sla-slo',
  'pm-customer-health',
  'pm-pricing-changes',
  'pm-sunset-deprecation',
  'pm-feature-flags',
]

for (const skillName of v02Skills) {
  test(`${skillName} skill file exists`, async () => {
    const { fileURLToPath } = await import('node:url')
    const { dirname } = await import('node:path')
    const skillPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', skillName, 'skill.md')
    await access(skillPath, constants.F_OK)
  })
}

test('installTools removes stale tools not in known list', async () => {
  // pre-create a stale tool
  const { mkdir, writeFile } = await import('node:fs/promises')
  const staleDir = join(tmpHome, '.headless', 'pm', 'old-tool-name')
  await mkdir(staleDir, { recursive: true })
  await writeFile(join(staleDir, 'run.sh'), '#!/bin/bash')

  await installTools()
  const tools = await readdir(join(tmpHome, '.headless', 'pm'))
  assert.ok(!tools.includes('old-tool-name'), 'stale tool should be removed')
})

// --- converters ---
const { parseFrontmatter, convertForClaude, convertForGemini, convertForCodex } = await import('../lib/converters.js')

const SAMPLE_SKILL = `---
name: pm-sprint
description: Orchestrate a full sprint cycle — routes to pm-capacity, pm-backlog.
mcp_output:
  primary: jira
  fallback: notion
---

# /pm-sprint

You are a delivery coach. Read CLAUDE.md for project context.
`

test('parseFrontmatter extracts name and description', () => {
  const { meta, body } = parseFrontmatter(SAMPLE_SKILL)
  assert.equal(meta.name, 'pm-sprint')
  assert.equal(meta.description, 'Orchestrate a full sprint cycle — routes to pm-capacity, pm-backlog.')
  assert.ok(body.includes('# /pm-sprint'))
})

test('convertForClaude returns content verbatim', () => {
  const result = convertForClaude(SAMPLE_SKILL)
  assert.equal(result, SAMPLE_SKILL)
})

test('convertForGemini returns valid TOML with description and prompt', () => {
  const result = convertForGemini(SAMPLE_SKILL)
  assert.ok(result.startsWith('description = "Orchestrate a full sprint cycle'))
  assert.ok(result.includes('prompt = "'))
  assert.ok(result.includes('# /pm-sprint'))
  assert.ok(!result.includes('\n\n'))  // newlines are escaped as \n
})

test('convertForCodex replaces CLAUDE.md with AGENTS.md', () => {
  const result = convertForCodex(SAMPLE_SKILL)
  assert.ok(!result.includes('CLAUDE.md'))
  assert.ok(result.includes('AGENTS.md'))
})

test('convertForCodex has YAML frontmatter with name and description', () => {
  const result = convertForCodex(SAMPLE_SKILL)
  assert.ok(result.startsWith('---\n'))
  assert.ok(result.includes('name: "pm-sprint"'))
  assert.ok(result.includes('description: "Orchestrate a full sprint cycle'))
  assert.ok(result.includes('metadata:'))
  assert.ok(result.includes('short-description:'))
})

// --- detectCLIs ---
const { detectCLIs } = await import('../lib/installer.js')

test('detectCLIs returns array', async () => {
  const clis = await detectCLIs()
  assert.ok(Array.isArray(clis))
})

test('detectCLIs only includes known cli names', async () => {
  const clis = await detectCLIs()
  const valid = new Set(['claude', 'gemini', 'codex'])
  for (const cli of clis) {
    assert.ok(valid.has(cli), `unexpected cli: ${cli}`)
  }
})

// --- cross-CLI installSkills ---
const { installSkills } = await import('../lib/installer.js')
const { readFile } = await import('node:fs/promises')

test('installSkills writes skill.md to ~/.claude/skills/', async () => {
  await installSkills(null, ['claude'])
  const skillPath = join(tmpHome, '.claude', 'skills', 'pm', 'skill.md')
  await access(skillPath, constants.F_OK)
})

test('installSkills writes .toml to ~/.gemini/commands/headless-pm/', async () => {
  await installSkills(null, ['gemini'])
  const tomlPath = join(tmpHome, '.gemini', 'commands', 'headless-pm', 'pm.toml')
  await access(tomlPath, constants.F_OK)
  const content = await readFile(tomlPath, 'utf8')
  assert.ok(content.startsWith('description = "'))
  assert.ok(content.includes('prompt = "'))
})

test('installSkills writes SKILL.md to ~/.codex/skills/', async () => {
  await installSkills(null, ['codex'])
  const skillPath = join(tmpHome, '.codex', 'skills', 'pm', 'SKILL.md')
  await access(skillPath, constants.F_OK)
  const content = await readFile(skillPath, 'utf8')
  assert.ok(content.startsWith('---\n'))
  assert.ok(content.includes('name: "pm"'))
})

test('installSkills writes to all CLIs when all provided', async () => {
  await installSkills(null, ['claude', 'gemini', 'codex'])
  await access(join(tmpHome, '.claude', 'skills', 'pm', 'skill.md'), constants.F_OK)
  await access(join(tmpHome, '.gemini', 'commands', 'headless-pm', 'pm.toml'), constants.F_OK)
  await access(join(tmpHome, '.codex', 'skills', 'pm', 'SKILL.md'), constants.F_OK)
})

// --- cross-CLI MCP ---
test('installMcpServers skips gracefully when no CLIs detected', async () => {
  const { installMcpServers } = await import('../lib/installer.js')
  await assert.doesNotReject(async () => {
    await installMcpServers(['linear'], [])
  })
})
