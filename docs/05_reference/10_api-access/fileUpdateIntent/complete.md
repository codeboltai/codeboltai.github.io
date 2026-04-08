---
name: complete
cbbaseinfo:
  description: Marks a file update intent as completed.
cbparameters:
  parameters:
    - name: id
      type: string
      required: true
      description: The unique identifier of the file update intent.
    - name: closedBy
      type: string
      required: true
      description: Agent ID completing the intent.
  returns:
    signatureTypeName: "Promise<FileUpdateIntent>"
    description: A promise that resolves with the completed intent.
data:
  name: complete
  category: fileUpdateIntent
  link: complete.md
---
# complete

```typescript
codebolt.fileUpdateIntent.complete(id: undefined, closedBy: undefined): Promise<FileUpdateIntent>
```

Marks a file update intent as completed.
### Parameters

- **`id`** (unknown): The unique identifier of the file update intent.
- **`closedBy`** (unknown): Agent ID completing the intent.

### Returns

- **`Promise<[FileUpdateIntent](/docs/api/11_doc-type-ref/codeboltjs/interfaces/FileUpdateIntent)>`**: A promise that resolves with the completed intent.

### Examples

#### Example 1: Complete Intent
```javascript
const completed = await codebolt.fileUpdateIntent.complete(
  'intent-id-123',
  'agent-456'
);

console.log('Intent completed:', completed.status === 'completed');
```

#### Example 2: Complete After Work
```javascript
async function doWork(intentId) {
  try {
    // Perform the actual file modifications
    await modifyFiles();

    // Mark intent as completed
    await codebolt.fileUpdateIntent.complete(intentId, 'agent-456');
    console.log('Work completed successfully');
  } catch (error) {
    // Handle error and consider cancelling instead
    console.error('Work failed:', error);
  }
}
```

### Notes
- Always complete intents when work is done
- Releases file locks for other agents
- Cannot be undone (use with caution)