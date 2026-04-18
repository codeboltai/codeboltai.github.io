---
title: ApplicationApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ApplicationApi

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:29

Provides methods for managing the CodeBolt application state and layout.

This API controls the top-level application state including pinned agents,
tree view configuration, layout management, environment variables, process
management, and thread tokens. It serves as the central hub for application-wide
settings.

## Constructors

### Constructor

```ts
new ApplicationApi(http: HttpClient): ApplicationApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ApplicationApi`

## Methods

### addEnvAndServices()

```ts
addEnvAndServices(): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:235

Triggers the addition of environment variables and services.

Initiates the process of detecting and adding environment variables
and service configurations to the current workspace.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the operation is complete

***

### getAppState()

```ts
getAppState(): Promise<AppState>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:46

Retrieves the current application state.

Returns the full application state object containing the active
configuration, user preferences, and runtime status.

#### Returns

`Promise`\<`AppState`\>

A promise that resolves to the current AppState object

#### Example

```typescript
const state = await client.application.getAppState();
console.log(state.activeProject, state.theme);
```

***

### getAppStateLayout()

```ts
getAppStateLayout(): Promise<AppStateLayout>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:155

Retrieves the application state layout.

Returns the full layout configuration for the application, including
all mode-specific layout definitions.

#### Returns

`Promise`\<`AppStateLayout`\>

A promise that resolves to the AppStateLayout object

***

### getCurrentLayout()

```ts
getCurrentLayout(): Promise<CurrentLayout>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:180

Retrieves the current active layout.

Returns the layout configuration that is currently being displayed
in the application UI.

#### Returns

`Promise`\<`CurrentLayout`\>

A promise that resolves to the CurrentLayout object

***

### getEnvAndServices()

```ts
getEnvAndServices(): Promise<EnvAndServices>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:223

Retrieves environment variables and service configurations.

Returns the environment variables and external service connection
details configured for the current workspace.

#### Returns

`Promise`\<`EnvAndServices`\>

A promise that resolves to the EnvAndServices object

#### Example

```typescript
const env = await client.application.getEnvAndServices();
console.log(env.variables, env.services);
```

***

### getPinnedAgent()

```ts
getPinnedAgent(): Promise<PinnedAgent | null>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:90

Retrieves the currently pinned agent.

Returns the agent that is currently pinned to the UI, or null if
no agent is pinned.

#### Returns

`Promise`\<`PinnedAgent` \| `null`\>

A promise that resolves to the PinnedAgent or null

***

### getRootAppState()

```ts
getRootAppState(): Promise<RootAppState>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:192

Retrieves the root application state.

Returns the top-level state object that encompasses all workspace
and global application settings.

#### Returns

`Promise`\<`RootAppState`\>

A promise that resolves to the RootAppState object

***

### getThreadToken()

```ts
getThreadToken(): Promise<ThreadToken>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:265

Retrieves the current thread token.

Returns the authentication token associated with the current thread,
used for securing inter-process communication.

#### Returns

`Promise`\<`ThreadToken`\>

A promise that resolves to the ThreadToken object

***

### getTreeView()

```ts
getTreeView(): Promise<TreeViewState>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:128

Retrieves the saved tree view state.

Returns the previously persisted tree view configuration so the UI
can restore the user's preferred view.

#### Returns

`Promise`\<`TreeViewState`\>

A promise that resolves to the TreeViewState object

***

### saveTreeView()

```ts
saveTreeView(data: SaveTreeViewRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:116

Saves the tree view state.

Persists the current state of the file/project tree view, including
expanded nodes, scroll position, and selection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SaveTreeViewRequest` | The tree view state to save |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the state has been saved

***

### setCurrentLayout()

```ts
setCurrentLayout(data: SetCurrentLayoutRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:168

Sets the current active layout.

Switches the application to use a specific layout configuration,
rearranging panels and views accordingly.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SetCurrentLayoutRequest` | The layout selection |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the layout has been applied

***

### setModeLayout()

```ts
setModeLayout(data: SetModeLayoutRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:143

Sets the mode layout configuration.

Configures how the application layout behaves in a specific mode
(e.g., coding, debugging, reviewing).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SetModeLayoutRequest` | The mode layout configuration |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the layout has been set

***

### setPinnedAgent()

```ts
setPinnedAgent(data: SetPinnedAgentRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:78

Sets the pinned agent for the application.

Pins a specific agent to the UI, making it the default or always-visible
agent for quick access.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SetPinnedAgentRequest` | The pinning configuration |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the agent has been pinned

#### Example

```typescript
await client.application.setPinnedAgent({ agentId: 'code-reviewer' });
```

***

### stopAllProcess()

```ts
stopAllProcess(data?: StopAllProcessRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:253

Stops all running processes.

Terminates every active process in the CodeBolt runtime, including
agents, terminals, and background tasks. Use with caution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `StopAllProcessRequest` | Optional configuration for the stop operation |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all processes have been stopped

#### Example

```typescript
await client.application.stopAllProcess();
```

***

### unpinAgent()

```ts
unpinAgent(data?: UnpinAgentRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:103

Unpins the currently pinned agent.

Removes the pinned agent from the UI, reverting to the default
agent selection behavior.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `UnpinAgentRequest` | Optional unpin configuration |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the agent has been unpinned

***

### updateAppState()

```ts
updateAppState(data: UpdateAppStateRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:59

Updates the application state.

Applies changes to the application state, persisting the updated
configuration across sessions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateAppStateRequest` | The state update payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the state has been updated

***

### updateRootAppState()

```ts
updateRootAppState(data: UpdateRootAppStateRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/application.api.ts:205

Updates the root application state.

Applies changes to the top-level application state, affecting
global settings across all workspaces.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateRootAppStateRequest` | The root state update payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the state has been updated
