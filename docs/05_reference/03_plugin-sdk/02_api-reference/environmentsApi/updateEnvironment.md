---
name: updateEnvironment
cbbaseinfo:
  description: Call updateEnvironment on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateEnvironmentRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Environment>"
    description: ""
data:
  name: updateEnvironment
  category: environmentsApi
  link: updateEnvironment.md
---
# updateEnvironment

```typescript
plugin.environmentsApi.updateEnvironment(id: string, data: UpdateEnvironmentRequest): Promise<Environment>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateEnvironmentRequest` |  |

## Returns

**`Promise<Environment>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.updateEnvironment('id', /* UpdateEnvironmentRequest */);
```
