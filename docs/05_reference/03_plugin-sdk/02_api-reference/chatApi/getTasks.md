---
title: getTasks
---

# `getTasks`

```typescript
plugin.chatApi.getTasks(): Promise<unknown[]>
```

Retrieves all chat tasks.

Returns the list of tasks that have been created through the
chat system.

## Parameters

_No parameters._

## Returns

`Promise<unknown[]>` — A promise that resolves to an array of task objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.getTasks();
console.log(result);
```
