---
name: delete
cbbaseinfo:
  description: "Deletes a hook.

Permanently removes a hook registration. The hook will no longer
fire for any events after deletion."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the hook to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: delete
  category: hooks
  link: delete.md
---
# delete

```typescript
client.hooks.delete(id: string): Promise<unknown>
```

Deletes a hook.

Permanently removes a hook registration. The hook will no longer
fire for any events after deletion.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the hook to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.hooks.delete('id');
```
