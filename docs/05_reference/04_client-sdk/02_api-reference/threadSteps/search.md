---
name: search
cbbaseinfo:
  description: Search for a step by stepId
cbparameters:
  parameters:
    - name: stepId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: search
  category: threadSteps
  link: search.md
---
# search

```typescript
client.threadSteps.search(stepId: string): Promise<ThreadStep>
```

Search for a step by stepId

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `stepId` | `string` |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.search('stepId');
```
