---
name: getSteeringSteps
cbbaseinfo:
  description: "Retrieves all steering steps for a thread.

Returns the list of steering instructions that have been added
to guide agent behavior in the thread."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<SteeringStep[]>"
    description: A promise that resolves to an array of SteeringStep objects
data:
  name: getSteeringSteps
  category: chat
  link: getSteeringSteps.md
---
# getSteeringSteps

```typescript
client.chat.getSteeringSteps(threadId: string): Promise<SteeringStep[]>
```

Retrieves all steering steps for a thread.

Returns the list of steering instructions that have been added
to guide agent behavior in the thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<SteeringStep[]>`** — A promise that resolves to an array of SteeringStep objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.getSteeringSteps('threadId');
```
