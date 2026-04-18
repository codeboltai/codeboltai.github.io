---
name: checkProjectName
cbbaseinfo:
  description: Call checkProjectName on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CheckProjectNameRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: checkProjectName
  category: projectsApi
  link: checkProjectName.md
---
# checkProjectName

```typescript
plugin.projectsApi.checkProjectName(data: CheckProjectNameRequest): Promise<object>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckProjectNameRequest` |  |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.checkProjectName(/* CheckProjectNameRequest */);
```
