---
name: createSuite
cbbaseinfo:
  description: "Creates a new test suite.

Defines a new collection of test cases that can be executed together."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTestSuiteRequest
      description: The test suite creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestSuite>"
    description: A promise that resolves to the newly created TestSuite
data:
  name: createSuite
  category: autoTesting
  link: createSuite.md
---
# createSuite

```typescript
client.autoTesting.createSuite(data: CreateTestSuiteRequest): Promise<TestSuite>
```

Creates a new test suite.

Defines a new collection of test cases that can be executed together.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTestSuiteRequest` | The test suite creation payload |

## Returns

**`Promise<TestSuite>`** — A promise that resolves to the newly created TestSuite

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.createSuite(/* CreateTestSuiteRequest */);
```
