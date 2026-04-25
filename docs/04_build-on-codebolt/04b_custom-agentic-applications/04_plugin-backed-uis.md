---
sidebar_position: 4
title: Plugin-Backed UIs
description: Sometimes the UI should not talk directly to the server. Instead, the UI talks to a plugin, and the plugin acts as the application backend for that interface.
---

# Plugin-Backed UIs

Sometimes the UI should not talk directly to the server. Instead, the UI talks to a plugin, and the plugin acts as the application backend for that interface.

This is the pattern shown by `sample-plugins/feedback-form-plugin`, and a lighter packaging form of it appears in `sample-plugins/simpleui-plugin`.

## The Bridge Model

In a plugin-backed UI, the browser side uses the injected `codeboltPlugin` bridge. There are two useful ways to structure that communication:

## Pattern 1: Fetch And Router

Use this when the UI action is naturally a request with a response.

Browser side:

```ts
const response = await codeboltPlugin.fetch('/feedback', {
  method: 'POST',
  json: formData,
});

const payload = await response.json();
```

Plugin side:

```ts
const router = plugin.dynamicPanel.router(PANEL_ID);

router.post('/feedback', async (c) => {
  const body = await c.req.json();

  return c.json({
    success: true,
    message: `Thanks, ${body.name}`,
  });
});
```

This gives you a clean application contract for:

- forms
- settings saves and loads
- command buttons
- CRUD-like panel actions

## Pattern 2: Async Message Passing

Use this when the interaction is event-driven, streaming, or conversational.

Browser side:

```ts
codeboltPlugin.sendMessage({
  type: 'start-sync',
  projectId: 'abc123',
});

codeboltPlugin.onMessage((message) => {
  console.log(message);
});
```

Plugin side:

```ts
plugin.dynamicPanel.onMessage(PANEL_ID, async (message) => {
  if (message.type === 'start-sync') {
    await plugin.dynamicPanel.send(PANEL_ID, {
      type: 'sync-status',
      status: 'running',
    });
  }
});
```

This works well for:

- streaming progress
- dashboards with continuous updates
- long-running workflows
- multi-turn back-and-forth
- custom protocols that do not map cleanly to a single request and response

## What Both Patterns Share

Both patterns keep the same separation of concerns:

- the UI owns presentation and user interaction
- the plugin owns backend logic and state transitions

## Choosing Between Them

Treat the panel bridge like an internal transport and choose the interaction style that matches the shape of the workflow:

- UI uses `codeboltPlugin.fetch(path, init)`
- plugin uses `plugin.dynamicPanel.router(panelId)`
- UI uses `codeboltPlugin.sendMessage(...)` and `codeboltPlugin.onMessage(...)`
- plugin uses `plugin.dynamicPanel.onMessage(...)` and `plugin.dynamicPanel.send(...)`

Use fetch/router when:

- the UI action naturally maps to a request and a response
- you want route-level structure in the plugin
- you want handlers that feel like application backend endpoints

Use async messages when:

- the plugin needs to push updates independent of a request
- the workflow is long-running or streaming
- the interaction is conversational or stateful in a custom way

You can also mix them in one application:

- fetch/router for form submissions and commands
- raw async messaging or events for status, progress, and live updates

## Events With The Fetch Pattern

If you use fetch/router for request/response but still need push updates, you can combine it with event-style notifications:

- UI: `codeboltPlugin.on('event.name', handler)`
- plugin: `c.emit('event.name', payload)` from a router handler

## Why This Pattern Exists

Both patterns are useful when the plugin needs to:

- validate or transform UI input
- manage application state for the panel
- mediate calls into the rest of Codebolt
- push live updates back into the UI
- encapsulate plugin-owned workflows behind a narrow UI contract

## Feedback Form Pattern

The feedback form sample now demonstrates the fetch/router version:

- the UI is plain HTML and JavaScript
- the UI submits through `codeboltPlugin.fetch('/feedback', ...)`
- the plugin handles the request through `plugin.dynamicPanel.router(panelId).post('/feedback', ...)`
- the plugin pushes live stats back through `stats.updated` events

This is a good starter template for plugin-backed forms, control panels, or operator consoles.

## Wrapping A Larger UI With A Plugin

`simpleui-plugin` shows a related packaging pattern:

- a larger compiled SPA is built separately
- the plugin manifest points `ui.path` at that built UI
- the plugin can be almost empty if it only exists to host the application surface

That is useful when:

- you want a big React/Vue UI inside Codebolt
- you want to distribute that UI as a plugin
- you may later add richer plugin-side backend logic without changing the overall deployment shape

## Manifest Shape

The essential manifest field is:

```json
{
  "codebolt": {
    "plugin": {
      "triggers": [{ "type": "manual" }],
      "ui": {
        "path": "./ui/default/index.html"
      }
    }
  }
}
```

That tells Codebolt the plugin owns a UI surface that should be loaded through the plugin runtime.

## When To Prefer The Plugin Backend Pattern

Prefer this pattern over direct server access when:

- the UI is tightly coupled to one plugin capability
- the plugin needs to act as the domain backend
- you want a small, explicit message contract instead of broad server API access
- the UI lives inside Codebolt and should be mediated by plugin lifecycle

Prefer `fetch` + router over raw messages when:

- the UI action naturally maps to a request and a response
- you want route-level separation in the plugin
- you want handlers that feel like application backend endpoints
- you want easier migration from web-app thinking into plugin-backed panels

Prefer raw `sendMessage/onMessage` only when the interaction is inherently event-driven or conversational.

If your panel needs both, use both. The bridge supports mixing request/response and async messaging in the same UI.

## See Also

- [Dynamic Panels](../04_custom-uis/05_dynamic-panels.md)
- [Build Your First Dynamic Panel](../04_custom-uis/07_build-your-first-dynamic-panel.md)
- [Dynamic Panel Plugins](../05_plugins/05_dynamic-panel-plugins.md)
- [Standalone Server-Connected Apps](./03_standalone-server-connected-apps.md)
