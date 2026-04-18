---
title: syncThreads
---

# `syncThreads`

```typescript
plugin.chatApi.syncThreads(): Promise<void>
```

Synchronizes threads from the thread store to the chat manager.

Ensures that the in-memory chat manager is up-to-date with the
persisted thread store, resolving any inconsistencies.

## Parameters

_No parameters._

## Returns

`Promise<void>` — A promise that resolves when synchronization is complete

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.syncThreads();
console.log(result);
```
