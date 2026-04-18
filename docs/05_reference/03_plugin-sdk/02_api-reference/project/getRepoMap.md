---
name: getRepoMap
cbbaseinfo:
  description: Call getRepoMap on the Plugin SDK project module.
cbparameters:
  parameters:
    - name: message
      typeName: any
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<GetProjectPathResponse>"
    description: ""
data:
  name: getRepoMap
  category: project
  link: getRepoMap.md
---
# getRepoMap

```typescript
plugin.project.getRepoMap(message: any): Promise<GetProjectPathResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

## Returns

**`Promise<GetProjectPathResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.project.getRepoMap(/* any */);
```
