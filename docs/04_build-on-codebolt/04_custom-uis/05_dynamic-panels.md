---
sidebar_position: 5
title: Dynamic Panels
---

# Dynamic Panels

Not every custom UI needs to be a separate application. Codebolt can also render runtime UI panels *inside the existing app* through the dynamic panel system.

The server bridge is [dynamicPanelService.cli.ts](D:/Codeboltapps/CodeBolt/packages/server/src/cliLib/dynamicPanelService.cli.ts), which routes panel actions into `dynamicPanelService`.

## Supported Actions

- `dynamicPanel.open`
- `dynamicPanel.update`
- `dynamicPanel.close`
- `dynamicPanel.send`
- `dynamicPanel.list`

Under the hood, `dynamicPanelService` handles:

- opening a panel in the UI
- tracking panel state by `panelId`
- registering the agent or plugin subscription for that panel
- forwarding messages from the panel back to the originating agent or plugin
- sending data from the agent or plugin to the panel

## From An Agent

Typical agent flow:

1. the agent opens a panel with `panelId`, `title`, and `html`
2. the UI renders that panel
3. panel messages route back to the originating agent subscription
4. the agent updates, sends to, or closes the panel later

This is useful for:

- focused UI during a run
- human-in-the-loop forms or confirmations
- richer interactive views than plain chat messages

The open operation also supports `waitForResponse` and `timeout`, so agent workflows can use panels as request/response UI, not just passive display.

## From A Plugin

Plugins can also drive in-app panels. The server types expose these operations:

- `openPanel`
- `updatePanel`
- `closePanel`
- `sendToPanel`
- `onPanelMessage`
- `offPanelMessage`

Use plugin-driven panels when the UI is application-level rather than tied to one run:

- dashboards
- settings/configuration panels
- long-lived operational views
- domain-specific views reused across agents

## Dynamic Panels Vs Separate Custom UI

Use **dynamic panels** when:

- the UI should live inside the existing Codebolt app
- the interaction is tightly coupled to one agent run or one plugin
- you want to augment the built-in app rather than replace it

Use a **separate custom UI** when:

- you want to own the whole product surface
- the UI runs outside the existing desktop/web app
- you need your own routing, branding, or application shell

`clientsdk` is for building a client *outside* the existing app. `dynamicPanelService` is for injecting UI *into* the existing app.

## See also

- [Client SDK](./02_client-sdk.md)
- [Plugins](../05_plugins/01_overview.md)
- [Internals → Communication](../09_internals/03_subsystems/11_communication.md)
