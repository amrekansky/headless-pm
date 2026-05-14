#!/usr/bin/env node
import { Command } from 'commander'
import {
  installTools,
  installSkills,
  installMcpServers,
  promptMcpSetup,
  printToolSummary,
  printPathInstructions,
  detectCLIs,
  MCP_SERVERS,
  installPrerequisiteSkills,
  initWorkspace,
  printStatusline,
  printInstallNextSteps,
  addCustomMcpServer,
  installStatusline,
} from '../lib/installer.js'
import { readConfig } from '../lib/config.js'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { homedir } from 'node:os'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { version } = require('../package.json')

const program = new Command()

program
  .name('headless-pm')
  .description('AI Chief of Staff for product managers')
  .version(version)

program
  .command('install')
  .description('Install tools and skills')
  .option('--tools-only', 'Install tools only, skip skills')
  .option('--skills-only', 'Install skills only, skip tools')
  .action(async (opts) => {
    console.log('Installing Headless PM...\n')
    const cfg = await readConfig()

    const detectedCLIs = await detectCLIs()
    const cliLine = ['claude', 'gemini', 'codex']
      .map(c => `${c} ${detectedCLIs.includes(c) ? '✓' : '—'}`)
      .join('  ')
    console.log(`Detected CLIs: ${cliLine}\n`)

    try {
      if (!opts.skillsOnly) {
        console.log('Installing tools → ~/.headless/pm/')
        await installTools()
        console.log('  ✓ pm-interview-prep')
        console.log('  ✓ pm-sprint-brief')
        console.log('  ✓ paid tools (stubs — license required)')
      }
      if (!opts.toolsOnly) {
        await installSkills(cfg.pmLicenseKey || null, detectedCLIs)
        await installPrerequisiteSkills()
      }
      if (!opts.skillsOnly) {
        printToolSummary()
        printPathInstructions()
      }
      await promptMcpSetup(detectedCLIs)
      await installStatusline(detectedCLIs)
      printInstallNextSteps()
    } catch (err) {
      console.error(`Install failed: ${err.message}`)
      process.exit(1)
    }
  })

program
  .command('setup')
  .description('Unlock full toolkit with license key')
  .option('--key <key>', 'License key')
  .action(async ({ key }) => {
    if (!key) {
      console.error('Usage: npx headless-pm setup --key=YOUR-LICENSE-KEY')
      process.exit(1)
    }
    try {
      const res = await fetch(`https://headless-license.onrender.com/validate?key=${key}`)
      const data = await res.json()
      if (data.valid) {
        const { writeConfig } = await import('../lib/config.js')
        await writeConfig({ pmLicenseKey: key })
        console.log('✓ License valid. Installing full toolkit...')
        await installTools()
        await installSkills(key)
        await promptMcpSetup()
        console.log('\nFull Headless PM toolkit installed.')
      } else {
        console.error('Invalid license key.')
        process.exit(1)
      }
    } catch {
      console.error('Could not validate license. Check your connection.')
      process.exit(1)
    }
  })

program
  .command('list')
  .description('List installed tools and skills')
  .action(async () => {
    const pmDir = join(homedir(), '.headless', 'pm')
    const skillsDir = join(homedir(), '.claude', 'skills')

    try {
      const tools = await readdir(pmDir)
      console.log('Installed tools (~/.headless/pm/):')
      for (const t of tools) console.log(`  ${t}`)
    } catch {
      console.log('No tools installed. Run: npx headless-pm install')
    }

    try {
      const skills = await readdir(skillsDir)
      const pmSkills = skills.filter(s => s.startsWith('pm-') || s === 'pm' || s === 'cusdev')
      if (pmSkills.length) {
        console.log('\nInstalled pm skills (~/.claude/skills/):')
        for (const s of pmSkills) console.log(`  /${s}`)
      }
    } catch { /* skills dir missing */ }
  })

program
  .command('update')
  .description('Update installed tools and skills')
  .action(async () => {
    const cfg = await readConfig()
    console.log('Updating Headless PM...')
    try {
      await installTools()
      await installSkills(cfg.pmLicenseKey || null)
      console.log('Updated.')
    } catch (err) {
      console.error(`Update failed: ${err.message}`)
      process.exit(1)
    }
  })

program
  .command('init')
  .description('Create .pm/ workspace in current folder')
  .action(async () => {
    try {
      await initWorkspace()
    } catch (err) {
      console.error(`Init failed: ${err.message}`)
      process.exit(1)
    }
  })

program
  .command('statusline')
  .description('Output single-line status for Claude statusline hook')
  .action(async () => {
    try {
      await printStatusline()
    } catch {
      process.stdout.write('')
    }
  })

program
  .command('mcp [args...]')
  .description('Register PM MCP servers. Use "mcp add [name] [url]" to add a custom SSE server.')
  .option('--list', 'Show available MCP servers without installing')
  .action(async (args, opts) => {
    if (opts.list) {
      console.log('Available PM MCP servers:')
      for (const s of MCP_SERVERS) {
        console.log(`  ${s.name.padEnd(16)} — ${s.label}`)
      }
      console.log('\nAdd a custom server:')
      console.log('  npx headless-pm mcp add <name> <url>')
      return
    }
    if (args[0] === 'add') {
      const [, name, url] = args
      await addCustomMcpServer(name || null, url || null)
      return
    }
    const names = args.length ? args : null
    await installMcpServers(names)
  })

if (process.argv.length === 2) program.help()
program.parse()
