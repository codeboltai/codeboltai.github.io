---
title: sendChunk
---

# `sendChunk`

```typescript
plugin.llmProvider.sendChunk(requestId: string, chunk: any): void
```

Send a streaming chunk for an in-flight stream request.
The chunk shape should match multillm StreamChunk
(id, model, choices: [\{delta: \{content, ...\}\}]).

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `requestId` | `string` | Yes |  |
| `chunk` | `any` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llmProvider.sendChunk('requestId', /* any */);
console.log(result);
```
