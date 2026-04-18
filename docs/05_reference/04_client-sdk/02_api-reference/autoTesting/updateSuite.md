---
name: updateSuite
cbbaseinfo:
  description: "Updates a test suite.

Modifies the name, description, or other properties of an
existing test suite."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the test suite to update
      isOptional: false
    - name: data
      typeName: UpdateTestSuiteRequest
      description: The fields to update on the suite
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestSuite>"
    description: A promise that resolves to the updated TestSuite
data:
  name: updateSuite
  category: autoTesting
  link: updateSuite.md
---
# updateSuite

```typescript
client.autoTesting.updateSuite(id: string, data: UpdateTestSuiteRequest): Promise<TestSuite>
```

Updates a test suite.

Modifies the name, description, or other properties of an
existing test suite.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the test suite to update |
| `data` | `UpdateTestSuiteRequest` | The fields to update on the suite |

## Returns

**`Promise<TestSuite>`** — A promise that resolves to the updated TestSuite

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.updateSuite('id', /* UpdateTestSuiteRequest */);
```
