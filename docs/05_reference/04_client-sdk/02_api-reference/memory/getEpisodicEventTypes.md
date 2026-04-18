---
name: getEpisodicEventTypes
cbbaseinfo:
  description: "Retrieves the distinct event types used in an episodic memory.

Returns the unique set of event type strings present in the memory, useful for
building filter UIs or understanding the kinds of events that were recorded."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory
      isOptional: false
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of event type strings
data:
  name: getEpisodicEventTypes
  category: memory
  link: getEpisodicEventTypes.md
---
# getEpisodicEventTypes

```typescript
client.memory.getEpisodicEventTypes(id: string): Promise<string[]>
```

Retrieves the distinct event types used in an episodic memory.

Returns the unique set of event type strings present in the memory, useful for
building filter UIs or understanding the kinds of events that were recorded.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory |

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of event type strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getEpisodicEventTypes('id');
```
