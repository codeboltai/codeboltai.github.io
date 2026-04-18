---
name: listCases
cbbaseinfo:
  description: "Retrieves all test cases.

Returns every test case in the system, regardless of suite membership."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<TestCase[]>"
    description: A promise that resolves to an array of TestCase objects
data:
  name: listCases
  category: autoTesting
  link: listCases.md
---
# listCases

```typescript
client.autoTesting.listCases(params?: Record<string, unknown>): Promise<TestCase[]>
```

Retrieves all test cases.

Returns every test case in the system, regardless of suite membership.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<TestCase[]>`** — A promise that resolves to an array of TestCase objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.listCases();
```
