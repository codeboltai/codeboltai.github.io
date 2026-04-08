---
name: listPowers
cbbaseinfo:
  description: "Lists all available powers. This is a convenience method that filters capabilities by type 'power'."
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<ListCapabilitiesResponse>"
    description: A promise that resolves to a list of all powers.
    typeArgs: []
data:
  name: listPowers
  category: capability
  link: listPowers.md
---
# listPowers

```typescript
codebolt.capability.listPowers(): Promise<ListCapabilitiesResponse>
```

Lists all available powers. This is a convenience method that filters capabilities by type 'power'.
### Returns

- **`Promise<[ListCapabilitiesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse)>`**: A promise that resolves to a list of all powers.

### Response Structure

Returns a [`ListCapabilitiesResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse) with an array of power capabilities.

### Examples

#### List All Powers

```typescript
const powers = await codebolt.capability.listPowers();
console.log('Available powers:', powers.capabilities);
```

#### Find Advanced Capabilities

```typescript
const allPowers = await codebolt.capability.listPowers();
const mlPowers = allPowers.capabilities.filter(p =>
  p.tags?.includes('ml') || p.tags?.includes('ai')
);
```

### Common Use Cases

#### Power Discovery

```typescript
const discoverPowers = async () => {
  const result = await codebolt.capability.listPowers();
  return result.capabilities.filter(p =>
    p.tags?.includes('advanced')
  );
};
```

### Notes

- Equivalent to `listCapabilities({ type: 'power' })`
- Powers are more resource-intensive than skills
- Suitable for complex operations