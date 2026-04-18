---
name: getNextExecutable
cbbaseinfo:
  description: Get next executable step for a thread
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadStep | null>"
    description: ""
data:
  name: getNextExecutable
  category: threadSteps
  link: getNextExecutable.md
---
# getNextExecutable

```typescript
client.threadSteps.getNextExecutable(threadId: string): Promise<ThreadStep | null>
```

Get next executable step for a thread

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<ThreadStep | null>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.getNextExecutable('threadId');
```
