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
