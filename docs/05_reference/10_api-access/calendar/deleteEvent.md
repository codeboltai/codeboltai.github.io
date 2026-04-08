---
name: deleteEvent
cbbaseinfo:
  description: Deletes a calendar event by its ID. This operation is irreversible and will permanently remove the event from the calendar.
cbparameters:
  parameters:
    - name: params
      typeName: IDeleteEventParams
      description: Parameters containing the eventId to delete
  returns:
    signatureTypeName: "Promise<IDeleteEventResponse>"
    description: A promise that resolves when the event is deleted
data:
  name: deleteEvent
  category: calendar
  link: deleteEvent.md
---
# deleteEvent

```typescript
codebolt.calendar.deleteEvent(params: IDeleteEventParams): Promise<IDeleteEventResponse>
```

Deletes a calendar event by its ID. This operation is irreversible and will permanently remove the event from the calendar.
### Parameters

- **`params`** ([IDeleteEventParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IDeleteEventParams)): Parameters containing the eventId to delete

### Returns

- **`Promise<[IDeleteEventResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IDeleteEventResponse)>`**: A promise that resolves when the event is deleted

### Parameter Details

The [`IDeleteEventParams`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IDeleteEventParams) interface includes:
- **`eventId`** (string, required): The unique identifier of the event to delete

### Response Structure

```typescript
interface IDeleteEventResponse {
  success: boolean;
  code: string;
  message: string;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}
```

### Examples

#### 1. Basic Event Deletion
```typescript
import codebolt from '@codebolt/codeboltjs';

// Delete an event by ID
const result = await codebolt.calendar.deleteEvent({
  eventId: 'evt_abc123xyz'
});

if (result.success) {
  console.log('Event deleted successfully');
} else {
  console.error('Failed to delete event:', result.error?.message);
}
```

#### 2. Delete with Verification
```typescript
// Verify event exists before deleting
const eventCheck = await codebolt.calendar.getEvent({
  eventId: 'evt_to_delete'
});

if (eventCheck.success && eventCheck.data) {
  console.log('Deleting event:', eventCheck.data.event.title);

  const deleteResult = await codebolt.calendar.deleteEvent({
    eventId: 'evt_to_delete'
  });

  if (deleteResult.success) {
    console.log('Event deleted successfully');
  }
} else {
  console.log('Event not found, nothing to delete');
}
```

#### 3. Delete with User Confirmation
```typescript
// Delete event after confirmation
async function deleteEventWithConfirmation(eventId: string) {
  // First, get event details
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (!eventResult.success || !eventResult.data) {
    console.log('Event not found');
    return false;
  }

  const event = eventResult.data.event;

  // Show event details and confirm
  console.log(`Event to delete: ${event.title}`);
  console.log(`Type: ${event.eventType}`);
  console.log(`Time: ${new Date(event.startTime).toLocaleString()}`);

  // In a real application, you would show a confirmation dialog
  const confirmed = true; // Simulating user confirmation

  if (confirmed) {
    const result = await codebolt.calendar.deleteEvent({ eventId });
    return result.success;
  }

  return false;
}
```

#### 4. Delete Completed Events
```typescript
// Find and delete old completed events
async function cleanupOldEvents(daysToKeep: number) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

  const oldEvents = await codebolt.calendar.listEvents({
    endDate: cutoffDate.toISOString(),
    completed: true
  });

  if (oldEvents.success && oldEvents.data) {
    console.log(`Found ${oldEvents.data.count} old completed events`);

    for (const event of oldEvents.data.events) {
      const result = await codebolt.calendar.deleteEvent({
        eventId: event.id
      });

      if (result.success) {
        console.log(`Deleted: ${event.title}`);
      }
    }
  }
}

// Usage: Delete events older than 30 days
await cleanupOldEvents(30);
```

#### 5. Delete Cancelled Meeting
```typescript
// Delete a meeting that was cancelled
const meetingId = 'evt_cancelled_meeting';

// First update to indicate cancellation (optional)
await codebolt.calendar.updateEvent({
  eventId: meetingId,
  description: 'CANCELLED: ' + (await getEventDescription(meetingId)),
  tags: ['cancelled']
});

// Then delete the event
const result = await codebolt.calendar.deleteEvent({
  eventId: meetingId
});

if (result.success) {
  console.log('Cancelled meeting deleted');
}
```

