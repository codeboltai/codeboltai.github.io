---
name: getRunningProviders
cbbaseinfo:
  description: Call getRunningProviders on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<InstalledProvider[]>"
    description: ""
data:
  name: getRunningProviders
  category: environmentsApi
  link: getRunningProviders.md
---
# getRunningProviders

```typescript
plugin.environmentsApi.getRunningProviders(): Promise<InstalledProvider[]>
```



## Parameters

_None_

## Returns

**`Promise<InstalledProvider[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.getRunningProviders();
```
