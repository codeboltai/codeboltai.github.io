---
title: acknowledge
---

# `acknowledge`

```typescript
plugin.mail.acknowledge(params: IAcknowledgeParams): Promise<IAcknowledgeResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IAcknowledgeParams` | Yes |  |

## Returns

`Promise<IAcknowledgeResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.acknowledge(/* IAcknowledgeParams */);
console.log(result);
```
