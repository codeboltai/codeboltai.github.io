---
sidebar_position: 1
title: Plugin SDK
---

# Plugin SDK Reference

The `@codebolt/plugin-sdk` package is what plugin authors use to extend the Codebolt application — hooks, UI panels, custom commands, LLM providers, execution backends, and more.

## What's in this section

| Section | What it covers |
|---|---|
| [Plugin Lifecycle](./02_lifecycle.md) | `definePlugin`, `activate`, `deactivate`, context object |
| [Hooks API](./03_hooks.md) | `ctx.hooks.on()` — every hook event and its payload |
| [UI Extension API](./04_ui.md) | `ctx.ui.panels`, `ctx.ui.commands`, `ctx.ui.statusBar` |
| [Provider Interfaces](./05_providers.md) | `LLMProvider`, `EmbeddingProvider`, `ExecutionProvider` |
| [HTTP & Webhooks](./06_http.md) | `ctx.http.route()`, `ctx.webhooks.register()` |
| [Type Reference](./07_types.md) | Full TypeScript types for the plugin SDK |

## See also

- [Plugin System](../../04_build-on-codebolt/05_plugins/01_overview.md) — authoring guide
- [Extending Codebolt](../../04_build-on-codebolt/06_extending-codebolt/01_overview.md) — patterns using this SDK
- [codeboltjs Reference](../02_codeboltjs/01_overview.md) — agent SDK
