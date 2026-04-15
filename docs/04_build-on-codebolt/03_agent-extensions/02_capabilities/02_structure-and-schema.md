---
sidebar_position: 2
title: Structure And Schema
---

# Structure And Schema

A capability is a directory rooted at the package boundary:

```text
my-capability/
  capability.yaml
  prompts/
  skills/
  tools/
  hooks/
  README.md
```

Typical `capability.yaml`:

```yaml
name: frontend-refactor
version: 0.4.1
description: Refactor React components to the team's conventions
default_activation: on-demand
requires:
  tools: ["codebolt_fs.*", "codebolt_codebase.*"]
skills:
  - extract-component
  - inline-hook
prompts:
  append_to_system: "prompts/conventions.md"
```

Guidelines:

- Put only bundle-level metadata in `capability.yaml`.
- Keep referenced skills and tools close to the bundle.
- Declare runtime requirements explicitly.
- Avoid using a capability as a dumping ground for unrelated extensions.

## See also

- [Activation](./03_activation.md)
- [Bundling skills and tools](./04_bundling-skills-and-tools.md)
