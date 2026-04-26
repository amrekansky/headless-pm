#!/usr/bin/env node
import { Command } from 'commander'
import {
  installTools,
  installSkills,
  installMcpServers,
  printToolSummary,
  printPathInstructions,
  MCP_SERVERS,
} from '../lib/installer.js'
import { readConfig } from '../lib/config.js'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { homedir } from 'node:os'

const program = new Command()

program
  .name('headless-pm')
  .description('AI Chief of Staff for product managers')
  .version('0.1.0')

program
  .command('install')
  .description('Install tools and skills')
  .option('--tools-only', 'Install tools only, skip skills')
  .option('--skills-only', 'Install skills only, skip tools')
  .action(async (opts) => {
    console.log('Installing Headless PM...\n')
    const cfg = await readConfig()
    try {
      if (!opts.skillsOnly) {
        console.log('Installing tools → ~/.headless/pm/')
        await installTools()
        console.log('  ✓ pm-interview-prep')
        console.log('  ✓ pm-sprint-brief')
        console.log('  ✓ paid tools (stubs — license required)')
      }
      if (!opts.toolsOnly) {
        await installSkills(cfg.pmLicenseKey || null)
      }
      if (!opts.skillsOnly) {
        printToolSummary()
        printPathInstructions()
      }
      console.log('\nGet the full license at: https://headlessaimode.com')
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
  .command('mcp [servers...]')
  .description('Register PM MCP servers (Notion, Jira, Linear, Miro) with claude CLI')
  .option('--list', 'Show available MCP servers without installing')
  .action(async (servers, opts) => {
    if (opts.list) {
      console.log('Available PM MCP servers:')
      for (const s of MCP_SERVERS) {
        const keys = Object.keys(s.envVars).join(', ')
        console.log(`  ${s.name.padEnd(10)} — ${s.label} (needs: ${keys})`)
      }
      return
    }
    const names = servers.length ? servers : null
    await installMcpServers(names)
  })

if (process.argv.length === 2) program.help()
program.parse()
