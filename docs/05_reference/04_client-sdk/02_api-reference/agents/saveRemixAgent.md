---
name: saveRemixAgent
cbbaseinfo:
  description: "Saves a remix agent.

Creates or saves a remix agent, which is a customized variant of an
existing agent with modified prompts, settings, or capabilities."
cbparameters:
  parameters:
    - name: data
      typeName: RemixAgent
      description: The remix agent definition to save
      isOptional: false
  returns:
    signatureTypeName: "Promise<RemixAgent>"
    description: A promise that resolves to the saved RemixAgent
data:
  name: saveRemixAgent
  category: agents
  link: saveRemixAgent.md
---
# saveRemixAgent

```typescript
client.agents.saveRemixAgent(data: RemixAgent): Promise<RemixAgent>
```

Saves a remix agent.

Creates or saves a remix agent, which is a customized variant of an
existing agent with modified prompts, settings, or capabilities.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `RemixAgent` | The remix agent definition to save |

## Returns

**`Promise<RemixAgent>`** — A promise that resolves to the saved RemixAgent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.saveRemixAgent(/* RemixAgent */);
```
