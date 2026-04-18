---
name: getStatistics
cbbaseinfo:
  description: Call getStatistics on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<JobStatistics>"
    description: ""
data:
  name: getStatistics
  category: jobsApi
  link: getStatistics.md
---
# getStatistics

```typescript
plugin.jobsApi.getStatistics(): Promise<JobStatistics>
```



## Parameters

_None_

## Returns

**`Promise<JobStatistics>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getStatistics();
```
