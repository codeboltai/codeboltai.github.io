---
sidebar_position: 5
title: IDE Integration
---

# IDE Integration

:::info Coming Soon
IDE integration (VS Code, JetBrains, Neovim extensions) is a planned feature. There is no IDE extension available yet.

This page will be updated when the feature ships.
:::

## Planned Capabilities

- Run Codebolt agents from within your editor.
- Show agent output inline (diffs, suggestions, explanations).
- Stream real-time agent activity into an editor panel.

## In the Meantime

Codebolt runs as a standalone application — desktop app, web interface, or CLI. You can interact with the server programmatically using the [Client SDK](../04_custom-uis/02_client-sdk.md) from any Node.js environment.

- [Custom UI](../04_custom-uis/06_custom-ui.md) — build standalone UIs with the Client SDK
- [CI/CD Integration](./03_cicd-integration.md) — trigger agents from scripts and pipelines
- [API Gateway](./06_api-gateway.md) — expose agents over HTTP
