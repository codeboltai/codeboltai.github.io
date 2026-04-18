---
name: delete
cbbaseinfo:
  description: "Deletes a context rule from the system.

Permanently removes the specified rule. Any behavior or logic dependent
on this rule will no longer be executed. This operation cannot be undone."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the rule to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the rule has been deleted
data:
  name: delete
  category: contextRuleEngine
  link: delete.md
---
# delete

```typescript
client.contextRuleEngine.delete(id: string): Promise<unknown>
```

Deletes a context rule from the system.

Permanently removes the specified rule. Any behavior or logic dependent
on this rule will no longer be executed. This operation cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the rule to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the rule has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextRuleEngine.delete('id');
```
