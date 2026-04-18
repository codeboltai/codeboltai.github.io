---
name: deleteCase
cbbaseinfo:
  description: "Deletes a test case.

Permanently removes the specified test case from the system."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the test case to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the test case has been deleted
data:
  name: deleteCase
  category: autoTesting
  link: deleteCase.md
---
# deleteCase

```typescript
client.autoTesting.deleteCase(id: string): Promise<unknown>
```

Deletes a test case.

Permanently removes the specified test case from the system.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the test case to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the test case has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.deleteCase('id');
```
