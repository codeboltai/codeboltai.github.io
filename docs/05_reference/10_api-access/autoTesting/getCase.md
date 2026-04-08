---
name: getCase
cbbaseinfo:
  description: Retrieves details of a specific test case.
cbparameters:
  parameters:
    - name: params
      typeName: IGetCaseParams
      description: Parameters including the case ID.
  returns:
    signatureTypeName: "Promise<IGetCaseResponse>"
    description: A promise that resolves to the test case details.
    typeArgs: []
data:
  name: getCase
  category: autoTesting
  link: getCase.md
---
# getCase

```typescript
codebolt.autoTesting.getCase(params: IGetCaseParams): Promise<IGetCaseResponse>
```

Retrieves details of a specific test case.
### Parameters

- **`params`** ([IGetCaseParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetCaseParams)): Parameters including the case ID.

### Returns

- **`Promise<[IGetCaseResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetCaseResponse)>`**: A promise that resolves to the test case details.

### Examples

```typescript
const testCase = await codebolt.autoTesting.getCase({ id: 'case-123' });
console.log('Test case:', testCase.payload.testCase);
```

### Notes

- Returns complete case details
- Includes all steps in order
- Shows labels and priority