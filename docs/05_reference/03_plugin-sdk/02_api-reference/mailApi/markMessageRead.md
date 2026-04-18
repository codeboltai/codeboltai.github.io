---
title: markMessageRead
---

# `markMessageRead`

```typescript
plugin.mailApi.markMessageRead(messageId: string): Promise<void>
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

const result = await plugin.mailApi.markMessageRead('messageId');
console.log(result);
```
