---
name: listTalents
cbbaseinfo:
  description: "Lists all available talents. This is a convenience method that filters capabilities by type 'talent'."
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<ListCapabilitiesResponse>"
    description: A promise that resolves to a list of all talents.
    typeArgs: []
data:
  name: listTalents
  category: capability
  link: listTalents.md
---
# listTalents

```typescript
codebolt.capability.listTalents(): Promise<ListCapabilitiesResponse>
```

Lists all available talents. This is a convenience method that filters capabilities by type 'talent'.
### Returns

- **`Promise<[ListCapabilitiesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse)>`**: A promise that resolves to a list of all talents.

### Response Structure

Returns a [`ListCapabilitiesResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse) with an array of talent capabilities.

### Examples

#### List All Talents

```typescript
const talents = await codebolt.capability.listTalents();
console.log('Available talents:', talents.capabilities);
```

#### Find Domain-Specific Talents

```typescript
const allTalents = await codebolt.capability.listTalents();
const legalTalents = allTalents.capabilities.filter(t =>
  t.tags?.includes('legal')
);
```

### Common Use Cases

#### Talent Discovery

```typescript
const discoverTalents = async (domain: string) => {
  const result = await codebolt.capability.listTalents();
  return result.capabilities.filter(t =>
    t.tags?.includes(domain)
  );
};
```

### Notes

- Equivalent to `listCapabilities({ type: 'talent' })`
- Talents are specialized for specific domains
- Use for industry-specific functionality