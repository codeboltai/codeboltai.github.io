---
title: getDependencies
---

# `getDependencies`

```typescript
plugin.threadsApi.getDependencies(threadId: string): Promise<Thread[]>
```

Retrieves all threads that the specified thread depends on.

Returns threads that are prerequisites or dependencies of the given thread.
This is useful for understanding execution order requirements and managing
complex thread relationships.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread |

## Returns

`Promise<Thread[]>` — A promise that resolves to an array of dependent Thread objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.getDependencies('threadId');
console.log(result);
```
