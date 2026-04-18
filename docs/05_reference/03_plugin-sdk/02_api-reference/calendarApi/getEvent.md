---
name: getEvent
cbbaseinfo:
  description: Call getEvent on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<CalendarEvent>"
    description: ""
data:
  name: getEvent
  category: calendarApi
  link: getEvent.md
---
# getEvent

```typescript
plugin.calendarApi.getEvent(id: string): Promise<CalendarEvent>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<CalendarEvent>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.getEvent('id');
```
