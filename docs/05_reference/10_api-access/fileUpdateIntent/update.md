---
name: update
cbbaseinfo:
  description: Updates an existing file update intent.
cbparameters:
  parameters:
    - name: id
      type: string
      required: true
      description: The unique identifier of the file update intent.
    - name: data
      type: UpdateFileUpdateIntentRequest
      required: true
      description: "Updated intent data (files, description, priority, etc.)."
  returns:
    signatureTypeName: "Promise<FileUpdateIntent>"
    description: A promise that resolves with the updated intent.
data:
  name: update
  category: fileUpdateIntent
  link: update.md
---
# update

```typescript
codebolt.fileUpdateIntent.update(id: undefined, data: undefined): Promise<FileUpdateIntent>
```

Updates an existing file update intent.
### Parameters

- **`id`** (unknown): The unique identifier of the file update intent.
- **`data`** (unknown): Updated intent data (files, description, priority, etc.).

### Returns

- **`Promise<[FileUpdateIntent](/docs/api/11_doc-type-ref/codeboltjs/interfaces/FileUpdateIntent)>`**: A promise that resolves with the updated intent.

### Examples

#### Example 1: Update Priority
```javascript
const updated = await codebolt.fileUpdateIntent.update(
  'intent-id-123',
  { priority: 9 }
);

console.log('New priority:', updated.priority);
```

#### Example 2: Add Files to Intent
```javascript
const current = await codebolt.fileUpdateIntent.get('intent-id-123');

const updated = await codebolt.fileUpdateIntent.update(
  'intent-id-123',
  {
    files: [
      ...current.files,
      { filePath: '/src/utils/helpers.ts', intentLevel: 2 }
    ]
  }
);
```

#### Example 3: Update Description
```javascript
const updated = await codebolt.fileUpdateIntent.update(
  'intent-id-123',
  { description: 'Updated: Additional features added' }
);
```

### Notes
- Only update fields that need to change
- Cannot update status (use complete/cancel instead)