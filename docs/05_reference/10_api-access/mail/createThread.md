---
name: createThread
cbbaseinfo:
  description: Creates a new mail thread for conversation between agents or users.
cbparameters:
  parameters:
    - name: params
      typeName: ICreateThreadParams
      description: Thread creation parameters including subject, participants, type, and metadata.
  returns:
    signatureTypeName: "Promise<ICreateThreadResponse>"
    description: A promise that resolves with the created thread details.
data:
  name: createThread
  category: mail
  link: createThread.md
---
# createThread

```typescript
codebolt.mail.createThread(params: ICreateThreadParams): Promise<ICreateThreadResponse>
```

Creates a new mail thread for conversation between agents or users.
### Parameters

- **`params`** (ICreateThreadParams): Thread creation parameters including subject, participants, type, and metadata.

### Returns

- **`Promise<ICreateThreadResponse>`**: A promise that resolves with the created thread details.

### Response Structure

```typescript
interface ICreateThreadResponse {
  success: boolean;
  thread?: {
    id: string;
    subject: string;
    participants: string[];
    type: 'agent-to-agent' | 'agent-to-user' | 'broadcast';
    createdAt: string;
    metadata?: Record<string, any>;
  };
  error?: string;
}
```

### Examples

#### Example 1: Create Agent-to-Agent Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.createThread({
  subject: 'Code Review: Authentication Module',
  participants: ['agent-001', 'agent-002'],
  type: 'agent-to-agent',
  metadata: {
    project: 'auth-system',
    priority: 'high'
  }
});

console.log('Thread created:', result.thread.id);
```

#### Example 2: Create Thread with Multiple Participants

```typescript
const result = await codebolt.mail.createThread({
  subject: 'Sprint Planning Meeting',
  participants: ['agent-001', 'agent-002', 'agent-003'],
  type: 'agent-to-agent',
  metadata: {
    sprint: 'Sprint-42',
    meetingType: 'planning'
  }
});
```

### Common Use Cases

- **Team Collaboration**: Create threads for team discussions
- **Code Reviews**: Set up dedicated review threads
- **Task Coordination**: Coordinate work between agents

### Notes

- Thread types: agent-to-agent, agent-to-user, broadcast
- All participants must be registered agents
- Metadata useful for categorization and filtering