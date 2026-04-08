---
name: deleteCase
cbbaseinfo:
  description: Deletes a test case.
cbparameters:
  parameters:
    - name: params
      typeName: IDeleteCaseParams
      description: Parameters including the case ID to delete.
  returns:
    signatureTypeName: "Promise<IDeleteCaseResponse>"
    description: A promise that resolves when the case is deleted.
    typeArgs: []
data:
  name: deleteCase
  category: autoTesting
  link: deleteCase.md
---
# deleteCase

```typescript
codebolt.autoTesting.deleteCase(params: IDeleteCaseParams): Promise<IDeleteCaseResponse>
```

Deletes a test case.
### Parameters

- **`params`** ([IDeleteCaseParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IDeleteCaseParams)): Parameters including the case ID to delete.

### Returns

- **`Promise<[IDeleteCaseResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IDeleteCaseResponse)>`**: A promise that resolves when the case is deleted.

### Examples

```typescript
await codebolt.autoTesting.deleteCase({ id: 'case-123' });
```

### Notes

- Removes case from all suites
- Permanent operation
- Cannot delete cases used in runs