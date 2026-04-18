---
name: getKnowledge
cbbaseinfo:
  description: Retrieves a value from the in-memory database by key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the value to retrieve.
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryGetResponse>"
    description: A promise that resolves with the response from the memory get event.
data:
  name: getKnowledge
  category: memory
  link: getKnowledge.md
---
# getKnowledge

```typescript
plugin.memory.getKnowledge(key: string): Promise<MemoryGetResponse>
```

Retrieves a value from the in-memory database by key.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `key` | `string` | The key of the value to retrieve. |

## Returns

**`Promise<MemoryGetResponse>`** — A promise that resolves with the response from the memory get event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.memory.getKnowledge('key');
```
