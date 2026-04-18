---
name: addDependency
cbbaseinfo:
  description: Call addDependency on the Plugin SDK job module.
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
    - name: type
      typeName: DependencyType
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<JobDependencyResponse>"
    description: ""
data:
  name: addDependency
  category: job
  link: addDependency.md
---
# addDependency

```typescript
plugin.job.addDependency(jobId: string, targetId: string, type?: DependencyType): Promise<JobDependencyResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `targetId` | `string` |  |
| `type` | `DependencyType` _(optional)_ |  |

## Returns

**`Promise<JobDependencyResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.addDependency('jobId', 'targetId');
```
