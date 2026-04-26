import { cp, chmod, mkdir, access, readdir, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const toolsDir = join(__dirname, '..', 'tools')
const skillsDir = join(__dirname, '..', 'skills')
const pmDir = () => join(homedir(), '.headless', 'pm')
const claudeSkillsDir = () => join(homedir(), '.claude', 'skills')

const FREE_TOOLS = [
  { name: 'pm-interview-prep', label: 'Product context → cusdev interview guide' },
  { name: 'pm-sprint-brief',   label: 'Jira/Linear dump → stakeholder narrative' },
]

const PAID_TOOLS = [
  { name: 'pm-feedback-cluster', label: 'CSV feedback → JTBD clusters' },
  { name: 'pm-competitive-scan', label: 'Company name → competitive brief' },
  { name: 'pm-analytics-digest', label: 'Amplitude/Mixpanel data → insight digest' },
]

const FREE_SKILLS = [
  'pm',
  'cusdev',
  'pm-prd',
  'pm-story',
  'pm-retro',
  'pm-standup',
]

const PAID_SKILLS = [
  'pm-discovery',
  'pm-sprint',
  'pm-roadmap',
  'pm-gtm',
  'pm-okr',
  'pm-cjm',
  'pm-epic',
  'pm-acceptance',
  'pm-prioritize',
  'pm-positioning',
  'pm-decision',
  'pm-jtbd',
  'pm-persona',
  'pm-competitive',
  'pm-survey',
  'pm-market',
  'pm-hypothesis',
  'pm-metrics',
  'pm-sprint-plan',
  'pm-backlog',
  'pm-capacity',
  'pm-status',
  'pm-dependencies',
  'pm-demo',
  'pm-launch',
  'pm-release',
  'pm-ab',
  'pm-postmortem',
  'pm-adoption',
  'pm-stakeholder',
  'pm-exec-brief',
  'pm-portfolio',
  'pm-brief',
  'pm-release-lifecycle',
]

async function exists(p) {
  try { await access(p); return true } catch { return false }
}

export async function installTools() {
  await mkdir(pmDir(), { recursive: true })

  const knownNames = new Set([...FREE_TOOLS, ...PAID_TOOLS].map(t => t.name))
  const existing = await readdir(pmDir()).catch(() => [])
  for (const entry of existing) {
    if (!knownNames.has(entry)) {
      await rm(join(pmDir(), entry), { recursive: true, force: true })
    }
  }

  for (const { name } of FREE_TOOLS) {
    const src = join(toolsDir, 'free', name)
    const dest = join(pmDir(), name)
    await cp(src, dest, { recursive: true })
    await chmod(join(dest, 'run.sh'), 0o755)
  }

  for (const { name } of PAID_TOOLS) {
    const src = join(toolsDir, 'paid', name)
    if (await exists(src)) {
      const dest = join(pmDir(), name)
      await cp(src, dest, { recursive: true })
      await chmod(join(dest, 'run.sh'), 0o755)
    }
  }
}

export async function installSkills(licenseKey = null) {
  await mkdir(claudeSkillsDir(), { recursive: true })

  const toInstall = licenseKey
    ? [...FREE_SKILLS, ...PAID_SKILLS]
    : FREE_SKILLS

  console.log('\nInstalling pm skills → ~/.claude/skills/')
  for (const name of toInstall) {
    const src = join(skillsDir, name)
    if (!(await exists(src))) continue
    const dest = join(claudeSkillsDir(), name)
    await cp(src, dest, { recursive: true })
    console.log(`  ✓ /${name}`)
  }

  if (!licenseKey) {
    console.log(`\n  Paid skills require license. Run: npx headless-pm setup --key=YOUR-KEY`)
  }
}

export function printToolSummary() {
  console.log('\nFree tools (ready to use):')
  for (const { name, label } of FREE_TOOLS) {
    console.log(`  ${name.padEnd(22)} — ${label}`)
  }
  console.log('\nPaid tools (license required):')
  for (const { name, label } of PAID_TOOLS) {
    console.log(`  ${name.padEnd(22)} — ${label}`)
  }
}

export function printPathInstructions() {
  console.log(`
Run tools directly:
  ~/.headless/pm/pm-interview-prep/run.sh context.md
  ~/.headless/pm/pm-sprint-brief/run.sh jira-export.txt
`)
}
