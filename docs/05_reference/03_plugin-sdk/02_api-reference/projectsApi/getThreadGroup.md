---
name: getThreadGroup
cbbaseinfo:
  description: Call getThreadGroup on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskGroup | null>"
    description: ""
data:
  name: getThreadGroup
  category: projectsApi
  link: getThreadGroup.md
---
# getThreadGroup

```typescript
plugin.projectsApi.getThreadGroup(threadId: string): Promise<TaskGroup | null>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<TaskGroup | null>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getThreadGroup('threadId');
```
