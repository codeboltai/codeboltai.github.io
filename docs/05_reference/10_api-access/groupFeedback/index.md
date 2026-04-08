---
cbapicategory:
  - name: create
    link: /docs/api/apiaccess/groupFeedback/create
    description: Creates a new feedback session for group collaboration.
  - name: get
    link: /docs/api/apiaccess/groupFeedback/get
    description: Retrieves details of a specific feedback session.
  - name: list
    link: /docs/api/apiaccess/groupFeedback/list
    description: Lists all feedback sessions with optional filtering.
  - name: respond
    link: /docs/api/apiaccess/groupFeedback/respond
    description: Adds a response to a feedback session.
  - name: reply
    link: /docs/api/apiaccess/groupFeedback/reply
    description: Adds a reply to a specific response in a feedback session.
  - name: updateSummary
    link: /docs/api/apiaccess/groupFeedback/updateSummary
    description: Updates the summary of a feedback session.
  - name: updateStatus
    link: /docs/api/apiaccess/groupFeedback/updateStatus
    description: Updates the status of a feedback session.

---
# Group Feedback API

The Group Feedback API provides collaborative feedback management capabilities, enabling teams to collect, organize, and act on feedback from multiple participants in structured sessions.

## Overview

The groupFeedback module enables you to:
- **Create Sessions**: Initialize feedback sessions for teams
- **Collect Responses**: Gather feedback from multiple participants
- **Threaded Discussions**: Reply to specific feedback items
- **Status Tracking**: Manage feedback session lifecycle
- **Summarization**: Generate and update session summaries

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a feedback session
const feedback = await codebolt.groupFeedback.create({
  title: 'Code Review Feedback',
  description: 'Collect feedback on the new authentication module',
  participants: ['user-001', 'user-002', 'user-003'],
  questions: [
    'What do you think about the code structure?',
    'Are there any security concerns?',
    'How can we improve performance?'
  ],
  status: 'open',
  metadata: {
    projectId: 'auth-module',
    deadline: '2024-02-01'
  }
});

console.log('Feedback session created:', feedback.feedbackId);

// Add a response
await codebolt.groupFeedback.respond({
  feedbackId: feedback.feedbackId,
  participantId: 'user-001',
  responses: [
    { question: 0, answer: 'The structure is clear and follows best practices.' },
    { question: 1, answer: 'Consider adding rate limiting.' },
    { question: 2, answer: 'Add caching for frequently accessed data.' }
  ]
});

// List all feedback
const allFeedback = await codebolt.groupFeedback.list();
console.log('Active sessions:', allFeedback.feedbackSessions);
```

## Response Structure

All groupFeedback API functions return responses with a consistent structure:

```typescript
{
  success: boolean;
  feedbackId?: string;
  feedbackSession?: {
    id: string;
    title: string;
    description?: string;
    participants: string[];
    questions: string[];
    responses: Array<{
      participantId: string;
      responses: any[];
      timestamp: string;
    }>;
    status: 'open' | 'closed' | 'archived';
    createdAt: string;
    updatedAt: string;
    summary?: string;
  };
  feedbackSessions?: Array<any>;
  error?: string;
}
```

## Common Use Cases

### Code Review Feedback

```typescript
// Create feedback session for code review
const session = await codebolt.groupFeedback.create({
  title: 'Pull Request #123 Feedback',
  description: 'Review the authentication changes',
  participants: ['senior-dev-1', 'senior-dev-2', 'tech-lead'],
  questions: [
    'Is the implementation correct?',
    'Are there any edge cases missed?',
    'How is the code quality?'
  ]
});
```

### Product Feedback

```typescript
// Collect feedback on a feature
const session = await codebolt.groupFeedback.create({
  title: 'New Dashboard UI Feedback',
  description: 'What do you think about the new dashboard design?',
  participants: ['user-001', 'user-002', 'user-003'],
  questions: [
    'How would you rate the new design?',
    'What features would you like to see?',
    'Any bugs or issues?'
  ]
});
```

### Retrospective Feedback

```typescript
// Sprint retrospective
const session = await codebolt.groupFeedback.create({
  title: 'Sprint 42 Retrospective',
  description: 'What went well and what can we improve?',
  participants: ['dev-team'],
  questions: [
    'What went well this sprint?',
    'What didn\'t go well?',
    'What should we improve next sprint?'
  ]
});
```

<CBAPICategory />
