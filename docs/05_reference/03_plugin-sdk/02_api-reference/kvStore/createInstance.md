---
title: createInstance
---

# `createInstance`

```typescript
plugin.kvStore.createInstance(name: string, description?: string): Promise<KVInstanceResponse>
```

Create a new KV store instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Instance name |
| `description` | `string` | No | Optional description |

## Returns

`Promise<KVInstanceResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.createInstance('name');
console.log(result);
```
