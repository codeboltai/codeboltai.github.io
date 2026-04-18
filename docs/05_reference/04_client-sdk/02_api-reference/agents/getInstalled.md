---
name: getInstalled
cbbaseinfo:
  description: "Retrieves all installed agents.

Returns every agent that has been installed in the current CodeBolt
environment, whether from the registry or locally."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Agent[]>"
    description: A promise that resolves to an array of installed Agent objects
data:
  name: getInstalled
  category: agents
  link: getInstalled.md
---
# getInstalled

```typescript
client.agents.getInstalled(): Promise<Agent[]>
```

Retrieves all installed agents.

Returns every agent that has been installed in the current CodeBolt
environment, whether from the registry or locally.

## Parameters

_None_

## Returns

**`Promise<Agent[]>`** — A promise that resolves to an array of installed Agent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getInstalled();
```
