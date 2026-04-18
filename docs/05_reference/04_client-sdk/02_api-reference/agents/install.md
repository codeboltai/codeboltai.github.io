---
name: install
cbbaseinfo:
  description: "Installs an agent from the remote registry.

Downloads and registers an agent from the CodeBolt agent marketplace,
making it available for local use."
cbparameters:
  parameters:
    - name: data
      typeName: InstallAgentRequest
      description: The installation configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the installed Agent
data:
  name: install
  category: agents
  link: install.md
---
# install

```typescript
client.agents.install(data: InstallAgentRequest): Promise<Agent>
```

Installs an agent from the remote registry.

Downloads and registers an agent from the CodeBolt agent marketplace,
making it available for local use.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InstallAgentRequest` | The installation configuration |

## Returns

**`Promise<Agent>`** — A promise that resolves to the installed Agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.install(/* InstallAgentRequest */);
```
