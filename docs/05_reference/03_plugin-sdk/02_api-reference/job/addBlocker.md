---
name: addBlocker
cbbaseinfo:
  description: Call addBlocker on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: blocker
      typeName: AddBlockerData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobBlockerAddResponse>"
    description: ""
data:
  name: addBlocker
  category: job
  link: addBlocker.md
---
# addBlocker

```typescript
plugin.job.addBlocker(jobId: string, blocker: AddBlockerData): Promise<JobBlockerAddResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `blocker` | `AddBlockerData` |  |

## Returns

**`Promise<JobBlockerAddResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.addBlocker('jobId', /* AddBlockerData */);
```
