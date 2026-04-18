---
name: checkEnvironment
cbbaseinfo:
  description: Call checkEnvironment on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CheckEnvironmentRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: checkEnvironment
  category: projectsApi
  link: checkEnvironment.md
---
# checkEnvironment

```typescript
plugin.projectsApi.checkEnvironment(data: CheckEnvironmentRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckEnvironmentRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.checkEnvironment(/* CheckEnvironmentRequest */);
```
