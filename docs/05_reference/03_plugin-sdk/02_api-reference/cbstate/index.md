---
title: Cbstate API
---

# Cbstate API

The `cbstate` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addToAgentState`](./addToAgentState) | Adds a key-value pair to the agent's state on the server via WebSocket. |
| [`getAgentState`](./getAgentState) | Retrieves the current state of the agent from the server via WebSocket. |
| [`getApplicationState`](./getApplicationState) | Retrieves the current application state from the server via WebSocket. |
| [`getProjectState`](./getProjectState) | Retrieves the current project state from the server via WebSocket. |
| [`updateProjectState`](./updateProjectState) | Updates the project state on the server via WebSocket. |

## Methods

---

### `addToAgentState`

```typescript
plugin.cbstate.addToAgentState(key: string, value: string): Promise<AddToAgentStateResponse>
```

Adds a key-value pair to the agent's state on the server via WebSocket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key to add to the agent's state. |
| `value` | `string` | Yes | The value associated with the key. |

**Returns:** `Promise<AddToAgentStateResponse>` — A promise that resolves with the response to the addition request.

[Full reference →](./addToAgentState)

---

### `getAgentState`

```typescript
plugin.cbstate.getAgentState(): Promise<GetAgentStateResponse>
```

Retrieves the current state of the agent from the server via WebSocket.

_No parameters._

**Returns:** `Promise<GetAgentStateResponse>` — A promise that resolves with the agent's state.

[Full reference →](./getAgentState)

---

### `getApplicationState`

```typescript
plugin.cbstate.getApplicationState(): Promise<ApplicationState>
```

Retrieves the current application state from the server via WebSocket.

_No parameters._

**Returns:** `Promise<ApplicationState>` — A promise that resolves with the application state.

[Full reference →](./getApplicationState)

---

### `getProjectState`

```typescript
plugin.cbstate.getProjectState(): Promise<GetProjectStateResponse>
```

Retrieves the current project state from the server via WebSocket.

_No parameters._

**Returns:** `Promise<GetProjectStateResponse>` — A promise that resolves with the project's state.

[Full reference →](./getProjectState)

---

### `updateProjectState`

```typescript
plugin.cbstate.updateProjectState(key: string, value: any): Promise<UpdateProjectStateResponse>
```

Updates the project state on the server via WebSocket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key to update in the project state. |
| `value` | `any` | Yes | The value to set for the key. |

**Returns:** `Promise<UpdateProjectStateResponse>` — A promise that resolves with the response to the update request.

[Full reference →](./updateProjectState)

