---
name: installProvider
cbbaseinfo:
  description: Call installProvider on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: InstallProviderRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<InstalledProvider>"
    description: ""
data:
  name: installProvider
  category: environmentsApi
  link: installProvider.md
---
# installProvider

```typescript
plugin.environmentsApi.installProvider(data: InstallProviderRequest): Promise<InstalledProvider>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InstallProviderRequest` |  |

## Returns

**`Promise<InstalledProvider>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.installProvider(/* InstallProviderRequest */);
```
