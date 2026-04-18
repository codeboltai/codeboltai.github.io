---
title: acknowledgeMessage
---

# `acknowledgeMessage`

```typescript
plugin.mailApi.acknowledgeMessage(messageId: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `messageId` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.acknowledgeMessage('messageId');
console.log(result);
```
