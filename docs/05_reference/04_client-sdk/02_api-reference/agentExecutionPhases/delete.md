---
name: delete
cbbaseinfo:
  description: "Deletes an execution phase.

Permanently removes the specified execution phase from the system.
Agents will no longer transition through this phase."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The unique name of the phase to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the phase has been deleted
data:
  name: delete
  category: agentExecutionPhases
  link: delete.md
---
# delete

```typescript
client.agentExecutionPhases.delete(name: string): Promise<unknown>
```

Deletes an execution phase.

Permanently removes the specified execution phase from the system.
Agents will no longer transition through this phase.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The unique name of the phase to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the phase has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecutionPhases.delete('name');
```
