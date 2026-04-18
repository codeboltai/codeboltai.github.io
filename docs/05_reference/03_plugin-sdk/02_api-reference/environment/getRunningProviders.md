---
name: getRunningProviders
cbbaseinfo:
  description: Call getRunningProviders on the Plugin SDK environment module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: getRunningProviders
  category: environment
  link: getRunningProviders.md
---
# getRunningProviders

```typescript
plugin.environment.getRunningProviders(): Promise<any>
```



## Parameters

_None_

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.getRunningProviders();
```
