---
name: queryEvents
cbbaseinfo:
  description: Query events using DSL
cbparameters:
  parameters:
    - name: query
      typeName: EventLogDSL
      description: Query DSL object
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogQueryResponse>"
    description: ""
data:
  name: queryEvents
  category: eventLog
  link: queryEvents.md
---
# queryEvents

```typescript
plugin.eventLog.queryEvents(query: EventLogDSL): Promise<EventLogQueryResponse>
```

Query events using DSL

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `query` | `EventLogDSL` | Query DSL object |

## Returns

**`Promise<EventLogQueryResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.queryEvents(/* EventLogDSL */);
```
