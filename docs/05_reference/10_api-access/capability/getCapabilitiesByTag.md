---
name: getCapabilitiesByTag
cbbaseinfo:
  description: Lists capabilities that have a specific tag. Useful for finding capabilities related to a particular topic or domain.
cbparameters:
  parameters:
    - name: tag
      typeName: string
      description: The tag to filter capabilities by.
  returns:
    signatureTypeName: "Promise<ListCapabilitiesResponse>"
    description: A promise that resolves to a list of capabilities with the specified tag.
    typeArgs: []
data:
  name: getCapabilitiesByTag
  category: capability
  link: getCapabilitiesByTag.md
---
# getCapabilitiesByTag

```typescript
codebolt.capability.getCapabilitiesByTag(tag: string): Promise<ListCapabilitiesResponse>
```

Lists capabilities that have a specific tag. Useful for finding capabilities related to a particular topic or domain.
### Parameters

- **`tag`** (string): The tag to filter capabilities by.

### Returns

- **`Promise<[ListCapabilitiesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse)>`**: A promise that resolves to a list of capabilities with the specified tag.

### Response Structure

Returns a [`ListCapabilitiesResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse) with capabilities matching the tag.

### Examples

#### Find AI Capabilities

```typescript
const aiCapabilities = await codebolt.capability.getCapabilitiesByTag('ai');
console.log('AI capabilities:', aiCapabilities.capabilities);
```

#### Find Data Processing Tools

```typescript
const dataTools = await codebolt.capability.getCapabilitiesByTag('data-processing');
```

#### Browse by Category

```typescript
const categories = ['ai', 'data', 'image', 'text'];
for (const category of categories) {
  const capabilities = await codebolt.capability.getCapabilitiesByTag(category);
  console.log(`${category}:`, capabilities.capabilities.length);
}
```

### Common Use Cases

#### Tag-Based Discovery

```typescript
const findByTag = async (tag: string) => {
  const result = await codebolt.capability.getCapabilitiesByTag(tag);
  return result.capabilities;
};
```

### Notes

- Tags are case-sensitive
- Multiple tags require AND logic
- Use for capability categorization