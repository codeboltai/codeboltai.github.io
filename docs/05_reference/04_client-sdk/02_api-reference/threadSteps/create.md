---
name: create
cbbaseinfo:
  description: Create a new step
cbparameters:
  parameters:
    - name: data
      typeName: CreateStepRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: create
  category: threadSteps
  link: create.md
---
# create

```typescript
client.threadSteps.create(data: CreateStepRequest): Promise<ThreadStep>
```

Create a new step

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateStepRequest` |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.create(/* CreateStepRequest */);
```
