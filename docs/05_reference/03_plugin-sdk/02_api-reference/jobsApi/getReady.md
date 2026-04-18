---
name: getReady
cbbaseinfo:
  description: Call getReady on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: ""
data:
  name: getReady
  category: jobsApi
  link: getReady.md
---
# getReady

```typescript
plugin.jobsApi.getReady(): Promise<Job[]>
```



## Parameters

_None_

## Returns

**`Promise<Job[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getReady();
```
