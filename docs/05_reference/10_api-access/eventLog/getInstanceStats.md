---
name: getInstanceStats
cbbaseinfo:
  description: Gets statistics and metadata for an event log instance.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the event log instance.
  returns:
    signatureTypeName: "Promise<EventLogStatsResponse>"
    description: A promise that resolves with instance statistics.
data:
  name: getInstanceStats
  category: eventLog
  link: getInstanceStats.md
---
# getInstanceStats

```typescript
codebolt.eventLog.getInstanceStats(instanceId: undefined): Promise<EventLogStatsResponse>
```

Gets statistics and metadata for an event log instance.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the event log instance.

### Returns

- **`Promise<[EventLogStatsResponse](/docs/reference/type-reference/codeboltjs/interfaces/EventLogStatsResponse)>`**: A promise that resolves with instance statistics.

### Response Structure

```typescript
{
  type: 'eventLog.getInstanceStats',
  success: boolean,
  data?: {
    instanceId: string;
    name: string;
    eventCount: number;
    createdAt: string;
    updatedAt: string;
  }
}
```

### Examples

#### Example 1: Get Instance Statistics
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.eventLog.getInstanceStats('log-instance-id');

if (result.success) {
  console.log(`Instance: ${result.data.name}`);
  console.log(`Total events: ${result.data.eventCount}`);
  console.log(`Created: ${new Date(result.data.createdAt).toLocaleString()}`);
}
```

#### Example 2: Monitor Event Growth
```javascript
async function monitorGrowth(instanceId) {
  const stats = await codebolt.eventLog.getInstanceStats(instanceId);
  console.log(`Current event count: ${stats.data.eventCount}`);
  return stats.data.eventCount;
}
```

### Common Use Cases
**Monitoring**: Track event volume and growth.
**Capacity Planning**: Monitor storage usage trends.
**Instance Overview**: Get quick statistics about an instance.

### Notes
- Returns aggregate statistics, not individual events
- Use queryEvents for detailed event data