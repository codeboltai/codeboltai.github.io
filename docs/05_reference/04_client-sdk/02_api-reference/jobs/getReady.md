---
name: getReady
cbbaseinfo:
  description: "Retrieves all jobs that are ready to execute.

Returns jobs whose dependencies have all been satisfied, meaning
they can be picked up by agents immediately."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: A promise that resolves to an array of ready  objects
data:
  name: getReady
  category: jobs
  link: getReady.md
---
# getReady

```typescript
client.jobs.getReady(): Promise<Job[]>
```

Retrieves all jobs that are ready to execute.

Returns jobs whose dependencies have all been satisfied, meaning
they can be picked up by agents immediately.

## Parameters

_None_

## Returns

**`Promise<Job[]>`** — A promise that resolves to an array of ready  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getReady();
```
