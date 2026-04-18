---
name: removeDependency
cbbaseinfo:
  description: Call removeDependency on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: targetId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: removeDependency
  category: jobsApi
  link: removeDependency.md
---
# removeDependency

```typescript
plugin.jobsApi.removeDependency(id: string, targetId: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `targetId` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.removeDependency('id', 'targetId');
```
