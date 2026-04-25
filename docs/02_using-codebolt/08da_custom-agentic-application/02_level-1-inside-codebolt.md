---
sidebar_position: 2
title: Level 1 Inside Codebolt
---

import DynamicPanelArchitecture from '@site/src/components/diagrams/DynamicPanelArchitecture';

# Level 1: Application Runs Inside Codebolt

Level 1 is the embedded model.

Your application runs inside the Codebolt product, but it can still have its own UI, backend logic, workflows, and integrations.

## Core shape

Typical Level 1 architecture:

- A plugin runs as a child process
- The plugin connects through `@codebolt/plugin-sdk`
- The plugin opens a Dynamic Panel or serves a plugin UI bundle
- The UI talks to the plugin
- The plugin talks to Codebolt services such as agents, threads, files, tasks, hooks, memory, and integrations

This is the right model when the application should feel native to Codebolt.

<DynamicPanelArchitecture />

## How it works

1. Codebolt starts the plugin.
2. The plugin registers lifecycle handlers with `plugin.onStart(...)` and `plugin.onStop(...)`.
3. The plugin creates a UI surface:
   - a Dynamic Panel with a plugin-owned backend route layer, or
   - a plugin-hosted frontend bundle
4. The UI sends requests to the plugin.
5. The plugin uses SDK modules and APIs to perform work in Codebolt.
6. The plugin can emit updates back to the UI for live state changes.

## Two common variants

### Dynamic Panel application

Use this shape when:

- The UI should appear as a panel inside Codebolt
- The plugin should directly own the application backend
- The UI only needs to communicate with the plugin backend

In this model, the plugin commonly exposes routes with `plugin.dynamicPanel.router(panelId)` and the panel calls them through the plugin UI bridge.

### Plugin-hosted frontend bundle

Use this shape when:

- You want a full SPA, such as a React or Vite frontend, but still hosted inside Codebolt
- The UI is more complex than a simple panel page
- You may want to reuse the same app in standalone mode later

In this model, the plugin is still the runtime entry point, but the UI can be a complete frontend bundle.

## What the Plugin SDK provides

The Plugin SDK is the main foundation for Level 1.

It exposes:

- Plugin lifecycle with `onStart` and `onStop`
- Dynamic panel communication
- Modules for file, git, terminal, chat, browser, task, thread, project, calendar, hook, mail, event log, and more
- HTTP API clients for chat, threads, projects, jobs, environments, files, hooks, mail, and related services
- Realtime socket subscriptions
- Extension points like routing gateway, execution gateway, and LLM provider registration

## When to use Level 1

- You want the application to live inside the Codebolt desktop experience
- You want plugin-managed backend logic plus a custom workflow-specific UI
- You want to extend Codebolt without creating a fully separate product shell

## Tradeoffs

Advantages:

- Tightest integration with the existing Codebolt experience
- Natural fit for plugin-based workflows
- Easy access to plugin-specific extension points

Limits:

- The app is still hosted inside Codebolt
- Product routing, outer shell, and top-level application chrome are still constrained by the host environment

## Related docs

- [Plugins](../07z_plugins/01_overview.md)
- [Building Plugins](../07z_plugins/04_building-plugins.md)
- [Choosing the Right Architecture](./05_choosing-the-right-architecture.md)
