---
name: rsvp
cbbaseinfo:
  description: "Records a participant's RSVP response (accept or decline) for a calendar event, updating their attendance status."
cbparameters:
  parameters:
    - name: params
      typeName: IRSVPParams
      description: Parameters including eventId, participantId, and RSVP status
  returns:
    signatureTypeName: "Promise<IRSVPResponse>"
    description: A promise that resolves to the updated event with RSVP status
data:
  name: rsvp
  category: calendar
  link: rsvp.md
---
# rsvp

```typescript
codebolt.calendar.rsvp(params: IRSVPParams): Promise<IRSVPResponse>
```

Records a participant's RSVP response (accept or decline) for a calendar event, updating their attendance status.
### Parameters

- **`params`** ([IRSVPParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IRSVPParams)): Parameters including eventId, participantId, and RSVP status

### Returns

- **`Promise<[IRSVPResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IRSVPResponse)>`**: A promise that resolves to the updated event with RSVP status

### Parameter Details

The [`IRSVPParams`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IRSVPParams) interface includes:
- **`eventId`** (string, required): The unique identifier of the event
- **`participantId`** (string, required): The unique identifier of the participant
- **`status`** ('accepted' | 'declined', required): The RSVP response

### Response Structure

```typescript
interface IRSVPResponse {
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

#### 1. Accept Event Invitation
```typescript
import codebolt from '@codebolt/codeboltjs';

// Accept a meeting invitation
const result = await codebolt.calendar.rsvp({
  eventId: 'evt_meeting_001',
  participantId: 'user_123',
  status: 'accepted'
});

if (result.success && result.data) {
  const event = result.data.event;
  console.log(`You have accepted: ${event.title}`);

  // Find the participant to verify status
  const participant = event.participants?.find(p => p.id === 'user_123');
  if (participant) {
    console.log(`RSVP status: ${participant.status}`);
  }
}
```

#### 2. Decline Event Invitation
```typescript
// Decline an event
const result = await codebolt.calendar.rsvp({
  eventId: 'evt_meeting_002',
  participantId: 'user_456',
  status: 'declined'
});

if (result.success) {
  console.log('Event declined');
}
```

#### 3. RSVP with Notification
```typescript
// Accept and notify organizer
async function acceptWithNotification(eventId: string, userId: string) {
  const result = await codebolt.calendar.rsvp({
    eventId,
    participantId: userId,
    status: 'accepted'
  });

  if (result.success && result.data) {
    const event = result.data.event;

    // Send notification to organizer
    await sendNotification({
      to: event.createdBy.id,
      subject: `RSVP Update: ${event.title}`,
      message: `${userId} has accepted your invitation`
    });

    console.log('RSVP accepted and organizer notified');
  }
}
```

#### 4. Check RSVP Status
```typescript
// Get event and check participant's RSVP status
async function checkRSVPStatus(eventId: string, participantId: string) {
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (eventResult.success && eventResult.data) {
    const event = eventResult.data.event;
    const participant = event.participants?.find(p => p.id === participantId);

    if (participant) {
      console.log(`Event: ${event.title}`);
      console.log(`RSVP Status: ${participant.status || 'pending'}`);

      return participant.status;
    } else {
      console.log('Not a participant of this event');
      return null;
    }
  }
}
```

#### 5. Batch RSVP for Multiple Events
```typescript
// Accept multiple event invitations
async function acceptMultipleInvitations(eventIds: string[], userId: string) {
  let acceptedCount = 0;
  let failedCount = 0;

  for (const eventId of eventIds) {
    const result = await codebolt.calendar.rsvp({
      eventId,
      participantId: userId,
      status: 'accepted'
    });

    if (result.success) {
      acceptedCount++;
      console.log(`✓ Accepted event ${eventId}`);
    } else {
      failedCount++;
      console.error(`✗ Failed to accept ${eventId}`);
    }
  }

  console.log(`RSVP complete: ${acceptedCount} accepted, ${failedCount} failed`);
  return { acceptedCount, failedCount };
}

// Usage
await acceptMultipleInvitations(
  ['evt_001', 'evt_002', 'evt_003'],
  'user_123'
);
```

#### 6. RSVP with Comments (via metadata)
```typescript
// RSVP with additional notes (stored in metadata)
async function rsvpWithNotes(
  eventId: string,
  participantId: string,
  status: 'accepted' | 'declined',
  notes?: string
) {
  // First, get current event
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (!eventResult.success || !eventResult.data) {
    return false;
  }

  const event = eventResult.data.event;

  // Store RSVP notes in metadata
  const rsvpNotes = event.metadata?.rsvpNotes || {};
  rsvpNotes[participantId] = {
    status,
    notes,
    respondedAt: new Date().toISOString()
  };

  // Update metadata first
  await codebolt.calendar.updateEvent({
    eventId,
    metadata: {
      ...event.metadata,
      rsvpNotes
    }
  });

  // Then RSVP
  const result = await codebolt.calendar.rsvp({
    eventId,
    participantId,
    status
  });

  return result.success;
}

