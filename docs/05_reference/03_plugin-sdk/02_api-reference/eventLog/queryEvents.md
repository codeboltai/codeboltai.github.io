---
title: queryEvents
---

# `queryEvents`

```typescript
plugin.eventLog.queryEvents(query: EventLogDSL): Promise<EventLogQueryResponse>
```

Query events using DSL

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `EventLogDSL` | Yes | Query DSL object |

## Returns

`Promise<EventLogQueryResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.queryEvents(/* EventLogDSL */);
console.log(result);
```
