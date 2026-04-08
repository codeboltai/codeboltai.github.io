"""
Post-process the auto-generated reference markdown to clean up links that
Docusaurus can't resolve.

Four classes of broken links, all in typedoc-generated content:

1. Source-file links like `](packages/codeboltjs/src/tools/base-tool.ts#L69)`
   and `](common/types/src/.../foo.ts#L12)` — typedoc emits these as relative
   paths pointing at the monorepo source. Docusaurus tries to resolve them
   locally and fails. Fix: strip the link, keep the text.

2. Absolute paths like `](/docs/api/11_doc-type-ref/...)` and
   `](/docs/api/apiaccess/...)` — typedoc used old URL prefix. Fix: rewrite
   to current paths under `/docs/reference/type-reference/` and
   `/docs/reference/api-access/`.

3. Bare `](../index)` and `](../../index)` — typedoc's parent index links
   without `.md` extension. Fix: rewrite to `./index.md` / `../index.md`.

4. Inter-file refs like `BaseDeclarativeTool.md#xxx` that are fine — leave
   them alone.

Run from the repo root; walks docs/05_reference/ only.
"""

import os, re

BASE = 'docs/05_reference'

# Regex patterns — applied to every line of every .md in BASE.
PATTERNS = [
    # 1. Source file links: [text](packages/.../file.ts#L\d+) -> text
    #    Also common/types/... variants. Keep the link text, drop the href.
    (re.compile(r'\[([^\]]+)\]\((?:packages|common|apps)/[^)]*\.ts(?:#L\d+)?\)'),
     r'\1'),

    # 2. Typedoc "Defined in:" lines — strip any source link wrappers that
    #    survived pattern 1 (most are handled). Also handles .tsx etc.
    (re.compile(r'\[([^\]]+)\]\((?:packages|common|apps)/[^)]*\.(?:ts|tsx|js|jsx)(?:#L\d+)?\)'),
     r'\1'),

    # 3. Old absolute URL prefixes from typedoc cross-references.
    (re.compile(r'\]\(/docs/api/11_doc-type-ref/'),
     r'](/docs/reference/type-reference/'),
    (re.compile(r'\]\(/docs/api/apiaccess/'),
     r'](/docs/reference/api-access/'),
    (re.compile(r'\]\(/docs/api/mcpaccess/'),
     r'](/docs/reference/mcp-access/'),
    (re.compile(r'\]\(/docs/api/utility-functions/'),
     r'](/docs/reference/utility-functions/'),
    # And without /docs/ prefix (relative absolute from doc root)
    (re.compile(r'\]\(api/11_doc-type-ref/'),
     r'](/docs/reference/type-reference/'),
    (re.compile(r'\]\(api/apiaccess/'),
     r'](/docs/reference/api-access/'),

    # 4. Bare parent index links without extension.
    (re.compile(r'\]\(\.\./\.\./index\)'),
     r'](../index.md)'),
    (re.compile(r'\]\(\.\./index\)'),
     r'](./index.md)'),
]

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        t = f.read()
    o = t
    for rx, repl in PATTERNS:
        t = rx.sub(repl, t)
    if t != o:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(t)
        return True
    return False

fixed = 0
total = 0
for root, _, files in os.walk(BASE):
    for fn in files:
        if not fn.endswith('.md'):
            continue
        total += 1
        if fix_file(os.path.join(root, fn)):
            fixed += 1

print(f'scanned {total} files, fixed {fixed}')
