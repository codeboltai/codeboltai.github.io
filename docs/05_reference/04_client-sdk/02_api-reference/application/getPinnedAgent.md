---
name: getPinnedAgent
cbbaseinfo:
  description: "Retrieves the currently pinned agent.

Returns the agent that is currently pinned to the UI, or null if
no agent is pinned."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<PinnedAgent | null>"
    description: A promise that resolves to the PinnedAgent or null
data:
  name: getPinnedAgent
  category: application
  link: getPinnedAgent.md
---
# getPinnedAgent

```typescript
client.application.getPinnedAgent(): Promise<PinnedAgent | null>
```

Retrieves the currently pinned agent.

Returns the agent that is currently pinned to the UI, or null if
no agent is pinned.

## Parameters

_None_

## Returns

**`Promise<PinnedAgent | null>`** — A promise that resolves to the PinnedAgent or null

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.getPinnedAgent();
```
