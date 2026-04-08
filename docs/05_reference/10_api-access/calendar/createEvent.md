---
name: createEvent
cbbaseinfo:
  description: Creates a new calendar event with support for various event types, recurrence, participants, and reminders.
cbparameters:
  parameters:
    - name: params
      typeName: ICreateEventParams
      description: Event creation parameters including title, time, type, and optional settings
  returns:
    signatureTypeName: "Promise<ICreateEventResponse>"
    description: A promise that resolves to the created event data
data:
  name: createEvent
  category: calendar
  link: createEvent.md
---
# createEvent

```typescript
codebolt.calendar.createEvent(params: ICreateEventParams): Promise<ICreateEventResponse>
```

Creates a new calendar event with support for various event types, recurrence, participants, and reminders.
### Parameters

- **`params`** ([ICreateEventParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateEventParams)): Event creation parameters including title, time, type, and optional settings

### Returns

- **`Promise<[ICreateEventResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateEventResponse)>`**: A promise that resolves to the created event data

### Parameter Details

The [`ICreateEventParams`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateEventParams) interface includes:

**Required Parameters:**
- **`title`** (string): The event title
- **`startTime`** (string): ISO 8601 timestamp for event start

**Optional Parameters:**
- **`description`** (string): Detailed event description
- **`eventType`** (CalendarEventType): Event type - 'generic' | 'meeting' | 'reminder' | 'deadline' | 'check' | 'milestone'
- **`endTime`** (string): ISO 8601 timestamp for event end (if hasDuration is true)
- **`hasDuration`** (boolean): Whether event has a duration (default: false)
- **`allDay`** (boolean): Whether this is an all-day event
- **`swarmId`** (string): Optional swarm identifier
- **`participants`** (CalendarParticipant[]): Array of event participants
- **`isRecurring`** (boolean): Whether event recurs (requires cronExpression)
- **`cronExpression`** (string): Cron expression for recurring events
- **`recurrenceEndTime`** (string): When recurrence should end
- **`reminder`** (object): Reminder settings with enabled and minutesBefore
- **`agenda`** (string): Meeting agenda (for meeting type)
- **`checkType`** (CalendarCheckType): For check events - 'email' | 'website' | 'api' | 'file'
- **`tags`** (string[]): Tags for categorization
- **`metadata`** (`Record<string, any>`): Additional custom data
- **`createdById`** (string): Creator user ID
- **`createdByName`** (string): Creator name
- **`createdByType`** (CalendarParticipantType): Creator type - 'user' | 'agent' | 'team' | 'swarm'
- **`agentExecutionId`** (string): Agent execution ID if created by agent
- **`threadId`** (string): Thread ID for context

### Response Structure

```typescript
interface ICreateEventResponse {
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

#### 1. Basic Event Creation
```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a simple event
const result = await codebolt.calendar.createEvent({
  title: 'Team Meeting',
  startTime: '2026-01-20T10:00:00Z'
});

if (result.success) {
  console.log('Event created:', result.data.event.id);
  console.log('Title:', result.data.event.title);
  console.log('Start:', result.data.event.startTime);
}
```

#### 2. Meeting with Duration and Participants
```typescript
// Create a meeting with participants
const meeting = await codebolt.calendar.createEvent({
  title: 'Sprint Planning',
  description: 'Plan tasks for Sprint 23',
  eventType: 'meeting',
  startTime: '2026-01-20T14:00:00Z',
  endTime: '2026-01-20T16:00:00Z',
  hasDuration: true,
  agenda: 'Review backlog and assign tasks',
  reminder: {
    enabled: true,
    minutesBefore: 30
  },
  participants: [
    {
      id: 'user-123',
      name: 'Alice Johnson',
      type: 'user'
    },
    {
      id: 'user-456',
      name: 'Bob Smith',
      type: 'user'
    },
    {
      id: 'agent-789',
      name: 'Scribe Agent',
      type: 'agent',
      agentExecutionId: 'exec-abc',
      threadId: 'thread-xyz'
    }
  ]
});

console.log('Meeting created with', meeting.data.event.participants.length, 'participants');
```

#### 3. Recurring Daily Standup
```typescript
// Create a recurring daily standup
const standup = await codebolt.calendar.createEvent({
  title: 'Daily Standup',
  description: 'Team sync meeting',
  eventType: 'meeting',
  startTime: '2026-01-20T09:00:00Z',
  endTime: '2026-01-20T09:15:00Z',
  hasDuration: true,
  isRecurring: true,
  cronExpression: '0 9 * * 1-5', // Weekdays at 9 AM
  recurrenceEndTime: '2026-12-31T23:59:59Z',
  reminder: {
    enabled: true,
    minutesBefore: 5
  },
  participants: [
    {
      id: 'team-dev',
      name: 'Development Team',
      type: 'team'
    }
  ],
  tags: ['standup', 'recurring', 'team']
});

