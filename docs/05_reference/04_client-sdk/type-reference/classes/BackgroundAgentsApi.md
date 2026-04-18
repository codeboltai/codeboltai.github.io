---
title: BackgroundAgentsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: BackgroundAgentsApi

Defined in: CodeBolt/packages/clientsdk/src/api/background-agents.api.ts:11

Provides methods for managing background agent instances in the CodeBolt runtime.

Background agents run continuously in the background, performing tasks such as
monitoring, indexing, or handling recurring workflows without user interaction.
This API supports listing, starting, stopping, and inspecting these agents.

## Constructors

### Constructor

```ts
new BackgroundAgentsApi(http: HttpClient): BackgroundAgentsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/background-agents.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`BackgroundAgentsApi`

## Methods

### get()

```ts
get(instanceId: string): Promise<BackgroundAgentInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/background-agents.api.ts:67

Retrieves a specific background agent instance by ID.

Returns the full details of a single background agent including
its configuration, status, and runtime metrics.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `instanceId` | `string` | The unique identifier of the background agent instance |

#### Returns

`Promise`\<`BackgroundAgentInstance`\>

A promise that resolves to the BackgroundAgentInstance object

#### Example

```typescript
const agent = await client.backgroundAgents.get('bg-agent-001');
console.log(agent.status, agent.agentType);
```

***

### getActive()

```ts
getActive(params?: Record<string, unknown>): Promise<BackgroundAgentInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/background-agents.api.ts:48

Retrieves currently active background agents.

Returns only the background agents that are currently running,
excluding terminated or stopped instances.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering |

#### Returns

`Promise`\<`BackgroundAgentInstance`[]\>

A promise that resolves to an array of active BackgroundAgentInstance objects

#### Example

```typescript
const active = await client.backgroundAgents.getActive();
console.log(`${active.length} background agents running`);
```

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<BackgroundAgentInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/background-agents.api.ts:29

Retrieves all background agent instances.

Returns every background agent instance that has been created,
including both active and terminated ones.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`BackgroundAgentInstance`[]\>

A promise that resolves to an array of BackgroundAgentInstance objects

#### Example

```typescript
const agents = await client.backgroundAgents.list();
console.log(`Total background agents: ${agents.length}`);
```

***

### start()

```ts
start(data: StartBackgroundAgentRequest): Promise<BackgroundAgentInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/background-agents.api.ts:90

Starts a new background agent.

Launches a background agent that will run continuously until explicitly
stopped. Background agents are suitable for long-running monitoring,
indexing, or maintenance tasks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `StartBackgroundAgentRequest` | The background agent start configuration |

#### Returns

`Promise`\<`BackgroundAgentInstance`\>

A promise that resolves to the started BackgroundAgentInstance

#### Example

```typescript
const instance = await client.backgroundAgents.start({
  agentId: 'file-watcher'
});
console.log(`Background agent started: ${instance.id}`);
```

***

### stop()

```ts
stop(instanceId: string, data?: StopBackgroundAgentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/background-agents.api.ts:109

Stops a running background agent instance.

Sends a stop signal to the specified background agent, causing it
to terminate gracefully.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `instanceId` | `string` | The unique identifier of the background agent instance to stop |
| `data?` | `StopBackgroundAgentRequest` | Optional stop configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the stop signal has been sent

#### Example

```typescript
await client.backgroundAgents.stop('bg-agent-001');
```
