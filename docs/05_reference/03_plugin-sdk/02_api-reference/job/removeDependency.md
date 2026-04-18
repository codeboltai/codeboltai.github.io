---
name: removeDependency
cbbaseinfo:
  description: Call removeDependency on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: targetId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobDependencyResponse>"
    description: ""
data:
  name: removeDependency
  category: job
  link: removeDependency.md
---
# removeDependency

```typescript
plugin.job.removeDependency(jobId: string, targetId: string): Promise<JobDependencyResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `targetId` | `string` |  |

## Returns

**`Promise<JobDependencyResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.removeDependency('jobId', 'targetId');
```
