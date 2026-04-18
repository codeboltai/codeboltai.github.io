---
name: appendEvents
cbbaseinfo:
  description: Append multiple events to the log
cbparameters:
  parameters:
    - name: params
      typeName: AppendEventsParams
      description: Events parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogAppendMultipleResponse>"
    description: ""
data:
  name: appendEvents
  category: eventLog
  link: appendEvents.md
---
# appendEvents

```typescript
plugin.eventLog.appendEvents(params: AppendEventsParams): Promise<EventLogAppendMultipleResponse>
```

Append multiple events to the log

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `AppendEventsParams` | Events parameters |

## Returns

**`Promise<EventLogAppendMultipleResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.appendEvents(/* AppendEventsParams */);
```
