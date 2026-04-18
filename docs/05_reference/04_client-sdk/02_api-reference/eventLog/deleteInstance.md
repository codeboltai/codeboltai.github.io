---
name: deleteInstance
cbbaseinfo:
  description: "Deletes an event log instance and all its associated events.

Permanently removes the instance. This action cannot be undone."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the event log instance to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteInstance
  category: eventLog
  link: deleteInstance.md
---
# deleteInstance

```typescript
client.eventLog.deleteInstance(id: string): Promise<unknown>
```

Deletes an event log instance and all its associated events.

Permanently removes the instance. This action cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the event log instance to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.eventLog.deleteInstance('id');
```
