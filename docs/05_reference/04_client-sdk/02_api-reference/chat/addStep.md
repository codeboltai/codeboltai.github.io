---
name: addStep
cbbaseinfo:
  description: "Adds a step to a thread via the add-step endpoint.

An alternative method for adding steps that accepts the thread ID
as part of the request body rather than the URL path."
cbparameters:
  parameters:
    - name: data
      typeName: AddStepRequest
      description: The step addition request including thread ID and step data
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadStep>"
    description: A promise that resolves to the created ChatThreadStep
data:
  name: addStep
  category: chat
  link: addStep.md
---
# addStep

```typescript
client.chat.addStep(data: AddStepRequest): Promise<ChatThreadStep>
```

Adds a step to a thread via the add-step endpoint.

An alternative method for adding steps that accepts the thread ID
as part of the request body rather than the URL path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AddStepRequest` | The step addition request including thread ID and step data |

## Returns

**`Promise<ChatThreadStep>`** — A promise that resolves to the created ChatThreadStep

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.addStep(/* AddStepRequest */);
```
