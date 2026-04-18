---
name: getAll
cbbaseinfo:
  description: "Lists all jobs, optionally filtered.

Returns every job in the system unless filter parameters are provided
to narrow the results by status, group, label, or other criteria."
cbparameters:
  parameters:
    - name: params
      typeName: JobListFilters
      description: Optional filter and pagination parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: A promise that resolves to an array of  objects
data:
  name: getAll
  category: jobs
  link: getAll.md
---
# getAll

```typescript
client.jobs.getAll(params?: JobListFilters): Promise<Job[]>
```

Lists all jobs, optionally filtered.

Returns every job in the system unless filter parameters are provided
to narrow the results by status, group, label, or other criteria.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `JobListFilters` _(optional)_ | Optional filter and pagination parameters |

## Returns

**`Promise<Job[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getAll();
```
