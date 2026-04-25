import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { homedir } from 'node:os'

const configPath = () => join(homedir(), '.headless', 'config.json')

export async function readConfig() {
  try {
    const raw = await readFile(configPath(), 'utf8')
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export async function writeConfig(updates) {
  const existing = await readConfig()
  const merged = { ...existing, ...updates }
  await mkdir(join(homedir(), '.headless'), { recursive: true })
  await writeFile(configPath(), JSON.stringify(merged, null, 2))
  return merged
}
