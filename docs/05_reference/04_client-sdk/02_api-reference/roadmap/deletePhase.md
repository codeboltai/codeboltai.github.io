---
name: deletePhase
cbbaseinfo:
  description: "Deletes a roadmap phase.

Permanently removes a phase and potentially its associated features. This action
cannot be undone."
cbparameters:
  parameters:
    - name: phaseId
      typeName: string
      description: The unique identifier of the phase to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the phase has been deleted
data:
  name: deletePhase
  category: roadmap
  link: deletePhase.md
---
# deletePhase

```typescript
client.roadmap.deletePhase(phaseId: string): Promise<unknown>
```

Deletes a roadmap phase.

Permanently removes a phase and potentially its associated features. This action
cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `phaseId` | `string` | The unique identifier of the phase to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the phase has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.deletePhase('phaseId');
```
