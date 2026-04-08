---
name: markEventComplete
cbbaseinfo:
  description: Marks a single calendar event as complete, recording the completion timestamp and updating the event status.
cbparameters:
  parameters:
    - name: params
      typeName: IMarkEventCompleteParams
      description: Parameters containing the eventId to mark as complete
  returns:
    signatureTypeName: "Promise<IMarkEventCompleteResponse>"
    description: A promise that resolves to the completed event data
data:
  name: markEventComplete
  category: calendar
  link: markEventComplete.md
---
# markEventComplete

```typescript
codebolt.calendar.markEventComplete(params: IMarkEventCompleteParams): Promise<IMarkEventCompleteResponse>
```

Marks a single calendar event as complete, recording the completion timestamp and updating the event status.
### Parameters

- **`params`** ([IMarkEventCompleteParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IMarkEventCompleteParams)): Parameters containing the eventId to mark as complete

### Returns

- **`Promise<[IMarkEventCompleteResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IMarkEventCompleteResponse)>`**: A promise that resolves to the completed event data

### Parameter Details

The [`IMarkEventCompleteParams`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IMarkEventCompleteParams) interface includes:
- **`eventId`** (string, required): The unique identifier of the event to mark as complete

### Response Structure

```typescript
interface IMarkEventCompleteResponse {
  success: boolean;
  code: string;
  message: string;
  data?: {
    event: CalendarEvent;
  };
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}
```

### Examples

#### 1. Basic Completion
```typescript
import codebolt from '@codebolt/codeboltjs';

// Mark an event as complete
const result = await codebolt.calendar.markEventComplete({
  eventId: 'evt_task_001'
});

if (result.success && result.data) {
  const event = result.data.event;
  console.log(`Event "${event.title}" marked as complete`);
  console.log(`Completed at: ${new Date(event.completedAt!).toLocaleString()}`);
}
```

#### 2. Complete Task After Work
```typescript
// Mark a task event as complete after finishing work
async function completeTask(taskId: string) {
  console.log('Marking task as complete...');

  const result = await codebolt.calendar.markEventComplete({
    eventId: taskId
  });

  if (result.success) {
    console.log('✅ Task completed successfully');

    // Update related systems
    await updateTaskStatus(taskId, 'completed');
    await notifyTeam(taskId, 'completed');
  } else {
    console.error('Failed to mark task complete:', result.error?.message);
  }
}

// Usage
await completeTask('evt_task_abc123');
```

#### 3. Complete Triggered Check
```typescript
// Process and complete a triggered check event
async function processCheckEvent(eventId: string) {
  // Get event details
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (!eventResult.success || !eventResult.data) {
    return;
  }

  const event = eventResult.data.event;

  if (event.eventType !== 'check' || !event.checkType) {
    return;
  }

  // Perform the check
  let checkPassed = false;
  switch (event.checkType) {
    case 'api':
      checkPassed = await performApiCheck(event.metadata);
      break;
    case 'website':
      checkPassed = await performWebsiteCheck(event.metadata);
      break;
    case 'email':
      checkPassed = await performEmailCheck(event.metadata);
      break;
    case 'file':
      checkPassed = await performFileCheck(event.metadata);
      break;
  }

  // Mark as complete regardless of result
  const result = await codebolt.calendar.markEventComplete({
    eventId
  });

  if (result.success) {
    console.log(`Check "${event.title}" completed: ${checkPassed ? 'PASSED' : 'FAILED'}`);
  }
}
```

#### 4. Batch Complete by Type
```typescript
// Complete all triggered events of a specific type
async function completeTriggeredChecks() {
  const triggered = await codebolt.calendar.getTriggeredEvents({
    includeCompleted: false
  });

  if (triggered.success && triggered.data) {
    const checks = triggered.data.events.filter(
      event => event.eventType === 'check'
    );

    console.log(`Completing ${checks.length} triggered checks...`);

    for (const check of checks) {
      const result = await codebolt.calendar.markEventComplete({
        eventId: check.id
      });

      if (result.success) {
        console.log(`✓ ${check.title}`);
      } else {
        console.error(`✗ Failed to complete ${check.title}`);
      }
    }
  }
}
```

#### 5. Complete Meeting After Follow-up
```typescript
// Complete meeting after creating follow-up tasks
async function closeMeeting(eventId: string) {
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (eventResult.success && eventResult.data) {
    const meeting = eventResult.data.event;

    // Create follow-up tasks from agenda
    if (meeting.agenda) {
      const agendaItems = parseAgenda(meeting.agenda);

      for (const item of agendaItems) {
        await codebolt.calendar.createEvent({
          title: `Follow-up: ${item}`,
          eventType: 'reminder',
          startTime: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
          reminder: { enabled: true, minutesBefore: 60 }
        });
      }
    }

    // Mark meeting as complete
    const result = await codebolt.calendar.markEventComplete({
      eventId
    });

    if (result.success) {
      console.log(`Meeting "${meeting.title}" closed and follow-ups created`);
    }
  }
}
```

