---
name: getWinner
cbbaseinfo:
  description: "Retrieves the winning response of a deliberation.

Returns the response that received the most votes or was otherwise
selected as the winner of the deliberation process."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
  returns:
    signatureTypeName: "Promise<DeliberationResponse>"
    description: A promise that resolves to the winning DeliberationResponse
data:
  name: getWinner
  category: agentDeliberation
  link: getWinner.md
---
# getWinner

```typescript
client.agentDeliberation.getWinner(id: string): Promise<DeliberationResponse>
```

Retrieves the winning response of a deliberation.

Returns the response that received the most votes or was otherwise
selected as the winner of the deliberation process.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |

## Returns

**`Promise<DeliberationResponse>`** — A promise that resolves to the winning DeliberationResponse

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.getWinner('id');
```
