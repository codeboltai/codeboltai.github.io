---
name: getEpisodicTags
cbbaseinfo:
  description: "Retrieves the distinct tags applied to events in an episodic memory.

Returns the unique set of tag strings used across all events in the memory."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory
      isOptional: false
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of tag strings
data:
  name: getEpisodicTags
  category: memory
  link: getEpisodicTags.md
---
# getEpisodicTags

```typescript
client.memory.getEpisodicTags(id: string): Promise<string[]>
```

Retrieves the distinct tags applied to events in an episodic memory.

Returns the unique set of tag strings used across all events in the memory.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory |

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of tag strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getEpisodicTags('id');
```
