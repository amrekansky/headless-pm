#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const skillsDir = join(__dirname, '..', 'skills')

const UNIVERSAL_RULES = `\n## Universal Rules
- Respond in the same language the user writes in
- Before asking questions, identify what is already provided in context. Only ask for genuinely missing data.
- When asking a question, always offer 3-4 ready-made options with a smart default; last option: "Enter your own"
- Read all files listed in ## Knowledge Base before generating any output

`

function injectRules(filePath) {
  const content = readFileSync(filePath, 'utf8')

  if (content.includes('## Universal Rules')) {
    console.log(`SKIP    ${filePath}`)
    return 'skipped'
  }

  const lines = content.split('\n')

  // Find end of frontmatter (second ---)
  let frontmatterEndIdx = -1
  let dashCount = 0
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      dashCount++
      if (dashCount === 2) { frontmatterEndIdx = i; break }
    }
  }

  if (frontmatterEndIdx === -1) {
    console.log(`ERROR   ${filePath}: no frontmatter found`)
    return 'error'
  }

  // Find first line starting with '# ' (h1 title) after frontmatter
  let insertBeforeIdx = -1
  for (let i = frontmatterEndIdx + 1; i < lines.length; i++) {
    if (lines[i].startsWith('# ')) { insertBeforeIdx = i; break }
  }

  if (insertBeforeIdx === -1) {
    console.log(`ERROR   ${filePath}: no h1 heading found after frontmatter`)
    return 'error'
  }

  const rulesLines = UNIVERSAL_RULES.split('\n')
  lines.splice(insertBeforeIdx, 0, ...rulesLines)
  writeFileSync(filePath, lines.join('\n'))
  console.log(`UPDATED ${filePath}`)
  return 'updated'
}

const skills = readdirSync(skillsDir)
let updated = 0, skipped = 0, errors = 0

for (const skill of skills) {
  const skillPath = join(skillsDir, skill, 'skill.md')
  if (!existsSync(skillPath)) {
    console.log(`SKIP    ${skill}/ — no skill.md`)
    continue
  }
  const result = injectRules(skillPath)
  if (result === 'updated') updated++
  else if (result === 'skipped') skipped++
  else errors++
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped, ${errors} errors`)
