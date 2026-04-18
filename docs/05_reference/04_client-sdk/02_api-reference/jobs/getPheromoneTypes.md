---
name: getPheromoneTypes
cbbaseinfo:
  description: "Retrieves all registered pheromone types.

Pheromone types define the categories of signals that can be attached
to jobs for swarm-style coordination between agents."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<PheromoneType[]>"
    description: A promise that resolves to an array of  definitions
data:
  name: getPheromoneTypes
  category: jobs
  link: getPheromoneTypes.md
---
# getPheromoneTypes

```typescript
client.jobs.getPheromoneTypes(): Promise<PheromoneType[]>
```

Retrieves all registered pheromone types.

Pheromone types define the categories of signals that can be attached
to jobs for swarm-style coordination between agents.

## Parameters

_None_

## Returns

**`Promise<PheromoneType[]>`** — A promise that resolves to an array of  definitions

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.getPheromoneTypes();
```
