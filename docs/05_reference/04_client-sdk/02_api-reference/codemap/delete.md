---
name: delete
cbbaseinfo:
  description: "Deletes a codemap by its ID.

Permanently removes the codemap from the system. The underlying
source files are not affected."
cbparameters:
  parameters:
    - name: codemapId
      typeName: string
      description: The unique identifier of the codemap to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: delete
  category: codemap
  link: delete.md
---
# delete

```typescript
client.codemap.delete(codemapId: string): Promise<unknown>
```

Deletes a codemap by its ID.

Permanently removes the codemap from the system. The underlying
source files are not affected.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `codemapId` | `string` | The unique identifier of the codemap to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codemap.delete('codemapId');
```
