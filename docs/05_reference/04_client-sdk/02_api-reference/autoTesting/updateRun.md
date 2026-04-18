---
name: updateRun
cbbaseinfo:
  description: "Updates a test run.

Modifies the status or metadata of an in-progress or completed test run."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the test run to update
      isOptional: false
    - name: data
      typeName: UpdateTestRunRequest
      description: The fields to update on the test run
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestRun>"
    description: A promise that resolves to the updated TestRun
data:
  name: updateRun
  category: autoTesting
  link: updateRun.md
---
# updateRun

```typescript
client.autoTesting.updateRun(id: string, data: UpdateTestRunRequest): Promise<TestRun>
```

Updates a test run.

Modifies the status or metadata of an in-progress or completed test run.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the test run to update |
| `data` | `UpdateTestRunRequest` | The fields to update on the test run |

## Returns

**`Promise<TestRun>`** — A promise that resolves to the updated TestRun

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.updateRun('id', /* UpdateTestRunRequest */);
```
