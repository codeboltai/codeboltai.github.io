---
title: StreamCallback
---

[**@codebolt/agent**](../../index)

***

# Type Alias: StreamCallback()

```ts
type StreamCallback = (chunk: StreamChunk) => void | Promise<void>;
```

Defined in: packages/agent/src/unified/types/libTypes.ts:403

Stream callback function

## Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk` | [`StreamChunk`](../interfaces/StreamChunk) |

## Returns

`void` \| `Promise`\<`void`\>
