---
cbapicategory:
  - name: completeEvent
    link: /docs/reference/client-sdk/api-reference/calendar/completeEvent
    description: "Marks a specific calendar event as complete.

Records the completion of an event, optionally with completion
details such as outcome or notes."
  - name: completeEvents
    link: /docs/reference/client-sdk/api-reference/calendar/completeEvents
    description: "Bulk-completes multiple calendar events.

Marks multiple events as complete in a single operation, useful for
batch processing of finished events."
  - name: completeTriggered
    link: /docs/reference/client-sdk/api-reference/calendar/completeTriggered
    description: "Marks triggered events as complete.

Acknowledges and completes triggered events, removing them from
the pending triggered events list."
  - name: createEvent
    link: /docs/reference/client-sdk/api-reference/calendar/createEvent
    description: "Creates a new calendar event.

Schedules a new event that can trigger agent actions or serve as
a coordination point for workflows."
  - name: deleteEvent
    link: /docs/reference/client-sdk/api-reference/calendar/deleteEvent
    description: "Deletes a calendar event.

Permanently removes the specified calendar event."
  - name: getEvent
    link: /docs/reference/client-sdk/api-reference/calendar/getEvent
    description: "Retrieves a specific calendar event by ID.

Returns the full event details including all metadata, participants,
and configuration."
  - name: getIndex
    link: /docs/reference/client-sdk/api-reference/calendar/getIndex
    description: "Retrieves the calendar index.

Returns an indexed view of calendar events, optimized for fast
lookups and navigation across large numbers of events."
  - name: getRange
    link: /docs/reference/client-sdk/api-reference/calendar/getRange
    description: "Retrieves calendar events within a date range.

Returns full event objects for all events that overlap with the
specified date range."
  - name: getStatus
    link: /docs/reference/client-sdk/api-reference/calendar/getStatus
    description: "Retrieves the calendar service status.

Returns health and configuration information about the calendar
subsystem, including whether triggers are active."
  - name: getTriggered
    link: /docs/reference/client-sdk/api-reference/calendar/getTriggered
    description: "Retrieves triggered calendar events.

Returns events whose trigger conditions have been met and are
pending action or acknowledgment."
  - name: getUpcoming
    link: /docs/reference/client-sdk/api-reference/calendar/getUpcoming
    description: "Retrieves upcoming calendar events.

Returns events scheduled in the near future, sorted chronologically.
Useful for displaying \"what's next\" views."
  - name: listEvents
    link: /docs/reference/client-sdk/api-reference/calendar/listEvents
    description: "Retrieves all calendar events as summaries.

Returns lightweight summary representations of all events,
suitable for calendar overview displays."
  - name: rsvp
    link: /docs/reference/client-sdk/api-reference/calendar/rsvp
    description: "Sends an RSVP response to a calendar event.

Records a participant's attendance response (accept, decline, tentative)
for the specified event."
  - name: updateEvent
    link: /docs/reference/client-sdk/api-reference/calendar/updateEvent
    description: "Updates a calendar event.

Modifies the properties of an existing calendar event such as
its title, time, or configuration."
---
# Calendar API

Calendar API

<CBAPICategory />

## Methods

- [`completeEvent()`](./completeEvent) — Marks a specific calendar event as complete.

Records the completion of an event, optionally with completion
details such as outcome or notes.
- [`completeEvents()`](./completeEvents) — Bulk-completes multiple calendar events.

Marks multiple events as complete in a single operation, useful for
batch processing of finished events.
- [`completeTriggered()`](./completeTriggered) — Marks triggered events as complete.

Acknowledges and completes triggered events, removing them from
the pending triggered events list.
- [`createEvent()`](./createEvent) — Creates a new calendar event.

Schedules a new event that can trigger agent actions or serve as
a coordination point for workflows.
- [`deleteEvent()`](./deleteEvent) — Deletes a calendar event.

Permanently removes the specified calendar event.
- [`getEvent()`](./getEvent) — Retrieves a specific calendar event by ID.

Returns the full event details including all metadata, participants,
and configuration.
- [`getIndex()`](./getIndex) — Retrieves the calendar index.

Returns an indexed view of calendar events, optimized for fast
lookups and navigation across large numbers of events.
- [`getRange()`](./getRange) — Retrieves calendar events within a date range.

Returns full event objects for all events that overlap with the
specified date range.
- [`getStatus()`](./getStatus) — Retrieves the calendar service status.

Returns health and configuration information about the calendar
subsystem, including whether triggers are active.
- [`getTriggered()`](./getTriggered) — Retrieves triggered calendar events.

Returns events whose trigger conditions have been met and are
pending action or acknowledgment.
- [`getUpcoming()`](./getUpcoming) — Retrieves upcoming calendar events.

Returns events scheduled in the near future, sorted chronologically.
Useful for displaying "what's next" views.
- [`listEvents()`](./listEvents) — Retrieves all calendar events as summaries.

Returns lightweight summary representations of all events,
suitable for calendar overview displays.
- [`rsvp()`](./rsvp) — Sends an RSVP response to a calendar event.

Records a participant's attendance response (accept, decline, tentative)
for the specified event.
- [`updateEvent()`](./updateEvent) — Updates a calendar event.

Modifies the properties of an existing calendar event such as
its title, time, or configuration.
