---
name: listSuites
cbbaseinfo:
  description: Lists all available test suites.
cbparameters:
  parameters:
    - name: params
      typeName: IListSuitesParams
      description: Optional parameters for filtering.
      isOptional: true
  returns:
    signatureTypeName: "Promise<IListSuitesResponse>"
    description: A promise that resolves to the list of test suites.
    typeArgs: []
data:
  name: listSuites
  category: autoTesting
  link: listSuites.md
---
# listSuites

```typescript
codebolt.autoTesting.listSuites(params: IListSuitesParams): Promise<IListSuitesResponse>
```

Lists all available test suites.
### Parameters

- **`params`** ([IListSuitesParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListSuitesParams), optional): Optional parameters for filtering.

### Returns

- **`Promise<[IListSuitesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListSuitesResponse)>`**: A promise that resolves to the list of test suites.

### Examples

```typescript
const suites = await codebolt.autoTesting.listSuites();
console.log('Available suites:', suites.payload.suites);
```

### Notes

- Returns all test suites
- Useful for test discovery
- No filtering currently supported