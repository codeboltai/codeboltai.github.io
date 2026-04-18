---
name: addResponse
cbbaseinfo:
  description: "Adds a response to a deliberation.

Submits a new proposal or answer from an agent as part of the
deliberation process."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
    - name: data
      typeName: AddDeliberationResponseRequest
      description: "The response payload containing the agent's proposal"
      isOptional: false
  returns:
    signatureTypeName: "Promise<DeliberationResponse>"
    description: A promise that resolves to the created DeliberationResponse
data:
  name: addResponse
  category: agentDeliberation
  link: addResponse.md
---
# addResponse

```typescript
client.agentDeliberation.addResponse(id: string, data: AddDeliberationResponseRequest): Promise<DeliberationResponse>
```

Adds a response to a deliberation.

Submits a new proposal or answer from an agent as part of the
deliberation process.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |
| `data` | `AddDeliberationResponseRequest` | The response payload containing the agent's proposal |

## Returns

**`Promise<DeliberationResponse>`** — A promise that resolves to the created DeliberationResponse

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.addResponse('id', /* AddDeliberationResponseRequest */);
```
