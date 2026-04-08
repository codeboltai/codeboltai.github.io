---
sidebar_position: 1
title: Calendar Module
---

# Calendar Module

The Calendar module provides comprehensive event management functionality for scheduling, tracking, and coordinating time-based activities. It supports various event types including meetings, reminders, deadlines, and automated checks.

## Overview

The calendar module supports:
- **Event Types** - Generic events, meetings, reminders, deadlines, checks, and milestones
- **Recurrence** - Cron-based recurring events with flexible scheduling
- **Participants** - Support for users, agents, teams, and swarms
- **RSVP Management** - Track participant acceptance status
- **Reminders** - Configurable alerts before events
- **Event Completion** - Mark events as complete with tracking

## Quick Start

```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a simple event
const event = await codebolt.calendar.createEvent({
  title: 'Team Standup',
  description: 'Daily sync meeting',
  eventType: 'meeting',
  startTime: '2026-01-20T10:00:00Z',
  endTime: '2026-01-20T10:30:00Z',
  hasDuration: true,
  reminder: {
    enabled: true,
    minutesBefore: 15
  }
});

// List upcoming events
const upcoming = await codebolt.calendar.getUpcomingEvents({
  withinMinutes: 60
});

// Mark event as complete
await codebolt.calendar.markEventComplete({
  eventId: event.data.event.id
});
```

## Available Methods

### Event CRUD Operations
| Method | Description |
|--------|-------------|
| `createEvent(params)` | Create a new calendar event |
| `getEvent(params)` | Get a single event by ID |
| `updateEvent(params)` | Update an existing event |
| `deleteEvent(params)` | Delete an event |

### Event Listing & Filtering
| Method | Description |
|--------|-------------|
| `listEvents(params)` | List events with optional filters |
| `getEventsInRange(params)` | Get events within a date range |
| `getUpcomingEvents(params)` | Get upcoming events within time window |
| `getTriggeredEvents(params)` | Get events whose start time has passed |

### Event Management
| Method | Description |
|--------|-------------|
| `markEventComplete(params)` | Mark a single event as complete |
| `markEventsComplete(params)` | Mark multiple events as complete |
| `getTriggeredEventsAndMarkComplete()` | Get and mark all triggered events |
| `rsvp(params)` | RSVP to an event |
| `getStatus()` | Get calendar scheduler status |

## Event Types

### Generic Event
```typescript
await codebolt.calendar.createEvent({
  title: 'Project Deadline',
  eventType: 'generic',
  startTime: '2026-01-31T17:00:00Z'
});
```

### Meeting
```typescript
await codebolt.calendar.createEvent({
  title: 'Sprint Planning',
  eventType: 'meeting',
  startTime: '2026-01-20T14:00:00Z',
  endTime: '2026-01-20T16:00:00Z',
  hasDuration: true,
  agenda: 'Plan tasks for next sprint',
  participants: [
    {
      id: 'user-123',
      name: 'John Doe',
      type: 'user'
    }
  ]
});
```

### Reminder
```typescript
await codebolt.calendar.createEvent({
  title: 'Review PR',
  eventType: 'reminder',
  startTime: '2026-01-20T09:00:00Z',
  reminder: {
    enabled: true,
    minutesBefore: 30
  }
});
```

### Deadline
```typescript
await codebolt.calendar.createEvent({
  title: 'Feature Release',
  eventType: 'deadline',
  startTime: '2026-01-31T23:59:59Z',
  tags: ['release', 'milestone']
});
```

### Check (Automated)
```typescript
await codebolt.calendar.createEvent({
  title: 'Health Check',
  eventType: 'check',
  checkType: 'api',
  startTime: '2026-01-20T08:00:00Z',
  isRecurring: true,
  cronExpression: '0 8 * * *', // Daily at 8 AM
  metadata: {
    endpoint: '/api/health'
  }
});
```

### Milestone
```typescript
await codebolt.calendar.createEvent({
  title: 'Beta Launch',
  eventType: 'milestone',
  startTime: '2026-02-01T00:00:00Z',
  description: 'Public beta release'
});
```

## Recurring Events

Create recurring events using cron expressions:

```typescript
// Daily standup at 10 AM
await codebolt.calendar.createEvent({
  title: 'Daily Standup',
  eventType: 'meeting',
  startTime: '2026-01-20T10:00:00Z',
  endTime: '2026-01-20T10:30:00Z',
  hasDuration: true,
  isRecurring: true,
  cronExpression: '0 10 * * *', // Every day at 10 AM
  recurrenceEndTime: '2026-12-31T23:59:59Z'
});

// Weekly review every Friday
await codebolt.calendar.createEvent({
  title: 'Weekly Review',
  eventType: 'meeting',
  startTime: '2026-01-20T16:00:00Z',
  isRecurring: true,
  cronExpression: '0 16 * * 5', // Every Friday at 4 PM
  recurrenceEndTime: '2026-06-30T23:59:59Z'
});

// Monthly backup on first day
await codebolt.calendar.createEvent({
  title: 'Monthly Backup',
  eventType: 'check',
  checkType: 'api',
  startTime: '2026-01-20T02:00:00Z',
  isRecurring: true,
  cronExpression: '0 2 1 * *', // First day of every month at 2 AM
  recurrenceEndTime: '2026-12-31T23:59:59Z'
});
```

## Participant Management

