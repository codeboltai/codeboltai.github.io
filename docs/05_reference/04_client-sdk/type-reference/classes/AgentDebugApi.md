---
title: AgentDebugApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentDebugApi

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:11

Provides methods for inspecting and debugging agent instances in the CodeBolt runtime.

This API allows you to view agent instance details, retrieve structured and raw logs,
filter instances by various criteria, and perform maintenance operations such as
cleaning up old debug data and rebuilding the debug index.

## Constructors

### Constructor

```ts
new AgentDebugApi(http: HttpClient): AgentDebugApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AgentDebugApi`

## Methods

### cleanup()

```ts
cleanup(params?: CleanupAgentDebugParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:189

Cleans up old agent debug data.

Removes debug records that are older than the specified threshold.
Use this to free up storage and keep the debug system performant.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `CleanupAgentDebugParams` | Query parameters controlling the cleanup |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when cleanup is complete

#### Example

```typescript
await client.agentDebug.cleanup({ daysOld: 30 });
```

***

### getBySwarm()

```ts
getBySwarm(swarmId: string): Promise<AgentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:109

Retrieves agent instances associated with a specific swarm.

Returns all debug instances that belong to the given swarm, useful for
inspecting multi-agent coordination.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm to query |

#### Returns

`Promise`\<`AgentDebugInstance`[]\>

A promise that resolves to an array of AgentDebugInstance objects for that swarm

#### Example

```typescript
const swarmAgents = await client.agentDebug.getBySwarm('swarm-001');
```

***

### getByThread()

```ts
getByThread(threadId: string): Promise<AgentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:91

Retrieves agent instances associated with a specific thread.

Returns all debug instances that were spawned within or are linked to
the given thread ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to query |

#### Returns

`Promise`\<`AgentDebugInstance`[]\>

A promise that resolves to an array of AgentDebugInstance objects for that thread

#### Example

```typescript
const threadAgents = await client.agentDebug.getByThread('thread-xyz');
```

***

### getFilteredInstances()

```ts
getFilteredInstances(params?: AgentDebugFilterParams): Promise<AgentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:55

Retrieves agent instances matching specific filter criteria.

Supports filtering by status, agent type, thread ID, swarm ID, and
whether the agent is running in the background.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `AgentDebugFilterParams` | Filter parameters to narrow down results |

#### Returns

`Promise`\<`AgentDebugInstance`[]\>

A promise that resolves to an array of matching AgentDebugInstance objects

#### Example

```typescript
const running = await client.agentDebug.getFilteredInstances({
  status: 'running',
  isBackground: false
});
```

***

### getInstance()

```ts
getInstance(agentInstanceId: string): Promise<AgentDebugInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:128

Retrieves details for a specific agent debug instance.

Returns the full debug record for a single agent instance including
its configuration, status, timing, and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentInstanceId` | `string` | The unique identifier of the agent instance |

#### Returns

`Promise`\<`AgentDebugInstance`\>

A promise that resolves to the AgentDebugInstance object

#### Example

```typescript
const instance = await client.agentDebug.getInstance('inst-abc');
console.log(instance.status, instance.agentType);
```

***

### getInstanceLogs()

```ts
getInstanceLogs(agentInstanceId: string, params?: AgentDebugLogsParams): Promise<AgentDebugLog[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:153

Retrieves parsed and structured logs for a specific agent instance.

Returns logs that have been parsed into structured AgentDebugLog objects,
making them easier to analyze programmatically. Supports pagination
through offset and limit parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentInstanceId` | `string` | The unique identifier of the agent instance |
| `params?` | `AgentDebugLogsParams` | Optional pagination parameters |

#### Returns

`Promise`\<`AgentDebugLog`[]\>

A promise that resolves to an array of structured AgentDebugLog objects

#### Example

```typescript
const logs = await client.agentDebug.getInstanceLogs('inst-abc', {
  offset: 0,
  limit: 100
});
```

***

### getInstanceRawLogs()

```ts
getInstanceRawLogs(agentInstanceId: string, params?: AgentDebugLogsParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:170

Retrieves raw, unprocessed logs for a specific agent instance.

Returns the raw log output as produced by the agent, without any
parsing or structuring. Useful for debugging issues not captured
by the structured log parser.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentInstanceId` | `string` | The unique identifier of the agent instance |
| `params?` | `AgentDebugLogsParams` | Optional pagination parameters |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the raw log data

***

### getInstances()

```ts
getInstances(params?: Record<string, unknown>): Promise<AgentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:29

Retrieves all agent debug instances.

Returns every agent instance that has been tracked by the debug system,
regardless of its current status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`AgentDebugInstance`[]\>

A promise that resolves to an array of AgentDebugInstance objects

#### Example

```typescript
const instances = await client.agentDebug.getInstances();
console.log(`Total tracked instances: ${instances.length}`);
```

***

### getRunning()

```ts
getRunning(): Promise<AgentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:73

Retrieves all currently running agent instances.

A convenience method that returns only instances with an active/running status,
useful for real-time monitoring dashboards.

#### Returns

`Promise`\<`AgentDebugInstance`[]\>

A promise that resolves to an array of running AgentDebugInstance objects

#### Example

```typescript
const running = await client.agentDebug.getRunning();
console.log(`${running.length} agents currently running`);
```

***

### rebuildIndex()

```ts
rebuildIndex(data?: RebuildAgentDebugIndexRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-debug.api.ts:202

Rebuilds the agent debug index.

Forces a full re-index of all agent debug data. This can resolve
issues with missing or inconsistent search results in the debug interface.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `RebuildAgentDebugIndexRequest` | Optional configuration for the rebuild operation |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the index rebuild is complete
