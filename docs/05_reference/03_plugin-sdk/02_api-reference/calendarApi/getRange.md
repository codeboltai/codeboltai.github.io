---
name: getRange
cbbaseinfo:
  description: Call getRange on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarEvent[]>"
    description: ""
data:
  name: getRange
  category: calendarApi
  link: getRange.md
---
# getRange

```typescript
plugin.calendarApi.getRange(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ |  |

## Returns

**`Promise<CalendarEvent[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.getRange();
```
