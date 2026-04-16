---
name: create
cbbaseinfo:
  description: Creates a new feedback session for collecting structured feedback from multiple participants.
cbparameters:
  parameters:
    - name: params
      typeName: ICreateFeedbackParams
      description: Feedback session parameters including title, description, participants, questions, and metadata.
  returns:
    signatureTypeName: "Promise<ICreateFeedbackResponse>"
    description: A promise that resolves with the created feedback session details.
data:
  name: create
  category: groupFeedback
  link: create.md
---
# create

```typescript
codebolt.groupFeedback.create(params: ICreateFeedbackParams): Promise<ICreateFeedbackResponse>
```

Creates a new feedback session for collecting structured feedback from multiple participants.
### Parameters

- **`params`** ([ICreateFeedbackParams](/docs/reference/type-reference/codeboltjs/interfaces/ICreateFeedbackParams)): Feedback session parameters including title, description, participants, questions, and metadata.

### Returns

- **`Promise<[ICreateFeedbackResponse](/docs/reference/type-reference/codeboltjs/interfaces/ICreateFeedbackResponse)>`**: A promise that resolves with the created feedback session details.

### Response Structure

```typescript
interface ICreateFeedbackResponse {
  success: boolean;
  feedbackSession?: {
    id: string;
    title: string;
    description?: string;
    participants: string[];
    questions: string[];
    responses: any[];
    status: string;
    createdAt: string;
    metadata?: Record<string, any>;
  };
  error?: string;
}
```

### Examples

#### Example 1: Create Basic Feedback Session

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const feedback = await codebolt.groupFeedback.create({
  title: 'Code Review Feedback',
  description: 'Share your thoughts on the new feature',
  participants: ['user-001', 'user-002', 'user-003'],
  questions: [
    'What do you like about the implementation?',
    'What concerns do you have?',
    'Any suggestions for improvement?'
  ]
});

console.log('Feedback session created:', feedback.feedbackSession.id);
```

#### Example 2: Create Session with Metadata

```typescript
const feedback = await codebolt.groupFeedback.create({
  title: 'Sprint Retrospective',
  description: 'Team retrospective for Sprint 42',
  participants: ['dev-team-lead', 'developer-1', 'developer-2'],
  questions: [
    'What went well?',
    'What didn\'t go well?',
    'Action items for next sprint?'
  ],
  status: 'open',
  metadata: {
    sprint: 'Sprint-42',
    project: 'E-Commerce Platform',
    deadline: '2024-02-15'
  }
});

console.log('Sprint retrospective created');
```

### Common Use Cases

- **Code Reviews**: Collect structured feedback on code changes
- **Retrospectives**: Facilitate team retrospectives
- **Product Feedback**: Gather user feedback on features
- **Design Reviews**: Collect design feedback from stakeholders

### Notes

- Participants must be valid user IDs
- Questions guide structured feedback
- Status defaults to 'open' for new sessions
- Metadata useful for categorization and filtering
