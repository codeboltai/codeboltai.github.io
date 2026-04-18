---
name: getGroups
cbbaseinfo:
  description: Call getGroups on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<JobGroup[]>"
    description: ""
data:
  name: getGroups
  category: jobsApi
  link: getGroups.md
---
# getGroups

```typescript
plugin.jobsApi.getGroups(): Promise<JobGroup[]>
```



## Parameters

_None_

## Returns

**`Promise<JobGroup[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getGroups();
```
