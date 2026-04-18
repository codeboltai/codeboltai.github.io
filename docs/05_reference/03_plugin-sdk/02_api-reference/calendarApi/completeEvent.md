---
name: completeEvent
cbbaseinfo:
  description: Call completeEvent on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: CompleteEventRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: completeEvent
  category: calendarApi
  link: completeEvent.md
---
# completeEvent

```typescript
plugin.calendarApi.completeEvent(id: string, data?: CompleteEventRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `CompleteEventRequest` _(optional)_ |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.completeEvent('id');
```
