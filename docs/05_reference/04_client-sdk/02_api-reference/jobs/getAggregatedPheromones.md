---
name: getAggregatedPheromones
cbbaseinfo:
  description: "Retrieves aggregated pheromone data for a job.

Returns a summary of all pheromone signals on the job, grouped and
aggregated by type. Useful for dashboards and high-level status views."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the job
      isOptional: false
  returns:
    signatureTypeName: "Promise<Record<string, unknown>>"
    description: A promise that resolves to a record of aggregated pheromone data keyed by type
data:
  name: getAggregatedPheromones
  category: jobs
  link: getAggregatedPheromones.md
---
# getAggregatedPheromones

```typescript
client.jobs.getAggregatedPheromones(id: string): Promise<Record<string, unknown>>
```

Retrieves aggregated pheromone data for a job.

Returns a summary of all pheromone signals on the job, grouped and
aggregated by type. Useful for dashboards and high-level status views.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the job |

## Returns

**`Promise<Record<string, unknown>>`** — A promise that resolves to a record of aggregated pheromone data keyed by type

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getAggregatedPheromones('id');
```