### Adding Participants
```typescript
const event = await codebolt.calendar.createEvent({
  title: 'Sprint Review',
  eventType: 'meeting',
  startTime: '2026-01-20T14:00:00Z',
  endTime: '2026-01-20T16:00:00Z',
  hasDuration: true,
  participants: [
    {
      id: 'user-123',
      name: 'Alice Johnson',
      type: 'user'
    },
    {
      id: 'agent-456',
      name: 'Code Reviewer Agent',
      type: 'agent',
      agentExecutionId: 'exec-789',
      threadId: 'thread-101'
    },
    {
      id: 'team-202',
      name: 'Development Team',
      type: 'team'
    },
    {
      id: 'swarm-303',
      name: 'Frontend Swarm',
      type: 'swarm'
    }
  ]
});
```

### RSVP Management
```typescript
// Accept an event
await codebolt.calendar.rsvp({
  eventId: 'event-123',
  participantId: 'user-123',
  status: 'accepted'
});

// Decline an event
await codebolt.calendar.rsvp({
  eventId: 'event-123',
  participantId: 'user-456',
  status: 'declined'
});
```

## Filtering & Search

### Filter by Type
```typescript
const meetings = await codebolt.calendar.listEvents({
  eventTypes: ['meeting'],
  startDate: '2026-01-01T00:00:00Z',
  endDate: '2026-01-31T23:59:59Z'
});
```

### Filter by Participant
```typescript
const myEvents = await codebolt.calendar.listEvents({
  participantId: 'user-123',
  includeRecurrences: true
});
```

### Filter by Swarm
```typescript
const swarmEvents = await codebolt.calendar.listEvents({
  swarmId: 'swarm-303'
});
```

### Search by Tags
```typescript
const releaseEvents = await codebolt.calendar.listEvents({
  tags: ['release', 'milestone']
});
```

### Text Search
```typescript
const searchResults = await codebolt.calendar.listEvents({
  search: 'sprint'
});
```

## Common Use Cases

### 1. Daily Standup Automation
```typescript
// Create recurring daily standup
const standup = await codebolt.calendar.createEvent({
  title: 'Daily Standup',
  description: 'Team sync meeting',
  eventType: 'meeting',
  startTime: '2026-01-20T09:00:00Z',
  endTime: '2026-01-20T09:15:00Z',
  hasDuration: true,
  isRecurring: true,
  cronExpression: '0 9 * * 1-5', // Weekdays at 9 AM
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
  ]
});
```

### 2. Deadline Tracking
```typescript
// Create project deadline
const deadline = await codebolt.calendar.createEvent({
  title: 'Q1 Release',
  eventType: 'deadline',
  startTime: '2026-03-31T23:59:59Z',
  description: 'Q1 2026 Product Release',
  reminder: {
    enabled: true,
    minutesBefore: 1440 // 1 day before
  },
  tags: ['release', 'q1', 'milestone']
});

// Check upcoming deadlines
const upcomingDeadlines = await codebolt.calendar.listEvents({
  eventTypes: ['deadline'],
  startDate: new Date().toISOString(),
  completed: false
});
```

### 3. Automated Health Checks
```typescript
// Create automated health check event
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
    expectedStatus: 200
  }
});
```

### 4. Process Triggered Events
```typescript
// Get all triggered events
const triggered = await codebolt.calendar.getTriggeredEvents({
  includeCompleted: false
});

// Process each triggered event
for (const event of triggered.data.events) {
  console.log(`Processing event: ${event.title}`);

  // Handle based on event type
  switch (event.eventType) {
    case 'check':
      // Execute automated check
      await executeCheck(event);
      break;
    case 'reminder':
      // Send reminder notification
      await sendReminder(event);
      break;
    case 'meeting':
      // Start meeting preparation
      await prepareMeeting(event);
      break;
  }

  // Mark as complete
  await codebolt.calendar.markEventComplete({
    eventId: event.id
  });
}
```

### 5. Batch Complete Events
```typescript
// Get all triggered events and mark complete at once
const result = await codebolt.calendar.getTriggeredEventsAndMarkComplete();

console.log(`Processed ${result.data.count} events`);
result.data.events.forEach(event => {
  console.log(`- ${event.title}: ${event.eventType}`);
});
```

### 6. Event Search & Filtering
```typescript
// Find all incomplete events this week
const thisWeek = await codebolt.calendar.listEvents({
  startDate: '2026-01-19T00:00:00Z',
  endDate: '2026-01-25T23:59:59Z',
  completed: false,
  includeCompleted: false
});

// Find all events for a specific user
const userEvents = await codebolt.calendar.listEvents({
  participantId: 'user-123',
  includeRecurrences: true
});

// Find high-priority events
const priorityEvents = await codebolt.calendar.listEvents({
  tags: ['urgent', 'priority'],
  completed: false
});
```

## Error Handling

```typescript
try {
  const event = await codebolt.calendar.createEvent({
    title: 'New Event',
    startTime: '2026-01-20T10:00:00Z'
  });

  if (event.success) {
    console.log('Event created:', event.data.event);
  } else {
    console.error('Failed to create event:', event.error);
  }
} catch (error) {
  console.error('Error creating event:', error);
}
```

## Notes

- All timestamps should be in ISO 8601 format (UTC)
- Event IDs are automatically generated
- Recurrence uses standard cron syntax
- Events with `hasDuration: false` are point-in-time events
- Participants can be users, agents, teams, or swarms
- RSVP status tracks: pending, accepted, declined
- Check events support: email, website, api, file types
- Scheduler runs automatically to trigger events
