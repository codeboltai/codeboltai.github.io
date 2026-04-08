---
name: updateEvent
cbbaseinfo:
  description: Updates an existing calendar event. Only the fields specified in the parameters are updated; all other fields remain unchanged.
cbparameters:
  parameters:
    - name: params
      typeName: IUpdateEventParams
      description: Event update parameters including eventId and fields to update
  returns:
    signatureTypeName: "Promise<IUpdateEventResponse>"
    description: A promise that resolves to the updated event data
data:
  name: updateEvent
  category: calendar
  link: updateEvent.md
---
# updateEvent

```typescript
codebolt.calendar.updateEvent(params: IUpdateEventParams): Promise<IUpdateEventResponse>
```

Updates an existing calendar event. Only the fields specified in the parameters are updated; all other fields remain unchanged.
### Parameters

- **`params`** ([IUpdateEventParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateEventParams)): Event update parameters including eventId and fields to update

### Returns

- **`Promise<[IUpdateEventResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateEventResponse)>`**: A promise that resolves to the updated event data

### Parameter Details

The [`IUpdateEventParams`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IUpdateEventParams) interface includes:

**Required Parameter:**
- **`eventId`** (string): The unique identifier of the event to update

**Optional Parameters (all fields are optional - only specified fields are updated):**
- **`title`** (string): Updated event title
- **`description`** (string): Updated event description
- **`eventType`** (CalendarEventType): Updated event type
- **`startTime`** (string): Updated start time (ISO 8601)
- **`endTime`** (string): Updated end time (ISO 8601)
- **`hasDuration`** (boolean): Whether event has a duration
- **`allDay`** (boolean): Whether this is an all-day event
- **`participants`** (CalendarParticipant[]): Updated participants list (replaces existing)
- **`isRecurring`** (boolean): Whether event recurs
- **`cronExpression`** (string): Updated cron expression
- **`recurrenceEndTime`** (string): When recurrence should end
- **`reminder`** (object): Updated reminder settings
- **`agenda`** (string): Updated meeting agenda
- **`checkType`** (CalendarCheckType): Updated check type
- **`tags`** (string[]): Updated tags (replaces existing)
- **`metadata`** (`Record<string, any>`): Updated metadata (merges with existing)

### Response Structure

```typescript
interface IUpdateEventResponse {
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

#### 1. Update Event Title
```typescript
import codebolt from '@codebolt/codeboltjs';

// Change event title
const result = await codebolt.calendar.updateEvent({
  eventId: 'evt_abc123',
  title: 'Updated Meeting Title'
});

if (result.success && result.data) {
  console.log('Title updated:', result.data.event.title);
}
```

#### 2. Reschedule Event
```typescript
// Change event time
const result = await codebolt.calendar.updateEvent({
  eventId: 'evt_meeting_001',
  startTime: '2026-01-21T14:00:00Z',
  endTime: '2026-01-21T15:00:00Z'
});

if (result.success && result.data) {
  const event = result.data.event;
  console.log(`Rescheduled to: ${new Date(event.startTime).toLocaleString()}`);
}
```

#### 3. Add Participants
```typescript
// Get event first, then add participants
const currentEvent = await codebolt.calendar.getEvent({
  eventId: 'evt_meeting_001'
});

if (currentEvent.success && currentEvent.data) {
  const existingParticipants = currentEvent.data.event.participants || [];

  // Add new participant
  const result = await codebolt.calendar.updateEvent({
    eventId: 'evt_meeting_001',
    participants: [
      ...existingParticipants,
      {
        id: 'user_new',
        name: 'New Team Member',
        type: 'user',
        status: 'pending'
      }
    ]
  });

  if (result.success) {
    console.log('Participant added');
  }
}
```

#### 4. Update Event Status to Completed
```typescript
// Mark event as complete (alternative to markEventComplete)
const result = await codebolt.calendar.updateEvent({
  eventId: 'evt_task_001',
  completed: true
});

if (result.success && result.data) {
  console.log('Event marked as complete');
  console.log('Completed at:', result.data.event.completedAt);
}
```

#### 5. Update Reminder Settings
```typescript
// Change reminder timing
const result = await codebolt.calendar.updateEvent({
  eventId: 'evt_deadline_001',
  reminder: {
    enabled: true,
    minutesBefore: 1440 // 1 day before
  }
});

if (result.success) {
  console.log('Reminder updated to 1 day before');
}
```

#### 6. Update Meeting Agenda
```typescript
// Update meeting agenda
const result = await codebolt.calendar.updateEvent({
  eventId: 'evt_standup',
  agenda: `
1. Review yesterday's accomplishments
2. Plan today's tasks
3. Identify blockers
4. Share relevant updates
  `.trim()
});

if (result.success) {
  console.log('Agenda updated');
}
```

#### 7. Modify Recurrence
```typescript
// Change recurring event schedule
const result = await codebolt.calendar.updateEvent({
  eventId: 'evt_weekly_review',
  cronExpression: '0 10 * * 1', // Change to Monday at 10 AM
  recurrenceEndTime: '2026-12-31T23:59:59Z'
});

