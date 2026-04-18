---
title: addKnowledge
---

# `addKnowledge`

```typescript
plugin.memory.addKnowledge(key: string, value: MemoryValue): Promise<MemorySetResponse>
```

Adds a key-value pair to the in-memory database.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key under which to store the value. |
| `value` | `MemoryValue` | Yes | The value to be stored. |

## Returns

`Promise<MemorySetResponse>` — A promise that resolves with the response from the memory set event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.memory.addKnowledge('key', /* MemoryValue */);
console.log(result);
```
