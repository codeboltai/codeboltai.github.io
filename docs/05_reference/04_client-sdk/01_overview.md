---
sidebar_position: 1
title: Client SDK
---

# Client SDK Reference

The `@codebolt/clientsdk` package is what UI and integration authors use to connect external surfaces to the Codebolt server — chat panels, IDE extensions, bots, CI runners, and API gateways.

## What's in this section

| Section | What it covers |
|---|---|
| [Connection](./02_connection.md) | `CodeboltClient` — connecting, auth, reconnection |
| [Agents API](./03_agents.md) | `client.agents.start()`, `run.events()`, `run.wait()`, `run.stop()` |
| [Sessions](./04_sessions.md) | Session management, memory continuity across runs |
| [Streaming](./05_streaming.md) | Event stream shape, filtering, backpressure |
| [Type Reference](./06_types.md) | Full TypeScript types for the client SDK |

## See also

- [Custom UIs](../../04_build-on-codebolt/04_custom-uis/01_overview.md) — authoring guide for custom interfaces
- [Building Integrations](../../04_build-on-codebolt/10_building-integrations/01_overview.md) — chat bots, IDE extensions, CI/CD patterns
- [codeboltjs Reference](../02_codeboltjs/01_overview.md) — agent SDK
