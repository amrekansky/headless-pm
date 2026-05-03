import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, rm, readdir, access, readFile, writeFile, mkdir } from 'node:fs/promises'
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

// --- v0.6.0: MCP_SERVERS expansion ---
const { MCP_SERVERS: MCP_V060, installPrerequisiteSkills } = await import('../lib/installer.js')

test('MCP_SERVERS has 8 entries in v0.6.0', () => {
  assert.equal(MCP_V060.length, 8)
})

test('MCP_SERVERS includes google-sheets', () => {
  assert.ok(MCP_V060.some(s => s.name === 'google-sheets'))
})

test('MCP_SERVERS includes figma', () => {
  assert.ok(MCP_V060.some(s => s.name === 'figma'))
})

test('MCP_SERVERS includes slack', () => {
  assert.ok(MCP_V060.some(s => s.name === 'slack'))
})

test('MCP_SERVERS includes github', () => {
  assert.ok(MCP_V060.some(s => s.name === 'github'))
})

test('new MCP servers all use http transport', () => {
  const newServers = ['google-sheets', 'figma', 'slack', 'github']
  for (const name of newServers) {
    const s = MCP_V060.find(s => s.name === name)
    assert.ok(s, `${name} not found`)
    assert.equal(s.transport, 'http', `${name} should use http transport`)
  }
})

test('installPrerequisiteSkills is exported and is a function', () => {
  assert.equal(typeof installPrerequisiteSkills, 'function')
})

// --- v0.6.0: initWorkspace ---
const { initWorkspace, printStatusline: psLine } = await import('../lib/installer.js')

test('initWorkspace creates .pm/ directory in partial mode', async () => {
  const testDir = await mkdtemp(join(tmpdir(), 'pm-workspace-test-'))
  // Create a .md file to trigger partial mode (non-interactive)
  await writeFile(join(testDir, 'README.md'), '# Test project\n', 'utf8')

  const origCwd = process.cwd()
  process.chdir(testDir)
  try {
    await initWorkspace()
    await access(join(testDir, '.pm'), constants.F_OK)
  } finally {
    process.chdir(origCwd)
    await rm(testDir, { recursive: true, force: true })
  }
})

test('initWorkspace writes config.json with product TODO in partial mode', async () => {
  const testDir = await mkdtemp(join(tmpdir(), 'pm-workspace-test-'))
  await writeFile(join(testDir, 'spec.md'), '# Spec\n', 'utf8')

  const origCwd = process.cwd()
  process.chdir(testDir)
  try {
    await initWorkspace()
    const cfg = JSON.parse(await readFile(join(testDir, '.pm', 'config.json'), 'utf8'))
    assert.equal(cfg.product, 'TODO')
    assert.equal(cfg.phase, 'discover')
    assert.ok(cfg.sprintAnchor, 'sprintAnchor should be set')
    assert.equal(cfg.sprintCadence, 14)
  } finally {
    process.chdir(origCwd)
    await rm(testDir, { recursive: true, force: true })
  }
})

test('initWorkspace writes manifest.json as array', async () => {
  const testDir = await mkdtemp(join(tmpdir(), 'pm-workspace-test-'))
  await writeFile(join(testDir, 'notes.txt'), 'notes', 'utf8')

  const origCwd = process.cwd()
  process.chdir(testDir)
  try {
    await initWorkspace()
    const manifest = JSON.parse(await readFile(join(testDir, '.pm', 'manifest.json'), 'utf8'))
    assert.ok(Array.isArray(manifest))
    assert.ok(manifest.some(f => f.path === 'notes.txt'))
  } finally {
    process.chdir(origCwd)
    await rm(testDir, { recursive: true, force: true })
  }
})

test('initWorkspace writes STATE.md with ## Context section', async () => {
  const testDir = await mkdtemp(join(tmpdir(), 'pm-workspace-test-'))
  await writeFile(join(testDir, 'prd.md'), '# PRD\n', 'utf8')

  const origCwd = process.cwd()
  process.chdir(testDir)
  try {
    await initWorkspace()
    const state = await readFile(join(testDir, '.pm', 'STATE.md'), 'utf8')
    assert.ok(state.includes('## Context'))
    assert.ok(state.includes('## Hierarchy'))
    assert.ok(state.includes('## Burndown'))
    assert.ok(state.includes('## Changelog'))
  } finally {
    process.chdir(origCwd)
    await rm(testDir, { recursive: true, force: true })
  }
})

test('initWorkspace excludes node_modules from manifest', async () => {
  const testDir = await mkdtemp(join(tmpdir(), 'pm-workspace-test-'))
  await mkdir(join(testDir, 'node_modules', 'some-pkg'), { recursive: true })
  await writeFile(join(testDir, 'node_modules', 'some-pkg', 'readme.md'), '# pkg', 'utf8')
  await writeFile(join(testDir, 'real-doc.md'), '# doc', 'utf8')

  const origCwd = process.cwd()
  process.chdir(testDir)
  try {
    await initWorkspace()
    const manifest = JSON.parse(await readFile(join(testDir, '.pm', 'manifest.json'), 'utf8'))
    assert.ok(!manifest.some(f => f.path.includes('node_modules')))
    assert.ok(manifest.some(f => f.path === 'real-doc.md'))
  } finally {
    process.chdir(origCwd)
    await rm(testDir, { recursive: true, force: true })
  }
})

test('printStatusline outputs empty string when .pm/ is absent', async () => {
  const testDir = await mkdtemp(join(tmpdir(), 'pm-statusline-test-'))
  const origCwd = process.cwd()
  const origWrite = process.stdout.write.bind(process.stdout)
  let captured = ''
  process.stdout.write = (chunk) => { captured += chunk; return true }
  process.chdir(testDir)
  try {
    await psLine()
    assert.equal(captured, '')
  } finally {
    process.stdout.write = origWrite
    process.chdir(origCwd)
    await rm(testDir, { recursive: true, force: true })
  }
})

test('printStatusline outputs [phase] Sprint N format when .pm/ exists', async () => {
  const testDir = await mkdtemp(join(tmpdir(), 'pm-statusline-test-'))
  await mkdir(join(testDir, '.pm'), { recursive: true })
  const anchor = new Date(Date.now() - 10 * 86400000).toISOString().slice(0, 10) // 10 days ago
  await writeFile(join(testDir, '.pm', 'config.json'), JSON.stringify({
    product: 'Test', phase: 'plan', sprintAnchor: anchor, sprintCadence: 14
  }), 'utf8')
  await writeFile(join(testDir, '.pm', 'STATE.md'), `# State\n\n## Context\n- Focus: Ship auth feature\n`, 'utf8')

  const origCwd = process.cwd()
  const origWrite = process.stdout.write.bind(process.stdout)
  let captured = ''
  process.stdout.write = (chunk) => { captured += chunk; return true }
  process.chdir(testDir)
  try {
    await psLine()
    assert.ok(captured.startsWith('[plan] Sprint'), `expected statusline, got: "${captured}"`)
    assert.ok(captured.includes('Ship auth feature'), `expected focus in output, got: "${captured}"`)
  } finally {
    process.stdout.write = origWrite
    process.chdir(origCwd)
    await rm(testDir, { recursive: true, force: true })
  }
})
