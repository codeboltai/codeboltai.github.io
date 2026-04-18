---
name: getInstance
cbbaseinfo:
  description: "Retrieves a specific event log instance by its ID.

Returns the full details of a single event log instance including
its metadata and configuration."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the event log instance
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogInstance>"
    description: A promise that resolves to the
data:
  name: getInstance
  category: eventLog
  link: getInstance.md
---
# getInstance

```typescript
client.eventLog.getInstance(id: string): Promise<EventLogInstance>
```

Retrieves a specific event log instance by its ID.

Returns the full details of a single event log instance including
its metadata and configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the event log instance |

## Returns

**`Promise<EventLogInstance>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.eventLog.getInstance('id');
```
