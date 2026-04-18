---
name: listSuites
cbbaseinfo:
  description: "Retrieves all test suites.

Returns the complete list of test suites, which are collections of
related test cases grouped for organized execution."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<TestSuite[]>"
    description: A promise that resolves to an array of TestSuite objects
data:
  name: listSuites
  category: autoTesting
  link: listSuites.md
---
# listSuites

```typescript
client.autoTesting.listSuites(params?: Record<string, unknown>): Promise<TestSuite[]>
```

Retrieves all test suites.

Returns the complete list of test suites, which are collections of
related test cases grouped for organized execution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<TestSuite[]>`** — A promise that resolves to an array of TestSuite objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.listSuites();
```
