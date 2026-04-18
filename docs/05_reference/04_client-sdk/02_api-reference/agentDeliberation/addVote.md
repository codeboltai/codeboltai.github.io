---
name: addVote
cbbaseinfo:
  description: "Casts a vote on a deliberation.

Records an agent's vote for a specific response within the deliberation."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
    - name: data
      typeName: AddDeliberationVoteRequest
      description: The vote payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<DeliberationVote>"
    description: A promise that resolves to the recorded DeliberationVote
data:
  name: addVote
  category: agentDeliberation
  link: addVote.md
---
# addVote

```typescript
client.agentDeliberation.addVote(id: string, data: AddDeliberationVoteRequest): Promise<DeliberationVote>
```

Casts a vote on a deliberation.

Records an agent's vote for a specific response within the deliberation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |
| `data` | `AddDeliberationVoteRequest` | The vote payload |

## Returns

**`Promise<DeliberationVote>`** — A promise that resolves to the recorded DeliberationVote

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.addVote('id', /* AddDeliberationVoteRequest */);
```
