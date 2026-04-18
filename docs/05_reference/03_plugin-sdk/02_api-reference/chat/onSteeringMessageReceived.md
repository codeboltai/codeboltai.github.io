---
name: onSteeringMessageReceived
cbbaseinfo:
  description: Waits for a steering message.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<SteeringMessage | null>"
    description: A promise that resolves with the message data
data:
  name: onSteeringMessageReceived
  category: chat
  link: onSteeringMessageReceived.md
---
# onSteeringMessageReceived

```typescript
plugin.chat.onSteeringMessageReceived(): Promise<SteeringMessage | null>
```

Waits for a steering message.

## Parameters

_None_

## Returns

**`Promise<SteeringMessage | null>`** — A promise that resolves with the message data

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.onSteeringMessageReceived();
```
