---
name: updateInstalledProvider
cbbaseinfo:
  description: Call updateInstalledProvider on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateInstalledProviderRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<InstalledProvider>"
    description: ""
data:
  name: updateInstalledProvider
  category: environmentsApi
  link: updateInstalledProvider.md
---
# updateInstalledProvider

```typescript
plugin.environmentsApi.updateInstalledProvider(id: string, data: UpdateInstalledProviderRequest): Promise<InstalledProvider>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateInstalledProviderRequest` |  |

## Returns

**`Promise<InstalledProvider>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.updateInstalledProvider('id', /* UpdateInstalledProviderRequest */);
```
