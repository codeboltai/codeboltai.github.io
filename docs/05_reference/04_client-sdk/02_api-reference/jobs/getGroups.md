---
name: getGroups
cbbaseinfo:
  description: "Lists all job groups.

Job groups organize related jobs into logical collections, making
it easier to manage large numbers of jobs."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<JobGroup[]>"
    description: A promise that resolves to an array of  objects
data:
  name: getGroups
  category: jobs
  link: getGroups.md
---
# getGroups

```typescript
client.jobs.getGroups(): Promise<JobGroup[]>
```

Lists all job groups.

Job groups organize related jobs into logical collections, making
it easier to manage large numbers of jobs.

## Parameters

_None_

## Returns

**`Promise<JobGroup[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getGroups();
```
