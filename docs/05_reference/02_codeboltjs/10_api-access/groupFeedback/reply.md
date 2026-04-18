---
name: reply
cbbaseinfo:
  description: Adds a reply to a specific response in a feedback session, enabling threaded discussions.
cbparameters:
  parameters:
    - name: params
      typeName: IReplyParams
      description: Parameters including feedbackId, responseId, participantId, and reply content.
  returns:
    signatureTypeName: "Promise<IReplyResponse>"
    description: A promise that resolves with the added reply details.
data:
  name: reply
  category: groupFeedback
  link: reply.md
---
# reply

```typescript
codebolt.groupFeedback.reply(params: IReplyParams): Promise<IReplyResponse>
```

Adds a reply to a specific response in a feedback session, enabling threaded discussions.
### Parameters

- **`params`** ([IReplyParams](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/IReplyParams)): Parameters including feedbackId, responseId, participantId, and reply content.

### Returns

- **`Promise<[IReplyResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/IReplyResponse)>`**: A promise that resolves with the added reply details.

### Examples

#### Example 1: Reply to a Response

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.groupFeedback.reply({
  feedbackId: 'feedback-123',
  responseId: 'response-456',
  participantId: 'user-002',
  content: 'That\'s a great suggestion! Let me implement it.'
});

console.log('Reply added');
```

### Common Use Cases

- **Follow-up Questions**: Ask clarifying questions
- **Discussion**: Enable threaded conversations
- **Collaboration**: Facilitate back-and-forth discussions

### Notes

- Creates threaded discussion structure
- Links to parent response
- All participants can view replies
