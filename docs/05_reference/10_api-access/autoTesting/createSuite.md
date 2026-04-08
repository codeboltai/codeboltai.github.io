---
name: createSuite
cbbaseinfo:
  description: Creates a new test suite for organizing test cases.
cbparameters:
  parameters:
    - name: params
      typeName: ICreateSuiteParams
      description: Parameters for creating the test suite.
  returns:
    signatureTypeName: "Promise<ICreateSuiteResponse>"
    description: A promise that resolves to the created test suite.
    typeArgs: []
data:
  name: createSuite
  category: autoTesting
  link: createSuite.md
---
# createSuite

```typescript
codebolt.autoTesting.createSuite(params: ICreateSuiteParams): Promise<ICreateSuiteResponse>
```

Creates a new test suite for organizing test cases.
### Parameters

- **`params`** ([ICreateSuiteParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateSuiteParams)): Parameters for creating the test suite.

### Returns

- **`Promise<[ICreateSuiteResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateSuiteResponse)>`**: A promise that resolves to the created test suite.

### Examples

```typescript
// Create a basic suite
const suite = await codebolt.autoTesting.createSuite({
  name: 'Authentication Tests',
  description: 'Tests for user authentication'
});

// Create suite with initial test cases
const suite = await codebolt.autoTesting.createSuite({
  name: 'API Tests',
  description: 'API endpoint tests',
  testCaseIds: ['case-1', 'case-2', 'case-3']
});
```

### Notes

- Test suites organize related test cases
- Can add cases later with addCaseToSuite
- Descriptions help with suite discovery