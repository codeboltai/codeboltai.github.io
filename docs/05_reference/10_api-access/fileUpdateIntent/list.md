---
name: list
cbbaseinfo:
  description: Lists file update intents with optional filtering.
cbparameters:
  parameters:
    - name: filters
      type: FileUpdateIntentFilters
      required: false
      description: Optional filters for environmentId, status, claimedBy, etc.
  returns:
    signatureTypeName: "Promise<FileUpdateIntent[]>"
    description: A promise that resolves with an array of file update intents.
data:
  name: list
  category: fileUpdateIntent
  link: list.md
---
# list

```typescript
codebolt.fileUpdateIntent.list(filters: undefined): Promise<FileUpdateIntent[]>
```

Lists file update intents with optional filtering.
### Parameters

- **`filters`** (unknown): Optional filters for environmentId, status, claimedBy, etc.

### Returns

- **`Promise<[FileUpdateIntent](/docs/api/11_doc-type-ref/codeboltjs/interfaces/FileUpdateIntent)[]>`**: A promise that resolves with an array of file update intents.

### Examples

#### Example 1: List All Intents in Environment
```javascript
const intents = await codebolt.fileUpdateIntent.list({
  environmentId: 'env-123'
});

console.log(`Found ${intents.length} intents`);
```

#### Example 2: List Active Intents
```javascript
const activeIntents = await codebolt.fileUpdateIntent.list({
  environmentId: 'env-123',
  status: ['active']
});

console.log('Active intents:', activeIntents.length);
```

#### Example 3: List by Agent
```javascript
const agentIntents = await codebolt.fileUpdateIntent.list({
  environmentId: 'env-123',
  claimedBy: 'agent-456'
});

console.log(`Agent has ${agentIntents.length} intents`);
```

#### Example 4: List by File Pattern
```javascript
const allIntents = await codebolt.fileUpdateIntent.list({
  environmentId: 'env-123'
});

const buttonIntents = allIntents.filter(intent =>
  intent.files.some(f => f.filePath.includes('Button'))
);
```

### Notes
- All filters are optional
- Returns empty array if no intents match
- Use for discovery and monitoring