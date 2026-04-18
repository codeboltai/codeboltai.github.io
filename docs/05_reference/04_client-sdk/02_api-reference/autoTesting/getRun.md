---
name: getRun
cbbaseinfo:
  description: "Retrieves a specific test run by ID.

Returns the full test run record including per-case results,
timing, and overall status."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the test run
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestRun>"
    description: A promise that resolves to the TestRun object
data:
  name: getRun
  category: autoTesting
  link: getRun.md
---
# getRun

```typescript
client.autoTesting.getRun(id: string): Promise<TestRun>
```

Retrieves a specific test run by ID.

Returns the full test run record including per-case results,
timing, and overall status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the test run |

## Returns

**`Promise<TestRun>`** — A promise that resolves to the TestRun object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.getRun('id');
```
