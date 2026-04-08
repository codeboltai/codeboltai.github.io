#!/usr/bin/env node
/**
 * Fix Script: Add name heading to migrated files
 *
 * This script adds the name heading to files that were migrated but
 * are missing the name at the top.
 */

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const apiAccessPath = path.resolve(__dirname, '../../docs/5_api/ApiAccess');

function findMarkdownFiles(basePath) {
  const files = [];
  function scanDir(dirPath, relativePath = '') {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relPath = path.join(relativePath, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath, relPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push({ fullPath, relativePath: relPath });
      }
    }
  }
  scanDir(basePath);
  return files;
}

function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.startsWith('---')) {
    return { frontmatter: null, body: content, raw: content };
  }
  const endIndex = content.indexOf('---', 3);
  if (endIndex === -1) {
    return { frontmatter: null, body: content, raw: content };
  }
  const frontmatterStr = content.substring(3, endIndex).trim();
  const body = content.substring(endIndex + 3).trim();
  try {
    const frontmatter = yaml.load(frontmatterStr);
    return { frontmatter, body, frontmatterStr };
  } catch (e) {
    return { frontmatter: null, body: content, raw: content };
  }
}

console.log('=== Fix: Add Name Heading ===\n');

const files = findMarkdownFiles(apiAccessPath);
let fixed = 0;
let skipped = 0;

for (const file of files) {
  const { frontmatter, body, frontmatterStr } = parseMarkdownFile(file.fullPath);

  if (!frontmatter || !frontmatter.name) {
    skipped++;
    continue;
  }

  // Check if body starts with code block (missing name heading)
  const trimmedBody = body.trim();
  if (trimmedBody.startsWith('```typescript') || trimmedBody.startsWith('```ts')) {
    const name = frontmatter.name;
    const newBody = '# ' + name + '\n\n' + body;
    const newContent = '---\n' + frontmatterStr + '\n---\n' + newBody;
    fs.writeFileSync(file.fullPath, newContent, 'utf8');
    console.log('Fixed:', file.relativePath);
    fixed++;
  } else {
    skipped++;
  }
}

console.log('\n=== Summary ===');
console.log('Fixed:', fixed);
console.log('Skipped:', skipped);
