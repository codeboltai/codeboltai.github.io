---
name: convertProposedJob
cbbaseinfo:
  description: "Converts an approved proposed job into an actual job.

Takes a previously approved proposed job and creates a real job from it. The proposed
job must have been approved before conversion."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: proposedJobId
      typeName: string
      description: The unique identifier of the approved proposed job to convert
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional additional data for the conversion
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the proposed job has been converted
data:
  name: convertProposedJob
  category: reviewMerge
  link: convertProposedJob.md
---
# convertProposedJob

```typescript
client.reviewMerge.convertProposedJob(id: string, proposedJobId: string, data?: Record<string, unknown>): Promise<unknown>
```

Converts an approved proposed job into an actual job.

Takes a previously approved proposed job and creates a real job from it. The proposed
job must have been approved before conversion.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `proposedJobId` | `string` | The unique identifier of the approved proposed job to convert |
| `data` | `Record<string, unknown>` _(optional)_ | Optional additional data for the conversion |

## Returns

**`Promise<unknown>`** — A promise that resolves when the proposed job has been converted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.convertProposedJob('id', 'proposedJobId');
```
