---
name: getLabels
cbbaseinfo:
  description: Call getLabels on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<JobLabel[]>"
    description: ""
data:
  name: getLabels
  category: jobsApi
  link: getLabels.md
---
# getLabels

```typescript
plugin.jobsApi.getLabels(): Promise<JobLabel[]>
```



## Parameters

_None_

## Returns

**`Promise<JobLabel[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getLabels();
```
