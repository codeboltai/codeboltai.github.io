---
name: updateSummary
cbbaseinfo:
  description: "Updates the summary of a deliberation.

Sets or modifies the summary text that describes the outcome or
current state of the deliberation."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
    - name: data
      typeName: UpdateDeliberationSummaryRequest
      description: The summary update payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<Deliberation>"
    description: A promise that resolves to the updated Deliberation
data:
  name: updateSummary
  category: agentDeliberation
  link: updateSummary.md
---
# updateSummary

```typescript
client.agentDeliberation.updateSummary(id: string, data: UpdateDeliberationSummaryRequest): Promise<Deliberation>
```

Updates the summary of a deliberation.

Sets or modifies the summary text that describes the outcome or
current state of the deliberation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |
| `data` | `UpdateDeliberationSummaryRequest` | The summary update payload |

## Returns

**`Promise<Deliberation>`** — A promise that resolves to the updated Deliberation

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.updateSummary('id', /* UpdateDeliberationSummaryRequest */);
```
