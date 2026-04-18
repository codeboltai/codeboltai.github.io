---
name: getLocalProviders
cbbaseinfo:
  description: Call getLocalProviders on the Plugin SDK environment module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: getLocalProviders
  category: environment
  link: getLocalProviders.md
---
# getLocalProviders

```typescript
plugin.environment.getLocalProviders(): Promise<any>
```



## Parameters

_None_

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.getLocalProviders();
```
