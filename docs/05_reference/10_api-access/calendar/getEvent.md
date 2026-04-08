---
name: getEvent
cbbaseinfo:
  description: Retrieves a single calendar event by its ID, including all event details, participants, and metadata.
cbparameters:
  parameters:
    - name: params
      typeName: IGetEventParams
      description: Parameters containing the eventId to retrieve
  returns:
    signatureTypeName: "Promise<IGetEventResponse>"
    description: A promise that resolves to the requested event data
data:
  name: getEvent
  category: calendar
  link: getEvent.md
---
# getEvent

```typescript
codebolt.calendar.getEvent(params: IGetEventParams): Promise<IGetEventResponse>
```

Retrieves a single calendar event by its ID, including all event details, participants, and metadata.
### Parameters

- **`params`** ([IGetEventParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetEventParams)): Parameters containing the eventId to retrieve

### Returns

- **`Promise<[IGetEventResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetEventResponse)>`**: A promise that resolves to the requested event data

### Parameter Details

The [`IGetEventParams`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetEventParams) interface includes:
- **`eventId`** (string, required): The unique identifier of the event to retrieve

### Response Structure

```typescript
interface IGetEventResponse {
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

interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  eventType: CalendarEventType;
  startTime: string;
  endTime?: string;
  hasDuration: boolean;
  allDay?: boolean;
  swarmId?: string;
  participants?: CalendarParticipant[];
  isRecurring?: boolean;
  cronExpression?: string;
  recurrenceEndTime?: string;
  reminder?: {
    enabled: boolean;
    minutesBefore: number;
  };
  agenda?: string;
  checkType?: CalendarCheckType;
  tags?: string[];
  metadata?: Record<string, any>;
  completed?: boolean;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: CalendarParticipant;
}
```

### Examples

#### 1. Basic Event Retrieval
```typescript
import codebolt from '@codebolt/codeboltjs';

// Get an event by ID
const result = await codebolt.calendar.getEvent({
  eventId: 'evt_abc123xyz'
});

if (result.success && result.data) {
  const event = result.data.event;
  console.log('Event Title:', event.title);
  console.log('Event Type:', event.eventType);
  console.log('Start Time:', event.startTime);
  console.log('Created By:', event.createdBy.name);
}
```

#### 2. Display Event Details
```typescript
// Retrieve and display full event details
const result = await codebolt.calendar.getEvent({
  eventId: 'evt_meeting_001'
});

if (result.success && result.data) {
  const event = result.data.event;

  console.log('=== Event Details ===');
  console.log('Title:', event.title);
  console.log('Description:', event.description || 'No description');
  console.log('Type:', event.eventType);
  console.log('Start:', new Date(event.startTime).toLocaleString());

  if (event.hasDuration && event.endTime) {
    console.log('End:', new Date(event.endTime).toLocaleString());
  }

  if (event.reminder?.enabled) {
    console.log(`Reminder: ${event.reminder.minutesBefore} minutes before`);
  }

  if (event.participants && event.participants.length > 0) {
    console.log('Participants:', event.participants.length);
    event.participants.forEach(p => {
      console.log(`  - ${p.name} (${p.type})`);
    });
  }

  if (event.tags && event.tags.length > 0) {
    console.log('Tags:', event.tags.join(', '));
  }

  console.log('Status:', event.completed ? 'Completed' : 'Pending');
  console.log('Created:', new Date(event.createdAt).toLocaleString());
}
```

#### 3. Check Meeting Details with Agenda
```typescript
// Get meeting event and display agenda
const result = await codebolt.calendar.getEvent({
  eventId: 'evt_standup_daily'
});

if (result.success && result.data) {
  const event = result.data.event;

  if (event.eventType === 'meeting') {
    console.log('Meeting:', event.title);
    console.log('Time:', new Date(event.startTime).toLocaleString());

    if (event.agenda) {
      console.log('\nAgenda:');
      console.log(event.agenda);
    }

    if (event.participants) {
      const accepted = event.participants.filter(p => p.status === 'accepted').length;
      const declined = event.participants.filter(p => p.status === 'declined').length;
      const pending = event.participants.filter(p => p.status === 'pending' || !p.status).length;

      console.log('\nRSVP Status:');
      console.log(`  Accepted: ${accepted}`);
      console.log(`  Declined: ${declined}`);
      console.log(`  Pending: ${pending}`);
    }
  }
}
```

#### 4. Get Recurring Event Details
```typescript
// Retrieve recurring event information
const result = await codebolt.calendar.getEvent({
  eventId: 'evt_weekly_review'
});

if (result.success && result.data) {
  const event = result.data.event;

  console.log('Event:', event.title);
  console.log('Recurring:', event.isRecurring ? 'Yes' : 'No');

  if (event.isRecurring) {
    console.log('Cron Expression:', event.cronExpression);
    console.log('Recurrence End:', event.recurrenceEndTime
      ? new Date(event.recurrenceEndTime).toLocaleString()
      : 'Never');
  }
}
```

