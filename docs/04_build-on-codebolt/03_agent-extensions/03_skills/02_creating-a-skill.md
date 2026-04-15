---
sidebar_position: 2
title: Creating A Skill
---

# Creating A Skill

The CLI surface is:

```bash
codebolt action skill create \
  --name refactor-to-pattern \
  --path ./.codebolt/skills \
  --description "Refactor a file to a named code pattern"
```

Then define a skill with:

- a unique name
- input schema
- output schema
- a handler

Example:

```yaml
name: refactor-to-pattern
description: Refactor a file so it follows a named code pattern
inputs:
  file: { type: string, required: true }
  pattern: { type: string, required: true }
outputs:
  diff: { type: string }
  summary: { type: string }
handler: ./refactor.ts
```

Design the schema first. Most bad skills fail because the name is vague or the input/output contract is weak.
