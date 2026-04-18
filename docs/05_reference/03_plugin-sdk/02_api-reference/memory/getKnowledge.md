---
title: getKnowledge
---

# `getKnowledge`

```typescript
plugin.memory.getKnowledge(key: string): Promise<MemoryGetResponse>
```

Retrieves a value from the in-memory database by key.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key of the value to retrieve. |

## Returns

`Promise<MemoryGetResponse>` — A promise that resolves with the response from the memory get event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.memory.getKnowledge('key');
console.log(result);
```
