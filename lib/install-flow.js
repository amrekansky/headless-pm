import {
  installTools,
  installSkills,
  promptMcpSetup,
  printToolSummary,
  printPathInstructions,
  installPrerequisiteSkills,
  installStatusline,
  printInstallNextSteps,
} from './installer.js'

const MCP_SUPPORTED_CLIS = new Set(['claude', 'gemini', 'codex'])

export async function runInstallFlow(opts, detectedCLIs) {
  console.log('Installing Headless PM...\n')
  const cliLine = ['claude', 'gemini', 'codex', 'opencode']
    .map(cli => `${cli} ${detectedCLIs.includes(cli) ? '✓' : '—'}`)
    .join('  ')
  console.log(`Detected CLIs: ${cliLine}\n`)

  if (!opts.skillsOnly) {
    console.log('Installing tools → ~/.headless/pm/')
    await installTools()
    console.log('  ✓ pm-interview-prep')
    console.log('  ✓ pm-sprint-brief')
    console.log('  ✓ pm-feedback-cluster')
  }
  if (!opts.toolsOnly) {
    await installSkills(null, detectedCLIs)
    if (detectedCLIs.includes('claude')) await installPrerequisiteSkills()
  }
  if (!opts.skillsOnly) {
    printToolSummary()
    printPathInstructions()
  }
  if (detectedCLIs.some(cli => MCP_SUPPORTED_CLIS.has(cli))) {
    await promptMcpSetup(detectedCLIs)
  }
  await installStatusline(detectedCLIs)
  printInstallNextSteps()
}
