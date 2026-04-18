---
name: getSuite
cbbaseinfo:
  description: "Retrieves a specific test suite by ID.

Returns the full suite definition including its metadata and
associated test case references."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the test suite
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestSuite>"
    description: A promise that resolves to the TestSuite object
data:
  name: getSuite
  category: autoTesting
  link: getSuite.md
---
# getSuite

```typescript
client.autoTesting.getSuite(id: string): Promise<TestSuite>
```

Retrieves a specific test suite by ID.

Returns the full suite definition including its metadata and
associated test case references.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the test suite |

## Returns

**`Promise<TestSuite>`** — A promise that resolves to the TestSuite object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.getSuite('id');
```