if (result.success) {
  console.log('Recurrence updated');
}
```

#### 8. Update Tags
```typescript
// Add tags to event
const currentEvent = await codebolt.calendar.getEvent({
  eventId: 'evt_001'
});

if (currentEvent.success && currentEvent.data) {
  const existingTags = currentEvent.data.event.tags || [];

  const result = await codebolt.calendar.updateEvent({
    eventId: 'evt_001',
    tags: [...existingTags, 'urgent', 'priority']
  });

  if (result.success) {
    console.log('Tags added');
  }
}
```

#### 9. Update Metadata
```typescript
// Add or update metadata
const result = await codebolt.calendar.updateEvent({
  eventId: 'evt_check_001',
  metadata: {
    endpoint: '/api/v2/health', // Updated endpoint
    timeout: 10000, // New field
    retries: 3 // New field
  }
});

if (result.success && result.data) {
  console.log('Metadata updated:', result.data.event.metadata);
}
```

#### 10. Multiple Field Update
```typescript
// Update multiple fields at once
const result = await codebolt.calendar.updateEvent({
  eventId: 'evt_001',
  title: 'Updated Title',
  description: 'Updated description',
  startTime: '2026-01-21T10:00:00Z',
  endTime: '2026-01-21T11:00:00Z',
  reminder: {
    enabled: true,
    minutesBefore: 15
  }
});

if (result.success && result.data) {
  console.log('Event updated successfully');
}
```

#### 11. Error Handling
```typescript
// Handle update errors
const result = await codebolt.calendar.updateEvent({
  eventId: 'nonexistent_event',
  title: 'New Title'
});

if (!result.success) {
  console.error('Failed to update event');

  if (result.error) {
    switch (result.error.code) {
      case 'EVENT_NOT_FOUND':
        console.error('Event does not exist');
        break;
      case 'INVALID_EVENT_ID':
        console.error('Invalid event ID format');
        break;
      case 'ACCESS_DENIED':
        console.error('You do not have permission to update this event');
        break;
      case 'VALIDATION_ERROR':
        console.error('Invalid update data:', result.error.details);
        break;
      default:
        console.error('Error:', result.error.message);
    }
  }
}
```

#### 12. Conditional Update
```typescript
// Only update if event is not completed
const currentEvent = await codebolt.calendar.getEvent({
  eventId: 'evt_001'
});

if (currentEvent.success && currentEvent.data) {
  if (!currentEvent.data.event.completed) {
    const result = await codebolt.calendar.updateEvent({
      eventId: 'evt_001',
      title: 'In Progress: ' + currentEvent.data.event.title
    });

    if (result.success) {
      console.log('Event updated');
    }
  } else {
    console.log('Event already completed, cannot update');
  }
}
```

### Common Use Cases

**Reschedule Meeting:**
```typescript
async function rescheduleMeeting(eventId: string, newStartTime: Date, durationMinutes: number) {
  const newEndTime = new Date(newStartTime.getTime() + durationMinutes * 60000);

  const result = await codebolt.calendar.updateEvent({
    eventId,
    startTime: newStartTime.toISOString(),
    endTime: newEndTime.toISOString()
  });

  return result.success;
}
```

**Add Reminder:**
```typescript
async function addReminder(eventId: string, minutesBefore: number) {
  const result = await codebolt.calendar.updateEvent({
    eventId,
    reminder: {
      enabled: true,
      minutesBefore
    }
  });

  return result.success;
}
```

**Update Event Progress:**
```typescript
async function updateTaskProgress(eventId: string, progressNote: string) {
  const currentEvent = await codebolt.calendar.getEvent({ eventId });

  if (currentEvent.success && currentEvent.data) {
    const existingDescription = currentEvent.data.event.description || '';
    const updatedDescription = `${existingDescription}\n\nUpdate: ${progressNote}`;

    const result = await codebolt.calendar.updateEvent({
      eventId,
      description: updatedDescription.trim()
    });

    return result.success;
  }

  return false;
}
```

**Change Event Type:**
```typescript
async function promoteToMilestone(eventId: string) {
  const result = await codebolt.calendar.updateEvent({
    eventId,
    eventType: 'milestone',
    tags: ['milestone', 'important']
  });

  return result.success;
}
```

### Notes

- Only the fields specified in the update request are modified
- To add to arrays (participants, tags), first retrieve the event, then update with the full array
- To remove array items, retrieve the event and update without those items
- Metadata is merged with existing metadata (not replaced)
- Updating `startTime` for recurring events may affect all future instances
- Updating participants replaces the entire participant list
- Updating tags replaces the entire tag list
- Event not found returns success: false with appropriate error code
- Some fields like `id`, `createdAt`, `createdBy` cannot be modified
- Use `markEventComplete` for a simpler way to mark events as complete