// Usage
await rsvpWithNotes(
  'evt_meeting_001',
  'user_123',
  'declined',
  'Have a conflicting meeting at that time'
);
```

#### 7. Error Handling
```typescript
// Handle RSVP errors
const result = await codebolt.calendar.rsvp({
  eventId: 'evt_001',
  participantId: 'user_999',
  status: 'accepted'
});

if (!result.success) {
  console.error('RSVP failed');

  if (result.error) {
    switch (result.error.code) {
      case 'EVENT_NOT_FOUND':
        console.error('Event does not exist');
        break;
      case 'NOT_A_PARTICIPANT':
        console.error('User is not a participant of this event');
        break;
      case 'INVALID_RSVP_STATUS':
        console.error('Invalid RSVP status (must be accepted or declined)');
        break;
      case 'RSVP_CLOSED':
        console.error('RSVP is no longer being accepted for this event');
        break;
      case 'ALREADY_RESPONDED':
        console.error('Already responded to this invitation');
        break;
      default:
        console.error('Error:', result.error.message);
    }
  }
}
```

#### 8. Get RSVP Summary
```typescript
// Get RSVP summary for an event
async function getRVVPSummary(eventId: string) {
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (eventResult.success && eventResult.data) {
    const event = eventResult.data.event;
    const participants = event.participants || [];

    const summary = {
      total: participants.length,
      accepted: participants.filter(p => p.status === 'accepted').length,
      declined: participants.filter(p => p.status === 'declined').length,
      pending: participants.filter(p => !p.status || p.status === 'pending').length
    };

    console.log(`RSVP Summary for "${event.title}":`);
    console.log(`  Total: ${summary.total}`);
    console.log(`  Accepted: ${summary.accepted}`);
    console.log(`  Declined: ${summary.declined}`);
    console.log(`  Pending: ${summary.pending}`);

    return summary;
  }
}
```

#### 9. Update RSVP (Change Response)
```typescript
// Change an RSVP from declined to accepted
async function updateRSVP(eventId: string, participantId: string) {
  // Check current status
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (!eventResult.success || !eventResult.data) {
    return;
  }

  const event = eventResult.data.event;
  const participant = event.participants?.find(p => p.id === participantId);

  if (participant?.status === 'declined') {
    console.log('Previously declined, now accepting...');

    const result = await codebolt.calendar.rsvp({
      eventId,
      participantId,
      status: 'accepted'
    });

    if (result.success) {
      console.log('RSVP updated to accepted');
    }
  }
}
```

#### 10. RSVP for Agent Participant
```typescript
// RSVP on behalf of an agent
const result = await codebolt.calendar.rsvp({
  eventId: 'evt_meeting_agent',
  participantId: 'agent_code_reviewer',
  status: 'accepted'
});

if (result.success) {
  console.log('Agent has accepted the meeting invitation');
}
```

### Common Use Cases

**Meeting Invitation Response:**
```typescript
// User responds to meeting invitation
async function respondToInvitation(eventId: string, userId: string, attending: boolean) {
  const result = await codebolt.calendar.rsvp({
    eventId,
    participantId: userId,
    status: attending ? 'accepted' : 'declined'
  });

  if (result.success) {
    // Update user's calendar display
    await refreshCalendar(userId);
  }

  return result.success;
}
```

**Track Attendance:**
```typescript
// Check who's attending a meeting
async function checkAttendance(eventId: string) {
  const eventResult = await codebolt.calendar.getEvent({ eventId });

  if (eventResult.success && eventResult.data) {
    const participants = eventResult.data.event.participants || [];

    const attending = participants.filter(p => p.status === 'accepted');
    const declined = participants.filter(p => p.status === 'declined');
    const noResponse = participants.filter(p => !p.status || p.status === 'pending');

    return {
      attending: attending.map(p => p.name),
      declined: declined.map(p => p.name),
      noResponse: noResponse.map(p => p.name)
    };
  }
}
```

**Automatic RSVP for Agent:**
```typescript
// Agent automatically accepts invitations
async function agentAutoAccept(eventId: string, agentId: string) {
  const result = await codebolt.calendar.rsvp({
    eventId,
    participantId: agentId,
    status: 'accepted'
  });

  if (result.success) {
    console.log(`Agent ${agentId} automatically accepted invitation`);
  }
}
```

### Notes

- RSVP status can be 'accepted' or 'declined'
- Changing RSVP is allowed - just call with the new status
- Participant must already be in the event's participants list
- RSVP status is stored on the participant object
- Initial status is 'pending' or undefined
- RSVP changes do not remove participants - only update status
- Use this to track attendance for meetings and events
- Can be used for users, agents, teams, and swarms
- Consider sending notifications when RSVP status changes
- Use participant metadata for additional RSVP notes
- RSVP summary can be calculated from participant statuses