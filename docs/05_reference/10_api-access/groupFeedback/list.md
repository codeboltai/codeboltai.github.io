---
name: list
cbbaseinfo:
  description: Lists all feedback sessions with optional filtering by status and participants.
cbparameters:
  parameters:
    - name: params
      typeName: IListFeedbacksParams
      description: Optional filters including status, participantId, limit, and offset.
  returns:
    signatureTypeName: "Promise<IListFeedbacksResponse>"
    description: A promise that resolves with an array of feedback sessions.
data:
  name: list
  category: groupFeedback
  link: list.md
---
# list

```typescript
codebolt.groupFeedback.list(params: IListFeedbacksParams): Promise<IListFeedbacksResponse>
```

Lists all feedback sessions with optional filtering by status and participants.
### Parameters

- **`params`** ([IListFeedbacksParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListFeedbacksParams)): Optional filters including status, participantId, limit, and offset.

### Returns

- **`Promise<[IListFeedbacksResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListFeedbacksResponse)>`**: A promise that resolves with an array of feedback sessions.

### Examples

#### Example 1: List All Feedback Sessions

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.groupFeedback.list();

console.log('All feedback sessions:');
result.feedbackSessions.forEach(session => {
  console.log(`- ${session.title} (${session.status})`);
});
```

#### Example 2: Filter by Status

```typescript
const result = await codebolt.groupFeedback.list({
  status: 'open'
});

console.log('Open sessions:');
result.feedbackSessions.forEach(session => {
  console.log(`- ${session.title}`);
});
```

### Common Use Cases

- **Dashboard Display**: Show all feedback sessions
- **Status Filtering**: View sessions by status
- **Participant Views**: Show sessions for specific users

### Notes

- Supports pagination via limit and offset
- Filter by status (open, closed, archived)
- Can filter by participant