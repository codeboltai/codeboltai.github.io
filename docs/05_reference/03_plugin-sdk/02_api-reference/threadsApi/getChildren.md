---
title: getChildren
---

# `getChildren`

```typescript
plugin.threadsApi.getChildren(threadId: string): Promise<Thread[]>
```

Retrieves all direct child threads of a specified thread.

Returns threads that are immediate descendants of the given parent thread.
This is useful for navigating thread hierarchies and managing related threads.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the parent thread |

## Returns

`Promise<Thread[]>` — A promise that resolves to an array of child Thread objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.getChildren('threadId');
console.log(result);
```
