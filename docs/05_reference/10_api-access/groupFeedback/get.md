---
name: get
cbbaseinfo:
  description: Retrieves details of a specific feedback session including all responses.
cbparameters:
  parameters:
    - name: params
      typeName: IGetFeedbackParams
      description: Parameters including the feedbackId to retrieve.
  returns:
    signatureTypeName: "Promise<IGetFeedbackResponse>"
    description: A promise that resolves with the feedback session details.
data:
  name: get
  category: groupFeedback
  link: get.md
---
# get

```typescript
codebolt.groupFeedback.get(params: IGetFeedbackParams): Promise<IGetFeedbackResponse>
```

Retrieves details of a specific feedback session including all responses.
### Parameters

- **`params`** ([IGetFeedbackParams](/docs/reference/type-reference/codeboltjs/interfaces/IGetFeedbackParams)): Parameters including the feedbackId to retrieve.

### Returns

- **`Promise<[IGetFeedbackResponse](/docs/reference/type-reference/codeboltjs/interfaces/IGetFeedbackResponse)>`**: A promise that resolves with the feedback session details.

### Examples

#### Example 1: Get Feedback Session

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const feedback = await codebolt.groupFeedback.get({
  feedbackId: 'feedback-123'
});

console.log('Title:', feedback.feedbackSession.title);
console.log('Description:', feedback.feedbackSession.description);
console.log('Participants:', feedback.feedbackSession.participants);
console.log('Responses:', feedback.feedbackSession.responses);
```

### Common Use Cases

- **View Responses**: Check all feedback responses
- **Session Details**: Get complete session information
- **Export Data**: Retrieve feedback for analysis

### Notes

- Returns all responses in the session
- Includes participant and timestamp for each response
- Error returned if session doesn't exist