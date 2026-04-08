---
name: listCapabilities
cbbaseinfo:
  description: Lists all available capabilities with optional filtering by type, tags, or author.
cbparameters:
  parameters:
    - name: filter
      typeName: CapabilityFilter
      description: Optional filter criteria to narrow down the list of capabilities.
      isOptional: true
  returns:
    signatureTypeName: "Promise<ListCapabilitiesResponse>"
    description: A promise that resolves to a list of capabilities matching the filter criteria.
    typeArgs: []
data:
  name: listCapabilities
  category: capability
  link: listCapabilities.md
---
# listCapabilities

```typescript
codebolt.capability.listCapabilities(filter: CapabilityFilter): Promise<ListCapabilitiesResponse>
```

Lists all available capabilities with optional filtering by type, tags, or author.
### Parameters

- **`filter`** ([CapabilityFilter](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CapabilityFilter), optional): Optional filter criteria to narrow down the list of capabilities.

### Returns

- **`Promise<[ListCapabilitiesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse)>`**: A promise that resolves to a list of capabilities matching the filter criteria.

### Response Structure

The method returns a Promise that resolves to a [`ListCapabilitiesResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse) object with the following properties:

**Response Properties:**
- `type` (string): Always "listCapabilitiesResponse"
- `success` (boolean): Indicates if the operation was successful
- `capabilities` (Capability[]): Array of capability objects
  - `id` (string): Unique identifier for the capability
  - `name` (string): Name of the capability
  - `type` (CapabilityType): Type of capability (skill, power, talent, etc.)
  - `description` (string): Description of what the capability does
  - `author` (string, optional): Author of the capability
  - `tags` (string[], optional): Tags associated with the capability
  - `version` (string, optional): Version of the capability
  - `metadata` (CapabilityMetadata, optional): Additional metadata including inputs, outputs, dependencies
- `error` (string, optional): Error details if the operation failed
- `requestId` (string, optional): Unique identifier for the request

### Examples

#### Example 1: List All Capabilities

```typescript
import codebolt from '@codebolt/codeboltjs';

// Get all available capabilities without filtering
const result = await codebolt.capability.listCapabilities();

if (result.success) {
  console.log(`Found ${result.capabilities.length} capabilities:`);
  result.capabilities.forEach(cap => {
    console.log(`- ${cap.name} (${cap.type}): ${cap.description}`);
  });
} else {
  console.error('Failed to list capabilities:', result.error);
}
```

#### Example 2: Filter by Type

```typescript
// List only skills
const skills = await codebolt.capability.listCapabilities({
  type: 'skill'
});

console.log('Available skills:', skills.capabilities);

// List only powers
const powers = await codebolt.capability.listCapabilities({
  type: 'power'
});

console.log('Available powers:', powers.capabilities);
```

#### Example 3: Filter by Tags

```typescript
// Find AI-related capabilities
const aiCapabilities = await codebolt.capability.listCapabilities({
  tags: ['ai', 'machine-learning']
});

console.log('AI Capabilities:', aiCapabilities.capabilities);

// Find data processing capabilities
const dataCapabilities = await codebolt.capability.listCapabilities({
  tags: ['data', 'processing']
});

console.log('Data Processing Capabilities:', dataCapabilities.capabilities);
```

#### Example 4: Filter by Author

```typescript
// Get capabilities by a specific author
const authorCapabilities = await codebolt.capability.listCapabilities({
  author: 'codebolt-team'
});

console.log('Official Codebolt capabilities:', authorCapabilities.capabilities);

// Get community capabilities
const communityCapabilities = await codebolt.capability.listCapabilities({
  author: 'community-contributor'
});

console.log('Community capabilities:', communityCapabilities.capabilities);
```

#### Example 5: Combined Filters

```typescript
// Combine multiple filters
const filtered = await codebolt.capability.listCapabilities({
  type: 'skill',
  tags: ['automation'],
  author: 'codebolt-team'
});

console.log('Filtered capabilities:', filtered.capabilities);
```

#### Example 6: Error Handling

```typescript
try {
  const result = await codebolt.capability.listCapabilities();

  if (!result.success) {
    console.error('Operation failed:', result.error);
    return;
  }

  // Process capabilities
  result.capabilities.forEach(capability => {
    console.log(`${capability.name}: ${capability.description}`);
  });

  // Group by type
  const byType = result.capabilities.reduce((acc, cap) => {
    if (!acc[cap.type]) acc[cap.type] = [];
    acc[cap.type].push(cap);
    return acc;
  }, {} as Record<string, typeof result.capabilities>);

  console.log('Capabilities by type:', byType);

} catch (error) {
  console.error('Unexpected error:', error);
}
```

### Common Use Cases

#### 1. Capability Discovery

Discover available capabilities before execution:

```typescript
const discoverCapabilities = async () => {
  const result = await codebolt.capability.listCapabilities();

  const capabilityMap = result.capabilities.reduce((map, cap) => {
    map[cap.name] = cap;
    return map;
  }, {} as Record<string, any>);

  return capabilityMap;
};

const capabilities = await discoverCapabilities();
console.log('Available capabilities:', Object.keys(capabilities));
```

#### 2. Building a Capability Browser

Create a user-friendly browser for capabilities:

```typescript
const browseCapabilities = async (filter?: CapabilityFilter) => {
  const result = await codebolt.capability.listCapabilities(filter);

  // Group by type
  const grouped = result.capabilities.reduce((acc, cap) => {
    if (!acc[cap.type]) acc[cap.type] = [];
    acc[cap.type].push({
      name: cap.name,
      description: cap.description,
      author: cap.author,
      tags: cap.tags
    });
    return acc;
  }, {} as Record<string, any[]>);

  return grouped;
};

const browser = await browseCapabilities();
console.log('Capability Browser:', browser);
```

#### 3. Search and Filter

Implement advanced search functionality:

```typescript
const searchCapabilities = async (searchTerm: string) => {
  const result = await codebolt.capability.listCapabilities();

  const matched = result.capabilities.filter(cap =>
    cap.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cap.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cap.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return matched;
};

const results = await searchCapabilities('image');
console.log('Image-related capabilities:', results);
```

### Notes

- The `filter` parameter is optional. When not provided, all capabilities are returned
- Filtering is performed on the server side, so only matching results are returned
- Multiple filter criteria are combined with AND logic (all must match)
- Tags filter requires all specified tags to be present on the capability
- Empty results are possible if no capabilities match the filter criteria
- Use specific helper methods like `listSkills()`, `listPowers()`, or `listTalents()` for simpler type-based filtering
- Capabilities include metadata about inputs, outputs, and dependencies when available
- Author names are case-sensitive
- This operation does not require authentication for listing public capabilities