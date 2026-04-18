---
name: patchRunCaseStep
cbbaseinfo:
  description: "Patches a specific step result within a test case of a test run.

Updates the status or outcome of an individual step within a
test case, providing granular progress tracking."
cbparameters:
  parameters:
    - name: runId
      typeName: string
      description: The unique identifier of the test run
      isOptional: false
    - name: caseId
      typeName: string
      description: The unique identifier of the test case
      isOptional: false
    - name: stepId
      typeName: string
      description: The unique identifier of the step within the case
      isOptional: false
    - name: data
      typeName: PatchTestRunCaseStepRequest
      description: The patch data to apply to the step result
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the patch has been applied
data:
  name: patchRunCaseStep
  category: autoTesting
  link: patchRunCaseStep.md
---
# patchRunCaseStep

```typescript
client.autoTesting.patchRunCaseStep(runId: string, caseId: string, stepId: string, data: PatchTestRunCaseStepRequest): Promise<unknown>
```

Patches a specific step result within a test case of a test run.

Updates the status or outcome of an individual step within a
test case, providing granular progress tracking.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `runId` | `string` | The unique identifier of the test run |
| `caseId` | `string` | The unique identifier of the test case |
| `stepId` | `string` | The unique identifier of the step within the case |
| `data` | `PatchTestRunCaseStepRequest` | The patch data to apply to the step result |

## Returns

**`Promise<unknown>`** — A promise that resolves when the patch has been applied

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.patchRunCaseStep('runId', 'caseId', 'stepId', /* PatchTestRunCaseStepRequest */);
```