#### 5. Get Check Event with Metadata
```typescript
// Retrieve automated check event
const result = await codebolt.calendar.getEvent({
  eventId: 'evt_health_check'
});

if (result.success && result.data) {
  const event = result.data.event;

  if (event.eventType === 'check' && event.checkType) {
    console.log('Check Type:', event.checkType);
    console.log('Last Completed:', event.completedAt
      ? new Date(event.completedAt).toLocaleString()
      : 'Never');

    if (event.metadata) {
      console.log('\nCheck Configuration:');
      console.log('Endpoint:', event.metadata.endpoint);
      console.log('Method:', event.metadata.method);
      console.log('Expected Status:', event.metadata.expectedStatus);
    }
  }
}
```

#### 6. Error Handling
```typescript
// Handle various error scenarios
const result = await codebolt.calendar.getEvent({
  eventId: 'nonexistent_event'
});

if (!result.success) {
  console.error('Failed to retrieve event');

  if (result.error) {
    switch (result.error.code) {
      case 'EVENT_NOT_FOUND':
        console.error('Event does not exist');
        break;
      case 'INVALID_EVENT_ID':
        console.error('Invalid event ID format');
        break;
      case 'ACCESS_DENIED':
        console.error('You do not have permission to view this event');
        break;
      default:
        console.error('Error:', result.error.message);
    }
  }
}
```

#### 7. Check Event Completion Status
```typescript
// Get event and check if it's completed
const result = await codebolt.calendar.getEvent({
  eventId: 'evt_task_001'
});

if (result.success && result.data) {
  const event = result.data.event;

  console.log('Task:', event.title);
  console.log('Status:', event.completed ? 'Completed' : 'Pending');

  if (event.completed) {
    console.log('Completed At:', new Date(event.completedAt!).toLocaleString());

    // Calculate time since completion
    const completedTime = new Date(event.completedAt!);
    const now = new Date();
    const hoursSince = (now.getTime() - completedTime.getTime()) / (1000 * 60 * 60);
    console.log(`Completed ${hoursSince.toFixed(1)} hours ago`);
  } else {
    // Check if event is overdue
    const startTime = new Date(event.startTime);
    const now = new Date();
    if (startTime < now) {
      console.log('⚠️  This event is overdue!');
    }
  }
}
```

#### 8. Get Event with Creator Information
```typescript
// Retrieve event and display creator details
const result = await codebolt.calendar.getEvent({
  eventId: 'evt_agent_created'
});

if (result.success && result.data) {
  const event = result.data.event;
  const creator = event.createdBy;

  console.log('Event:', event.title);
  console.log('Created By:', creator.name);
  console.log('Creator Type:', creator.type);

  if (creator.type === 'agent') {
    console.log('Agent Execution ID:', creator.agentExecutionId);
    console.log('Thread ID:', creator.threadId);
  }

  console.log('Created At:', new Date(event.createdAt).toLocaleString());
  console.log('Last Updated:', new Date(event.updatedAt).toLocaleString());
}
```

### Common Use Cases

**Event Display:**
```typescript
// Fetch and display event for UI
async function displayEvent(eventId: string) {
  const result = await codebolt.calendar.getEvent({ eventId });

  if (!result.success || !result.data) {
    return null;
  }

  const event = result.data.event;
  return {
    id: event.id,
    title: event.title,
    type: event.eventType,
    start: new Date(event.startTime),
    end: event.endTime ? new Date(event.endTime) : null,
    participants: event.participants || [],
    completed: event.completed || false
  };
}
```

**Event Validation:**
```typescript
// Check if event exists and is accessible
async function validateEvent(eventId: string): Promise<boolean> {
  const result = await codebolt.calendar.getEvent({ eventId });
  return result.success && result.data !== undefined;
}
```

**Event Details for Editing:**
```typescript
// Get event details for pre-filling edit form
const result = await codebolt.calendar.getEvent({
  eventId: 'evt_to_edit'
});

if (result.success && result.data) {
  const event = result.data.event;

  // Pre-fill form with event data
  const editForm = {
    title: event.title,
    description: event.description,
    startTime: event.startTime,
    endTime: event.endTime,
    reminder: event.reminder,
    tags: event.tags || []
  };

  // Display edit form with pre-filled data
  showEditForm(editForm);
}
```

### Notes

- Event IDs are case-sensitive
- Returns complete event object including all optional fields
- Participant RSVP status is included if set
- Completion status and timestamp are included if event is completed
- Creator information is always included
- Use this endpoint when you need full event details
- For listing multiple events, use `listEvents` instead
- Event not found will return success: false with appropriate error code