const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SITE_URL = 'https://docs.codebolt.ai';
const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const STATIC_DIR = path.join(ROOT, 'static');
const LLMS_DIR = path.join(STATIC_DIR, 'llms');

const SECTION_CONFIG = [
  { prefix: '1_index.md', heading: 'Start Here', order: 0 },
  { prefix: '02_using-codebolt/', heading: 'Using Codebolt', order: 1 },
  { prefix: '02_concepts/', heading: 'Concepts', order: 2 },
  { prefix: '03_guides/', heading: 'Guides', order: 3 },
  { prefix: '04_build-on-codebolt/', heading: 'Build on Codebolt', order: 4 },
];

const EXCLUDE_SUBSTRINGS = [
  '05_reference/',
  'type-reference/',
  'api-reference/',
  'event-reference/',
  'api-access/',
  'mcp-access/',
  'utility-functions/',
  'pseudo_cli/',
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function walk(dirPath) {
  return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      return walk(fullPath);
    }
    return [fullPath];
  });
}

function shouldInclude(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/');
  if (!/\.(md|mdx)$/i.test(normalized)) return false;
  if (normalized.endsWith('.bak')) return false;
  if (normalized.startsWith('Excalidraw/')) return false;
  if (normalized === 'Issue.md' || normalized === 'sortspec.md') return false;
  for (const sub of EXCLUDE_SUBSTRINGS) {
    if (normalized.includes(sub)) return false;
  }
  return true;
}

function isCuratedForIndex(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/');
  const basename = path.basename(normalized, path.extname(normalized));
  const slugName = basename.replace(/^\d+[a-z]?_/, '');

  if (normalized === '1_index.md') return true;
  if (slugName === 'overview') return true;
  if (/^quickstart/i.test(slugName)) return true;

  const curated = [
    'what-is-codebolt',
    'what-is-an-agent',
    'architecture',
    'architecture-for-builders',
    'architecture-overview',
    'installation',
  ];
  if (curated.includes(slugName)) return true;

  return false;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { frontmatter: {}, body: raw };
  }

  let frontmatter = {};
  try {
    frontmatter = yaml.load(match[1]) || {};
  } catch (error) {
    frontmatter = {};
  }

  return {
    frontmatter,
    body: raw.slice(match[0].length),
  };
}

function prettySegment(value) {
  return value
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+[a-z]?_/, '')
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function slugSegment(value) {
  return value
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+[a-z]?_/, '')
    .replace(/_/g, '-')
    .toLowerCase();
}

function stripMdxNoise(body) {
  let cleaned = body.replace(/\r\n/g, '\n');
  cleaned = cleaned.replace(/^\s*import\s.+$/gm, '');
  cleaned = cleaned.replace(/^\s*export\s.+$/gm, '');
  cleaned = cleaned.replace(/<DocCardGrid[\s\S]*?\]}\s*\/>/g, '');
  cleaned = cleaned.replace(/<Tabs[\s\S]*?<\/Tabs>/g, '');
  cleaned = cleaned.replace(/<TabItem[\s\S]*?<\/TabItem>/g, '');
  cleaned = cleaned.replace(/<details[\s\S]*?<\/details>/g, '');
  cleaned = cleaned.replace(/<p[^>]*>(.*?)<\/p>/g, '$1');
  cleaned = cleaned.replace(/^\s*<[^>\n]+>\s*$/gm, '');
  cleaned = cleaned.replace(/^\s*<\/[^>\n]+>\s*$/gm, '');
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  return cleaned.trim();
}

function extractTitle(frontmatter, body, relativePath) {
  if (typeof frontmatter.title === 'string' && frontmatter.title.trim()) {
    return frontmatter.title.trim();
  }

  const heading = body.match(/^#\s+(.+)$/m);
  if (heading) {
    return heading[1].trim();
  }

  return prettySegment(path.basename(relativePath));
}

function extractDescription(frontmatter, cleanedBody) {
  if (typeof frontmatter.description === 'string' && frontmatter.description.trim()) {
    return frontmatter.description.trim().replace(/\s+/g, ' ');
  }

  const blockquote = cleanedBody.match(/^>\s+(.+)$/m);
  if (blockquote) {
    return blockquote[1].trim().replace(/\s+/g, ' ');
  }

  const paragraphs = cleanedBody
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .filter((paragraph) => !paragraph.startsWith('#'))
    .filter((paragraph) => !paragraph.startsWith('import '))
    .filter((paragraph) => !paragraph.startsWith('export '))
    .filter((paragraph) => !paragraph.startsWith('```'))
    .filter((paragraph) => !paragraph.startsWith('<'));

  return paragraphs[0] || '';
}

function toLlmsPath(relativePath) {
  const parsed = path.parse(relativePath);
  const dirParts = parsed.dir
    .split(path.sep)
    .filter(Boolean)
    .map(slugSegment);
  const fileName = `${slugSegment(parsed.base)}.md`;
  return path.posix.join('llms', ...dirParts, fileName);
}

function removeDuplicateTopHeading(title, body) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return body.replace(new RegExp(`^#\\s+${escaped}\\s*\\n+`, 'i'), '').trim();
}

