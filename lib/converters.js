export function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, body: content }
  const meta = {}
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1 || line.startsWith(' ')) continue
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 1).trim()
    meta[key] = val
  }
  return { meta, body: match[2] }
}

export function convertForClaude(content) {
  return content
}

export function convertForGemini(content) {
  const { meta, body } = parseFrontmatter(content)
  const description = (meta.description || '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
  const prompt = body
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')
  return `description = "${description}"\nprompt = "${prompt}"`
}

export function convertForCodex(content) {
  const { meta, body } = parseFrontmatter(content)
  const name = meta.name || ''
  const description = meta.description || ''
  const shortDesc = description.length > 60 ? description.slice(0, 57) + '...' : description
  const adaptedBody = body.replace(/CLAUDE\.md/g, 'AGENTS.md')

  const escapeYaml = v => v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
  return `---\nname: "${escapeYaml(name)}"\ndescription: "${escapeYaml(description)}"\nmetadata:\n  short-description: "${escapeYaml(shortDesc)}"\n---\n${adaptedBody}`
}

export function convertForCodexAgent(content) {
  const { meta, body } = parseFrontmatter(content)
  const name = meta.name || ''
  const description = meta.description || ''
  const adaptedBody = body.replace(/CLAUDE\.md/g, 'AGENTS.md').replace(/'/g, "''")
  const escapedDesc = description.replace(/"/g, '\\"')
  return `name = "${name}"\ndescription = "${escapedDesc}"\ndeveloper_instructions = '''\n${adaptedBody}\n'''`
}
