---
name: listInstalledProviders
cbbaseinfo:
  description: Call listInstalledProviders on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<InstalledProvider[]>"
    description: ""
data:
  name: listInstalledProviders
  category: environmentsApi
  link: listInstalledProviders.md
---
# listInstalledProviders

```typescript
plugin.environmentsApi.listInstalledProviders(params?: Record<string, unknown>): Promise<InstalledProvider[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<InstalledProvider[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.listInstalledProviders();
```
