---
name: getTaskDetail
cbbaseinfo:
  description: Retrieves detailed information about a specific task.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: The task detail options
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: getTaskDetail
  category: task
  link: getTaskDetail.md
---
# getTaskDetail

```typescript
plugin.task.getTaskDetail(options: object): Promise<object>
```

Retrieves detailed information about a specific task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | The task detail options |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.getTaskDetail(/* object */);
```
