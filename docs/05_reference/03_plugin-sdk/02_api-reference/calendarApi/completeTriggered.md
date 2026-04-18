---
name: completeTriggered
cbbaseinfo:
  description: Call completeTriggered on the Plugin SDK calendarApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CompleteTriggeredRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: completeTriggered
  category: calendarApi
  link: completeTriggered.md
---
# completeTriggered

```typescript
plugin.calendarApi.completeTriggered(data: CompleteTriggeredRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CompleteTriggeredRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendarApi.completeTriggered(/* CompleteTriggeredRequest */);
```
