---
title: createInstance
---

# `createInstance`

```typescript
plugin.eventLog.createInstance(name: string, description?: string): Promise<EventLogInstanceResponse>
```

Create a new event log instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Instance name |
| `description` | `string` | No | Optional description |

## Returns

`Promise<EventLogInstanceResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.createInstance('name');
console.log(result);
```
