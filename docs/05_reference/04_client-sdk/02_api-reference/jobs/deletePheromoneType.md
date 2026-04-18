---
name: deletePheromoneType
cbbaseinfo:
  description: "Deletes a pheromone type by its name.

Removes the pheromone type definition from the system. Existing
pheromones of this type on jobs may also be affected."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The unique name of the pheromone type to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when deletion is complete
data:
  name: deletePheromoneType
  category: jobs
  link: deletePheromoneType.md
---
# deletePheromoneType

```typescript
client.jobs.deletePheromoneType(name: string): Promise<void>
```

Deletes a pheromone type by its name.

Removes the pheromone type definition from the system. Existing
pheromones of this type on jobs may also be affected.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The unique name of the pheromone type to delete |

## Returns

**`Promise<void>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.deletePheromoneType('name');
```
