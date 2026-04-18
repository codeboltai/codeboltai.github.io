---
name: getLocalProviders
cbbaseinfo:
  description: Call getLocalProviders on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ProviderData[]>"
    description: ""
data:
  name: getLocalProviders
  category: environmentsApi
  link: getLocalProviders.md
---
# getLocalProviders

```typescript
plugin.environmentsApi.getLocalProviders(): Promise<ProviderData[]>
```



## Parameters

_None_

## Returns

**`Promise<ProviderData[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.getLocalProviders();
```
