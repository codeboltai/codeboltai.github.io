---
name: getEnvironmentStatistics
cbbaseinfo:
  description: Call getEnvironmentStatistics on the Plugin SDK environment module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: getEnvironmentStatistics
  category: environment
  link: getEnvironmentStatistics.md
---
# getEnvironmentStatistics

```typescript
plugin.environment.getEnvironmentStatistics(): Promise<any>
```



## Parameters

_None_

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.getEnvironmentStatistics();
```
