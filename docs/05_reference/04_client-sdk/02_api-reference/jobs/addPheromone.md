---
name: addPheromone
cbbaseinfo:
  description: "Deposits a pheromone signal on a job.

Attaches a pheromone of the specified type to the job, which other
agents can detect and use for coordination decisions."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the job
      isOptional: false
    - name: data
      typeName: PheromoneDepositRequest
      description: Pheromone deposit payload including type and value
      isOptional: false
  returns:
    signatureTypeName: "Promise<Pheromone>"
    description: A promise that resolves to the created
data:
  name: addPheromone
  category: jobs
  link: addPheromone.md
---
# addPheromone

```typescript
client.jobs.addPheromone(id: string, data: PheromoneDepositRequest): Promise<Pheromone>
```

Deposits a pheromone signal on a job.

Attaches a pheromone of the specified type to the job, which other
agents can detect and use for coordination decisions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the job |
| `data` | `PheromoneDepositRequest` | Pheromone deposit payload including type and value |

## Returns

**`Promise<Pheromone>`** — A promise that resolves to the created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.addPheromone('id', /* PheromoneDepositRequest */);
```
