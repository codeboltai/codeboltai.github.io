---
sidebar_position: 3
title: Authoring
---

# Authoring

CLI surface:

```bash
codebolt action actionblock create \
  --name deploy-to-staging \
  --path ./.codebolt/action-blocks \
  --description "Build, test, and deploy the current branch to staging"
```

There are no dedicated `validate` or `run` subcommands in the CLI files here, so the practical loop is:

1. create the block
2. define `block.yaml`
3. load it in a local project
4. invoke it via `ctx.blocks.run(...)`
5. inspect step outputs and trace

Validate:

- input substitution
- `when:` branches
- failure handling
- idempotency for retry-prone steps
