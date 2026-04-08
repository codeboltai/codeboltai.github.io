---
name: listRuns
cbbaseinfo:
  description: Lists test runs, optionally filtered by suite.
cbparameters:
  parameters:
    - name: params
      typeName: IListRunsParams
      description: Optional parameters including suite ID for filtering.
      isOptional: true
  returns:
    signatureTypeName: "Promise<IListRunsResponse>"
    description: A promise that resolves to the list of test runs.
    typeArgs: []
data:
  name: listRuns
  category: autoTesting
  link: listRuns.md
---
# listRuns

```typescript
codebolt.autoTesting.listRuns(params: IListRunsParams): Promise<IListRunsResponse>
```

Lists test runs, optionally filtered by suite.
### Parameters

- **`params`** ([IListRunsParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListRunsParams), optional): Optional parameters including suite ID for filtering.

### Returns

- **`Promise<[IListRunsResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListRunsResponse)>`**: A promise that resolves to the list of test runs.

### Examples

```typescript
// List all runs
const allRuns = await codebolt.autoTesting.listRuns();

// Filter by suite
const suiteRuns = await codebolt.autoTesting.listRuns({
  suiteId: 'suite-123'
});
```

### Notes

- Filter by suite to see specific history
- Useful for tracking test trends
- Most recent runs first