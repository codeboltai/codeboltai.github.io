---
name: addCaseToSuite
cbbaseinfo:
  description: Adds a test case to a test suite.
cbparameters:
  parameters:
    - name: params
      typeName: IAddCaseToSuiteParams
      description: Parameters including suite ID and case ID.
  returns:
    signatureTypeName: "Promise<IAddCaseToSuiteResponse>"
    description: A promise that resolves to the updated suite.
    typeArgs: []
data:
  name: addCaseToSuite
  category: autoTesting
  link: addCaseToSuite.md
---
# addCaseToSuite

```typescript
codebolt.autoTesting.addCaseToSuite(params: IAddCaseToSuiteParams): Promise<IAddCaseToSuiteResponse>
```

Adds a test case to a test suite.
### Parameters

- **`params`** ([IAddCaseToSuiteParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IAddCaseToSuiteParams)): Parameters including suite ID and case ID.

### Returns

- **`Promise<[IAddCaseToSuiteResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IAddCaseToSuiteResponse)>`**: A promise that resolves to the updated suite.

### Examples

```typescript
await codebolt.autoTesting.addCaseToSuite({
  suiteId: 'suite-123',
  caseId: 'case-456'
});
```

### Notes

- Cases can be in multiple suites
- Order not preserved
- Idempotent operation