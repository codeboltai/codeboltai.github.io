---
sidebar_position: 1
title: Overview
---

# codeboltjs Reference

The `codeboltjs` SDK is what agent authors use to write agents. It provides all `ctx.*` API methods, tool utilities, MCP bridging, and the type system. The entire Codebolt editor is controllable through it — filesystem, git, browser, terminal, LLM, memory, and 60+ more modules.

## Two access patterns

Every capability is available in two forms depending on who is consuming it:

| Pattern | How | Use when |
|---|---|---|
| **Direct API** | `import codebolt from '@codebolt/codeboltjs'` | You're writing a codeboltjs agent in TypeScript |
| **MCP** | Tool calls over Model Context Protocol | Your agent is model-native and not using codeboltjs directly |

## What's in this section

| Section | What it covers |
|---|---|
| [Direct API Access](./10_api-access/1-index.md) | Every `ctx.*` method — `fs`, `git`, `browser`, `memory`, `llm`, and 60+ more |
| [MCP Access](./11_mcp-access/1-index.md) | The same APIs exposed as MCP tools for non-codeboltjs agents |
| [Pseudo CLI](./pseudo_cli/index.md) | Command-shaped SDK access for intercepted `execute_command` calls |
| [Type Reference](./09_type-reference/index.md) | Full TypeScript types — codeboltjs classes, providers, shared types |
| [Utility Functions](./12_utility-functions/index.md) | `promptBuilder`, `llmOutputHandler`, `followupQuestionBuilder` |

## See also

- [Creating Agents](../../04_build-on-codebolt/02_creating-agents/01_overview.md) — how to use this SDK to build agents
- [Plugin SDK](../03_plugin-sdk/01_overview.md) — if you're building plugins, not agents
- [Client SDK](../04_client-sdk/01_overview.md) — if you're building custom UIs or integrations
