---
name: getAllRemixAgents
cbbaseinfo:
  description: "Retrieves all remix agents.

Returns every remix agent that has been created in the system."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<RemixAgent[]>"
    description: A promise that resolves to an array of RemixAgent objects
data:
  name: getAllRemixAgents
  category: agents
  link: getAllRemixAgents.md
---
# getAllRemixAgents

```typescript
client.agents.getAllRemixAgents(): Promise<RemixAgent[]>
```

Retrieves all remix agents.

Returns every remix agent that has been created in the system.

## Parameters

_None_

## Returns

**`Promise<RemixAgent[]>`** — A promise that resolves to an array of RemixAgent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getAllRemixAgents();
```
