import { cp, chmod, mkdir, access, readdir, rm, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import checkbox from '@inquirer/checkbox'
import { convertForGemini, convertForCodex, convertForCodexAgent } from './converters.js'

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
  {
    name: 'google-sheets',
    label: 'Google Sheets',
    transport: 'http',
    url: 'https://sheets.googleapis.com/mcp/sse',
    envVars: {},
    docsUrl: 'https://developers.google.com/sheets/api/mcp',
  },
  {
    name: 'figma',
    label: 'Figma',
    transport: 'http',
    url: 'https://api.figma.com/mcp/sse',
    envVars: {},
    docsUrl: 'https://www.figma.com/developers/mcp',
  },
  {
    name: 'slack',
    label: 'Slack',
    transport: 'http',
    url: 'https://mcp.slack.com/sse',
    envVars: {},
    docsUrl: 'https://api.slack.com/mcp',
  },
  {
    name: 'github',
    label: 'GitHub',
    transport: 'http',
    url: 'https://api.githubcopilot.com/mcp/sse',
    envVars: {},
    docsUrl: 'https://github.com/features/copilot/mcp',
  },
]

const __dirname = dirname(fileURLToPath(import.meta.url))
const toolsDir = join(__dirname, '..', 'tools')
const skillsDir = join(__dirname, '..', 'skills')
const knowledgeDir = join(__dirname, '..', 'knowledge')
const pmDir = () => join(homedir(), '.headless', 'pm')
const claudeSkillsDir = () => join(homedir(), '.claude', 'skills')
const geminiCommandsDir = () => join(homedir(), '.gemini', 'commands', 'headless-pm')
const codexSkillsDir = () => join(homedir(), '.codex', 'skills')

const PREREQUISITE_SKILLS = [
  { name: 'pdf',  package: 'anthropics/skills@pdf'  },
  { name: 'docx', package: 'anthropics/skills@docx' },
  { name: 'xlsx', package: 'anthropics/skills@xlsx' },
  { name: 'pptx', package: 'anthropics/skills@pptx' },
]

const FREE_TOOLS = [
  { name: 'pm-interview-prep',   label: 'Product context → cusdev interview guide' },
  { name: 'pm-sprint-brief',     label: 'Jira/Linear dump → stakeholder narrative' },
  { name: 'pm-feedback-cluster', label: 'CSV feedback → JTBD clusters' },
]

const PAID_TOOLS = [
  { name: 'pm-competitive-scan', label: 'Company name → competitive brief' },
  { name: 'pm-analytics-digest', label: 'Amplitude/Mixpanel data → insight digest' },
]

const FREE_SKILLS = [
  'pm',
  'cusdev',
  // Stage 1 — Discovery
  'pm-discover',
  'pm-discovery',
  'pm-persona',
  'pm-survey',
  'pm-cjm',
  'pm-jtbd',
  'pm-market',
  'pm-hypothesis',
  // Stage 2 — Definition
  'pm-define',
  'pm-prd',
  'pm-story',
  'pm-epic',
  'pm-acceptance',
]

