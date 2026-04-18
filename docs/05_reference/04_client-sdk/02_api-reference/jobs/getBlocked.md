---
name: getBlocked
cbbaseinfo:
  description: "Retrieves all currently blocked jobs.

Returns jobs that have unresolved dependencies preventing them from
being executed. Useful for identifying bottlenecks in the job graph."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: A promise that resolves to an array of blocked  objects
data:
  name: getBlocked
  category: jobs
  link: getBlocked.md
---
# getBlocked

```typescript
client.jobs.getBlocked(): Promise<Job[]>
```

Retrieves all currently blocked jobs.

Returns jobs that have unresolved dependencies preventing them from
being executed. Useful for identifying bottlenecks in the job graph.

## Parameters

_None_

## Returns

**`Promise<Job[]>`** — A promise that resolves to an array of blocked  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getBlocked();
```
