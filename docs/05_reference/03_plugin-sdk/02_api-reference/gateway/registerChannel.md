---
name: registerChannel
cbbaseinfo:
  description: "Register this plugin as a channel in the ChannelStore so it appears
in the Routing Rules view. Should be called once during plugin startup."
cbparameters:
  parameters:
    - name: request
      typeName: RegisterChannelRequest
      description: Channel registration details
      isOptional: false
  returns:
    signatureTypeName: "Promise<RegisterChannelResponse>"
    description: Promise resolving to the assigned channelId
data:
  name: registerChannel
  category: gateway
  link: registerChannel.md
---
# registerChannel

```typescript
plugin.gateway.registerChannel(request: RegisterChannelRequest): Promise<RegisterChannelResponse>
```

Register this plugin as a channel in the ChannelStore so it appears
in the Routing Rules view. Should be called once during plugin startup.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `request` | `RegisterChannelRequest` | Channel registration details |

## Returns

**`Promise<RegisterChannelResponse>`** — Promise resolving to the assigned channelId

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gateway.registerChannel(/* RegisterChannelRequest */);
```