const PAID_SKILLS = [
  'pm-sprint',
  'pm-roadmap',
  'pm-gtm',
  'pm-okr',
  'pm-prioritize',
  'pm-positioning',
  'pm-decision',
  'pm-competitive',
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
  'pm-plan',
  'pm-learn',
  'pm-incident-response',
  'pm-nps-csat',
  'pm-sla-slo',
  'pm-customer-health',
  'pm-pricing-changes',
  'pm-sunset-deprecation',
  'pm-feature-flags',
  'pm-retro',
  'pm-standup',
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

  // Copy knowledge base
  const knowledgeDest = join(pmDir(), 'knowledge')
  await cp(knowledgeDir, knowledgeDest, { recursive: true })
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
      const codexAgentsDir = join(homedir(), '.codex', 'agents')
      await mkdir(codexAgentsDir, { recursive: true })
      const configPath = join(homedir(), '.codex', 'config.toml')
      let cfg = ''
      try { cfg = await readFile(configPath, 'utf8') } catch { cfg = '' }

      // Remove old headless-pm agent block if present
      cfg = cfg.replace(/\n# headless-pm agents START[\s\S]*?# headless-pm agents END\n?/g, '')

      const agentLines = ['', '# headless-pm agents START']
      console.log('\nInstalling pm skills → ~/.codex/skills/')
      for (const name of toInstall) {
        const srcPath = join(skillsDir, name, 'skill.md')
        if (!(await exists(srcPath))) continue
        const raw = await readFile(srcPath, 'utf8')

        // Write SKILL.md (legacy location)
        const skillMd = convertForCodex(raw)
        const destDir = join(codexSkillsDir(), name)
        await mkdir(destDir, { recursive: true })
        await writeFile(join(destDir, 'SKILL.md'), skillMd, 'utf8')

        // Write agent TOML
        const agentToml = convertForCodexAgent(raw)
        await writeFile(join(codexAgentsDir, `${name}.toml`), agentToml, 'utf8')

        // Collect config.toml registration line
        const desc = raw.match(/^description:\s*(.+)$/m)?.[1]?.trim() || name
        const escapedDesc = desc.replace(/"/g, '\\"')
        agentLines.push(`[agents.${name}]`)
        agentLines.push(`description = "${escapedDesc}"`)
        agentLines.push(`config_file = "${join(codexAgentsDir, `${name}.toml`)}"`)
        agentLines.push('')

        console.log(`  ✓ $${name}`)
      }
      agentLines.push('# headless-pm agents END')
      cfg = cfg.trimEnd() + '\n' + agentLines.join('\n') + '\n'
      await writeFile(configPath, cfg, 'utf8')
    }
  }

  if (!licenseKey && !TRIAL_MODE) {
    console.log(`\n  Paid skills require license. Run: npx headless-pm setup --key=YOUR-KEY`)
  }
}

