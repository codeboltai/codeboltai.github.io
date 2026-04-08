---
name: getRun
cbbaseinfo:
  description: Retrieves details of a specific test run including case results and step statuses.
cbparameters:
  parameters:
    - name: params
      typeName: IGetRunParams
      description: Parameters including the run ID.
  returns:
    signatureTypeName: "Promise<IGetRunResponse>"
    description: A promise that resolves to the test run with detailed results.
    typeArgs: []
data:
  name: getRun
  category: autoTesting
  link: getRun.md
---
# getRun

```typescript
codebolt.autoTesting.getRun(params: IGetRunParams): Promise<IGetRunResponse>
```

Retrieves details of a specific test run including case results and step statuses.
### Parameters

- **`params`** ([IGetRunParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetRunParams)): Parameters including the run ID.

### Returns

- **`Promise<[IGetRunResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetRunResponse)>`**: A promise that resolves to the test run with detailed results.

### Examples

```typescript
const run = await codebolt.autoTesting.getRun({ id: 'run-123' });
console.log('Run status:', run.payload.run.status);
console.log('Test cases:', run.payload.run.testCases);

// Check pass/fail counts
const cases = run.payload.run.testCases;
const passed = cases.filter(c => c.status === 'passed').length;
const failed = cases.filter(c => c.status === 'failed').length;
console.log(`Passed: ${passed}, Failed: ${failed}`);
```

### Notes

- Returns complete run details
- Includes status for all cases and steps
- Useful for generating reports