console.log('Recurring standup created');
```

#### 4. Deadline with Reminder
```typescript
// Create a deadline event
const deadline = await codebolt.calendar.createEvent({
  title: 'Feature Release',
  description: 'Q1 2026 Product Release',
  eventType: 'deadline',
  startTime: '2026-03-31T23:59:59Z',
  reminder: {
    enabled: true,
    minutesBefore: 1440 // 1 day before
  },
  tags: ['release', 'milestone', 'q1'],
  metadata: {
    version: '2.0.0',
    releaseManager: 'user-123'
  }
});

console.log('Deadline created with reminder');
```

#### 5. Automated Health Check
```typescript
// Create an automated check event
const healthCheck = await codebolt.calendar.createEvent({
  title: 'API Health Check',
  eventType: 'check',
  checkType: 'api',
  startTime: '2026-01-20T00:00:00Z',
  isRecurring: true,
  cronExpression: '0 */4 * * *', // Every 4 hours
  metadata: {
    endpoint: '/api/health',
    method: 'GET',
    expectedStatus: 200,
    timeout: 5000
  },
  tags: ['automated', 'health', 'monitoring']
});

console.log('Health check scheduled');
```

#### 6. All-Day Event
```typescript
// Create an all-day event
const allDayEvent = await codebolt.calendar.createEvent({
  title: 'Company Holiday',
  description: 'Office closed for New Year',
  eventType: 'generic',
  startTime: '2026-12-25T00:00:00Z',
  allDay: true,
  tags: ['holiday', 'company']
});

console.log('All-day event created');
```

#### 7. Event Created by Agent
```typescript
// Create an event as an agent
const agentEvent = await codebolt.calendar.createEvent({
  title: 'Code Review Reminder',
  description: 'Review PR #123',
  eventType: 'reminder',
  startTime: '2026-01-20T14:00:00Z',
  createdById: 'agent-456',
  createdByName: 'Reminder Agent',
  createdByType: 'agent',
  agentExecutionId: 'exec-789',
  threadId: 'thread-101',
  reminder: {
    enabled: true,
    minutesBefore: 0
  }
});

console.log('Agent created event:', agentEvent.data.event.id);
```

#### 8. Error Handling
```typescript
// Handle creation errors
try {
  const result = await codebolt.calendar.createEvent({
    title: 'Test Event',
    startTime: 'invalid-date' // Invalid date format
  });

  if (!result.success) {
    console.error('Failed to create event:', result.error.message);
    // Handle specific error codes
    if (result.error.code === 'INVALID_TIMESTAMP') {
      console.error('Invalid timestamp format');
    }
  }
} catch (error) {
  console.error('Exception during event creation:', error);
}
```

### Common Use Cases

**Meeting Scheduling:**
```typescript
// Schedule a team meeting
await codebolt.calendar.createEvent({
  title: 'Team Retro',
  eventType: 'meeting',
  startTime: '2026-01-20T15:00:00Z',
  endTime: '2026-01-20T16:00:00Z',
  hasDuration: true,
  participants: teamMembers.map(member => ({
    id: member.id,
    name: member.name,
    type: 'user'
  }))
});
```

**Milestone Tracking:**
```typescript
// Track project milestones
await codebolt.calendar.createEvent({
  title: 'Alpha Release',
  eventType: 'milestone',
  startTime: '2026-02-01T00:00:00Z',
  description: 'First public alpha release',
  tags: ['milestone', 'alpha']
});
```

**Reminder Setup:**
```typescript
// Set up a reminder
await codebolt.calendar.createEvent({
  title: 'Follow up with client',
  eventType: 'reminder',
  startTime: '2026-01-20T10:00:00Z',
  reminder: {
    enabled: true,
    minutesBefore: 60
  },
  metadata: {
    clientId: 'client-123',
    contactInfo: 'client@example.com'
  }
});
```

### Notes

- All timestamps must be in ISO 8601 format (UTC)
- If `hasDuration` is true, `endTime` is required
- Recurring events require both `isRecurring: true` and a valid `cronExpression`
- Cron expressions use standard 5-field syntax (minute, hour, day, month, weekday)
- Participant types: user, agent, team, swarm
- Check types: email, website, api, file
- Tags are useful for filtering and searching events
- Metadata can store any custom JSON-serializable data