---
name: getCapabilitiesByAuthor
cbbaseinfo:
  description: Lists capabilities created by a specific author. Useful for finding all capabilities from a particular developer or organization.
cbparameters:
  parameters:
    - name: author
      typeName: string
      description: The author name to filter by.
  returns:
    signatureTypeName: "Promise<ListCapabilitiesResponse>"
    description: A promise that resolves to a list of capabilities by the specified author.
    typeArgs: []
data:
  name: getCapabilitiesByAuthor
  category: capability
  link: getCapabilitiesByAuthor.md
---
# getCapabilitiesByAuthor

```typescript
codebolt.capability.getCapabilitiesByAuthor(author: string): Promise<ListCapabilitiesResponse>
```

Lists capabilities created by a specific author. Useful for finding all capabilities from a particular developer or organization.
### Parameters

- **`author`** (string): The author name to filter by.

### Returns

- **`Promise<[ListCapabilitiesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse)>`**: A promise that resolves to a list of capabilities by the specified author.

### Response Structure

Returns a [`ListCapabilitiesResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse) with capabilities from the specified author.

### Examples

#### Get Official Capabilities

```typescript
const official = await codebolt.capability.getCapabilitiesByAuthor('codebolt-team');
console.log('Official capabilities:', official.capabilities);
```

#### Get Community Capabilities

```typescript
const community = await codebolt.capability.getCapabilitiesByAuthor('community-contributor');
```

#### Find Your Own Capabilities

```typescript
const myCapabilities = await codebolt.capability.getCapabilitiesByAuthor('your-username');
```

### Common Use Cases

#### Author Discovery

```typescript
const getAuthorCapabilities = async (author: string) => {
  const result = await codebolt.capability.getCapabilitiesByAuthor(author);
  return result.capabilities.map(cap => ({
    name: cap.name,
    type: cap.type,
    description: cap.description
  }));
};
```

### Notes

- Author names are case-sensitive
- Use for trusted capability sources
- Verify author before execution