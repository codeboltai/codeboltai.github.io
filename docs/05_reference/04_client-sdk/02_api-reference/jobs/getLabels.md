---
name: getLabels
cbbaseinfo:
  description: "Lists all available job labels.

Labels are tags that can be attached to jobs for categorization
and filtering purposes."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<JobLabel[]>"
    description: A promise that resolves to an array of  objects
data:
  name: getLabels
  category: jobs
  link: getLabels.md
---
# getLabels

```typescript
client.jobs.getLabels(): Promise<JobLabel[]>
```

Lists all available job labels.

Labels are tags that can be attached to jobs for categorization
and filtering purposes.

## Parameters

_None_

## Returns

**`Promise<JobLabel[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getLabels();
```
