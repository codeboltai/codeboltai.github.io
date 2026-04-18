---
name: getRunning
cbbaseinfo:
  description: "Retrieves all currently running agent instances.

A convenience method that returns only instances with an active/running status,
useful for real-time monitoring dashboards."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<AgentDebugInstance[]>"
    description: A promise that resolves to an array of running AgentDebugInstance objects
data:
  name: getRunning
  category: agentDebugApi
  link: getRunning.md
---
# getRunning

```typescript
client.agentDebugApi.getRunning(): Promise<AgentDebugInstance[]>
```

Retrieves all currently running agent instances.

A convenience method that returns only instances with an active/running status,
useful for real-time monitoring dashboards.

## Parameters

_None_

## Returns

**`Promise<AgentDebugInstance[]>`** — A promise that resolves to an array of running AgentDebugInstance objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.getRunning();
```
