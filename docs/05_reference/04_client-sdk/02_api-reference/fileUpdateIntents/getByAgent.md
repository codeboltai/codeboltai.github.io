---
name: getByAgent
cbbaseinfo:
  description: "Retrieves file update intents for a specific agent.

Returns all intents registered by a particular agent, including
their status, associated files, and metadata. Useful for monitoring
an agent's active operations."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering intents
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileUpdateIntent[]>"
    description: A promise that resolves to an array of FileUpdateIntent objects
data:
  name: getByAgent
  category: fileUpdateIntents
  link: getByAgent.md
---
# getByAgent

```typescript
client.fileUpdateIntents.getByAgent(agentId: string, params?: Record<string, unknown>): Promise<FileUpdateIntent[]>
```

Retrieves file update intents for a specific agent.

Returns all intents registered by a particular agent, including
their status, associated files, and metadata. Useful for monitoring
an agent's active operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering intents |

## Returns

**`Promise<FileUpdateIntent[]>`** — A promise that resolves to an array of FileUpdateIntent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.getByAgent('agentId');
```
