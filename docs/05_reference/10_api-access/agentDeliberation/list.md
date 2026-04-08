---
name: list
cbbaseinfo:
  description: Lists deliberations with optional filtering by type, status, participant, or search terms.
cbparameters:
  parameters:
    - name: params
      typeName: IListDeliberationsParams
      description: Optional filters for the deliberation list.
      isOptional: true
  returns:
    signatureTypeName: "Promise<IListDeliberationsResponse>"
    description: A promise that resolves to the list of deliberations.
    typeArgs: []
data:
  name: list
  category: agentDeliberation
  link: list.md
---
# list

```typescript
codebolt.agentDeliberation.list(params: IListDeliberationsParams): Promise<IListDeliberationsResponse>
```

Lists deliberations with optional filtering by type, status, participant, or search terms.
### Parameters

- **`params`** ([IListDeliberationsParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListDeliberationsParams), optional): Optional filters for the deliberation list.

### Returns

- **`Promise<[IListDeliberationsResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListDeliberationsResponse)>`**: A promise that resolves to the list of deliberations.

### Examples

```typescript
// List all deliberations
const all = await codebolt.agentDeliberation.list();

// Filter by type
const voting = await codebolt.agentDeliberation.list({
  deliberationType: 'voting'
});

// Filter by status
const active = await codebolt.agentDeliberation.list({
  status: 'collecting-responses'
});

// Search
const results = await codebolt.agentDeliberation.list({
  search: 'database'
});
```

### Notes

- All filters are optional
- Multiple filters are combined with AND logic
- Supports pagination with limit and offset