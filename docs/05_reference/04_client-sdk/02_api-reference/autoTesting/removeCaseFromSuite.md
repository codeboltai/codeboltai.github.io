---
name: removeCaseFromSuite
cbbaseinfo:
  description: "Removes a test case from a test suite.

Disassociates a test case from the specified suite without deleting
the test case itself."
cbparameters:
  parameters:
    - name: suiteId
      typeName: string
      description: The unique identifier of the test suite
      isOptional: false
    - name: caseId
      typeName: string
      description: The unique identifier of the test case to remove
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the case has been removed from the suite
data:
  name: removeCaseFromSuite
  category: autoTesting
  link: removeCaseFromSuite.md
---
# removeCaseFromSuite

```typescript
client.autoTesting.removeCaseFromSuite(suiteId: string, caseId: string): Promise<unknown>
```

Removes a test case from a test suite.

Disassociates a test case from the specified suite without deleting
the test case itself.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `suiteId` | `string` | The unique identifier of the test suite |
| `caseId` | `string` | The unique identifier of the test case to remove |

## Returns

**`Promise<unknown>`** — A promise that resolves when the case has been removed from the suite

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.removeCaseFromSuite('suiteId', 'caseId');
```
