---
name: removeBlocker
cbbaseinfo:
  description: Call removeBlocker on the Plugin SDK job module.
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
  returns:
    signatureTypeName: "Promise<JobBlockerRemoveResponse>"
    description: ""
data:
  name: removeBlocker
  category: job
  link: removeBlocker.md
---
# removeBlocker

```typescript
plugin.job.removeBlocker(jobId: string, blockerId: string): Promise<JobBlockerRemoveResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `blockerId` | `string` |  |

## Returns

**`Promise<JobBlockerRemoveResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.removeBlocker('jobId', 'blockerId');
```