#### 6. Batch Delete Events
```typescript
// Delete multiple events
async function batchDeleteEvents(eventIds: string[]) {
  let deletedCount = 0;
  let failedCount = 0;

  for (const eventId of eventIds) {
    const result = await codebolt.calendar.deleteEvent({ eventId });

    if (result.success) {
      deletedCount++;
      console.log(`Deleted event ${eventId}`);
    } else {
      failedCount++;
      console.error(`Failed to delete ${eventId}:`, result.error?.message);
    }
  }

  console.log(`Batch delete complete: ${deletedCount} deleted, ${failedCount} failed`);
  return { deletedCount, failedCount };
}

// Usage
const eventsToDelete = ['evt_001', 'evt_002', 'evt_003'];
await batchDeleteEvents(eventsToDelete);
```

#### 7. Delete by Search
```typescript
// Find and delete events matching criteria
async function deleteEventsByTag(tag: string) {
  const events = await codebolt.calendar.listEvents({
    tags: [tag]
  });

  if (events.success && events.data) {
    console.log(`Found ${events.data.count} events with tag "${tag}"`);

    for (const event of events.data.events) {
      const result = await codebolt.calendar.deleteEvent({
        eventId: event.id
      });

      if (result.success) {
        console.log(`Deleted: ${event.title}`);
      }
    }
  }
}

// Usage: Delete all test events
await deleteEventsByTag('test');
```

#### 8. Error Handling
```typescript
// Handle various error scenarios
const result = await codebolt.calendar.deleteEvent({
  eventId: 'nonexistent_event'
});

if (!result.success) {
  console.error('Failed to delete event');

  if (result.error) {
    switch (result.error.code) {
      case 'EVENT_NOT_FOUND':
        console.error('Event does not exist');
        break;
      case 'INVALID_EVENT_ID':
        console.error('Invalid event ID format');
        break;
      case 'ACCESS_DENIED':
        console.error('You do not have permission to delete this event');
        break;
      case 'EVENT_LOCKED':
        console.error('Event is locked and cannot be deleted');
        break;
      default:
        console.error('Error:', result.error.message);
    }
  }
}
```

#### 9. Delete with Backup
```typescript
// Save event data before deleting
async function deleteEventWithBackup(eventId: string) {
  // Get event data first
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (!eventResult.success || !eventResult.data) {
    console.log('Event not found');
    return null;
  }

  const eventData = eventResult.data.event;

  // Save to backup (e.g., local storage, database, or file)
  const backupData = {
    ...eventData,
    deletedAt: new Date().toISOString(),
    deletedBy: 'user_123' // Current user ID
  };

  // Save backup (implementation depends on your storage)
  await saveToBackup(backupData);

  // Now delete the event
  const deleteResult = await codebolt.calendar.deleteEvent({ eventId });

  if (deleteResult.success) {
    console.log('Event deleted and backed up');
    return backupData;
  }

  return null;
}
```

#### 10. Conditional Deletion
```typescript
// Only delete if event meets certain criteria
async function deleteIfIncomplete(eventId: string) {
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (eventResult.success && eventResult.data) {
    const event = eventResult.data.event;

    // Only delete if not completed
    if (!event.completed) {
      const result = await codebolt.calendar.deleteEvent({ eventId });

      if (result.success) {
        console.log('Deleted incomplete event:', event.title);
        return true;
      }
    } else {
      console.log('Event is completed, will not delete');
      return false;
    }
  }

  return false;
}
```

### Common Use Cases

**Clean Up Old Events:**
```typescript
// Remove events older than specified days
async function cleanupOldEvents(daysOld: number) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysOld);

  const oldEvents = await codebolt.calendar.listEvents({
    endDate: cutoff.toISOString()
  });

  if (oldEvents.success && oldEvents.data) {
    for (const event of oldEvents.data.events) {
      await codebolt.calendar.deleteEvent({ eventId: event.id });
    }
  }
}
```

**Remove Test Events:**
```typescript
// Delete all events marked as test
async function removeTestEvents() {
  const testEvents = await codebolt.calendar.listEvents({
    tags: ['test']
  });

  if (testEvents.success && testEvents.data) {
    for (const event of testEvents.data.events) {
      await codebolt.calendar.deleteEvent({ eventId: event.id });
    }
  }
}
```

**Delete Series:**
```typescript
// Delete all instances of a recurring event
// Note: This would need to be implemented based on how recurring events are stored
async function deleteRecurringSeries(baseEventId: string) {
  const result = await codebolt.calendar.deleteEvent({
    eventId: baseEventId
  });

  if (result.success) {
    console.log('Recurring event series deleted');
  }
}
```

### Notes

- Deletion is permanent and cannot be undone
- Consider backing up event data before deletion if needed
- Event ID is case-sensitive
- Deleting a recurring event may delete all future instances (implementation-dependent)
- Completed events can be deleted like any other event
- Events with participants are deleted without notifying participants
- Use with caution - consider using update to mark as cancelled instead of deleting
- Check event exists before deleting to avoid errors
- Log deletions for audit purposes if needed
- Returns success: true even if event doesn't exist (idempotent operation)