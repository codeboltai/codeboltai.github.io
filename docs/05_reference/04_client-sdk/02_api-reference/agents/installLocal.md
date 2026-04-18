---
name: installLocal
cbbaseinfo:
  description: "Installs an agent from a local file path.

Loads and registers an agent from the local filesystem, making it
available for use in the runtime."
cbparameters:
  parameters:
    - name: data
      typeName: InstallLocalAgentRequest
      description: The local installation configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the installed Agent
data:
  name: installLocal
  category: agents
  link: installLocal.md
---
# installLocal

```typescript
client.agents.installLocal(data: InstallLocalAgentRequest): Promise<Agent>
```

Installs an agent from a local file path.

Loads and registers an agent from the local filesystem, making it
available for use in the runtime.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InstallLocalAgentRequest` | The local installation configuration |

## Returns

**`Promise<Agent>`** — A promise that resolves to the installed Agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.installLocal(/* InstallLocalAgentRequest */);
```
