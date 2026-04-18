---
name: deleteInstalledProvider
cbbaseinfo:
  description: Call deleteInstalledProvider on the Plugin SDK environmentsApi module.
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
  name: deleteInstalledProvider
  category: environmentsApi
  link: deleteInstalledProvider.md
---
# deleteInstalledProvider

```typescript
plugin.environmentsApi.deleteInstalledProvider(id: string): Promise<unknown>
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

await plugin.environmentsApi.deleteInstalledProvider('id');
```
