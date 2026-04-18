---
name: getAgentFromLocal
cbbaseinfo:
  description: "Retrieves the agent stored in local storage.

Returns the agent configuration that has been persisted locally,
typically the last-used or default agent for the current workspace."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the locally stored Agent
data:
  name: getAgentFromLocal
  category: agents
  link: getAgentFromLocal.md
---
# getAgentFromLocal

```typescript
client.agents.getAgentFromLocal(): Promise<Agent>
```

Retrieves the agent stored in local storage.

Returns the agent configuration that has been persisted locally,
typically the last-used or default agent for the current workspace.

## Parameters

_None_

## Returns

**`Promise<Agent>`** — A promise that resolves to the locally stored Agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getAgentFromLocal();
```
