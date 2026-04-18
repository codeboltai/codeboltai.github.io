---
name: getThread
cbbaseinfo:
  description: Retrieves detailed information about a specific mail thread.
cbparameters:
  parameters:
    - name: params
      typeName: IGetThreadParams
      description: Object containing the threadId to retrieve.
  returns:
    signatureTypeName: "Promise<IGetThreadResponse>"
    description: A promise that resolves with the thread details.
data:
  name: getThread
  category: mail
  link: getThread.md
---
# getThread

```typescript
codebolt.mail.getThread(params: IGetThreadParams): Promise<IGetThreadResponse>
```

Retrieves detailed information about a specific mail thread.
### Parameters

- **`params`** (IGetThreadParams): Object containing the threadId to retrieve.

### Returns

- **`Promise<IGetThreadResponse>`**: A promise that resolves with the thread details.

### Response Structure

```typescript
interface IGetThreadResponse {
  success: boolean;
  thread?: {
    id: string;
    subject: string;
    participants: string[];
    type: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    metadata?: Record<string, any>;
  };
  error?: string;
}
```

### Examples

#### Example 1: Get Thread Details

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.getThread({
  threadId: 'thread-123'
});

if (result.success) {
  console.log('Subject:', result.thread.subject);
  console.log('Participants:', result.thread.participants);
  console.log('Status:', result.thread.status);
}
```

### Common Use Cases

- **Thread Inspection**: View complete thread information
- **Status Checks**: Verify thread state before actions
- **Context Retrieval**: Get thread context for messaging

### Notes

- Returns comprehensive thread information
- Includes all metadata and participant list
- Error returned if thread doesn't exist
