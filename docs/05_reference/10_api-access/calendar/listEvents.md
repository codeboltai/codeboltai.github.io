---
name: listEvents
cbbaseinfo:
  description: Lists calendar events with comprehensive filtering options including date ranges, event types, participants, tags, and search functionality.
cbparameters:
  parameters:
    - name: params
      typeName: IListEventsParams
      description: Optional filter parameters for querying events
  returns:
    signatureTypeName: "Promise<IListEventsResponse>"
    description: A promise that resolves to a list of filtered events with count
data:
  name: listEvents
  category: calendar
  link: listEvents.md
---
# listEvents

```typescript
codebolt.calendar.listEvents(params: IListEventsParams): Promise<IListEventsResponse>
```

Lists calendar events with comprehensive filtering options including date ranges, event types, participants, tags, and search functionality.
### Parameters

- **`params`** ([IListEventsParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListEventsParams)): Optional filter parameters for querying events

### Returns

- **`Promise<[IListEventsResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListEventsResponse)>`**: A promise that resolves to a list of filtered events with count

### Parameter Details

The [`IListEventsParams`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IListEventsParams) interface includes all optional fields:

**Date Filters:**
- **`startDate`** (string, optional): ISO 8601 start timestamp for filtering
- **`endDate`** (string, optional): ISO 8601 end timestamp for filtering

**Type Filters:**
- **`eventTypes`** (CalendarEventType[], optional): Array of event types to include - 'generic' | 'meeting' | 'reminder' | 'deadline' | 'check' | 'milestone'

**Entity Filters:**
- **`creatorId`** (string, optional): Filter by creator ID
- **`participantId`** (string, optional): Filter by participant ID
- **`swarmId`** (string, optional): Filter by swarm ID

**Status Filters:**
- **`completed`** (boolean, optional): Filter by completion status
- **`includeCompleted`** (boolean, optional): Whether to include completed events (default: true)
- **`onlyTriggered`** (boolean, optional): Only return events that have been triggered

**Other Filters:**
- **`includeRecurrences`** (boolean, optional): Include recurring event instances
- **`tags`** (string[], optional): Filter by tags (events must have at least one matching tag)
- **`search`** (string, optional): Text search in title and description

### Response Structure

```typescript
interface IListEventsResponse {
  success: boolean;
  code: string;
  message: string;
  data?: {
    events: CalendarEvent[];
    count: number;
  };
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}
```

### Examples

#### 1. List All Events
```typescript
import codebolt from '@codebolt/codeboltjs';

// Get all events (no filters)
const result = await codebolt.calendar.listEvents();

if (result.success && result.data) {
  console.log(`Found ${result.data.count} events`);
  result.data.events.forEach(event => {
    console.log(`- ${event.title} (${event.eventType})`);
  });
}
```

#### 2. Filter by Date Range
```typescript
// Get events for this week
const now = new Date();
const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6));

const result = await codebolt.calendar.listEvents({
  startDate: startOfWeek.toISOString(),
  endDate: endOfWeek.toISOString()
});

if (result.success && result.data) {
  console.log(`Events this week: ${result.data.count}`);
  result.data.events.forEach(event => {
    console.log(`${new Date(event.startTime).toLocaleDateString()}: ${event.title}`);
  });
}
```

#### 3. Filter by Event Type
```typescript
// Get only meetings
const meetings = await codebolt.calendar.listEvents({
  eventTypes: ['meeting']
});

if (meetings.success && meetings.data) {
  console.log(`Upcoming meetings: ${meetings.data.count}`);
  meetings.data.events.forEach(meeting => {
    console.log(`- ${meeting.title}`);
    if (meeting.agenda) {
      console.log(`  Agenda: ${meeting.agenda}`);
    }
  });
}

// Get deadlines only
const deadlines = await codebolt.calendar.listEvents({
  eventTypes: ['deadline'],
  completed: false
});

if (deadlines.success && deadlines.data) {
  console.log(`Pending deadlines: ${deadlines.data.count}`);
}
```

#### 4. Filter by Participant
```typescript
// Get events for a specific user
const myEvents = await codebolt.calendar.listEvents({
  participantId: 'user_123',
  includeRecurrences: true
});

if (myEvents.success && myEvents.data) {
  console.log(`My events: ${myEvents.data.count}`);
  myEvents.data.events.forEach(event => {
    console.log(`- ${event.title} at ${new Date(event.startTime).toLocaleString()}`);
  });
}

// Get events for a swarm
const swarmEvents = await codebolt.calendar.listEvents({
  swarmId: 'swarm_frontend'
});

if (swarmEvents.success && swarmEvents.data) {
  console.log(`Swarm events: ${swarmEvents.data.count}`);
}
```

#### 5. Filter by Tags
```typescript
// Get events with specific tags
const releaseEvents = await codebolt.calendar.listEvents({
  tags: ['release', 'milestone']
});

if (releaseEvents.success && releaseEvents.data) {
  console.log('Release milestones:');
  releaseEvents.data.events.forEach(event => {
    console.log(`- ${event.title}`);
    console.log(`  Tags: ${event.tags?.join(', ')}`);
  });
}
```

#### 6. Search Events
```typescript
// Search for events containing specific text
const searchResults = await codebolt.calendar.listEvents({
  search: 'sprint'
});

if (searchResults.success && searchResults.data) {
  console.log(`Found ${searchResults.data.count} events matching "sprint":`);
  searchResults.data.events.forEach(event => {
    console.log(`- ${event.title}`);
    if (event.description) {
      console.log(`  ${event.description.substring(0, 100)}...`);
    }
  });
}
```

