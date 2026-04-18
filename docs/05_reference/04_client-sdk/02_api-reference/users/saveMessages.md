---
name: saveMessages
cbbaseinfo:
  description: "Saves message history for a specific agent.

Persists a batch of messages associated with an agent's conversation.
This maintains conversation history across sessions and enables
context retention for continued interactions."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent
      isOptional: false
    - name: data
      typeName: SaveMessagesRequest
      description: Request containing messages to save
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when messages have been saved
data:
  name: saveMessages
  category: users
  link: saveMessages.md
---
# saveMessages

```typescript
client.users.saveMessages(agentId: string, data: SaveMessagesRequest): Promise<void>
```

Saves message history for a specific agent.

Persists a batch of messages associated with an agent's conversation.
This maintains conversation history across sessions and enables
context retention for continued interactions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent |
| `data` | `SaveMessagesRequest` | Request containing messages to save |

## Returns

**`Promise<void>`** — A promise that resolves when messages have been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.users.saveMessages('agentId', /* SaveMessagesRequest */);
```
