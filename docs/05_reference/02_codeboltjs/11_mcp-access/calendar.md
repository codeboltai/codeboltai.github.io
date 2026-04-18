---
title: Calendar MCP
sidebar_label: codebolt.calendar
sidebar_position: 30
---

# codebolt.calendar

Calendar event management tools for creating, updating, and tracking events, meetings, reminders, and deadlines.

## Available Tools

- `calendar_create_event` - Creates a new calendar event with various types and configurations
- `calendar_update_event` - Updates an existing calendar event (only provided fields are changed)
- `calendar_delete_event` - Permanently deletes a calendar event by its ID
- `calendar_get_event` - Retrieves a single calendar event by its ID with full details
- `calendar_list_events` - Lists calendar events with optional filters for date range, types, and more
- `calendar_get_upcoming` - Retrieves upcoming events within a specified time window
- `calendar_mark_complete` - Marks a calendar event as complete with a completion timestamp
- `calendar_get_status` - Retrieves the current status of the calendar scheduler

## Tool Parameters

### `calendar_create_event`

Creates a new calendar event with the specified parameters. Supports various event types including generic, meeting, reminder, deadline, check, and milestone. Can configure recurring events, reminders, participants, and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | Title of the event |
| startTime | string | Yes | Start time of the event in ISO 8601 format |
| description | string | No | Description of the event |
| eventType | string | No | Type of event: 'generic', 'meeting', 'reminder', 'deadline', 'check', 'milestone' |
| endTime | string | No | End time of the event in ISO 8601 format |
| hasDuration | boolean | No | Whether the event has a duration |
| allDay | boolean | No | Whether this is an all-day event |
| swarmId | string | No | ID of the swarm this event belongs to |
| participants | array | No | List of participants (objects with id, name, type, status) |
| isRecurring | boolean | No | Whether the event is recurring |
| cronExpression | string | No | Cron expression for recurring events |
| recurrenceEndTime | string | No | End time for recurrence in ISO 8601 format |
| reminder | object | No | Reminder settings (enabled: boolean, minutesBefore: number) |
| agenda | string | No | Agenda for meetings |
| checkType | string | No | Type of check for check events: 'email', 'website', 'api', 'file' |
| tags | array | No | Tags for the event |
| metadata | object | No | Additional metadata as key-value pairs |
| createdById | string | No | ID of the creator |
| createdByName | string | No | Name of the creator |
| createdByType | string | No | Type of the creator: 'user', 'agent', 'team', 'swarm' |
| agentExecutionId | string | No | Agent execution ID |
| threadId | string | No | Thread ID |

### `calendar_update_event`

Updates an existing calendar event with new values. Only the fields provided will be updated; other fields remain unchanged. Requires the event ID and at least one field to update.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| eventId | string | Yes | ID of the event to update |
| title | string | No | New title for the event |
| description | string | No | New description for the event |
| eventType | string | No | New event type: 'generic', 'meeting', 'reminder', 'deadline', 'check', 'milestone' |
| startTime | string | No | New start time in ISO 8601 format |
| endTime | string | No | New end time in ISO 8601 format |
| hasDuration | boolean | No | Whether the event has a duration |
| allDay | boolean | No | Whether this is an all-day event |
| participants | array | No | Updated list of participants |
| isRecurring | boolean | No | Whether the event is recurring |
| cronExpression | string | No | Cron expression for recurring events |
| recurrenceEndTime | string | No | End time for recurrence in ISO 8601 format |
| reminder | object | No | Reminder settings (enabled: boolean, minutesBefore: number) |
| agenda | string | No | Agenda for meetings |
| checkType | string | No | Type of check for check events: 'email', 'website', 'api', 'file' |
| tags | array | No | Tags for the event |
| metadata | object | No | Additional metadata as key-value pairs |

### `calendar_delete_event`

Deletes a calendar event by its ID. This action is permanent and cannot be undone.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| eventId | string | Yes | ID of the event to delete |

### `calendar_get_event`

Retrieves a single calendar event by its ID. Returns the full event details including title, description, times, participants, and all other properties.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| eventId | string | Yes | ID of the event to retrieve |

### `calendar_list_events`

