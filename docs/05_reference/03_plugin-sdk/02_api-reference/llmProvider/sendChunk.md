---
name: sendChunk
cbbaseinfo:
  description: "Send a streaming chunk for an in-flight stream request.
The chunk shape should match multillm StreamChunk
(id, model, choices: [{delta: {content, ...}}])."
cbparameters:
  parameters:
    - name: requestId
      typeName: string
      description: ""
      isOptional: false
    - name: chunk
      typeName: any
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: sendChunk
  category: llmProvider
  link: sendChunk.md
---
# sendChunk

```typescript
plugin.llmProvider.sendChunk(requestId: string, chunk: any): void
```

Send a streaming chunk for an in-flight stream request.
The chunk shape should match multillm StreamChunk
(id, model, choices: [{delta: {content, ...}}]).

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `string` |  |
| `chunk` | `any` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llmProvider.sendChunk('requestId', /* any */);
```
