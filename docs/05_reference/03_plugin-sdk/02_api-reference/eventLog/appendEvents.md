---
title: appendEvents
---

# `appendEvents`

```typescript
plugin.eventLog.appendEvents(params: AppendEventsParams): Promise<EventLogAppendMultipleResponse>
```

Append multiple events to the log

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `AppendEventsParams` | Yes | Events parameters |

## Returns

`Promise<EventLogAppendMultipleResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.appendEvents(/* AppendEventsParams */);
console.log(result);
```
