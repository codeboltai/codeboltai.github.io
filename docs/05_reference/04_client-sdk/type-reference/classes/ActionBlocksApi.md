---
title: ActionBlocksApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ActionBlocksApi

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:11

Provides methods for managing action blocks in the CodeBolt runtime.

Action blocks are reusable, composable units of automation that can be
registered, executed, and monitored. This API handles listing, inspecting,
executing, and gathering statistics about action blocks.

## Constructors

### Constructor

```ts
new ActionBlocksApi(http: HttpClient): ActionBlocksApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ActionBlocksApi`

## Methods

### getDetail()

```ts
getDetail(identifier: string): Promise<ActionBlockDetail>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:48

Retrieves detailed information for a specific action block.

Returns the full configuration, metadata, and current state of the
action block identified by the given identifier string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `identifier` | `string` | The unique identifier or name of the action block |

#### Returns

`Promise`\<`ActionBlockDetail`\>

A promise that resolves to the detailed ActionBlockDetail object

#### Example

```typescript
const detail = await client.actionBlocks.getDetail('my-block-id');
console.log(detail.name, detail.description);
```

***

### getExecutions()

```ts
getExecutions(params?: Record<string, unknown>): Promise<ActionBlockExecution[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:79

Retrieves execution records for action blocks.

Returns a list of past and current executions, useful for monitoring
which action blocks have run and their outcomes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`ActionBlockExecution`[]\>

A promise that resolves to an array of ActionBlockExecution records

#### Example

```typescript
const executions = await client.actionBlocks.getExecutions();
const running = executions.filter(e => e.status === 'running');
```

***

### getStats()

```ts
getStats(): Promise<ActionBlockStats>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:129

Retrieves aggregate statistics about action blocks.

Returns counts, success rates, and other summary metrics for all
action blocks in the system.

#### Returns

`Promise`\<`ActionBlockStats`\>

A promise that resolves to an ActionBlockStats object with summary metrics

#### Example

```typescript
const stats = await client.actionBlocks.getStats();
console.log(`Total blocks: ${stats.total}, Active: ${stats.active}`);
```

***

### getTypes()

```ts
getTypes(): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:60

Retrieves the list of available action block types.

Returns the distinct type identifiers that can be used when creating
or filtering action blocks.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of type name strings

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<ActionBlock[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:29

Retrieves all registered action blocks.

Returns the full list of action blocks available in the current workspace.
Use optional query parameters to paginate or filter the results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`ActionBlock`[]\>

A promise that resolves to an array of ActionBlock objects

#### Example

```typescript
const blocks = await client.actionBlocks.list();
console.log(`Found ${blocks.length} action blocks`);
```

***

### refresh()

```ts
refresh(data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:111

Refreshes the action block registry.

Forces a re-scan and reload of all registered action blocks, picking up
any newly added or modified block definitions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `Record`\<`string`, `unknown`\> | Optional configuration for the refresh operation |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the refresh is complete

***

### stop()

```ts
stop(data: StopActionBlockRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-blocks.api.ts:98

Stops a currently running action block execution.

Sends a stop signal to the specified action block execution, causing it
to terminate gracefully. Use this to cancel long-running or stuck executions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `StopActionBlockRequest` | The stop request containing the execution identifier to halt |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the stop signal has been sent

#### Example

```typescript
await client.actionBlocks.stop({ executionId: 'exec-123' });
```
