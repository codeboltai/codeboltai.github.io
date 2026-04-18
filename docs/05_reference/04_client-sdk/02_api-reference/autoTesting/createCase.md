---
name: createCase
cbbaseinfo:
  description: "Creates a new test case.

Defines an individual test scenario with steps, expected outcomes,
and validation criteria."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTestCaseRequest
      description: The test case creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestCase>"
    description: A promise that resolves to the newly created TestCase
data:
  name: createCase
  category: autoTesting
  link: createCase.md
---
# createCase

```typescript
client.autoTesting.createCase(data: CreateTestCaseRequest): Promise<TestCase>
```

Creates a new test case.

Defines an individual test scenario with steps, expected outcomes,
and validation criteria.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTestCaseRequest` | The test case creation payload |

## Returns

**`Promise<TestCase>`** — A promise that resolves to the newly created TestCase

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.createCase(/* CreateTestCaseRequest */);
```
