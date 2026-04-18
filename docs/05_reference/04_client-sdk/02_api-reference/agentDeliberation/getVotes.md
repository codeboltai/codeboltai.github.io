---
name: getVotes
cbbaseinfo:
  description: "Retrieves all votes cast in a deliberation.

Returns the voting records showing which agents voted for which
responses."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
  returns:
    signatureTypeName: "Promise<DeliberationVote[]>"
    description: A promise that resolves to an array of DeliberationVote objects
data:
  name: getVotes
  category: agentDeliberation
  link: getVotes.md
---
# getVotes

```typescript
client.agentDeliberation.getVotes(id: string): Promise<DeliberationVote[]>
```

Retrieves all votes cast in a deliberation.

Returns the voting records showing which agents voted for which
responses.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |

## Returns

**`Promise<DeliberationVote[]>`** — A promise that resolves to an array of DeliberationVote objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.getVotes('id');
```
