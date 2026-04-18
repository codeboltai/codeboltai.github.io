---
name: updateInstance
cbbaseinfo:
  description: "Updates an existing event log instance.

Modifies the instance's properties such as name, description, or
configuration settings."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the event log instance to update
      isOptional: false
    - name: data
      typeName: UpdateEventLogInstanceRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogInstance>"
    description: A promise that resolves to the updated
data:
  name: updateInstance
  category: eventLog
  link: updateInstance.md
---
# updateInstance

```typescript
client.eventLog.updateInstance(id: string, data: UpdateEventLogInstanceRequest): Promise<EventLogInstance>
```

Updates an existing event log instance.

Modifies the instance's properties such as name, description, or
configuration settings.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the event log instance to update |
| `data` | `UpdateEventLogInstanceRequest` | The fields to update |

## Returns

**`Promise<EventLogInstance>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.eventLog.updateInstance('id', /* UpdateEventLogInstanceRequest */);
```
