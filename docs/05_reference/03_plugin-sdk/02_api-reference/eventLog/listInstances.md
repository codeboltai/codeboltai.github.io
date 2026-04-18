---
name: listInstances
cbbaseinfo:
  description: List all event log instances
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<EventLogInstanceListResponse>"
    description: ""
data:
  name: listInstances
  category: eventLog
  link: listInstances.md
---
# listInstances

```typescript
plugin.eventLog.listInstances(): Promise<EventLogInstanceListResponse>
```

List all event log instances

## Parameters

_None_

## Returns

**`Promise<EventLogInstanceListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.listInstances();
```
