---
name: getInstalledAgentsAction
cbbaseinfo:
  description: "Retrieves action configurations for all installed agents.

Returns the action capability definitions for each installed agent,
describing what actions they can perform."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<AgentConfig[]>"
    description: A promise that resolves to an array of AgentConfig objects
data:
  name: getInstalledAgentsAction
  category: agents
  link: getInstalledAgentsAction.md
---
# getInstalledAgentsAction

```typescript
client.agents.getInstalledAgentsAction(): Promise<AgentConfig[]>
```

Retrieves action configurations for all installed agents.

Returns the action capability definitions for each installed agent,
describing what actions they can perform.

## Parameters

_None_

## Returns

**`Promise<AgentConfig[]>`** — A promise that resolves to an array of AgentConfig objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getInstalledAgentsAction();
```
