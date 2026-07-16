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
  cleanupRemovedSkills,
  initWorkspace,
  printStatusline,
  printInstallNextSteps,
  addCustomMcpServer,
  installStatusline,
} from '../lib/installer.js'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { homedir } from 'node:os'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { version } = require('../package.json')

async function checkForUpdates() {
  try {
    const ac = new AbortController()
    const timer = setTimeout(() => ac.abort(), 2000)
    const res = await fetch('https://registry.npmjs.org/headless-pm/latest', { signal: ac.signal })
    clearTimeout(timer)
    const data = await res.json()
    const latest = data.version
    if (latest && latest !== version) {
      console.log(`\n  Update available: ${version} → ${latest}`)
      console.log('  Run: npx headless-pm update\n')
    }
  } catch {
    // silently ignore network errors or timeout
  }
}

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
    await checkForUpdates()
    console.log('Installing Headless PM...\n')

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
        console.log('  ✓ pm-feedback-cluster')
      }
      if (!opts.toolsOnly) {
        await installSkills(null, detectedCLIs)
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
  .command('list')
  .description('List installed tools and skills')
  .action(async () => {
    const pmDir = join(homedir(), '.headless', 'pm')
    const skillsDir = join(homedir(), '.claude', 'skills')

    await checkForUpdates()
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
  .description('Update tools and skills to latest version')
  .action(async () => {
    const detectedCLIs = await detectCLIs()
    console.log('Updating Headless PM...\n')
    try {
      await installTools()
      await installSkills(null, detectedCLIs)
      await cleanupRemovedSkills(detectedCLIs)
      await installPrerequisiteSkills()
      await installStatusline(detectedCLIs)
      console.log('\nHeadless PM updated.')
      console.log('Restart Claude Code to apply skill changes.')
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
