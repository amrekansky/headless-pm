import { cp, chmod, mkdir, access, readdir, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import checkbox from '@inquirer/checkbox'

export const MCP_SERVERS = [
  {
    name: 'notion',
    label: 'Notion',
    command: 'npx',
    args: ['-y', '@notionhq/notion-mcp-server'],
    envVars: { NOTION_API_KEY: '' },
    docsUrl: 'https://www.notion.so/my-integrations',
  },
  {
    name: 'linear',
    label: 'Linear',
    command: 'npx',
    args: ['-y', '@linear/mcp-server'],
    envVars: { LINEAR_API_KEY: '' },
    docsUrl: 'https://linear.app/settings/api',
  },
  {
    name: 'jira',
    label: 'Jira',
    command: 'npx',
    args: ['-y', 'mcp-server-jira'],
    envVars: { JIRA_API_TOKEN: '', JIRA_EMAIL: '', JIRA_BASE_URL: '' },
    docsUrl: 'https://id.atlassian.com/manage-profile/security/api-tokens',
  },
  {
    name: 'miro',
    label: 'Miro',
    command: 'npx',
    args: ['-y', '@mirohq/mcp-server'],
    envVars: { MIRO_ACCESS_TOKEN: '' },
    docsUrl: 'https://developers.miro.com/docs/getting-started',
  },
]

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
  'pm-discover',
  'pm-define',
  'pm-plan',
  'pm-learn',
  'pm-incident-response',
  'pm-nps-csat',
  'pm-sla-slo',
  'pm-customer-health',
  'pm-pricing-changes',
  'pm-sunset-deprecation',
  'pm-feature-flags',
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

export async function promptMcpSetup() {
  const selected = await checkbox({
    message: 'Which PM tools do you use? (Space to select, Enter to confirm)',
    choices: MCP_SERVERS.map(s => ({
      name: `${s.label.padEnd(10)} — needs: ${Object.keys(s.envVars).join(', ')}`,
      value: s.name,
    })),
  })

  if (!selected.length) {
    console.log('  Skipping MCP setup. Run: npx headless-pm mcp')
    return
  }

  return installMcpServers(selected)
}

export async function installMcpServers(serverNames = null) {
  const servers = serverNames
    ? MCP_SERVERS.filter(s => serverNames.includes(s.name))
    : MCP_SERVERS

  let claudeAvailable = true
  try { execSync('claude --version', { stdio: 'ignore' }) } catch { claudeAvailable = false }

  if (!claudeAvailable) {
    console.log('\n⚠ claude CLI not found — skipping MCP setup')
    console.log('  Install Claude Code, then run: npx headless-pm mcp')
    return { skipped: true }
  }

  console.log('\nRegistering MCP servers (-s user scope)...')
  const results = []

  for (const server of servers) {
    try {
      execSync(
        `claude mcp add -s user ${server.name} -- ${server.command} ${server.args.join(' ')}`,
        { stdio: 'ignore' }
      )
      results.push({ ...server, ok: true })
      console.log(`  ✓ ${server.label}`)
    } catch {
      results.push({ ...server, ok: false })
      console.log(`  ~ ${server.label} (already registered or failed — run 'claude mcp list' to check)`)
    }
  }

  console.log('\nNext: set API keys for each server.')
  for (const server of servers) {
    const flags = Object.keys(server.envVars).map(k => `-e ${k}=YOUR_KEY`).join(' ')
    console.log(`\n  ${server.label} — ${server.docsUrl}`)
    console.log(`  claude mcp add -s user --force ${server.name} ${flags} -- ${server.command} ${server.args.join(' ')}`)
  }

  return { results }
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
