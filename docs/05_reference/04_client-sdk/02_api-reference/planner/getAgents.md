---
name: getAgents
cbbaseinfo:
  description: "Retrieves all agents registered in the planner.

Returns the list of agents that have been assigned tasks or are available for task
assignment. Each agent includes its current workload and assignment information."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<PlannerAgent[]>"
    description: A promise that resolves to an array of planner agents
data:
  name: getAgents
  category: planner
  link: getAgents.md
---
# getAgents

```typescript
client.planner.getAgents(): Promise<PlannerAgent[]>
```

Retrieves all agents registered in the planner.

Returns the list of agents that have been assigned tasks or are available for task
assignment. Each agent includes its current workload and assignment information.

## Parameters

_None_

## Returns

**`Promise<PlannerAgent[]>`** — A promise that resolves to an array of planner agents

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.planner.getAgents();
```
