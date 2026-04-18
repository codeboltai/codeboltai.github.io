---
name: get
cbbaseinfo:
  description: "Retrieves a specific job by its ID.

Returns the full details of a single job including its status,
dependencies, labels, and pheromones."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the job
      isOptional: false
  returns:
    signatureTypeName: "Promise<Job>"
    description: A promise that resolves to the
data:
  name: get
  category: jobs
  link: get.md
---
# get

```typescript
client.jobs.get(id: string): Promise<Job>
```

Retrieves a specific job by its ID.

Returns the full details of a single job including its status,
dependencies, labels, and pheromones.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the job |

## Returns

**`Promise<Job>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.get('id');
```
