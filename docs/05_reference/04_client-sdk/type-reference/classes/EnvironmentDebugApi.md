---
title: EnvironmentDebugApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: EnvironmentDebugApi

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:11

Provides debugging and monitoring capabilities for environment instances.

Use this API to inspect running environments, review their logs, and
perform maintenance operations such as cleaning up stale instances or
rebuilding the debug index.

## Constructors

### Constructor

```ts
new EnvironmentDebugApi(http: HttpClient): EnvironmentDebugApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`EnvironmentDebugApi`

## Methods

### cleanup()

```ts
cleanup(): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:157

Cleans up stale or orphaned environment instances.

Removes environment instances that are no longer active or have been
orphaned due to provider failures. This is a maintenance operation that
should be run periodically to keep the debug index clean.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when cleanup is complete

#### Example

```typescript
await client.environmentDebug.cleanup();
```

***

### getByProvider()

```ts
getByProvider(providerId: string): Promise<EnvironmentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:82

Retrieves environment instances associated with a specific provider.

Filters instances by the provider that created or manages them, useful
for diagnosing issues with a particular environment provider.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `providerId` | `string` | The unique identifier of the environment provider |

#### Returns

`Promise`\<`EnvironmentDebugInstance`[]\>

A promise that resolves to an array of EnvironmentDebugInstance objects for the given provider

#### Example

```typescript
const instances = await client.environmentDebug.getByProvider('provider-abc');
```

***

### getInstance()

```ts
getInstance(environmentId: string): Promise<EnvironmentDebugInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:101

Retrieves a specific environment debug instance by its ID.

Returns the full detail of a single environment instance including
its current state, provider information, and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `environmentId` | `string` | The unique identifier of the environment instance |

#### Returns

`Promise`\<`EnvironmentDebugInstance`\>

A promise that resolves to the EnvironmentDebugInstance

#### Example

```typescript
const instance = await client.environmentDebug.getInstance('env-456');
console.log(instance.status);
```

***

### getInstanceLogs()

```ts
getInstanceLogs(environmentId: string, params?: EnvironmentDebugLogsParams): Promise<EnvironmentDebugLog[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:120

Retrieves parsed logs for an environment debug instance.

Returns structured log entries that have been parsed from raw output,
making them easier to filter, search, and display in a UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `environmentId` | `string` | The unique identifier of the environment instance |
| `params?` | `EnvironmentDebugLogsParams` | Optional parameters to filter logs by level, time range, or pagination |

#### Returns

`Promise`\<`EnvironmentDebugLog`[]\>

A promise that resolves to an array of EnvironmentDebugLog entries

#### Example

```typescript
const logs = await client.environmentDebug.getInstanceLogs('env-456', { level: 'error' });
```

***

### getInstanceRawLogs()

```ts
getInstanceRawLogs(environmentId: string, params?: EnvironmentDebugLogsParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:139

Retrieves raw, unprocessed logs for an environment debug instance.

Returns the original log output without parsing or structuring. Useful
for debugging cases where parsed logs may lose important context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `environmentId` | `string` | The unique identifier of the environment instance |
| `params?` | `EnvironmentDebugLogsParams` | Optional parameters to filter or paginate raw log output |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the raw log data

#### Example

```typescript
const rawLogs = await client.environmentDebug.getInstanceRawLogs('env-456');
```

***

### getRunningInstances()

```ts
getRunningInstances(): Promise<EnvironmentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:64

Retrieves all currently running environment instances.

Returns only instances that are in an active/running state, which is
useful for monitoring dashboards and health checks.

#### Returns

`Promise`\<`EnvironmentDebugInstance`[]\>

A promise that resolves to an array of running EnvironmentDebugInstance objects

#### Example

```typescript
const running = await client.environmentDebug.getRunningInstances();
console.log(`${running.length} environments currently active`);
```

***

### listFilteredInstances()

```ts
listFilteredInstances(params?: EnvironmentDebugFilteredParams): Promise<EnvironmentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:46

Lists environment debug instances matching specific filter criteria.

Similar to [listInstances](#listinstances) but applies additional server-side
filtering such as status, date range, or provider constraints.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `EnvironmentDebugFilteredParams` | Optional filter parameters to narrow results |

#### Returns

`Promise`\<`EnvironmentDebugInstance`[]\>

A promise that resolves to an array of filtered EnvironmentDebugInstance objects

#### Example

```typescript
const filtered = await client.environmentDebug.listFilteredInstances({ status: 'error' });
```

***

### listInstances()

```ts
listInstances(params?: EnvironmentDebugInstancesParams): Promise<EnvironmentDebugInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:28

Lists all environment debug instances.

Returns every known environment instance regardless of state. Use the
optional parameters to paginate or filter results server-side.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `EnvironmentDebugInstancesParams` | Optional query parameters for pagination and filtering |

#### Returns

`Promise`\<`EnvironmentDebugInstance`[]\>

A promise that resolves to an array of EnvironmentDebugInstance objects

#### Example

```typescript
const instances = await client.environmentDebug.listInstances({ limit: 50 });
```

***

### rebuildIndex()

```ts
rebuildIndex(data?: RebuildEnvironmentIndexRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environment-debug.api.ts:175

Rebuilds the environment debug index from scratch.

Triggers a full re-indexing of all environment instances. Use this when
the index becomes inconsistent or after bulk data migrations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `RebuildEnvironmentIndexRequest` | Optional configuration for the rebuild process |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the rebuild is initiated

#### Example

```typescript
await client.environmentDebug.rebuildIndex();
```
