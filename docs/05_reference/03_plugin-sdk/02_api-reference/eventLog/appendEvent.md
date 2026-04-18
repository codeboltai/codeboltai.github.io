---
name: appendEvent
cbbaseinfo:
  description: Append a single event to the log
cbparameters:
  parameters:
    - name: params
      typeName: AppendEventParams
      description: Event parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogAppendResponse>"
    description: ""
data:
  name: appendEvent
  category: eventLog
  link: appendEvent.md
---
# appendEvent

```typescript
plugin.eventLog.appendEvent(params: AppendEventParams): Promise<EventLogAppendResponse>
```

Append a single event to the log

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `AppendEventParams` | Event parameters |

## Returns

**`Promise<EventLogAppendResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.appendEvent(/* AppendEventParams */);
```
