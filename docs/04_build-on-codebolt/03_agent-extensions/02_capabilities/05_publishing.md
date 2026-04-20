---
sidebar_position: 5
title: Publishing
---

# Publishing

The CLI surface for capabilities is:

```bash
codebolt action capability create --name frontend-refactor --path ./.codebolt/extensions
codebolt action capability publish --path ./.codebolt/extensions/frontend-refactor
codebolt action capability list
```

There is no dedicated `test` command in the CLI files here, so the normal workflow is project-driven:

1. Create the capability.
2. Load it in a local project.
3. Activate it from a test agent.
4. Inspect traces and runtime behavior.
5. Publish once the package boundary is stable.

## Common mistakes

- publishing one skill wrapped in unnecessary bundle structure
- hiding hard environment requirements
- bundling unrelated prompts, tools, and skills together

## See also

- [Plugins Overview](../../05_plugins/01_overview.md)