Lists calendar events with optional filters. Can filter by date range, event types, creator, participant, swarm, tags, search query, and completion status.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| startDate | string | No | Start date for filtering events in ISO 8601 format |
| endDate | string | No | End date for filtering events in ISO 8601 format |
| eventTypes | array | No | Filter by event types: 'generic', 'meeting', 'reminder', 'deadline', 'check', 'milestone' |
| creatorId | string | No | Filter by creator ID |
| participantId | string | No | Filter by participant ID |
| swarmId | string | No | Filter by swarm ID |
| includeRecurrences | boolean | No | Include recurrences in the results |
| tags | array | No | Filter by tags |
| search | string | No | Search query string to filter events |
| completed | boolean | No | Filter by completion status (true for completed, false for incomplete) |
| includeCompleted | boolean | No | Include completed events in results (default behavior may exclude them) |
| onlyTriggered | boolean | No | Only return triggered events (events whose start time has passed) |

### `calendar_get_upcoming`

Retrieves upcoming calendar events within a specified time window. By default, returns events within the next 60 minutes. Use the withinMinutes parameter to adjust the time window.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| withinMinutes | number | No | Number of minutes to look ahead for upcoming events (defaults to 60) |

### `calendar_mark_complete`

Marks a calendar event as complete. This updates the event's completed status and records the completion timestamp.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| eventId | string | Yes | ID of the event to mark as complete |

### `calendar_get_status`

Retrieves the current status of the calendar scheduler. Returns information about whether the scheduler is running, the last and next check times, and the number of scheduled events.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

## Sample Usage

```javascript
// Create a meeting event
const meetingResult = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_create_event",
  {
    title: "Sprint Planning Meeting",
    startTime: "2024-12-15T10:00:00Z",
    endTime: "2024-12-15T11:00:00Z",
    eventType: "meeting",
    description: "Weekly sprint planning session",
    hasDuration: true,
    participants: [
      { id: "user-1", name: "John Doe", type: "user", status: "pending" },
      { id: "agent-1", name: "Code Assistant", type: "agent", status: "accepted" }
    ],
    agenda: "1. Review completed tasks\n2. Plan next sprint\n3. Assign priorities",
    reminder: { enabled: true, minutesBefore: 15 },
    tags: ["sprint", "planning"]
  }
);

// Create a deadline event
const deadlineResult = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_create_event",
  {
    title: "Project Milestone: Beta Release",
    startTime: "2024-12-31T23:59:00Z",
    eventType: "deadline",
    description: "Beta version must be ready for testing",
    reminder: { enabled: true, minutesBefore: 1440 },
    tags: ["milestone", "beta"]
  }
);

// Create a recurring reminder
const reminderResult = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_create_event",
  {
    title: "Daily Standup",
    startTime: "2024-12-01T09:00:00Z",
    eventType: "reminder",
    isRecurring: true,
    cronExpression: "0 9 * * 1-5",
    recurrenceEndTime: "2025-03-31T09:00:00Z",
    reminder: { enabled: true, minutesBefore: 5 }
  }
);

// Create a check event
const checkResult = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_create_event",
  {
    title: "API Health Check",
    startTime: "2024-12-15T00:00:00Z",
    eventType: "check",
    checkType: "api",
    isRecurring: true,
    cronExpression: "0 */6 * * *",
    metadata: { endpoint: "https://api.example.com/health" }
  }
);

// Get event details
const eventDetail = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_get_event",
  { eventId: "event-123" }
);

// Update an event
const updateResult = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_update_event",
  {
    eventId: "event-123",
    title: "Updated Meeting Title",
    startTime: "2024-12-15T14:00:00Z",
    endTime: "2024-12-15T15:00:00Z",
    description: "Rescheduled to afternoon"
  }
);

// List events with filters
const events = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_list_events",
  {
    startDate: "2024-12-01T00:00:00Z",
    endDate: "2024-12-31T23:59:59Z",
    eventTypes: ["meeting", "deadline"],
    includeRecurrences: true,
    tags: ["sprint"],
    includeCompleted: false
  }
);

// Get upcoming events
const upcoming = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_get_upcoming",
  { withinMinutes: 120 }
);

// Mark event as complete
const completeResult = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_mark_complete",
  { eventId: "event-123" }
);

// Get calendar scheduler status
const status = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_get_status",
  {}
);

// Delete an event
const deleteResult = await codebolt.tools.executeTool(
  "codebolt.calendar",
  "calendar_delete_event",
  { eventId: "event-456" }
);
```

:::info
Calendar tools support multiple event types (generic, meeting, reminder, deadline, check, milestone), recurring events with cron expressions, participant management with statuses (pending, accepted, declined), and check types for automated monitoring (email, website, api, file). All timestamps should be in ISO 8601 format.
:::
