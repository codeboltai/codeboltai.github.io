---
title: healthCheck
---

# `healthCheck`

```typescript
plugin.threadsApi.healthCheck(): Promise<object>
```

Performs a health check on the thread service.

Verifies that the thread service is operational and responding to requests.
Use this for service monitoring or to check availability before performing
other thread operations.

## Parameters

_No parameters._

## Returns

`Promise<object>` — A promise that resolves to an object containing the service status

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.healthCheck();
console.log(result);
```
