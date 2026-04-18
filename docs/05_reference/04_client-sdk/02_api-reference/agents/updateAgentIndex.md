---
name: updateAgentIndex
cbbaseinfo:
  description: "Updates the agent router index.

Forces a rebuild of the internal routing index that maps tasks to
appropriate agents. Call this after installing or removing agents."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the index has been updated
data:
  name: updateAgentIndex
  category: agents
  link: updateAgentIndex.md
---
# updateAgentIndex

```typescript
client.agents.updateAgentIndex(): Promise<void>
```

Updates the agent router index.

Forces a rebuild of the internal routing index that maps tasks to
appropriate agents. Call this after installing or removing agents.

## Parameters

_None_

## Returns

**`Promise<void>`** — A promise that resolves when the index has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.updateAgentIndex();
```
