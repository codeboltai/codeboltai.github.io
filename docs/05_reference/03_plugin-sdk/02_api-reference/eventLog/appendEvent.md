---
title: appendEvent
---

# `appendEvent`

```typescript
plugin.eventLog.appendEvent(params: AppendEventParams): Promise<EventLogAppendResponse>
```

Append a single event to the log

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `AppendEventParams` | Yes | Event parameters |

## Returns

`Promise<EventLogAppendResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.appendEvent(/* AppendEventParams */);
console.log(result);
```
