const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const MAX_DESC = 160;

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e => {
    const fp = path.join(d, e.name);
    return e.isDirectory() ? walk(fp) : [fp];
  });
}

function cleanMarkdown(s) {
  return s
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/:::\w*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(s) {
  if (s.length <= MAX_DESC) return s;
  let cut = s.lastIndexOf('.', MAX_DESC);
  if (cut < 40) cut = s.lastIndexOf(' ', MAX_DESC);
  if (cut < 40) cut = MAX_DESC;
  return s.slice(0, cut).trim() + (s[cut] === '.' ? '' : '.');
}

function extractDescription(body) {
  const lines = body.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('#')) continue;
    if (trimmed.startsWith('import ')) continue;
    if (trimmed.startsWith('export ')) continue;
    if (trimmed.startsWith('```')) continue;
    if (trimmed.startsWith(':::')) continue;
    if (trimmed.startsWith('---')) continue;
    if (/^!\[.*\]\(.*\)$/.test(trimmed)) continue;

    const cleaned = cleanMarkdown(trimmed);
    if (cleaned.length < 15) continue;

    return truncate(cleaned);
  }

  return '';
}

function main() {
  const files = walk(DOCS_DIR)
    .filter(f => /\.(md|mdx)$/i.test(f) && !f.endsWith('.bak'))
    .filter(f => !f.includes(path.join('05_reference')))
    .filter(f => !f.includes(path.join('Excalidraw')))
    .filter(f => {
      const base = path.basename(f);
      return base !== 'Issue.md' && base !== 'sortspec.md';
    });

  let updated = 0;
  let skipped = 0;
  let empty = 0;

  for (const fp of files) {
    const raw = fs.readFileSync(fp, 'utf8');
    const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

    let fm = {};
    let body = raw;
    if (fmMatch) {
      try {
        fm = yaml.load(fmMatch[1]) || {};
      } catch (e) {
        skipped++;
        continue;
      }
      body = raw.slice(fmMatch[0].length);
    }

    if (fm.description) {
      skipped++;
      continue;
    }

    const desc = extractDescription(body);
    if (!desc) {
      empty++;
      continue;
    }

    fm.description = desc;

    const fmStr = '---\n' + yaml.dump(fm, { lineWidth: -1, quotingType: '"' }).trim() + '\n---\n';
    const newContent = fmMatch ? fmStr + body : fmStr + '\n' + raw;

    fs.writeFileSync(fp, newContent, 'utf8');
    updated++;
  }

  console.log(`Added description to ${updated} files, skipped ${skipped}, no extractable content ${empty}.`);
}

main();
