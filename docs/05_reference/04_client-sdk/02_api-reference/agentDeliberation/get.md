---
name: get
cbbaseinfo:
  description: "Retrieves a specific deliberation by ID.

Returns the full deliberation record including its topic, status,
participants, and summary."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
  returns:
    signatureTypeName: "Promise<Deliberation>"
    description: A promise that resolves to the Deliberation object
data:
  name: get
  category: agentDeliberation
  link: get.md
---
# get

```typescript
client.agentDeliberation.get(id: string): Promise<Deliberation>
```

Retrieves a specific deliberation by ID.

Returns the full deliberation record including its topic, status,
participants, and summary.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |

## Returns

**`Promise<Deliberation>`** — A promise that resolves to the Deliberation object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.get('id');
```