function buildMarkdownDoc(doc) {
  const pieces = [`# ${doc.title}`];
  if (doc.description) {
    pieces.push(`> ${doc.description}`);
  }
  if (doc.body) {
    pieces.push(doc.body);
  }
  return `${pieces.join('\n\n').trim()}\n`;
}

function sectionFor(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/');
  for (const section of SECTION_CONFIG) {
    if (normalized === section.prefix || normalized.startsWith(section.prefix)) {
      return section;
    }
  }
  return { heading: 'Optional', order: 99 };
}

function main() {
  const sourceFiles = walk(DOCS_DIR)
    .map((fullPath) => ({
      fullPath,
      relativePath: path.relative(DOCS_DIR, fullPath),
    }))
    .filter(({ relativePath }) => shouldInclude(relativePath))
    .sort((a, b) => a.relativePath.localeCompare(b.relativePath));

  fs.rmSync(LLMS_DIR, { recursive: true, force: true });
  ensureDir(LLMS_DIR);

  const docs = sourceFiles.map(({ fullPath, relativePath }) => {
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { frontmatter, body } = parseFrontmatter(raw);
    const cleanedBody = stripMdxNoise(body);
    const title = extractTitle(frontmatter, cleanedBody, relativePath);
    const description = extractDescription(frontmatter, cleanedBody);
    const bodyWithoutTitle = removeDuplicateTopHeading(title, cleanedBody);
    const llmsPath = toLlmsPath(relativePath);
    const markdown = buildMarkdownDoc({
      title,
      description,
      body: bodyWithoutTitle,
    });

    const absoluteOutput = path.join(STATIC_DIR, llmsPath);
    ensureDir(path.dirname(absoluteOutput));
    fs.writeFileSync(absoluteOutput, markdown, 'utf8');

    return {
      relativePath: relativePath.replace(/\\/g, '/'),
      section: sectionFor(relativePath),
      title,
      description,
      llmsPath: llmsPath.replace(/\\/g, '/'),
      url: `${SITE_URL}/${llmsPath.replace(/\\/g, '/')}`,
      markdown,
      curated: isCuratedForIndex(relativePath),
    };
  });

  const curatedDocs = docs.filter((doc) => doc.curated);

  const grouped = curatedDocs.reduce((map, doc) => {
    const key = doc.section.heading;
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(doc);
    return map;
  }, new Map());

  const orderedSections = [...grouped.entries()].sort((a, b) => {
    const sectionA = curatedDocs.find((doc) => doc.section.heading === a[0])?.section.order ?? 99;
    const sectionB = curatedDocs.find((doc) => doc.section.heading === b[0])?.section.order ?? 99;
    return sectionA - sectionB;
  });

  const llmsLines = [
    '# CodeBolt Documentation',
    '',
    '> Product documentation for CodeBolt, an AI-native coding environment with multi-agent orchestration, MCP tooling, and extensible agent architecture.',
    '',
    'This file provides a curated index of the most important documentation. Each link points to a clean markdown mirror suitable for LLM retrieval. For exhaustive API/type details see the Reference section overviews.',
    '',
  ];

  for (const [heading, sectionDocs] of orderedSections) {
    llmsLines.push(`## ${heading}`, '');
    for (const doc of sectionDocs) {
      const description = doc.description ? `: ${doc.description}` : '';
      llmsLines.push(`- [${doc.title}](${doc.url})${description}`);
    }
    llmsLines.push('');
  }

  const llmsTxt = `${llmsLines.join('\n').trim()}\n`;
  fs.writeFileSync(path.join(STATIC_DIR, 'llms.txt'), llmsTxt, 'utf8');

  const llmsFullLines = [
    '# CodeBolt Documentation',
    '',
    '> Product documentation for CodeBolt, an AI-native coding environment with multi-agent orchestration, MCP tooling, and extensible agent architecture.',
    '',
    'This file contains the full content of all curated documentation pages. For a link-only index see [llms.txt](./llms.txt).',
    '',
    '---',
    '',
  ];

  for (const [heading, sectionDocs] of orderedSections) {
    llmsFullLines.push(`## ${heading}`, '');
    for (const doc of sectionDocs) {
      llmsFullLines.push(doc.markdown.trim(), '');
      llmsFullLines.push('---', '');
    }
  }

  const llmsFullTxt = `${llmsFullLines.join('\n').trim()}\n`;
  fs.writeFileSync(path.join(STATIC_DIR, 'llms-full.txt'), llmsFullTxt, 'utf8');

  console.log(
    `Generated llms.txt (${curatedDocs.length} curated entries), llms-full.txt, and ${docs.length} markdown mirrors in static/llms/.`,
  );
}

main();
