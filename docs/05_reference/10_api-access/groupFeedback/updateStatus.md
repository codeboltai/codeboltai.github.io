---
name: updateStatus
cbbaseinfo:
  description: Updates the status of a feedback session to control its lifecycle.
cbparameters:
  parameters:
    - name: params
      typeName: IUpdateStatusParams
      description: Parameters including feedbackId and the new status value.
  returns:
    signatureTypeName: "Promise<IUpdateStatusResponse>"
    description: A promise that resolves with the updated status.
data:
  name: updateStatus
  category: groupFeedback
  link: updateStatus.md
---
# updateStatus

```typescript
codebolt.groupFeedback.updateStatus(params: IUpdateStatusParams): Promise<IUpdateStatusResponse>
```

Updates the status of a feedback session to control its lifecycle.
### Parameters

- **`params`** ([IUpdateStatusParams](/docs/reference/type-reference/codeboltjs/interfaces/IUpdateStatusParams)): Parameters including feedbackId and the new status value.

### Returns

- **`Promise<[IUpdateStatusResponse](/docs/reference/type-reference/codeboltjs/interfaces/IUpdateStatusResponse)>`**: A promise that resolves with the updated status.

### Examples

#### Example 1: Close Feedback Session

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.groupFeedback.updateStatus({
  feedbackId: 'feedback-123',
  status: 'closed'
});

console.log('Feedback session closed');
```

#### Example 2: Archive Old Sessions

```typescript
const result = await codebolt.groupFeedback.updateStatus({
  feedbackId: 'feedback-456',
  status: 'archived'
});

console.log('Session archived');
```

### Common Use Cases

- **Close Session**: Stop accepting new responses
- **Archive Sessions**: Move old sessions to archive
- **Reopen**: Reopen closed sessions if needed

### Notes

- Status values: open, closed, archived
- Closed sessions don't accept new responses
- Archived sessions hidden from default views
