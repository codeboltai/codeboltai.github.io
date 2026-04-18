---
name: getFeaturedAgents
cbbaseinfo:
  description: "Retrieves featured agents from the agent registry.

Returns a curated list of agents that are highlighted or promoted
in the CodeBolt marketplace."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Agent[]>"
    description: A promise that resolves to an array of featured Agent objects
data:
  name: getFeaturedAgents
  category: agents
  link: getFeaturedAgents.md
---
# getFeaturedAgents

```typescript
client.agents.getFeaturedAgents(): Promise<Agent[]>
```

Retrieves featured agents from the agent registry.

Returns a curated list of agents that are highlighted or promoted
in the CodeBolt marketplace.

## Parameters

_None_

## Returns

**`Promise<Agent[]>`** — A promise that resolves to an array of featured Agent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getFeaturedAgents();
```
