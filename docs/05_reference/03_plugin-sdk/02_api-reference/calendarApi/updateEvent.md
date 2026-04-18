---
name: updateEvent
cbbaseinfo:
  description: Call updateEvent on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateCalendarEventRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<CalendarEvent>"
    description: ""
data:
  name: updateEvent
  category: calendarApi
  link: updateEvent.md
---
# updateEvent

```typescript
plugin.calendarApi.updateEvent(id: string, data: UpdateCalendarEventRequest): Promise<CalendarEvent>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateCalendarEventRequest` |  |

## Returns

**`Promise<CalendarEvent>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.updateEvent('id', /* UpdateCalendarEventRequest */);
```
