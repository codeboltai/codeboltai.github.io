---
name: createCase
cbbaseinfo:
  description: Creates a new test case with steps, labels, and priority.
cbparameters:
  parameters:
    - name: params
      typeName: ICreateCaseParams
      description: Parameters for creating the test case including key, name, steps, and labels.
  returns:
    signatureTypeName: "Promise<ICreateCaseResponse>"
    description: A promise that resolves to the created test case.
    typeArgs: []
data:
  name: createCase
  category: autoTesting
  link: createCase.md
---
# createCase

```typescript
codebolt.autoTesting.createCase(params: ICreateCaseParams): Promise<ICreateCaseResponse>
```

Creates a new test case with steps, labels, and priority.
### Parameters

- **`params`** ([ICreateCaseParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateCaseParams)): Parameters for creating the test case including key, name, steps, and labels.

### Returns

- **`Promise<[ICreateCaseResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateCaseResponse)>`**: A promise that resolves to the created test case.

### Examples

```typescript
// Create a simple test case
const testCase = await codebolt.autoTesting.createCase({
  key: 'TEST-001',
  name: 'Login Test',
  description: 'Verify user can login',
  steps: [
    { content: 'Go to login page', order: 1 },
    { content: 'Enter credentials', order: 2 },
    { content: 'Click submit', order: 3 },
    { content: 'Verify success', order: 4 }
  ],
  priority: 'high',
  labels: ['authentication', 'smoke']
});

// Create with minimal details
const simple = await codebolt.autoTesting.createCase({
  key: 'TEST-002',
  name: 'Simple Test',
  steps: [{ content: 'Run test', order: 1 }]
});
```

### Notes

- Steps are executed in order
- Priorities: low, medium, high, automated
- Labels help categorize tests
- Keys should be unique