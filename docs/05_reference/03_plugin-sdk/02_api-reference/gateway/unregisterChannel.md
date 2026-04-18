---
title: unregisterChannel
---

# `unregisterChannel`

```typescript
plugin.gateway.unregisterChannel(): Promise<void>
```

Unregister this plugin's channel from the ChannelStore.
Should be called during plugin shutdown.

## Parameters

_No parameters._

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gateway.unregisterChannel();
console.log(result);
```
