---
name: getIndex
cbbaseinfo:
  description: Call getIndex on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarIndexEntry[]>"
    description: ""
data:
  name: getIndex
  category: calendarApi
  link: getIndex.md
---
# getIndex

```typescript
plugin.calendarApi.getIndex(params?: CalendarFilterOptions): Promise<CalendarIndexEntry[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ |  |

## Returns

**`Promise<CalendarIndexEntry[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.getIndex();
```
