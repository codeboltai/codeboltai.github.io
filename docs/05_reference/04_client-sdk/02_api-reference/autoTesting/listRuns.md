---
name: listRuns
cbbaseinfo:
  description: "Retrieves all test runs.

Returns the history of test run executions, including their status,
results, and timing information."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<TestRun[]>"
    description: A promise that resolves to an array of TestRun objects
data:
  name: listRuns
  category: autoTesting
  link: listRuns.md
---
# listRuns

```typescript
client.autoTesting.listRuns(params?: Record<string, unknown>): Promise<TestRun[]>
```

Retrieves all test runs.

Returns the history of test run executions, including their status,
results, and timing information.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<TestRun[]>`** — A promise that resolves to an array of TestRun objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.listRuns();
```
