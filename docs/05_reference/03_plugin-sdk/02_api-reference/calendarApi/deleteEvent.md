---
name: deleteEvent
cbbaseinfo:
  description: Call deleteEvent on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deleteEvent
  category: calendarApi
  link: deleteEvent.md
---
# deleteEvent

```typescript
plugin.calendarApi.deleteEvent(id: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.deleteEvent('id');
```
