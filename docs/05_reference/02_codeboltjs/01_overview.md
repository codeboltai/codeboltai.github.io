---
sidebar_position: 1
title: codeboltjs
---

# codeboltjs Reference

The `codeboltjs` SDK is what agent authors use to write agents. It provides the agent loop framework, all `ctx.*` API methods, tool utilities, MCP bridging, and the type system.

## What's in this section

| Section | What it covers |
|---|---|
| [Direct API Access](./10_api-access/1-index.md) | Every `ctx.*` method — `fs`, `git`, `browser`, `memory`, `llm`, and 60+ more |
| [MCP Access](./11_mcp-access/1-index.md) | The same APIs exposed as MCP tools for non-codeboltjs agents |
| [Type Reference](./09_type-reference/index.md) | Full TypeScript types — agent framework, codeboltjs classes, providers |
| [Utility Functions](./12_utility-functions-v2/index.md) | `promptBuilder`, `llmOutputHandler`, `followupQuestionBuilder` |

## See also

- [Creating Agents](../../04_build-on-codebolt/02_creating-agents/01_overview.md) — how to use this SDK to build agents
- [Plugin SDK](../03_plugin-sdk/01_overview.md) — if you're building plugins, not agents
- [Client SDK](../04_client-sdk/01_overview.md) — if you're building custom UIs or integrations
