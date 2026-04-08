---
name: updateRunStatus
cbbaseinfo:
  description: Updates the overall status of a test run.
cbparameters:
  parameters:
    - name: params
      typeName: IUpdateRunStatusParams
      description: Parameters including run ID and new status.
  returns:
    signatureTypeName: "Promise<IUpdateRunStatusResponse>"
    description: A promise that resolves to the updated test run.
    typeArgs: []
data:
  name: updateRunStatus
  category: autoTesting
  link: updateRunStatus.md
---
# updateRunStatus

```typescript
codebolt.autoTesting.updateRunStatus(params: IUpdateRunStatusParams): Promise<IUpdateRunStatusResponse>
```

Updates the overall status of a test run.
### Parameters

- **`params`** ([IUpdateRunStatusParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateRunStatusParams)): Parameters including run ID and new status.

### Returns

- **`Promise<[IUpdateRunStatusResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateRunStatusResponse)>`**: A promise that resolves to the updated test run.

### Examples

```typescript
// Start the run
await codebolt.autoTesting.updateRunStatus({
  runId: 'run-123',
  status: 'running'
});

// Mark as completed
await codebolt.autoTesting.updateRunStatus({
  runId: 'run-123',
  status: 'completed'
});

// Cancel the run
await codebolt.autoTesting.updateRunStatus({
  runId: 'run-123',
  status: 'cancelled'
});
```

### Notes

- Status values: pending, running, completed, cancelled
- Status changes track run lifecycle
- Completed runs cannot be restarted