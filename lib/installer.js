import { cp, chmod, mkdir, access, readdir, rm, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import checkbox from '@inquirer/checkbox'
import { convertForGemini, convertForCodex } from './converters.js'

export async function detectCLIs() {
  const candidates = ['claude', 'gemini', 'codex']
  const found = []
  for (const cli of candidates) {
    try {
      execSync(`which ${cli}`, { stdio: 'ignore' })
      found.push(cli)
    } catch {
      // not installed
    }
  }
  return found
}

export const MCP_SERVERS = [
  {
    name: 'notion',
    label: 'Notion',
    transport: 'stdio',
    command: 'npx',
    args: ['-y', '@notionhq/notion-mcp-server'],
    envVars: { NOTION_API_KEY: '' },
    docsUrl: 'https://www.notion.so/my-integrations',
  },
  {
    name: 'linear',
    label: 'Linear',
    transport: 'http',
    url: 'https://mcp.linear.app/sse',
    envVars: {},
    docsUrl: 'https://linear.app',
  },
  {
    name: 'jira',
    label: 'Jira / Confluence',
    transport: 'http',
    url: 'https://mcp.atlassian.com/v1/sse',
    envVars: {},
    docsUrl: 'https://www.atlassian.com',
  },
  {
    name: 'miro',
    label: 'Miro',
    transport: 'http',
    url: 'https://mcp.miro.com/sse',
    envVars: {},
    docsUrl: 'https://miro.com',
  },
]

const __dirname = dirname(fileURLToPath(import.meta.url))
const toolsDir = join(__dirname, '..', 'tools')
const skillsDir = join(__dirname, '..', 'skills')
const pmDir = () => join(homedir(), '.headless', 'pm')
const claudeSkillsDir = () => join(homedir(), '.claude', 'skills')
const geminiCommandsDir = () => join(homedir(), '.gemini', 'commands', 'headless-pm')
const codexSkillsDir = () => join(homedir(), '.codex', 'skills')

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

export async function installSkills(licenseKey = null, clis = null) {
  const TRIAL_MODE = false
  const toInstall = (licenseKey || TRIAL_MODE)
    ? [...FREE_SKILLS, ...PAID_SKILLS]
    : FREE_SKILLS

  const targetCLIs = clis ?? await detectCLIs()

  for (const cli of targetCLIs) {
    if (cli === 'claude') {
      await mkdir(claudeSkillsDir(), { recursive: true })
      console.log('\nInstalling pm skills → ~/.claude/skills/')
      for (const name of toInstall) {
        const src = join(skillsDir, name)
        if (!(await exists(src))) continue
        const dest = join(claudeSkillsDir(), name)
        await cp(src, dest, { recursive: true })
        console.log(`  ✓ /${name}`)
      }
    }

    if (cli === 'gemini') {
      await mkdir(geminiCommandsDir(), { recursive: true })
      console.log('\nInstalling pm skills → ~/.gemini/commands/headless-pm/')
      for (const name of toInstall) {
        const srcPath = join(skillsDir, name, 'skill.md')
        if (!(await exists(srcPath))) continue
        const raw = await readFile(srcPath, 'utf8')
        const toml = convertForGemini(raw)
        await writeFile(join(geminiCommandsDir(), `${name}.toml`), toml, 'utf8')
        console.log(`  ✓ /${name}`)
      }
    }

    if (cli === 'codex') {
      await mkdir(codexSkillsDir(), { recursive: true })
      console.log('\nInstalling pm skills → ~/.codex/skills/')
      for (const name of toInstall) {
        const srcPath = join(skillsDir, name, 'skill.md')
        if (!(await exists(srcPath))) continue
        const raw = await readFile(srcPath, 'utf8')
        const skillMd = convertForCodex(raw)
        const destDir = join(codexSkillsDir(), name)
        await mkdir(destDir, { recursive: true })
        await writeFile(join(destDir, 'SKILL.md'), skillMd, 'utf8')
        console.log(`  ✓ /${name}`)
      }
    }
  }

  if (!licenseKey && !TRIAL_MODE) {
    console.log(`\n  Paid skills require license. Run: npx headless-pm setup --key=YOUR-KEY`)
  }
}

export async function promptMcpSetup(detectedCLIs = null) {
  const clis = detectedCLIs ?? await detectCLIs()
  const selected = await checkbox({
    message: 'Which PM tools do you use? (Space to select, Enter to confirm)',
    choices: MCP_SERVERS.map(s => ({
      name: s.transport === 'http'
        ? `${s.label.padEnd(16)} — OAuth (browser login on first use)`
        : `${s.label.padEnd(16)} — API key required`,
      value: s.name,
    })),
  })

  if (!selected.length) {
    console.log('  Skipping MCP setup. Run: npx headless-pm mcp')
    return
  }

  return installMcpServers(selected, clis)
}

export async function installMcpServers(serverNames = null, detectedCLIs = null) {
  const servers = serverNames
    ? MCP_SERVERS.filter(s => serverNames.includes(s.name))
    : MCP_SERVERS

  const clis = detectedCLIs ?? await detectCLIs()

  if (!clis.length) {
    console.log('\n⚠ No supported CLIs found — skipping MCP setup')
    return { skipped: true }
  }

  console.log('\nRegistering MCP servers...')
  const results = []

  for (const server of servers) {
    const cliResults = []

    for (const cli of clis) {
      try {
        if (cli === 'claude') {
          const cmd = server.transport === 'http'
            ? `claude mcp add -s user --transport sse ${server.name} ${server.url}`
            : `claude mcp add -s user ${server.name} -- ${server.command} ${server.args.join(' ')}`
          execSync(cmd, { stdio: 'ignore' })
          cliResults.push(cli)
        }

        if (cli === 'gemini') {
          const cmd = server.transport === 'http'
            ? `gemini mcp add --transport sse ${server.name} ${server.url}`
            : `gemini mcp add ${server.name} -- ${server.command} ${server.args.join(' ')}`
          execSync(cmd, { stdio: 'ignore' })
          cliResults.push(cli)
        }

        if (cli === 'codex') {
          const configPath = join(homedir(), '.codex', 'config.toml')
          let cfg = ''
          try { cfg = await readFile(configPath, 'utf8') } catch { cfg = '' }
          const section = `\n[mcp.${server.name}]\nurl = "${server.url || ''}"\n`
          if (!cfg.includes(`[mcp.${server.name}]`)) {
            await writeFile(configPath, cfg + section, 'utf8')
          }
          cliResults.push(cli)
        }
      } catch {
        // already registered or CLI error — skip silently
      }
    }

    const tag = cliResults.length ? `[${cliResults.join(', ')}]` : '(skipped)'
    console.log(`  ✓ ${server.label.padEnd(16)} ${tag}`)
    results.push({ ...server, clis: cliResults })
  }

  const needsApiKey = servers.filter(s => s.transport !== 'http' && Object.keys(s.envVars).length)
  if (needsApiKey.length) {
    console.log('\nAPI key setup required:')
    for (const server of needsApiKey) {
      const flags = Object.keys(server.envVars).map(k => `-e ${k}=YOUR_KEY`).join(' ')
      console.log(`\n  ${server.label} — ${server.docsUrl}`)
      console.log(`  claude mcp add -s user --force ${server.name} ${flags} -- ${server.command} ${server.args.join(' ')}`)
    }
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
