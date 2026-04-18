---
name: createEvent
cbbaseinfo:
  description: Call createEvent on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateCalendarEventRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<CalendarEvent>"
    description: ""
data:
  name: createEvent
  category: calendarApi
  link: createEvent.md
---
# createEvent

```typescript
plugin.calendarApi.createEvent(data: CreateCalendarEventRequest): Promise<CalendarEvent>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateCalendarEventRequest` |  |

## Returns

**`Promise<CalendarEvent>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.createEvent(/* CreateCalendarEventRequest */);
```
