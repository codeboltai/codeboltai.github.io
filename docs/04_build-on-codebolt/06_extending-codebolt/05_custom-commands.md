---
sidebar_position: 7
title: Custom Commands
description: Custom commands (slash commands, toolbar actions, and keyboard shortcuts) are a planned feature
---

# Custom Commands

:::info Coming Soon
Custom commands (slash commands, toolbar actions, and keyboard shortcuts) are a planned feature. The command registration API is not yet available in the Plugin SDK.

This page will be updated when the feature ships.
:::

## Planned Capabilities

- Register custom slash commands in the chat input (e.g., `/deploy`, `/review`).
- Add toolbar actions with icons.
- Bind keyboard shortcuts to plugin actions.
- Open plugin UI panels from commands.

## In the Meantime

You can achieve similar functionality today using:

- **[UI Extensions](./03_ui-extensions.md)** — render interactive panels inside the app with buttons and controls.
- **[Dynamic Panels](../04_custom-uis/05_dynamic-panels.md)** — agent-driven panels for human-in-the-loop workflows.
- **[Custom LLM Providers](./02_custom-llm-providers.md)** — register custom models and handle inference.
