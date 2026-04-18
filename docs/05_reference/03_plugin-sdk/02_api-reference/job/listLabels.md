---
name: listLabels
cbbaseinfo:
  description: Call listLabels on the Plugin SDK job module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<JobLabelsResponse>"
    description: ""
data:
  name: listLabels
  category: job
  link: listLabels.md
---
# listLabels

```typescript
plugin.job.listLabels(): Promise<JobLabelsResponse>
```



## Parameters

_None_

## Returns

**`Promise<JobLabelsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.listLabels();
```
