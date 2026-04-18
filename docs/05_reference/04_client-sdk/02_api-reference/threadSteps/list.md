---
name: list
cbbaseinfo:
  description: List all steps
cbparameters:
  parameters:
    - name: params
      typeName: StepListParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ThreadStep[]>"
    description: ""
data:
  name: list
  category: threadSteps
  link: list.md
---
# list

```typescript
client.threadSteps.list(params?: StepListParams): Promise<ThreadStep[]>
```

List all steps

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `StepListParams` _(optional)_ |  |

## Returns

**`Promise<ThreadStep[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.list();
```
