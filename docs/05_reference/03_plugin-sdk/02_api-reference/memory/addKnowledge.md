---
name: addKnowledge
cbbaseinfo:
  description: Adds a key-value pair to the in-memory database.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key under which to store the value.
      isOptional: false
    - name: value
      typeName: MemoryValue
      description: The value to be stored.
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemorySetResponse>"
    description: A promise that resolves with the response from the memory set event.
data:
  name: addKnowledge
  category: memory
  link: addKnowledge.md
---
# addKnowledge

```typescript
plugin.memory.addKnowledge(key: string, value: MemoryValue): Promise<MemorySetResponse>
```

Adds a key-value pair to the in-memory database.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `key` | `string` | The key under which to store the value. |
| `value` | `MemoryValue` | The value to be stored. |

## Returns

**`Promise<MemorySetResponse>`** — A promise that resolves with the response from the memory set event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.memory.addKnowledge('key', /* MemoryValue */);
```
