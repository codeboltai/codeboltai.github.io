---
sidebar_position: 2
title: Block Schema
---

# Block Schema

Typical block shape:

```yaml
name: deploy-to-staging
description: Build, test, and deploy the current branch to staging
inputs:
  branch: { type: string, required: true }
  skip_tests: { type: boolean, default: false }
outputs:
  url: { type: string }
  commit: { type: string }
steps:
  - id: checkout
    tool: codebolt_git.checkout
    args:
      ref: ${inputs.branch}
```

Each step declares:

- an `id`
- a tool or action to run
- arguments
- optional `when:` conditions
- optional output mapping

Keep the schema deterministic. If the next step depends on open-ended reasoning, the block is the wrong abstraction.
