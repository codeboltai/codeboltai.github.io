---
title: subscribe
---

# `subscribe`

```typescript
plugin.executionGateway.subscribe(): Promise<ExecutionGatewayResponse>
```

Subscribe to execution notifications.
Notifications are broadcast whenever the server handles a message locally.

## Parameters

_No parameters._

## Returns

`Promise<ExecutionGatewayResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.subscribe();
console.log(result);
```
