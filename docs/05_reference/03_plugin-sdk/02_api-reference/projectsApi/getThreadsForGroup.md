---
name: getThreadsForGroup
cbbaseinfo:
  description: Call getThreadsForGroup on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: groupId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<string[]>"
    description: ""
data:
  name: getThreadsForGroup
  category: projectsApi
  link: getThreadsForGroup.md
---
# getThreadsForGroup

```typescript
plugin.projectsApi.getThreadsForGroup(groupId: string): Promise<string[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `groupId` | `string` |  |

## Returns

**`Promise<string[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getThreadsForGroup('groupId');
```
