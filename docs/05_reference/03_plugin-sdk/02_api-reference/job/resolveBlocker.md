---
name: resolveBlocker
cbbaseinfo:
  description: Call resolveBlocker on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: blockerId
      typeName: string
      description: ""
      isOptional: false
    - name: resolvedBy
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobBlockerResolveResponse>"
    description: ""
data:
  name: resolveBlocker
  category: job
  link: resolveBlocker.md
---
# resolveBlocker

```typescript
plugin.job.resolveBlocker(jobId: string, blockerId: string, resolvedBy: string): Promise<JobBlockerResolveResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `blockerId` | `string` |  |
| `resolvedBy` | `string` |  |

## Returns

**`Promise<JobBlockerResolveResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.resolveBlocker('jobId', 'blockerId', 'resolvedBy');
```
