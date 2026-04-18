---
name: getById
cbbaseinfo:
  description: Get a step by internal ID
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: getById
  category: threadSteps
  link: getById.md
---
# getById

```typescript
client.threadSteps.getById(id: string): Promise<ThreadStep>
```

Get a step by internal ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.getById('id');
```
