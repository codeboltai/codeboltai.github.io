---
name: getTaskList
cbbaseinfo:
  description: Retrieves a list of tasks.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: Optional filters for tasks
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: getTaskList
  category: task
  link: getTaskList.md
---
# getTaskList

```typescript
plugin.task.getTaskList(options: object): Promise<object>
```

Retrieves a list of tasks.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | Optional filters for tasks Default: `{}` |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.getTaskList(/* object */);
```
