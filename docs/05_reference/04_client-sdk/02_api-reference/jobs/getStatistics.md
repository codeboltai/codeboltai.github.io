---
name: getStatistics
cbbaseinfo:
  description: "Retrieves aggregate statistics about the job system.

Returns counts and metrics such as total jobs, jobs by status,
average completion time, and other summary data. Useful for
dashboards and progress reporting."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<JobStatistics>"
    description: A promise that resolves to a  summary
data:
  name: getStatistics
  category: jobs
  link: getStatistics.md
---
# getStatistics

```typescript
client.jobs.getStatistics(): Promise<JobStatistics>
```

Retrieves aggregate statistics about the job system.

Returns counts and metrics such as total jobs, jobs by status,
average completion time, and other summary data. Useful for
dashboards and progress reporting.

## Parameters

_None_

## Returns

**`Promise<JobStatistics>`** — A promise that resolves to a  summary

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getStatistics();
```
