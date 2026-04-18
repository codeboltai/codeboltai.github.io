---
name: listInstances
cbbaseinfo:
  description: "Lists all event log instances.

Returns every event log instance in the system. Use optional parameters
to filter or paginate the results."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<EventLogInstance[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listInstances
  category: eventLog
  link: listInstances.md
---
# listInstances

```typescript
client.eventLog.listInstances(params?: Record<string, unknown>): Promise<EventLogInstance[]>
```

Lists all event log instances.

Returns every event log instance in the system. Use optional parameters
to filter or paginate the results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<EventLogInstance[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.eventLog.listInstances();
```
