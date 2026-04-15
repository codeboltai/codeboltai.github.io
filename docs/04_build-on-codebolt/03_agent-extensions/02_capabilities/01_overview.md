---
sidebar_position: 1
title: Capabilities
---

# Capabilities

A **capability** is a versioned bundle of agent behaviour: prompts, skills, MCP tools, config, and optional hooks grouped into one installable unit.

Use capabilities when the thing you want to ship is larger than one skill or one tool. A capability is the package boundary for agent-side behaviour.

## In This Section

- [Structure and schema](./02_structure-and-schema.md)
- [Activation](./03_activation.md)
- [Bundling skills and tools](./04_bundling-skills-and-tools.md)
- [Publishing](./05_publishing.md)

## When capabilities are the right shape

- You want one installable package that brings prompts, skills, and tools together.
- You want to extend agents you did not author.
- You want to publish a reusable team package to a registry.
- You want versioning at the bundle level, not per individual skill.

## Consuming inside an agent

```ts
async run(ctx, input) {
  await ctx.capabilities.activate("frontend-refactor");
  return ctx.skills.call("extract-component", { file: input.file });
}
```

## See also

- [Skills](../03_skills/01_overview.md)
- [MCP Tools](../04_mcp-tools/01_overview.md)
- [Plugins](../../05_plugins/01_hooks-overview.md)
- [Agent Extensions Overview](../01_overview.md)
