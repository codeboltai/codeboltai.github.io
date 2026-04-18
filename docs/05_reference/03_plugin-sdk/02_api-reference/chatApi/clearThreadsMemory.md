---
title: clearThreadsMemory
---

# `clearThreadsMemory`

```typescript
plugin.chatApi.clearThreadsMemory(): Promise<void>
```

Clears all threads from memory.

Removes all thread data from the in-memory cache, typically used
when switching projects to ensure a clean state.

## Parameters

_No parameters._

## Returns

`Promise<void>` — A promise that resolves when the memory has been cleared

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.clearThreadsMemory();
console.log(result);
```
