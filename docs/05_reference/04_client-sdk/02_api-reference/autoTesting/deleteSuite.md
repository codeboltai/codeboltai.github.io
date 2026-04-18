---
name: deleteSuite
cbbaseinfo:
  description: "Deletes a test suite.

Permanently removes the specified test suite. This does not delete
the test cases themselves, only their association with the suite."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the test suite to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the suite has been deleted
data:
  name: deleteSuite
  category: autoTesting
  link: deleteSuite.md
---
# deleteSuite

```typescript
client.autoTesting.deleteSuite(id: string): Promise<unknown>
```

Deletes a test suite.

Permanently removes the specified test suite. This does not delete
the test cases themselves, only their association with the suite.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the test suite to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the suite has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.deleteSuite('id');
```
