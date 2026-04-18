---
title: listInstances
---

# `listInstances`

```typescript
plugin.eventLog.listInstances(): Promise<EventLogInstanceListResponse>
```

List all event log instances

## Parameters

_No parameters._

## Returns

`Promise<EventLogInstanceListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.listInstances();
console.log(result);
```
