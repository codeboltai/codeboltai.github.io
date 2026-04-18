---
title: Memory API
---

# Memory API

The `memory` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addKnowledge`](./addKnowledge) | Adds a key-value pair to the in-memory database. |
| [`getKnowledge`](./getKnowledge) | Retrieves a value from the in-memory database by key. |

## Methods

---

### `addKnowledge`

```typescript
plugin.memory.addKnowledge(key: string, value: MemoryValue): Promise<MemorySetResponse>
```

Adds a key-value pair to the in-memory database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key under which to store the value. |
| `value` | `MemoryValue` | Yes | The value to be stored. |

**Returns:** `Promise<MemorySetResponse>` — A promise that resolves with the response from the memory set event.

[Full reference →](./addKnowledge)

---

### `getKnowledge`

```typescript
plugin.memory.getKnowledge(key: string): Promise<MemoryGetResponse>
```

Retrieves a value from the in-memory database by key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key of the value to retrieve. |

**Returns:** `Promise<MemoryGetResponse>` — A promise that resolves with the response from the memory get event.

[Full reference →](./getKnowledge)

