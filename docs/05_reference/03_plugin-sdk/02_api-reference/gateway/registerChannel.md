---
title: registerChannel
---

# `registerChannel`

```typescript
plugin.gateway.registerChannel(request: RegisterChannelRequest): Promise<RegisterChannelResponse>
```

Register this plugin as a channel in the ChannelStore so it appears
in the Routing Rules view. Should be called once during plugin startup.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `request` | `RegisterChannelRequest` | Yes | Channel registration details |

## Returns

`Promise<RegisterChannelResponse>` — Promise resolving to the assigned channelId

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gateway.registerChannel(/* RegisterChannelRequest */);
console.log(result);
```
