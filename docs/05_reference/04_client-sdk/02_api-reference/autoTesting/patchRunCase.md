---
name: patchRunCase
cbbaseinfo:
  description: "Patches a specific test case result within a test run.

Updates the status or outcome of an individual test case within
an active test run, allowing incremental result reporting."
cbparameters:
  parameters:
    - name: runId
      typeName: string
      description: The unique identifier of the test run
      isOptional: false
    - name: caseId
      typeName: string
      description: The unique identifier of the test case within the run
      isOptional: false
    - name: data
      typeName: PatchTestRunCaseRequest
      description: The patch data to apply to the case result
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the patch has been applied
data:
  name: patchRunCase
  category: autoTesting
  link: patchRunCase.md
---
# patchRunCase

```typescript
client.autoTesting.patchRunCase(runId: string, caseId: string, data: PatchTestRunCaseRequest): Promise<unknown>
```

Patches a specific test case result within a test run.

Updates the status or outcome of an individual test case within
an active test run, allowing incremental result reporting.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `runId` | `string` | The unique identifier of the test run |
| `caseId` | `string` | The unique identifier of the test case within the run |
| `data` | `PatchTestRunCaseRequest` | The patch data to apply to the case result |

## Returns

**`Promise<unknown>`** — A promise that resolves when the patch has been applied

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.patchRunCase('runId', 'caseId', /* PatchTestRunCaseRequest */);
```
