---
name: getBlocked
cbbaseinfo:
  description: Call getBlocked on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: ""
data:
  name: getBlocked
  category: jobsApi
  link: getBlocked.md
---
# getBlocked

```typescript
plugin.jobsApi.getBlocked(): Promise<Job[]>
```



## Parameters

_None_

## Returns

**`Promise<Job[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getBlocked();
```
