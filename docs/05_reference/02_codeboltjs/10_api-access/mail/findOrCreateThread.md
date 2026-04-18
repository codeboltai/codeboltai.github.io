---
name: findOrCreateThread
cbbaseinfo:
  description: Finds an existing thread or creates a new one based on participants and subject.
cbparameters:
  parameters:
    - name: params
      typeName: IFindOrCreateThreadParams
      description: Thread parameters including subject, participants, type, and metadata.
  returns:
    signatureTypeName: "Promise<IFindOrCreateThreadResponse>"
    description: A promise that resolves with the thread and whether it was created or found.
data:
  name: findOrCreateThread
  category: mail
  link: findOrCreateThread.md
---
# findOrCreateThread

```typescript
codebolt.mail.findOrCreateThread(params: IFindOrCreateThreadParams): Promise<IFindOrCreateThreadResponse>
```

Finds an existing thread or creates a new one based on participants and subject.
### Parameters

- **`params`** (IFindOrCreateThreadParams): Thread parameters including subject, participants, type, and metadata.

### Returns

- **`Promise<IFindOrCreateThreadResponse>`**: A promise that resolves with the thread and whether it was created or found.

### Response Structure

```typescript
interface IFindOrCreateThreadResponse {
  success: boolean;
  thread?: {
    id: string;
    subject: string;
    participants: string[];
    type: string;
    createdAt: string;
  };
  created?: boolean;
  error?: string;
}
```

### Examples

#### Example 1: Find or Create Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.findOrCreateThread({
  subject: 'Bug Fix: Login Issue',
  participants: ['agent-001', 'agent-002'],
  type: 'agent-to-agent'
});

if (result.created) {
  console.log('New thread created:', result.thread.id);
} else {
  console.log('Existing thread found:', result.thread.id);
}
```

### Common Use Cases

- **Idempotent Thread Creation**: Ensure thread exists without duplicates
- **Continuing Conversations**: Resume existing discussions
- **Deduplication**: Prevent multiple threads for same topic

### Notes

- Searches for existing threads with same participants and subject
- Creates new thread only if none exists
- Returns created flag to indicate if thread was new
