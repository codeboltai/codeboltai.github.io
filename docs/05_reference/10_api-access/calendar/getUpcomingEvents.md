---
name: getUpcomingEvents
cbbaseinfo:
  description: Retrieves events that are scheduled to start within a specified time window from the current time.
cbparameters:
  parameters:
    - name: params
      typeName: IGetUpcomingEventsParams
      description: "Optional parameters including withinMinutes (default: 60)"
  returns:
    signatureTypeName: "Promise<IGetUpcomingEventsResponse>"
    description: A promise that resolves to upcoming events within the time window
data:
  name: getUpcomingEvents
  category: calendar
  link: getUpcomingEvents.md
---
# getUpcomingEvents

```typescript
codebolt.calendar.getUpcomingEvents(params: IGetUpcomingEventsParams): Promise<IGetUpcomingEventsResponse>
```

Retrieves events that are scheduled to start within a specified time window from the current time.
### Parameters

- **`params`** ([IGetUpcomingEventsParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetUpcomingEventsParams)): Optional parameters including withinMinutes (default: 60)

### Returns

- **`Promise<[IGetUpcomingEventsResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetUpcomingEventsResponse)>`**: A promise that resolves to upcoming events within the time window

### Parameter Details

The [`IGetUpcomingEventsParams`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetUpcomingEventsParams) interface includes:
- **`withinMinutes`** (number, optional): Time window in minutes from now (default: 60)

### Response Structure

```typescript
interface IGetUpcomingEventsResponse {
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

#### 1. Get Default Upcoming Events (Next 60 Minutes)
```typescript
import codebolt from '@codebolt/codeboltjs';

// Get events in the next hour
const result = await codebolt.calendar.getUpcomingEvents();

if (result.success && result.data) {
  console.log(`Found ${result.data.count} upcoming events`);
  result.data.events.forEach(event => {
    const startTime = new Date(event.startTime);
    const minutesUntil = Math.floor((startTime.getTime() - Date.now()) / 60000);
    console.log(`${minutesUntil}min: ${event.title}`);
  });
}
```

#### 2. Get Events in Next 15 Minutes
```typescript
// Get events happening soon
const result = await codebolt.calendar.getUpcomingEvents({
  withinMinutes: 15
});

if (result.success && result.data) {
  console.log('Events in the next 15 minutes:');
  result.data.events.forEach(event => {
    const startTime = new Date(event.startTime);
    const timeUntil = startTime.toLocaleTimeString();
    console.log(`[${timeUntil}] ${event.title} (${event.eventType})`);
  });
}
```

#### 3. Get Today's Remaining Events
```typescript
// Get all events for the rest of the day
const now = new Date();
const endOfDay = new Date(now.setHours(23, 59, 59, 999));
const minutesUntilEndOfDay = Math.floor((endOfDay.getTime() - Date.now()) / 60000);

const result = await codebolt.calendar.getUpcomingEvents({
  withinMinutes: minutesUntilEndOfDay
});

if (result.success && result.data) {
  console.log(`Events remaining today: ${result.data.count}`);
  result.data.events.forEach(event => {
    console.log(`${new Date(event.startTime).toLocaleTimeString()} - ${event.title}`);
  });
}
```

#### 4. Get This Week's Events
```typescript
// Get events for the next 7 days
const result = await codebolt.calendar.getUpcomingEvents({
  withinMinutes: 7 * 24 * 60 // 7 days in minutes
});

if (result.success && result.data) {
  console.log('Events this week:');

  // Group by day
  const eventsByDay: Record<string, CalendarEvent[]> = {};
  result.data.events.forEach(event => {
    const day = new Date(event.startTime).toLocaleDateString();
    if (!eventsByDay[day]) {
      eventsByDay[day] = [];
    }
    eventsByDay[day].push(event);
  });

  // Display by day
  Object.entries(eventsByDay).forEach(([day, events]) => {
    console.log(`\n${day}:`);
    events.forEach(event => {
      console.log(`  ${new Date(event.startTime).toLocaleTimeString()} - ${event.title}`);
    });
  });
}
```

#### 5. Check for Immediate Events
```typescript
// Check if there are any events in the next 5 minutes
const result = await codebolt.calendar.getUpcomingEvents({
  withinMinutes: 5
});

if (result.success && result.data) {
  if (result.data.count > 0) {
    console.log('🔔 You have upcoming events soon:');
    result.data.events.forEach(event => {
      const startTime = new Date(event.startTime);
      const minutesUntil = Math.floor((startTime.getTime() - Date.now()) / 60000);
      console.log(`  In ${minutesUntil}min: ${event.title}`);
    });
  } else {
    console.log('No immediate events');
  }
}
```

#### 6. Prepare for Upcoming Meetings
```typescript
// Get upcoming meetings only
const allUpcoming = await codebolt.calendar.getUpcomingEvents({
  withinMinutes: 120
});

