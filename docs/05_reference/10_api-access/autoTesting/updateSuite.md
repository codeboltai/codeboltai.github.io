---
name: updateSuite
cbbaseinfo:
  description: "Updates an existing test suite's name, description, or test case assignments."
cbparameters:
  parameters:
    - name: params
      typeName: IUpdateSuiteParams
      description: Parameters including suite ID and fields to update.
  returns:
    signatureTypeName: "Promise<IUpdateSuiteResponse>"
    description: A promise that resolves to the updated suite.
    typeArgs: []
data:
  name: updateSuite
  category: autoTesting
  link: updateSuite.md
---
# updateSuite

```typescript
codebolt.autoTesting.updateSuite(params: IUpdateSuiteParams): Promise<IUpdateSuiteResponse>
```

Updates an existing test suite's name, description, or test case assignments.
### Parameters

- **`params`** ([IUpdateSuiteParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateSuiteParams)): Parameters including suite ID and fields to update.

### Returns

- **`Promise<[IUpdateSuiteResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateSuiteResponse)>`**: A promise that resolves to the updated suite.

### Examples

```typescript
// Update name
await codebolt.autoTesting.updateSuite({
  id: 'suite-123',
  name: 'Updated Suite Name'
});

// Update cases
await codebolt.autoTesting.updateSuite({
  id: 'suite-123',
  testCaseIds: ['case-1', 'case-2', 'case-3']
});
```

### Notes

- Only updates provided fields
- Replaces entire testCaseIds array
- Use add/remove for individual changes