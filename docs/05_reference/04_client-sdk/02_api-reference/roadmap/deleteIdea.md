---
name: deleteIdea
cbbaseinfo:
  description: "Deletes an idea from the roadmap idea pool.

Permanently removes an idea. This action cannot be undone."
cbparameters:
  parameters:
    - name: ideaId
      typeName: string
      description: The unique identifier of the idea to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the idea has been deleted
data:
  name: deleteIdea
  category: roadmap
  link: deleteIdea.md
---
# deleteIdea

```typescript
client.roadmap.deleteIdea(ideaId: string): Promise<unknown>
```

Deletes an idea from the roadmap idea pool.

Permanently removes an idea. This action cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `ideaId` | `string` | The unique identifier of the idea to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the idea has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.deleteIdea('ideaId');
```
