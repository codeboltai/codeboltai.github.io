---
title: getById
---

# `getById`

```typescript
plugin.threadsApi.getById(id: string): Promise<Thread>
```

Retrieves a thread by its unique identifier.

Fetches the complete thread object including all its properties and
current state. This is the primary method for accessing thread details
when you know the thread's ID.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | The unique identifier of the thread to retrieve |

## Returns

`Promise<Thread>` — A promise that resolves to the Thread object

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.getById('id');
console.log(result);
```
