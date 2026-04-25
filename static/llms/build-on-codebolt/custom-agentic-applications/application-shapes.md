# Application Shapes

> There are three good ways to structure a custom agentic application in Codebolt.

There are three good ways to structure a custom agentic application in Codebolt.

## 1. Standalone App

Your application talks directly to the Codebolt server over HTTP APIs and real-time sockets.

Use this when:

- you own the entire UX
- your app runs outside the Codebolt shell
- your front-end can safely call the server directly
- you want to ship a full product shell, dashboard, console, or vertical interface

This is the pattern used by `packages/simpleui`.

## 2. Plugin-Wrapped App

A plugin packages and serves the UI, but the UI itself can still behave like a larger standalone front-end.

Use this when:

- you want the application to appear inside Codebolt
- you want deployment through a plugin artifact
- your UI is large enough to deserve its own compiled SPA
- the plugin mostly exists to host the application surface

This is the pattern used by `sample-plugins/simpleui-plugin`.

## 3. Plugin-Backed UI

The UI talks to a plugin bridge, and the plugin owns the backend logic for that interface.

Use this when:

- the UI should not call the server APIs directly
- the plugin needs to validate, transform, or enrich requests
- the plugin needs to push live state back into the UI
- the UI is really an application surface for a specific plugin capability

This is the pattern used by `sample-plugins/feedback-form-plugin`.

In this shape, the preferred interface is:

- UI calls `codeboltPlugin.fetch(...)`
- plugin handles routes through `plugin.dynamicPanel.router(panelId)`
- plugin pushes unsolicited updates back with router events or low-level panel messages

The same shape can also be built with the lower-level async interface:

- UI uses `codeboltPlugin.sendMessage(...)` and `codeboltPlugin.onMessage(...)`
- plugin uses `plugin.dynamicPanel.onMessage(panelId, handler)` and `plugin.dynamicPanel.send(...)`

## Comparison

| Shape | Front-end talks to | Best for |
|---|---|---|
| Standalone app | server APIs + sockets | full custom products and external shells |
| Plugin-wrapped app | often still the server, but hosted through a plugin UI | embedded SPAs inside Codebolt |
| Plugin-backed UI | the plugin bridge first, usually via `fetch` + router | application panels where the plugin is the backend |

## How To Choose

Choose the lightest structure that fits the problem:

- if the UI can call the server directly, start with a standalone app
- if the UI must live inside Codebolt, package it as a plugin UI
- if the UI needs a controlled backend contract, put that logic in the plugin and let the UI talk to the plugin bridge

## A Useful Rule

Do not force everything through a plugin if the front-end can safely use the server APIs directly.

Use the plugin backend pattern only when it adds value:

- access control or mediation
- specialized application logic
- long-running coordination
- plugin-owned state or workflows

When you do use it, prefer the higher-level request/response model first and drop to raw `sendMessage/onMessage` only when the interaction is not naturally request-shaped.

## See Also

- [Standalone Server-Connected Apps](./03_standalone-server-connected-apps.md)
- [Plugin-Backed UIs](./04_plugin-backed-uis.md)
