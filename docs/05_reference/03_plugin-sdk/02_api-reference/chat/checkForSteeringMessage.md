---
name: checkForSteeringMessage
cbbaseinfo:
  description: Checks if any steering message has been received.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "SteeringMessage | null"
    description: The message data if available, or null
data:
  name: checkForSteeringMessage
  category: chat
  link: checkForSteeringMessage.md
---
# checkForSteeringMessage

```typescript
plugin.chat.checkForSteeringMessage(): SteeringMessage | null
```

Checks if any steering message has been received.

## Parameters

_None_

## Returns

**`SteeringMessage | null`** — The message data if available, or null

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.checkForSteeringMessage();
```
