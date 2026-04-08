---
name: updateRunCaseStatus
cbbaseinfo:
  description: Updates the status of a specific test case within a run.
cbparameters:
  parameters:
    - name: params
      typeName: IUpdateRunCaseParams
      description: Parameters including run ID, case ID, status, and optional user override flag.
  returns:
    signatureTypeName: "Promise<IUpdateRunCaseResponse>"
    description: A promise that resolves to the updated test run.
    typeArgs: []
data:
  name: updateRunCaseStatus
  category: autoTesting
  link: updateRunCaseStatus.md
---
# updateRunCaseStatus

```typescript
codebolt.autoTesting.updateRunCaseStatus(params: IUpdateRunCaseParams): Promise<IUpdateRunCaseResponse>
```

Updates the status of a specific test case within a run.
### Parameters

- **`params`** ([IUpdateRunCaseParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateRunCaseParams)): Parameters including run ID, case ID, status, and optional user override flag.

### Returns

- **`Promise<[IUpdateRunCaseResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateRunCaseResponse)>`**: A promise that resolves to the updated test run.

### Examples

```typescript
// Mark case as passed
await codebolt.autoTesting.updateRunCaseStatus({
  runId: 'run-123',
  caseId: 'case-456',
  status: 'passed'
});

// Mark case as failed with override
await codebolt.autoTesting.updateRunCaseStatus({
  runId: 'run-123',
  caseId: 'case-456',
  status: 'failed',
  userOverride: true
});
```

### Notes

- Status values: pending, running, passed, failed, skipped
- User override indicates manual status change
- Affects overall run status calculation