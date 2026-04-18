---
name: createTask
cbbaseinfo:
  description: Creates a new task.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: The task creation parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: createTask
  category: task
  link: createTask.md
---
# createTask

```typescript
plugin.task.createTask(options: object): Promise<object>
```

Creates a new task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | The task creation parameters |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.createTask(/* object */);
```
