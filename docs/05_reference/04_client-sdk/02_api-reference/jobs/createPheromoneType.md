---
name: createPheromoneType
cbbaseinfo:
  description: "Creates a new pheromone type definition.

Registers a new category of pheromone that can subsequently be
deposited on jobs. Pheromone types are system-wide and shared
across all jobs."
cbparameters:
  parameters:
    - name: data
      typeName: CreatePheromoneTypeRequest
      description: Pheromone type creation payload including name and configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<PheromoneType>"
    description: A promise that resolves to the newly created
data:
  name: createPheromoneType
  category: jobs
  link: createPheromoneType.md
---
# createPheromoneType

```typescript
client.jobs.createPheromoneType(data: CreatePheromoneTypeRequest): Promise<PheromoneType>
```

Creates a new pheromone type definition.

Registers a new category of pheromone that can subsequently be
deposited on jobs. Pheromone types are system-wide and shared
across all jobs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreatePheromoneTypeRequest` | Pheromone type creation payload including name and configuration |

## Returns

**`Promise<PheromoneType>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.createPheromoneType(/* CreatePheromoneTypeRequest */);
```
