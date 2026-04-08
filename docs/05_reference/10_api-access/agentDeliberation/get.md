---
name: get
cbbaseinfo:
  description: Retrieves details of a specific deliberation including responses and votes.
cbparameters:
  parameters:
    - name: params
      typeName: IGetDeliberationParams
      description: Parameters including deliberation ID and optional view type.
  returns:
    signatureTypeName: "Promise<IGetDeliberationResponse>"
    description: A promise that resolves to deliberation details.
    typeArgs: []
data:
  name: get
  category: agentDeliberation
  link: get.md
---
# get

```typescript
codebolt.agentDeliberation.get(params: IGetDeliberationParams): Promise<IGetDeliberationResponse>
```

Retrieves details of a specific deliberation including responses and votes.
### Parameters

- **`params`** ([IGetDeliberationParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetDeliberationParams)): Parameters including deliberation ID and optional view type.

### Returns

- **`Promise<[IGetDeliberationResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetDeliberationResponse)>`**: A promise that resolves to deliberation details.

### Examples

```typescript
// Get full deliberation
const deliberation = await codebolt.agentDeliberation.get({
  id: 'delib-123',
  view: 'full'
});

// Get only responses
const responses = await codebolt.agentDeliberation.get({
  id: 'delib-123',
  view: 'responses'
});
```

### Notes

- View options: 'request', 'full', 'responses', 'votes', 'winner'
- Use specific views to reduce payload size