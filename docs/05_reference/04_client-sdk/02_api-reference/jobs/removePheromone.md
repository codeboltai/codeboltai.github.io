---
name: removePheromone
cbbaseinfo:
  description: "Removes a pheromone of a specific type from a job.

Clears the pheromone signal, which may affect coordination behavior
of agents that rely on its presence."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the job
      isOptional: false
    - name: type
      typeName: string
      description: The pheromone type name to remove
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the pheromone has been removed
data:
  name: removePheromone
  category: jobs
  link: removePheromone.md
---
# removePheromone

```typescript
client.jobs.removePheromone(id: string, type: string): Promise<void>
```

Removes a pheromone of a specific type from a job.

Clears the pheromone signal, which may affect coordination behavior
of agents that rely on its presence.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the job |
| `type` | `string` | The pheromone type name to remove |

## Returns

**`Promise<void>`** — A promise that resolves when the pheromone has been removed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.removePheromone('id', 'type');
```
