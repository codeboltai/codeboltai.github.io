---
name: getPheromoneTypes
cbbaseinfo:
  description: "Retrieves the list of available pheromone types.

Pheromones are tags or signals that can be attached to review requests to communicate
metadata to other agents. This returns the set of recognized pheromone type strings."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of pheromone type name strings
data:
  name: getPheromoneTypes
  category: reviewMerge
  link: getPheromoneTypes.md
---
# getPheromoneTypes

```typescript
client.reviewMerge.getPheromoneTypes(): Promise<string[]>
```

Retrieves the list of available pheromone types.

Pheromones are tags or signals that can be attached to review requests to communicate
metadata to other agents. This returns the set of recognized pheromone type strings.

## Parameters

_None_

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of pheromone type name strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.getPheromoneTypes();
```
