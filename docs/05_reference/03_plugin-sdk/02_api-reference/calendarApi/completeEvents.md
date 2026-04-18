---
name: completeEvents
cbbaseinfo:
  description: Call completeEvents on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: data
      typeName: BulkCompleteEventsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: completeEvents
  category: calendarApi
  link: completeEvents.md
---
# completeEvents

```typescript
plugin.calendarApi.completeEvents(data: BulkCompleteEventsRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BulkCompleteEventsRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.completeEvents(/* BulkCompleteEventsRequest */);
```
