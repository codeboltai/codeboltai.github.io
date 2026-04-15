---
sidebar_position: 3
title: Activation
---

# Activation

Three common activation scopes:

1. **Per-run**: `ctx.capabilities.activate("frontend-refactor")`
2. **Per-agent**: declare it in the agent manifest
3. **Per-project**: declare it in project config so every agent inherits it

The server resolves activation, injects prompt contributions, registers skills and tools, and tears the bundle down on run end.

Capabilities should be idempotent. Activating the same capability twice in one run should not duplicate its effects.

## Validation checklist

- prompt contributions appear exactly once
- referenced skills resolve
- referenced MCP tools are available
- opt-out and deny behavior work as expected

## See also

- [Creating Agents testing and debugging](../../02_creating-agents/09_testing-and-debugging.md)
- [Bundling skills and tools](./04_bundling-skills-and-tools.md)