if (allUpcoming.success && allUpcoming.data) {
  const meetings = allUpcoming.data.events.filter(
    event => event.eventType === 'meeting'
  );

  if (meetings.length > 0) {
    console.log('Upcoming meetings:');
    meetings.forEach(meeting => {
      const startTime = new Date(meeting.startTime);
      const timeUntil = Math.floor((startTime.getTime() - Date.now()) / 60000);

      console.log(`\n${meeting.title}`);
      console.log(`  Starts in: ${timeUntil} minutes`);
      console.log(`  Agenda: ${meeting.agenda || 'No agenda'}`);

      if (meeting.participants && meeting.participants.length > 0) {
        console.log(`  Participants: ${meeting.participants.length}`);
      }
    });
  }
}
```

#### 7. Sort by Urgency
```typescript
// Get and sort upcoming events by time
const result = await codebolt.calendar.getUpcomingEvents({
  withinMinutes: 480 // 8 hours
});

if (result.success && result.data) {
  const sorted = result.data.events.sort((a, b) => {
    return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
  });

  console.log('Upcoming events (sorted):');
  sorted.forEach((event, index) => {
    const startTime = new Date(event.startTime);
    const hoursUntil = ((startTime.getTime() - Date.now()) / 3600000).toFixed(1);
    console.log(`${index + 1}. ${event.title} (in ${hoursUntil}h)`);
  });
}
```

#### 8. Filter Out Completed Events
```typescript
// Get only incomplete upcoming events
const result = await codebolt.calendar.getUpcomingEvents({
  withinMinutes: 60
});

if (result.success && result.data) {
  const incomplete = result.data.events.filter(event => !event.completed);

  console.log(`Incomplete upcoming events: ${incomplete.length}`);
  incomplete.forEach(event => {
    const startTime = new Date(event.startTime);
    console.log(`${startTime.toLocaleTimeString()}: ${event.title}`);
  });
}
```

### Common Use Cases

**Notification System:**
```typescript
// Poll for upcoming events and notify
async function checkForUpcomingEvents() {
  const result = await codebolt.calendar.getUpcomingEvents({
    withinMinutes: 15
  });

  if (result.success && result.data && result.data.count > 0) {
    result.data.events.forEach(event => {
      if (event.reminder?.enabled) {
        sendNotification({
          title: event.title,
          message: `Starting in ${Math.ceil(
            (new Date(event.startTime).getTime() - Date.now()) / 60000
          )} minutes`,
          type: event.eventType
        });
      }
    });
  }
}

// Run every 5 minutes
setInterval(checkForUpcomingEvents, 5 * 60 * 1000);
```

**Dashboard Display:**
```typescript
// Get events for dashboard
async function getDashboardEvents() {
  const result = await codebolt.calendar.getUpcomingEvents({
    withinMinutes: 240 // 4 hours
  });

  if (result.success && result.data) {
    return result.data.events.map(event => ({
      id: event.id,
      title: event.title,
      type: event.eventType,
      startTime: new Date(event.startTime),
      timeUntil: Math.floor(
        (new Date(event.startTime).getTime() - Date.now()) / 60000
      ),
      participants: event.participants?.length || 0
    }));
  }

  return [];
}
```

**Meeting Preparation:**
```typescript
// Prepare for upcoming meetings
async function prepareForMeetings() {
  const result = await codebolt.calendar.getUpcomingEvents({
    withinMinutes: 30
  });

  if (result.success && result.data) {
    const meetings = result.data.events.filter(
      event => event.eventType === 'meeting' && !event.completed
    );

    for (const meeting of meetings) {
      console.log(`Preparing for: ${meeting.title}`);

      if (meeting.agenda) {
        console.log('Reviewing agenda...');
        // Load agenda items
      }

      if (meeting.participants) {
        console.log('Checking participant availability...');
        // Verify participants
      }

      if (meeting.description) {
        console.log('Reading meeting context...');
        // Load background materials
      }
    }
  }
}
```

### Notes

- Default time window is 60 minutes if not specified
- Returns events starting within the specified minutes from now
- Events are returned in chronological order
- Includes all event types
- Includes both completed and incomplete events
- Use with small time windows (5-15 min) for immediate actions
- Use with larger time windows for planning and overview
- For date-range queries, use `getEventsInRange` instead
- Results may include events that have already started but not ended