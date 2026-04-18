---
name: deleteEnvironment
cbbaseinfo:
  description: Call deleteEnvironment on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteEnvironment
  category: environmentsApi
  link: deleteEnvironment.md
---
# deleteEnvironment

```typescript
plugin.environmentsApi.deleteEnvironment(id: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.deleteEnvironment('id');
```
