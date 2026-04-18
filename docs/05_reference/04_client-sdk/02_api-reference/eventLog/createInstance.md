---
name: createInstance
cbbaseinfo:
  description: "Creates a new event log instance.

An event log instance acts as a container that groups related events
together. Create one per logical context (e.g., per agent session or workflow)."
cbparameters:
  parameters:
    - name: data
      typeName: CreateEventLogInstanceRequest
      description: Instance creation payload including name and configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogInstance>"
    description: A promise that resolves to the newly created
data:
  name: createInstance
  category: eventLog
  link: createInstance.md
---
# createInstance

```typescript
client.eventLog.createInstance(data: CreateEventLogInstanceRequest): Promise<EventLogInstance>
```

Creates a new event log instance.

An event log instance acts as a container that groups related events
together. Create one per logical context (e.g., per agent session or workflow).

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateEventLogInstanceRequest` | Instance creation payload including name and configuration |

## Returns

**`Promise<EventLogInstance>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.eventLog.createInstance(/* CreateEventLogInstanceRequest */);
```
