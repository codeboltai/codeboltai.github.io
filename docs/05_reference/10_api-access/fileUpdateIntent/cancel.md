---
name: cancel
cbbaseinfo:
  description: Cancels a file update intent.
cbparameters:
  parameters:
    - name: id
      type: string
      required: true
      description: The unique identifier of the file update intent.
    - name: cancelledBy
      type: string
      required: true
      description: Agent ID cancelling the intent.
  returns:
    signatureTypeName: "Promise<FileUpdateIntent>"
    description: A promise that resolves with the cancelled intent.
data:
  name: cancel
  category: fileUpdateIntent
  link: cancel.md
---
# cancel

```typescript
codebolt.fileUpdateIntent.cancel(id: undefined, cancelledBy: undefined): Promise<FileUpdateIntent>
```

Cancels a file update intent.
### Parameters

- **`id`** (unknown): The unique identifier of the file update intent.
- **`cancelledBy`** (unknown): Agent ID cancelling the intent.

### Returns

- **`Promise<[FileUpdateIntent](/docs/api/11_doc-type-ref/codeboltjs/interfaces/FileUpdateIntent)>`**: A promise that resolves with the cancelled intent.

### Examples

#### Example 1: Cancel Intent
```javascript
const cancelled = await codebolt.fileUpdateIntent.cancel(
  'intent-id-123',
  'agent-456'
);

console.log('Intent cancelled:', cancelled.status === 'cancelled');
```

#### Example 2: Cancel on Error
```javascript
async function doWorkWithErrorHandling(intentId) {
  try {
    await modifyFiles();
    await codebolt.fileUpdateIntent.complete(intentId, 'agent-456');
  } catch (error) {
    console.error('Work failed, cancelling intent:', error);
    await codebolt.fileUpdateIntent.cancel(intentId, 'agent-456');
  }
}
```

### Notes
- Use when work is abandoned or fails
- Releases file locks for other agents
- Different from complete (work failed vs succeeded)