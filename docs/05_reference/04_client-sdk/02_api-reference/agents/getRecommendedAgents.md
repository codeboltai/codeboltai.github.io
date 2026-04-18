---
name: getRecommendedAgents
cbbaseinfo:
  description: "Retrieves recommended agents based on the current context.

Returns agents that are suggested based on the current project type,
user preferences, or usage patterns."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Agent[]>"
    description: A promise that resolves to an array of recommended Agent objects
data:
  name: getRecommendedAgents
  category: agents
  link: getRecommendedAgents.md
---
# getRecommendedAgents

```typescript
client.agents.getRecommendedAgents(): Promise<Agent[]>
```

Retrieves recommended agents based on the current context.

Returns agents that are suggested based on the current project type,
user preferences, or usage patterns.

## Parameters

_None_

## Returns

**`Promise<Agent[]>`** — A promise that resolves to an array of recommended Agent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getRecommendedAgents();
```
