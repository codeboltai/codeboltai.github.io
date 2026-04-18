---
name: getResponses
cbbaseinfo:
  description: "Retrieves all responses submitted to a deliberation.

Returns the proposals or answers that agents have submitted as part
of the deliberation process."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
  returns:
    signatureTypeName: "Promise<DeliberationResponse[]>"
    description: A promise that resolves to an array of DeliberationResponse objects
data:
  name: getResponses
  category: agentDeliberation
  link: getResponses.md
---
# getResponses

```typescript
client.agentDeliberation.getResponses(id: string): Promise<DeliberationResponse[]>
```

Retrieves all responses submitted to a deliberation.

Returns the proposals or answers that agents have submitted as part
of the deliberation process.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |

## Returns

**`Promise<DeliberationResponse[]>`** — A promise that resolves to an array of DeliberationResponse objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.getResponses('id');
```
