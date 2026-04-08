---
name: updateCase
cbbaseinfo:
  description: "Updates an existing test case's properties or steps."
cbparameters:
  parameters:
    - name: params
      typeName: IUpdateCaseParams
      description: Parameters including case ID and fields to update.
  returns:
    signatureTypeName: "Promise<IUpdateCaseResponse>"
    description: A promise that resolves to the updated test case.
    typeArgs: []
data:
  name: updateCase
  category: autoTesting
  link: updateCase.md
---
# updateCase

```typescript
codebolt.autoTesting.updateCase(params: IUpdateCaseParams): Promise<IUpdateCaseResponse>
```

Updates an existing test case's properties or steps.
### Parameters

- **`params`** ([IUpdateCaseParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateCaseParams)): Parameters including case ID and fields to update.

### Returns

- **`Promise<[IUpdateCaseResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateCaseResponse)>`**: A promise that resolves to the updated test case.

### Examples

```typescript
// Update name
await codebolt.autoTesting.updateCase({
  id: 'case-123',
  name: 'Updated Test Name'
});

// Update steps
await codebolt.autoTesting.updateCase({
  id: 'case-123',
  steps: [
    { id: 'step-1', content: 'Updated step 1', order: 1 },
    { content: 'New step', order: 2 }
  ]
});
```

### Notes

- Steps with IDs update existing steps
- Steps without IDs create new steps
- Replaces entire steps array