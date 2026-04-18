---
name: updateCase
cbbaseinfo:
  description: "Updates a test case.

Modifies the steps, name, or other properties of an existing test case."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the test case to update
      isOptional: false
    - name: data
      typeName: UpdateTestCaseRequest
      description: The fields to update on the test case
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestCase>"
    description: A promise that resolves to the updated TestCase
data:
  name: updateCase
  category: autoTesting
  link: updateCase.md
---
# updateCase

```typescript
client.autoTesting.updateCase(id: string, data: UpdateTestCaseRequest): Promise<TestCase>
```

Updates a test case.

Modifies the steps, name, or other properties of an existing test case.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the test case to update |
| `data` | `UpdateTestCaseRequest` | The fields to update on the test case |

## Returns

**`Promise<TestCase>`** — A promise that resolves to the updated TestCase

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.updateCase('id', /* UpdateTestCaseRequest */);
```
