---
name: getByThreadId
cbbaseinfo:
  description: Get steps by thread ID
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
  name: getByThreadId
  category: threadSteps
  link: getByThreadId.md
---
# getByThreadId

```typescript
client.threadSteps.getByThreadId(threadId: string): Promise<ThreadStep[]>
```

Get steps by thread ID

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

await client.threadSteps.getByThreadId('threadId');
```
