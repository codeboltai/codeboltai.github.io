---
name: create
cbbaseinfo:
  description: "Creates a new deliberation.

Initiates a deliberation session where multiple agents can propose
solutions and vote on the best approach."
cbparameters:
  parameters:
    - name: data
      typeName: CreateDeliberationRequest
      description: The deliberation creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<Deliberation>"
    description: A promise that resolves to the newly created Deliberation
data:
  name: create
  category: agentDeliberation
  link: create.md
---
# create

```typescript
client.agentDeliberation.create(data: CreateDeliberationRequest): Promise<Deliberation>
```

Creates a new deliberation.

Initiates a deliberation session where multiple agents can propose
solutions and vote on the best approach.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateDeliberationRequest` | The deliberation creation payload |

## Returns

**`Promise<Deliberation>`** — A promise that resolves to the newly created Deliberation

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.create(/* CreateDeliberationRequest */);
```
