---
title: onSteeringMessageReceived
---

# `onSteeringMessageReceived`

```typescript
plugin.chat.onSteeringMessageReceived(): Promise<SteeringMessage | null>
```

Waits for a steering message.

## Parameters

_No parameters._

## Returns

`Promise<SteeringMessage | null>` — A promise that resolves with the message data

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.onSteeringMessageReceived();
console.log(result);
```
