---
name: createInstalledProvider
cbbaseinfo:
  description: Call createInstalledProvider on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateInstalledProviderRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<InstalledProvider>"
    description: ""
data:
  name: createInstalledProvider
  category: environmentsApi
  link: createInstalledProvider.md
---
# createInstalledProvider

```typescript
plugin.environmentsApi.createInstalledProvider(data: CreateInstalledProviderRequest): Promise<InstalledProvider>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateInstalledProviderRequest` |  |

## Returns

**`Promise<InstalledProvider>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.createInstalledProvider(/* CreateInstalledProviderRequest */);
```
