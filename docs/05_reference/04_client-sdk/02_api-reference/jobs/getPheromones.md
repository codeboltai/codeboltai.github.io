---
name: getPheromones
cbbaseinfo:
  description: "Retrieves all pheromones attached to a specific job.

Returns the list of pheromone signals that have been deposited on the
job by agents, useful for understanding the job's coordination state."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the job
      isOptional: false
  returns:
    signatureTypeName: "Promise<Pheromone[]>"
    description: A promise that resolves to an array of  objects
data:
  name: getPheromones
  category: jobs
  link: getPheromones.md
---
# getPheromones

```typescript
client.jobs.getPheromones(id: string): Promise<Pheromone[]>
```

Retrieves all pheromones attached to a specific job.

Returns the list of pheromone signals that have been deposited on the
job by agents, useful for understanding the job's coordination state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the job |

## Returns

**`Promise<Pheromone[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getPheromones('id');
```
