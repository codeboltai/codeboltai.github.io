---
title: FileUpdateIntentsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: FileUpdateIntentsApi

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:20

Manages file update intents to prevent concurrent modification conflicts.

File update intents provide a coordination mechanism for multiple agents
or processes working on files simultaneously. This API handles intent
registration, conflict detection, and lifecycle management.

## Constructors

### Constructor

```ts
new FileUpdateIntentsApi(http: HttpClient): FileUpdateIntentsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`FileUpdateIntentsApi`

## Methods

### cancel()

```ts
cancel(id: string, data?: CancelFileUpdateIntentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:280

Cancels a file update intent.

Aborts an in-progress intent and releases any held resources or locks.
Use this when an operation fails or needs to be terminated before
completion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the intent |
| `data?` | `CancelFileUpdateIntentRequest` | Optional cancellation parameters |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the intent is cancelled

#### Example

```typescript
await client.fileUpdateIntents.cancel('intent-123');
console.log('Intent cancelled');
```

***

### checkOverlap()

```ts
checkOverlap(data: CheckOverlapRequest): Promise<CheckOverlapResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:46

Checks for overlapping file update intents.

Evaluates whether proposed file operations would conflict with existing
intents from other agents or processes. Returns detailed conflict information
to help resolve concurrent modification issues.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CheckOverlapRequest` | Request containing overlap check parameters |

#### Returns

`Promise`\<`CheckOverlapResult`\>

A promise that resolves to overlap detection results

#### Example

```typescript
const overlap = await client.fileUpdateIntents.checkOverlap({
  agentId: 'agent-123',
  files: [{ path: '/path/to/file.ts', lines: [1, 50] }]
});
if (overlap.hasOverlap) {
  console.log('Conflict detected:', overlap.conflicts);
}
```

***

### complete()

```ts
complete(id: string, data?: CompleteFileUpdateIntentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:256

Marks a file update intent as complete.

Finalizes an intent after all file modifications are finished.
This releases locks and records the successful completion of
the update operation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the intent |
| `data?` | `CompleteFileUpdateIntentRequest` | Optional completion parameters |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the intent is marked complete

#### Example

```typescript
await client.fileUpdateIntents.complete('intent-123');
console.log('Update completed successfully');
```

***

### create()

```ts
create(data: CreateFileUpdateIntentRequest): Promise<FileUpdateIntent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:171

Creates a new file update intent.

Registers an intent to modify specified files on behalf of an agent.
The intent coordinates access to prevent conflicts with other
concurrent modifications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateFileUpdateIntentRequest` | Request containing intent creation details |

#### Returns

`Promise`\<`FileUpdateIntent`\>

A promise that resolves to the created FileUpdateIntent object

#### Example

```typescript
const intent = await client.fileUpdateIntents.create({
  agentId: 'agent-123',
  files: [{ path: '/src/file.ts', lines: [1, 100] }]
});
console.log('Intent ID:', intent.id);
```

***

### delete()

```ts
delete(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:235

Deletes a file update intent.

Removes the specified intent and releases any file locks it held.
Other agents will then be able to create intents for those files.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the intent to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the intent has been deleted

#### Example

```typescript
await client.fileUpdateIntents.delete('intent-123');
console.log('Intent removed');
```

***

### get()

```ts
get(id: string): Promise<FileUpdateIntent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:190

Retrieves a specific file update intent by its ID.

Returns detailed information about a single intent including its
current status, files, agent, and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the intent |

#### Returns

`Promise`\<`FileUpdateIntent`\>

A promise that resolves to the FileUpdateIntent object

#### Example

```typescript
const intent = await client.fileUpdateIntents.get('intent-123');
console.log('Status:', intent.status);
```

***

### getBlockedFiles()

```ts
getBlockedFiles(params?: Record<string, unknown>): Promise<BlockedFile[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:69

Retrieves a list of currently blocked files.

Returns files that have active update intents, meaning they are
locked or being modified by other agents. Use this to identify
unavailable files before attempting modifications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering blocked files |

#### Returns

`Promise`\<`BlockedFile`[]\>

A promise that resolves to an array of BlockedFile objects

#### Example

```typescript
const blocked = await client.fileUpdateIntents.getBlockedFiles();
blocked.forEach(f => console.log(`${f.path} blocked by ${f.agentId}`));
```

***

### getByAgent()

```ts
getByAgent(agentId: string, params?: Record<string, unknown>): Promise<FileUpdateIntent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:118

Retrieves file update intents for a specific agent.

Returns all intents registered by a particular agent, including
their status, associated files, and metadata. Useful for monitoring
an agent's active operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering intents |

#### Returns

`Promise`\<`FileUpdateIntent`[]\>

A promise that resolves to an array of FileUpdateIntent objects

#### Example

```typescript
const intents = await client.fileUpdateIntents.getByAgent('agent-123');
intents.forEach(i => console.log(i.status, i.files));
```

***

### getFilesWithIntents()

```ts
getFilesWithIntents(params?: Record<string, unknown>): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:93

Retrieves files that have active update intents.

Returns a list of file paths that currently have one or more
registered update intents. This is useful for quickly identifying
which files are in the process of being modified.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering |

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of file path strings

#### Example

```typescript
const files = await client.fileUpdateIntents.getFilesWithIntents();
console.log('Files being modified:', files);
```

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<FileUpdateIntent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:144

Lists all file update intents in the system.

Returns every intent regardless of status or owning agent. Use this
for comprehensive intent monitoring or debugging coordination issues.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering intents |

#### Returns

`Promise`\<`FileUpdateIntent`[]\>

A promise that resolves to an array of FileUpdateIntent objects

#### Example

```typescript
const intents = await client.fileUpdateIntents.list();
const active = intents.filter(i => i.status === 'active');
console.log(`Active intents: ${active.length}`);
```

***

### update()

```ts
update(id: string, data: UpdateFileUpdateIntentRequest): Promise<FileUpdateIntent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file-update-intents.api.ts:213

Updates an existing file update intent.

Modifies the properties, files, or status of an existing intent.
Use this to extend file ranges, update metadata, or change intent
configuration as operations progress.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the intent to update |
| `data` | `UpdateFileUpdateIntentRequest` | Request containing the intent updates to apply |

#### Returns

`Promise`\<`FileUpdateIntent`\>

A promise that resolves to the updated FileUpdateIntent object

#### Example

```typescript
const updated = await client.fileUpdateIntents.update('intent-123', {
  status: 'in-progress',
  files: [{ path: '/src/file.ts', lines: [1, 150] }]
});
```
