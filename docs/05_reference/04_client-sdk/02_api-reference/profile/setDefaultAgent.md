---
name: setDefaultAgent
cbbaseinfo:
  description: "Sets the default agent for the user's profile.

Configures which agent is automatically selected when the user starts a new
conversation or task. This persists across sessions until changed."
cbparameters:
  parameters:
    - name: data
      typeName: SetDefaultAgentRequest
      description: The request containing the agent to set as default
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the default agent has been updated
data:
  name: setDefaultAgent
  category: profile
  link: setDefaultAgent.md
---
# setDefaultAgent

```typescript
client.profile.setDefaultAgent(data: SetDefaultAgentRequest): Promise<void>
```

Sets the default agent for the user's profile.

Configures which agent is automatically selected when the user starts a new
conversation or task. This persists across sessions until changed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetDefaultAgentRequest` | The request containing the agent to set as default |

## Returns

**`Promise<void>`** — A promise that resolves when the default agent has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.profile.setDefaultAgent(/* SetDefaultAgentRequest */);
```
