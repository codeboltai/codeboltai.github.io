---
name: respond
cbbaseinfo:
  description: Adds a response to a feedback session from a participant.
cbparameters:
  parameters:
    - name: params
      typeName: IRespondParams
      description: Parameters including feedbackId, participantId, and array of responses.
  returns:
    signatureTypeName: "Promise<IRespondResponse>"
    description: A promise that resolves with the added response details.
data:
  name: respond
  category: groupFeedback
  link: respond.md
---
# respond

```typescript
codebolt.groupFeedback.respond(params: IRespondParams): Promise<IRespondResponse>
```

Adds a response to a feedback session from a participant.
### Parameters

- **`params`** ([IRespondParams](/docs/reference/type-reference/codeboltjs/interfaces/IRespondParams)): Parameters including feedbackId, participantId, and array of responses.

### Returns

- **`Promise<[IRespondResponse](/docs/reference/type-reference/codeboltjs/interfaces/IRespondResponse)>`**: A promise that resolves with the added response details.

### Examples

#### Example 1: Add Response to Feedback

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.groupFeedback.respond({
  feedbackId: 'feedback-123',
  participantId: 'user-001',
  responses: [
    { question: 0, answer: 'Great implementation!' },
    { question: 1, answer: 'Consider adding more tests' },
    { question: 2, answer: 'Documentation is clear' }
  ]
});

console.log('Response added');
```

### Common Use Cases

- **Submit Feedback**: Participants submit their feedback
- **Multiple Responses**: Handle multiple feedback items
- **Structured Input**: Collect answers to specific questions

### Notes

- Participant must be in the session's participant list
- Responses map to session questions by index
- Timestamps automatically recorded