#### 7. Filter by Completion Status
```typescript
// Get only incomplete events
const incomplete = await codebolt.calendar.listEvents({
  completed: false,
  includeCompleted: false
});

if (incomplete.success && incomplete.data) {
  console.log(`Incomplete events: ${incomplete.data.count}`);
  incomplete.data.events.forEach(event => {
    const startTime = new Date(event.startTime);
    const isOverdue = startTime < new Date();
    console.log(`- ${event.title} ${isOverdue ? '(OVERDUE)' : ''}`);
  });
}

// Get completed events
const completed = await codebolt.calendar.listEvents({
  completed: true
});

if (completed.success && completed.data) {
  console.log(`Completed events: ${completed.data.count}`);
}
```

#### 8. Get Triggered Events
```typescript
// Get all triggered (past start time) events
const triggered = await codebolt.calendar.listEvents({
  onlyTriggered: true,
  includeCompleted: false
});

if (triggered.success && triggered.data) {
  console.log(`Triggered events awaiting processing: ${triggered.data.count}`);
  triggered.data.events.forEach(event => {
    console.log(`- ${event.title} (${event.eventType})`);
    console.log(`  Triggered at: ${event.startTime}`);
  });
}
```

#### 9. Complex Filter Combination
```typescript
// Combine multiple filters
const result = await codebolt.calendar.listEvents({
  startDate: '2026-01-01T00:00:00Z',
  endDate: '2026-01-31T23:59:59Z',
  eventTypes: ['meeting', 'deadline'],
  completed: false,
  participantId: 'user_123',
  tags: ['priority'],
  includeRecurrences: true
});

if (result.success && result.data) {
  console.log('Filtered results:');
  result.data.events.forEach(event => {
    console.log(`- ${event.title}`);
    console.log(`  Type: ${event.eventType}`);
    console.log(`  Time: ${new Date(event.startTime).toLocaleString()}`);
    console.log(`  Tags: ${event.tags?.join(', ') || 'none'}`);
  });
}
```

#### 10. Events Created by Specific Agent
```typescript
// Get events created by a specific agent
const agentEvents = await codebolt.calendar.listEvents({
  creatorId: 'agent_review_bot'
});

if (agentEvents.success && agentEvents.data) {
  console.log(`Events created by agent: ${agentEvents.data.count}`);
  agentEvents.data.events.forEach(event => {
    console.log(`- ${event.title}`);
    console.log(`  Created: ${new Date(event.createdAt).toLocaleString()}`);
  });
}
```

#### 11. Pagination with Sorting
```typescript
// Note: Pagination is handled via limit/offset in the backend
// This example shows how to handle results
async function getAllEventsPaginated(pageSize = 50) {
  let allEvents: any[] = [];
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    const result = await codebolt.calendar.listEvents({
      limit: pageSize,
      offset: offset,
      sortBy: 'startTime',
      sortOrder: 'asc'
    });

    if (result.success && result.data) {
      allEvents = allEvents.concat(result.data.events);
      hasMore = result.data.events.length === pageSize;
      offset += pageSize;
    } else {
      hasMore = false;
    }
  }

  return allEvents;
}
```

### Common Use Cases

**Today's Agenda:**
```typescript
// Get all events for today
const today = new Date();
const startOfDay = new Date(today.setHours(0, 0, 0, 0));
const endOfDay = new Date(today.setHours(23, 59, 59, 999));

const todayEvents = await codebolt.calendar.listEvents({
  startDate: startOfDay.toISOString(),
  endDate: endOfDay.toISOString(),
  includeCompleted: false
});

if (todayEvents.success && todayEvents.data) {
  console.log('Today\'s Agenda:');
  todayEvents.data.events
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
    .forEach(event => {
      console.log(`${new Date(event.startTime).toLocaleTimeString()} - ${event.title}`);
    });
}
```

**Upcoming Deadlines:**
```typescript
// Get upcoming deadlines
const deadlines = await codebolt.calendar.listEvents({
  eventTypes: ['deadline'],
  completed: false,
  startDate: new Date().toISOString()
});

if (deadlines.success && deadlines.data) {
  console.log('Upcoming Deadlines:');
  deadlines.data.events
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
    .forEach(event => {
      const daysUntil = Math.ceil(
        (new Date(event.startTime).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      );
      console.log(`${daysUntil}d: ${event.title}`);
    });
}
```

**Team Meeting Schedule:**
```typescript
// Get all team meetings
const teamMeetings = await codebolt.calendar.listEvents({
  eventTypes: ['meeting'],
  participantId: 'team_dev',
  startDate: new Date().toISOString(),
  includeRecurrences: true
});

if (teamMeetings.success && teamMeetings.data) {
  console.log('Team Meeting Schedule:');
  teamMeetings.data.events.forEach(meeting => {
    console.log(`${new Date(meeting.startTime).toLocaleString()}: ${meeting.title}`);
  });
}
```

**Search and Filter:**
```typescript
// Search for specific events with filters
const results = await codebolt.calendar.listEvents({
  search: 'review',
  eventTypes: ['meeting', 'reminder'],
  completed: false,
  tags: ['priority']
});

if (results.success && results.data) {
  console.log(`Found ${results.data.count} priority review events`);
}
```

### Notes

- All parameters are optional - call with empty object for all events
- Date range filters are inclusive
- Multiple event types are OR'd together
- Multiple tags are OR'd together (event must have at least one)
- Search is case-insensitive and searches title and description
- Use `includeCompleted: false` to exclude completed events from results
- Use `completed: true` to get only completed events
- Use `onlyTriggered: true` to get events whose start time has passed
- Participant filter matches events where the user/agent is a participant
- Creator filter matches events created by the specified entity
- Results are not sorted by default - sort client-side if needed
- For large result sets, consider using pagination