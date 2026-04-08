"""
Fix the typedoc breadcrumb links. Every interface/class/enum/type-alias/variable
file under `09_type-reference/<package>/<category>/` has a first-line breadcrumb
`[**@codebolt/types**](./index.md)` that points at the CURRENT directory's
index.md — which doesn't exist. The actual package index is one level up at
`../index.md` (under the package root, e.g. `types/index.md`).

This script rewrites those relative links in the affected subfolders.
"""

import os

BASE = 'docs/05_reference/09_type-reference'
# Subfolders where typedoc puts per-symbol files whose breadcrumbs need a
# `../index.md` pointer to reach the package root.
CATEGORY_FOLDERS = {'interfaces', 'classes', 'enumerations', 'type-aliases', 'variables', 'functions'}

fixed = 0
for root, _, files in os.walk(BASE):
    parts = root.replace('\\', '/').split('/')
    # Only act inside a category folder (e.g., .../types/interfaces).
    if not parts or parts[-1] not in CATEGORY_FOLDERS:
        continue
    for fn in files:
        if not fn.endswith('.md'):
            continue
        p = os.path.join(root, fn)
        with open(p, 'r', encoding='utf-8') as f:
            t = f.read()
        o = t
        t = t.replace('](./index.md)', '](../index.md)')
        t = t.replace('](./index)',    '](../index.md)')
        if t != o:
            with open(p, 'w', encoding='utf-8') as f:
                f.write(t)
            fixed += 1

print(f'fixed {fixed} files')
