---
name: getCase
cbbaseinfo:
  description: "Retrieves a specific test case by ID.

Returns the full test case definition including its steps,
expected results, and metadata."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the test case
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestCase>"
    description: A promise that resolves to the TestCase object
data:
  name: getCase
  category: autoTesting
  link: getCase.md
---
# getCase

```typescript
client.autoTesting.getCase(id: string): Promise<TestCase>
```

Retrieves a specific test case by ID.

Returns the full test case definition including its steps,
expected results, and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the test case |

## Returns

**`Promise<TestCase>`** — A promise that resolves to the TestCase object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.getCase('id');
```
