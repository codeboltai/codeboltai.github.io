---
name: removeCaseFromSuite
cbbaseinfo:
  description: Removes a test case from a test suite.
cbparameters:
  parameters:
    - name: params
      typeName: IRemoveCaseFromSuiteParams
      description: Parameters including suite ID and case ID.
  returns:
    signatureTypeName: "Promise<IRemoveCaseFromSuiteResponse>"
    description: A promise that resolves to the updated suite.
    typeArgs: []
data:
  name: removeCaseFromSuite
  category: autoTesting
  link: removeCaseFromSuite.md
---
# removeCaseFromSuite

```typescript
codebolt.autoTesting.removeCaseFromSuite(params: IRemoveCaseFromSuiteParams): Promise<IRemoveCaseFromSuiteResponse>
```

Removes a test case from a test suite.
### Parameters

- **`params`** ([IRemoveCaseFromSuiteParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IRemoveCaseFromSuiteParams)): Parameters including suite ID and case ID.

### Returns

- **`Promise<[IRemoveCaseFromSuiteResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IRemoveCaseFromSuiteResponse)>`**: A promise that resolves to the updated suite.

### Examples

```typescript
await codebolt.autoTesting.removeCaseFromSuite({
  suiteId: 'suite-123',
  caseId: 'case-456'
});
```

### Notes

- Doesn't delete the case itself
- Only removes suite association
- Idempotent operation