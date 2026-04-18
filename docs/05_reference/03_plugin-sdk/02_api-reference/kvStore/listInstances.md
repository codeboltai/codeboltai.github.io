---
title: listInstances
---

# `listInstances`

```typescript
plugin.kvStore.listInstances(): Promise<KVInstanceListResponse>
```

List all KV store instances

## Parameters

_No parameters._

## Returns

`Promise<KVInstanceListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.listInstances();
console.log(result);
```
