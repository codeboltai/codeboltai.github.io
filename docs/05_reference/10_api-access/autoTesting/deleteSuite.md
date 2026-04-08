---
name: deleteSuite
cbbaseinfo:
  description: Deletes a test suite and all its associations.
cbparameters:
  parameters:
    - name: params
      typeName: IDeleteSuiteParams
      description: Parameters including the suite ID to delete.
  returns:
    signatureTypeName: "Promise<IDeleteSuiteResponse>"
    description: A promise that resolves when the suite is deleted.
    typeArgs: []
data:
  name: deleteSuite
  category: autoTesting
  link: deleteSuite.md
---
# deleteSuite

```typescript
codebolt.autoTesting.deleteSuite(params: IDeleteSuiteParams): Promise<IDeleteSuiteResponse>
```

Deletes a test suite and all its associations.
### Parameters

- **`params`** ([IDeleteSuiteParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IDeleteSuiteParams)): Parameters including the suite ID to delete.

### Returns

- **`Promise<[IDeleteSuiteResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IDeleteSuiteResponse)>`**: A promise that resolves when the suite is deleted.

### Examples

```typescript
await codebolt.autoTesting.deleteSuite({ id: 'suite-123' });
```

### Notes

- Doesn't delete associated test cases
- Only removes the suite
- Permanent operation