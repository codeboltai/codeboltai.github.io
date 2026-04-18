---
name: delete
cbbaseinfo:
  description: "Deletes a deliberation.

Permanently removes the specified deliberation and all its associated
responses and votes."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the deliberation has been deleted
data:
  name: delete
  category: agentDeliberation
  link: delete.md
---
# delete

```typescript
client.agentDeliberation.delete(id: string): Promise<unknown>
```

Deletes a deliberation.

Permanently removes the specified deliberation and all its associated
responses and votes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the deliberation has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.delete('id');
```
