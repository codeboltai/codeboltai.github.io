---
name: getActiveSteps
cbbaseinfo:
  description: Get active steps for a thread
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadStep[]>"
    description: ""
data:
  name: getActiveSteps
  category: threadSteps
  link: getActiveSteps.md
---
# getActiveSteps

```typescript
client.threadSteps.getActiveSteps(threadId: string): Promise<ThreadStep[]>
```

Get active steps for a thread

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<ThreadStep[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.getActiveSteps('threadId');
```
