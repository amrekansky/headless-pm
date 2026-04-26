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
