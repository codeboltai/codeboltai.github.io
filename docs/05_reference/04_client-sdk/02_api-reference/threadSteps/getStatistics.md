---
name: getStatistics
cbbaseinfo:
  description: Get step statistics for a thread
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<StepStatistics>"
    description: ""
data:
  name: getStatistics
  category: threadSteps
  link: getStatistics.md
---
# getStatistics

```typescript
client.threadSteps.getStatistics(threadId: string): Promise<StepStatistics>
```

Get step statistics for a thread

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<StepStatistics>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.getStatistics('threadId');
```
