---
name: getRunningAgents
cbbaseinfo:
  description: "Retrieves all currently running agents.

Returns a list of agents that are actively executing in the runtime."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Agent[]>"
    description: A promise that resolves to an array of running Agent objects
data:
  name: getRunningAgents
  category: agents
  link: getRunningAgents.md
---
# getRunningAgents

```typescript
client.agents.getRunningAgents(): Promise<Agent[]>
```

Retrieves all currently running agents.

Returns a list of agents that are actively executing in the runtime.

## Parameters

_None_

## Returns

**`Promise<Agent[]>`** — A promise that resolves to an array of running Agent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getRunningAgents();
```
