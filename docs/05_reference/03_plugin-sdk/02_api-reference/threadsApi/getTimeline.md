---
name: getTimeline
cbbaseinfo:
  description: "Retrieves the timeline of events for a specific thread.

Returns a chronological list of all events associated with the thread,
including status changes, executions, and other significant occurrences.
Use this to track thread activity and audit execution history."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadTimelineEvent[]>"
    description: A promise that resolves to an array of ThreadTimelineEvent objects
data:
  name: getTimeline
  category: threadsApi
  link: getTimeline.md
---
# getTimeline

```typescript
plugin.threadsApi.getTimeline(threadId: string): Promise<ThreadTimelineEvent[]>
```

Retrieves the timeline of events for a specific thread.

Returns a chronological list of all events associated with the thread,
including status changes, executions, and other significant occurrences.
Use this to track thread activity and audit execution history.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<ThreadTimelineEvent[]>`** — A promise that resolves to an array of ThreadTimelineEvent objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.getTimeline('threadId');
```
