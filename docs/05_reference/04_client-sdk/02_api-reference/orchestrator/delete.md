---
name: delete
cbbaseinfo:
  description: "Deletes an orchestrator instance permanently.

Removes the orchestrator and its configuration. Any active workflows managed by this
orchestrator should be stopped before deletion."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the orchestrator to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the orchestrator has been deleted
data:
  name: delete
  category: orchestrator
  link: delete.md
---
# delete

```typescript
client.orchestrator.delete(id: string): Promise<void>
```

Deletes an orchestrator instance permanently.

Removes the orchestrator and its configuration. Any active workflows managed by this
orchestrator should be stopped before deletion.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the orchestrator to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the orchestrator has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.orchestrator.delete('id');
```
