# Standalone Server-Connected Apps

> The simplest custom agentic application is a front-end that talks directly to the Codebolt server.

The simplest custom agentic application is a front-end that talks directly to the Codebolt server.

That is the pattern used by `packages/simpleui`.

## What The Example Actually Does

`simpleui` is a Vite + React application with its own routing, state stores, API services, and WebSocket manager.

In the example:

- the front-end uses HTTP requests against `${backendUrl}/api`
- the front-end connects to live namespaces over WebSocket
- the application owns the full layout, routes, and view structure
- the server remains the source of truth for the underlying runtime state

This is the right pattern when you are building an actual application shell rather than just a panel.

## API Layer

The example uses an Axios client:

```ts
const apiClient = axios.create({
  baseURL: `${getBaseUrl()}/api`,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

That means the application is not talking to a plugin bridge first. It is calling the Codebolt server directly.

## Socket Layer

The example also uses a WebSocket manager that connects to server namespaces and subscribes to live updates:

```ts
const socket = io(`${this.baseUrl}/${namespace}`, {
  transports: ['websocket'],
  reconnection: true,
});
```

This gives the app the usual agentic application pattern:

- fetch current state via HTTP
- subscribe to changes via sockets
- render a product-specific UX on top

## What You Own In This Model

Your application owns:

- branding
- navigation
- domain-specific workflow
- page and panel layout
- client-side orchestration and view state

The server still owns:

- tasks and threads
- agent execution
- files and project state
- tools and MCP access
- memory and event history

## When You Do Not Need A Plugin

You do not need a plugin just because you are building a custom application.

If your UI can directly talk to the server APIs and sockets, a standalone application is usually the cleanest starting point.

Add a plugin only when you need:

- a UI embedded inside Codebolt
- plugin lifecycle hooks
- a custom backend bridge between UI and server
- extra app behavior that should live on the plugin side

## Packaging Pattern

The application can be deployed as:

- a web app pointing at a Codebolt server
- an Electron shell
- a mobile wrapper
- an internal portal module

The important part is the connection contract, not the device.

## See Also

- [Custom UI](../04_custom-uis/06_custom-ui.md)
- [Client SDK](../04_custom-uis/02_client-sdk.md)
- [Plugin-Backed UIs](./04_plugin-backed-uis.md)
