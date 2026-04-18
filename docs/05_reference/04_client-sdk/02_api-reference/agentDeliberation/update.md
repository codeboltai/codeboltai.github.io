---
name: update
cbbaseinfo:
  description: "Partially updates a deliberation.

Applies a patch to the deliberation record, updating only the
fields provided in the request."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation to update
      isOptional: false
    - name: data
      typeName: UpdateDeliberationRequest
      description: The fields to patch on the deliberation
      isOptional: false
  returns:
    signatureTypeName: "Promise<Deliberation>"
    description: A promise that resolves to the updated Deliberation
data:
  name: update
  category: agentDeliberation
  link: update.md
---
# update

```typescript
client.agentDeliberation.update(id: string, data: UpdateDeliberationRequest): Promise<Deliberation>
```

Partially updates a deliberation.

Applies a patch to the deliberation record, updating only the
fields provided in the request.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation to update |
| `data` | `UpdateDeliberationRequest` | The fields to patch on the deliberation |

## Returns

**`Promise<Deliberation>`** — A promise that resolves to the updated Deliberation

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.update('id', /* UpdateDeliberationRequest */);
```
