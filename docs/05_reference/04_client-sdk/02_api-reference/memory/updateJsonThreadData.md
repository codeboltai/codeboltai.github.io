---
name: updateJsonThreadData
cbbaseinfo:
  description: "Replaces the JSON data payload of a thread.

Updates the structured data stored in the JSON thread. This is separate from metadata
updates to allow efficient data-only writes."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the JSON thread
      isOptional: false
    - name: data
      typeName: UpdateJsonDataRequest
      description: The new JSON data to store
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the data has been updated
data:
  name: updateJsonThreadData
  category: memory
  link: updateJsonThreadData.md
---
# updateJsonThreadData

```typescript
client.memory.updateJsonThreadData(threadId: string, data: UpdateJsonDataRequest): Promise<unknown>
```

Replaces the JSON data payload of a thread.

Updates the structured data stored in the JSON thread. This is separate from metadata
updates to allow efficient data-only writes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the JSON thread |
| `data` | `UpdateJsonDataRequest` | The new JSON data to store |

## Returns

**`Promise<unknown>`** — A promise that resolves when the data has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.updateJsonThreadData('threadId', /* UpdateJsonDataRequest */);
```
