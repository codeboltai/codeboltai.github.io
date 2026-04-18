---
name: start
cbbaseinfo:
  description: "Starts a new background agent.

Launches a background agent that will run continuously until explicitly
stopped. Background agents are suitable for long-running monitoring,
indexing, or maintenance tasks."
cbparameters:
  parameters:
    - name: data
      typeName: StartBackgroundAgentRequest
      description: The background agent start configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<BackgroundAgentInstance>"
    description: A promise that resolves to the started BackgroundAgentInstance
data:
  name: start
  category: backgroundAgents
  link: start.md
---
# start

```typescript
client.backgroundAgents.start(data: StartBackgroundAgentRequest): Promise<BackgroundAgentInstance>
```

Starts a new background agent.

Launches a background agent that will run continuously until explicitly
stopped. Background agents are suitable for long-running monitoring,
indexing, or maintenance tasks.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `StartBackgroundAgentRequest` | The background agent start configuration |

## Returns

**`Promise<BackgroundAgentInstance>`** — A promise that resolves to the started BackgroundAgentInstance

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.backgroundAgents.start(/* StartBackgroundAgentRequest */);
```
