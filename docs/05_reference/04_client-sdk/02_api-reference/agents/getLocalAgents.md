---
name: getLocalAgents
cbbaseinfo:
  description: "Retrieves agents installed from local sources.

Returns only agents that were installed from the local filesystem,
excluding those from the remote registry."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Agent[]>"
    description: A promise that resolves to an array of locally installed Agent objects
data:
  name: getLocalAgents
  category: agents
  link: getLocalAgents.md
---
# getLocalAgents

```typescript
client.agents.getLocalAgents(): Promise<Agent[]>
```

Retrieves agents installed from local sources.

Returns only agents that were installed from the local filesystem,
excluding those from the remote registry.

## Parameters

_None_

## Returns

**`Promise<Agent[]>`** — A promise that resolves to an array of locally installed Agent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getLocalAgents();
```
