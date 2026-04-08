---
name: listReservations
cbbaseinfo:
  description: Lists all active file reservations in the system.
cbparameters:
  parameters:
    - name: params
      typeName: IListReservationsParams
      description: Optional filters including agentId, threadId, and file paths.
  returns:
    signatureTypeName: "Promise<IListReservationsResponse>"
    description: A promise that resolves with the list of active reservations.
data:
  name: listReservations
  category: mail
  link: listReservations.md
---
# listReservations

```typescript
codebolt.mail.listReservations(params: IListReservationsParams): Promise<IListReservationsResponse>
```

Lists all active file reservations in the system.
### Parameters

- **`params`** (IListReservationsParams): Optional filters including agentId, threadId, and file paths.

### Returns

- **`Promise<IListReservationsResponse>`**: A promise that resolves with the list of active reservations.

### Examples

#### Example 1: List All Reservations

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.listReservations({});

console.log('Active file reservations:');
result.reservations.forEach(reservation => {
  console.log(`- ${reservation.files.join(', ')}`);
  console.log(`  Reserved by: ${reservation.agentId}`);
  console.log(`  Expires: ${new Date(reservation.expiresAt).toLocaleString()}`);
});
```

#### Example 2: Check Specific Agent's Reservations

```typescript
const result = await codebolt.mail.listReservations({
  agentId: 'agent-001'
});

console.log(`Agent has ${result.reservations.length} active reservations`);
```

### Common Use Cases

- **Status Check**: See what files are currently reserved
- **Conflict Detection**: Identify potential conflicts before starting work
- **Management**: Oversee file reservations across agents

### Notes

- Shows all active reservations
- Includes expiration times
- Useful for coordination