#### 6. Complete Deadline
```typescript
// Mark deadline as complete after deliverable is submitted
async function submitAndCompleteDeadline(deadlineId: string, deliverable: any) {
  // Submit deliverable
  const submitted = await submitDeliverable(deliverable);

  if (submitted) {
    // Mark deadline event as complete
    const result = await codebolt.calendar.markEventComplete({
      eventId: deadlineId
    });

    if (result.success) {
      console.log('✅ Deadline met and deliverable submitted');

      // Get completion info
      const deadline = result.data.event;
      const completedAt = new Date(deadline.completedAt!);
      const dueDate = new Date(deadline.startTime);

      if (completedAt <= dueDate) {
        console.log('✨ Completed on time!');
      } else {
        const daysLate = Math.ceil((completedAt.getTime() - dueDate.getTime()) / 86400000);
        console.log(`⚠️  Completed ${daysLate} days late`);
      }
    }
  }
}
```

#### 7. Error Handling
```typescript
// Handle completion errors
const result = await codebolt.calendar.markEventComplete({
  eventId: 'evt_abc123'
});

if (!result.success) {
  console.error('Failed to mark event as complete');

  if (result.error) {
    switch (result.error.code) {
      case 'EVENT_NOT_FOUND':
        console.error('Event does not exist');
        break;
      case 'ALREADY_COMPLETED':
        console.error('Event is already completed');
        // Get the event to see when it was completed
        const eventResult = await codebolt.calendar.getEvent({
          eventId: 'evt_abc123'
        });
        if (eventResult.success && eventResult.data?.event.completedAt) {
          console.log('Completed at:', eventResult.data.event.completedAt);
        }
        break;
      case 'ACCESS_DENIED':
        console.error('You do not have permission to complete this event');
        break;
      default:
        console.error('Error:', result.error.message);
    }
  }
}
```

#### 8. Verify Completion
```typescript
// Mark complete and verify
async function markCompleteAndVerify(eventId: string) {
  const result = await codebolt.calendar.markEventComplete({
    eventId
  });

  if (result.success && result.data) {
    const event = result.data.event;

    // Verify the event is actually marked complete
    if (event.completed && event.completedAt) {
      const completedTime = new Date(event.completedAt);
      const now = new Date();

      // Verify completion timestamp is recent
      const timeDiff = now.getTime() - completedTime.getTime();
      if (timeDiff < 5000) { // Within 5 seconds
        console.log('✅ Event verified as completed');
        return true;
      }
    }
  }

  console.log('⚠️  Verification failed');
  return false;
}
```

#### 9. Conditional Completion
```typescript
// Only complete if certain conditions are met
async function conditionalComplete(eventId: string, conditions: any) {
  // Check conditions first
  const prerequisitesMet = await checkPrerequisites(conditions);

  if (!prerequisitesMet) {
    console.log('Prerequisites not met, cannot complete event');
    return false;
  }

  // Proceed with completion
  const result = await codebolt.calendar.markEventComplete({
    eventId
  });

  if (result.success) {
    console.log('✅ Event completed after verifying prerequisites');
    return true;
  }

  return false;
}
```

### Common Use Cases

**Task Completion:**
```typescript
// Complete a task event
async function finishTask(taskEventId: string) {
  await codebolt.calendar.markEventComplete({
    eventId: taskEventId
  });
  console.log('Task marked as complete');
}
```

**Process Triggered Events:**
```typescript
// Process all triggered events
async function processTriggeredEvents() {
  const triggered = await codebolt.calendar.getTriggeredEvents({
    includeCompleted: false
  });

  if (triggered.success && triggered.data) {
    for (const event of triggered.data.events) {
      // Handle event based on type
      await handleEvent(event);

      // Mark as complete
      await codebolt.calendar.markEventComplete({
        eventId: event.id
      });
    }
  }
}
```

**Complete with Notes:**
```typescript
// Add completion notes via metadata update
async function completeWithNotes(eventId: string, notes: string) {
  // First add notes to metadata
  await codebolt.calendar.updateEvent({
    eventId,
    metadata: {
      completionNotes: notes,
      completedAt: new Date().toISOString()
    }
  });

  // Then mark as complete
  const result = await codebolt.calendar.markEventComplete({
    eventId
  });

  return result.success;
}
```

### Notes

- Completion is irreversible - once marked complete, it stays complete
- Automatically sets `completed` to true and records `completedAt` timestamp
- Can be called on already-completed events (idempotent operation)
- Use `markEventsComplete` for batch operations on multiple events
- Consider using `updateEvent` if you need to add completion notes
- Completion timestamp is automatically set to current time
- Completed events can still be retrieved with filters
- Use `getTriggeredEventsAndMarkComplete` for one-step retrieval and completion
- Does not delete the event - just marks it as completed
- Useful for tracking task completion, meeting attendance, etc.