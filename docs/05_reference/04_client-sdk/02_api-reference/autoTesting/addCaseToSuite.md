---
name: addCaseToSuite
cbbaseinfo:
  description: "Adds a test case to a test suite.

Associates an existing test case with the specified suite, making
it part of the suite's execution set."
cbparameters:
  parameters:
    - name: suiteId
      typeName: string
      description: The unique identifier of the test suite
      isOptional: false
    - name: data
      typeName: AddTestCaseToSuiteRequest
      description: The test case association payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the case has been added to the suite
data:
  name: addCaseToSuite
  category: autoTesting
  link: addCaseToSuite.md
---
# addCaseToSuite

```typescript
client.autoTesting.addCaseToSuite(suiteId: string, data: AddTestCaseToSuiteRequest): Promise<unknown>
```

Adds a test case to a test suite.

Associates an existing test case with the specified suite, making
it part of the suite's execution set.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `suiteId` | `string` | The unique identifier of the test suite |
| `data` | `AddTestCaseToSuiteRequest` | The test case association payload |

## Returns

**`Promise<unknown>`** — A promise that resolves when the case has been added to the suite

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.addCaseToSuite('suiteId', /* AddTestCaseToSuiteRequest */);
```
