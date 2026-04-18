---
name: getByAgentId
cbbaseinfo:
  description: "Retrieves the execution history for a specific agent.

Returns an ordered list of history entries documenting every action
the agent performed, including timestamps and payloads. Useful for
reviewing what an agent did during a session."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent whose history to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<HistoryEntry[]>"
    description: A promise that resolves to an array of  objects in chronological order
data:
  name: getByAgentId
  category: history
  link: getByAgentId.md
---
# getByAgentId

```typescript
client.history.getByAgentId(agentId: string): Promise<HistoryEntry[]>
```

Retrieves the execution history for a specific agent.

Returns an ordered list of history entries documenting every action
the agent performed, including timestamps and payloads. Useful for
reviewing what an agent did during a session.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent whose history to retrieve |

## Returns

**`Promise<HistoryEntry[]>`** — A promise that resolves to an array of  objects in chronological order

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.history.getByAgentId('agentId');
```
