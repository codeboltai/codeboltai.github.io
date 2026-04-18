---
name: create
cbbaseinfo:
  description: "Creates a new job.

Registers a work item that can be assigned to agents, tracked through
its lifecycle, and coordinated with other jobs via dependencies."
cbparameters:
  parameters:
    - name: data
      typeName: CreateJobRequest
      description: Job creation payload including title, description, and configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Job>"
    description: A promise that resolves to the newly created
data:
  name: create
  category: jobs
  link: create.md
---
# create

```typescript
client.jobs.create(data: CreateJobRequest): Promise<Job>
```

Creates a new job.

Registers a work item that can be assigned to agents, tracked through
its lifecycle, and coordinated with other jobs via dependencies.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateJobRequest` | Job creation payload including title, description, and configuration |

## Returns

**`Promise<Job>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.create(/* CreateJobRequest */);
```
