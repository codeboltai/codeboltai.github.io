---
name: listCases
cbbaseinfo:
  description: Lists all available test cases.
cbparameters:
  parameters:
    - name: params
      typeName: IListCasesParams
      description: Optional parameters for filtering.
      isOptional: true
  returns:
    signatureTypeName: "Promise<IListCasesResponse>"
    description: A promise that resolves to the list of test cases.
    typeArgs: []
data:
  name: listCases
  category: autoTesting
  link: listCases.md
---
# listCases

```typescript
codebolt.autoTesting.listCases(params: IListCasesParams): Promise<IListCasesResponse>
```

Lists all available test cases.
### Parameters

- **`params`** ([IListCasesParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListCasesParams), optional): Optional parameters for filtering.

### Returns

- **`Promise<[IListCasesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListCasesResponse)>`**: A promise that resolves to the list of test cases.

### Examples

```typescript
const cases = await codebolt.autoTesting.listCases();
console.log('Available test cases:', cases.payload.cases);
```

### Notes

- Returns all test cases
- Useful for browsing available tests
- Can filter by labels or priority