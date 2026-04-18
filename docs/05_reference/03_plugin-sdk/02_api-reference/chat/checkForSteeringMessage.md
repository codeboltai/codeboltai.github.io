---
title: checkForSteeringMessage
---

# `checkForSteeringMessage`

```typescript
plugin.chat.checkForSteeringMessage(): SteeringMessage | null
```

Checks if any steering message has been received.

## Parameters

_No parameters._

## Returns

`SteeringMessage | null` — The message data if available, or null

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.checkForSteeringMessage();
console.log(result);
```
