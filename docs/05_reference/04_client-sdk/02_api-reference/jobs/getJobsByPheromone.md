---
name: getJobsByPheromone
cbbaseinfo:
  description: "Retrieves all jobs that have a specific pheromone type attached.

Useful for finding jobs that share a common signal, enabling
swarm-style discovery of related work items."
cbparameters:
  parameters:
    - name: type
      typeName: string
      description: The pheromone type name to filter by
      isOptional: false
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: A promise that resolves to an array of  objects carrying the specified pheromone
data:
  name: getJobsByPheromone
  category: jobs
  link: getJobsByPheromone.md
---
# getJobsByPheromone

```typescript
client.jobs.getJobsByPheromone(type: string): Promise<Job[]>
```

Retrieves all jobs that have a specific pheromone type attached.

Useful for finding jobs that share a common signal, enabling
swarm-style discovery of related work items.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `type` | `string` | The pheromone type name to filter by |

## Returns

**`Promise<Job[]>`** — A promise that resolves to an array of  objects carrying the specified pheromone

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getJobsByPheromone('type');
```
