---
name: unregisterChannel
cbbaseinfo:
  description: "Unregister this plugin's channel from the ChannelStore.
Should be called during plugin shutdown."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: unregisterChannel
  category: gateway
  link: unregisterChannel.md
---
# unregisterChannel

```typescript
plugin.gateway.unregisterChannel(): Promise<void>
```

Unregister this plugin's channel from the ChannelStore.
Should be called during plugin shutdown.

## Parameters

_None_

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gateway.unregisterChannel();
```
