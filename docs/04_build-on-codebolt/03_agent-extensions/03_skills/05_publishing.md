---
sidebar_position: 5
title: Publishing
---

# Publishing

Publish from the skill root:

```bash
codebolt action skill publish --path ./.codebolt/skills/refactor-to-pattern
codebolt action skill list
```

Publish standalone if the skill is useful on its own. If it only makes sense together with prompts, tools, and conventions, ship it inside a [capability](../02_capabilities/01_overview.md).

## Common mistakes

- a skill that is really just one tool call
- a skill so broad it becomes a second system prompt
- unstructured outputs where downstream callers need fields