export async function installPrerequisiteSkills() {
  console.log('\nChecking prerequisite skills...')
  const missing = []

  for (const { name, package: pkg } of PREREQUISITE_SKILLS) {
    const dest = join(claudeSkillsDir(), name)
    if (await exists(dest)) {
      console.log(`  ✓ /${name} already installed`)
    } else {
      missing.push({ name, package: pkg })
    }
  }

  if (missing.length === 0) return

  console.log(`\n  Installing ${missing.length} missing skill(s) via npx skills...`)
  for (const { name, package: pkg } of missing) {
    try {
      execSync(`npx skills add ${pkg}`, { stdio: 'pipe' })
      console.log(`  ✓ /${name} installed`)
    } catch {
      console.log(`  ⚠ /${name} — auto-install failed`)
      console.log(`    Run manually: npx skills add ${pkg}`)
    }
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

export async function initWorkspace() {
  const cwd = process.cwd()
  const pmPath = join(cwd, '.pm')

  // Scan folder recursively, skip .pm/, node_modules/, .git/
  const SKIP_DIRS = new Set(['.pm', 'node_modules', '.git'])
  const SUPPORTED_EXTS = new Set(['md','txt','json','yaml','yml','csv','pdf','docx','xlsx','pptx'])
  const RICH_EXTS = new Set(['pdf','docx','xlsx','pptx'])
  const PARTIAL_EXTS = new Set(['md','txt','json','yaml','yml','csv'])

  async function scanDir(dir, base) {
    const entries = await readdir(dir, { withFileTypes: true }).catch(() => [])
    const files = []
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (SKIP_DIRS.has(entry.name)) continue
        files.push(...await scanDir(join(dir, entry.name), base))
      } else {
        const ext = entry.name.split('.').pop()?.toLowerCase()
        if (SUPPORTED_EXTS.has(ext)) {
          const rel = join(dir, entry.name).slice(base.length + 1)
          files.push({ path: rel, type: ext })
        }
      }
    }
    return files
  }

  const allFiles = await scanDir(cwd, cwd)
  const hasRich = allFiles.some(f => RICH_EXTS.has(f.type))
  const hasPartial = allFiles.some(f => PARTIAL_EXTS.has(f.type))

  // Determine mode
  let mode = 'blank'
  if (hasRich) mode = 'full'
  else if (hasPartial) mode = 'partial'

  await mkdir(pmPath, { recursive: true })

  // Write manifest.json
  await writeFile(join(pmPath, 'manifest.json'), JSON.stringify(allFiles, null, 2), 'utf8')

  // Write config.json
  const today = new Date().toISOString().slice(0, 10)
  let config

  if (mode === 'blank') {
    // Interactive prompts
    const { default: input } = await import('@inquirer/input')
    const product = await input({ message: 'Product name:' })
    const phase = await input({ message: 'Lifecycle phase (discover/define/plan/ship/launch/learn):', default: 'discover' })
    const anchor = await input({ message: 'Sprint anchor date (YYYY-MM-DD):', default: today })
    config = { product, phase, sprintAnchor: anchor, sprintCadence: 14 }
  } else {
    // Skeleton config with placeholders
    config = { product: 'TODO', phase: 'discover', sprintAnchor: today, sprintCadence: 14 }
  }

  await writeFile(join(pmPath, 'config.json'), JSON.stringify(config, null, 2), 'utf8')

  // Write STATE.md template
  const sprintN = Math.floor((Date.now() - new Date(config.sprintAnchor)) / 86400000 / config.sprintCadence) + 1
  const sprintEnd = new Date(new Date(config.sprintAnchor).getTime() + sprintN * config.sprintCadence * 86400000).toISOString().slice(0, 10)

  const stateMd = `# Product State

## Context
- Product: ${config.product}
- Phase: ${config.phase}
- Sprint: ${sprintN} (ends ${sprintEnd})
- Focus: TODO
- Blockers: none

## Hierarchy
### Vision
TODO

### Strategy
TODO

### Milestones
- [M1]: TODO — planned

### Epics
- [E1]: TODO — M1

### Stories / Tasks
- [ ] [T1]: TODO — E1

### Bugs
- none

## Burndown
Sprint ${sprintN}: 0 open / 0 closed

## Changelog
- ${today}: workspace initialized
`

  await writeFile(join(pmPath, 'STATE.md'), stateMd, 'utf8')

  console.log(`\n✓ .pm/ workspace created (mode: ${mode})`)
  console.log(`  config.json, STATE.md, manifest.json (${allFiles.length} file(s) indexed)`)
  if (mode !== 'blank') {
    console.log('\n  Open Claude → /pm to extract context from your docs')
  } else {
    console.log('\n  Open Claude → /pm')
  }
}

export async function printStatusline() {
  const cwd = process.cwd()
  const pmPath = join(cwd, '.pm')

  try {
    await access(pmPath)
  } catch {
    process.stdout.write('')
    return
  }

  try {
    const configRaw = await readFile(join(pmPath, 'config.json'), 'utf8')
    const config = JSON.parse(configRaw)
    const { phase, sprintAnchor, sprintCadence = 14 } = config

    const daysSince = Math.floor((Date.now() - new Date(sprintAnchor)) / 86400000)
    const sprintN = Math.floor(daysSince / sprintCadence) + 1

    let focus = ''
    try {
      const stateMd = await readFile(join(pmPath, 'STATE.md'), 'utf8')
      const match = stateMd.match(/^- Focus: (.+)$/m)
      if (match) focus = match[1].trim()
    } catch { /* STATE.md missing — omit focus */ }

    const line = focus ? `[${phase}] Sprint ${sprintN} · ${focus}` : `[${phase}] Sprint ${sprintN}`
    process.stdout.write(line)
  } catch {
    process.stdout.write('')
  }
}

export function printInstallNextSteps() {
  console.log(`
Next:
  1. cd your-product-folder
  2. Drop your docs in the folder (PRDs, specs, backlogs, meeting notes)
  3. npx headless-pm init
  4. Open Claude → /pm
`)
}
