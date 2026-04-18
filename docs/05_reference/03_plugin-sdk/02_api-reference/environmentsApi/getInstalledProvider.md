---
name: getInstalledProvider
cbbaseinfo:
  description: Call getInstalledProvider on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<InstalledProvider>"
    description: ""
data:
  name: getInstalledProvider
  category: environmentsApi
  link: getInstalledProvider.md
---
# getInstalledProvider

```typescript
plugin.environmentsApi.getInstalledProvider(id: string): Promise<InstalledProvider>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<InstalledProvider>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.getInstalledProvider('id');
```
