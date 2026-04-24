---
sidebar_position: 1
title: Agent Extensions Overview
---

# Agent Extensions

Agent Extensions are modular units of functionality that augment what agents can do. Rather than building every capability into the agent itself, Codebolt lets you compose agent behaviour from discrete, reusable pieces.

## Extension types

| Type | What it is | Where it lives |
|---|---|---|
| [Capabilities](./02_capabilities.md) | Reusable bundles of agent behaviour with typed inputs/outputs | `.codebolt/capabilities/` |
| [Skills](./03_skills.md) | Slash-command invocable capabilities from the marketplace | `~/.codebolt/skills.json` |
| [Action Blocks](./04_action-blocks.md) | Lightweight code units that run as side executions parallel to an agent | `.codebolt/actionblocks/` |
| [Executors](./05_executors.md) | Runtime environments that run capabilities (Node, Python, shell, etc.) | `.codebolt/capabilities/executors/` |
| [Installing MCP Servers](./06_installing-mcp-servers.md) | Add MCP-compliant tool servers from the marketplace or manually | `.codebolt/mcp-servers.yaml` |
| [Managing MCP Servers](./07_managing-mcp-servers.md) | Start, stop, update, and monitor installed MCP servers | `.codebolt/mcp-servers.yaml` |

## How they relate

```
System event (file saved, git commit, agent completes)
        │
        ▼
     Hook  ──────────────────────────────────────────┐
        │ triggers                                    │
        ▼                                             ▼
     Agent  ──── invokes ────▶  Capability / Skill   Action Block
                                      │
                                      ▼
                                  Executor
                             (runs the capability)
```

Agents invoke capabilities and skills during their reasoning loop. Action blocks run in parallel as side executions. Executors provide the language runtime that capabilities need. For event-driven triggers that *start* agents automatically, see [Automation](../08d_auto-interactivity/01_overview.md).

## Where to find them

All extension panels are available from the **Agents** dropdown in the bottom bar:
- **Capabilities** → Agents → Capabilities
- **Action Blocks** → Agents → Action Blocks
