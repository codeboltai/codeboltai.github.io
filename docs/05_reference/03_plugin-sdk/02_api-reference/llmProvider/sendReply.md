---
name: sendReply
cbbaseinfo:
  description: "Send the final reply for a completion or stream request.
For non-streaming: this is the only message you send.
For streaming: send after all chunks have been emitted."
cbparameters:
  parameters:
    - name: requestId
      typeName: string
      description: ""
      isOptional: false
    - name: response
      typeName: any
      description: ""
      isOptional: false
    - name: success
      typeName: boolean
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: sendReply
  category: llmProvider
  link: sendReply.md
---
# sendReply

```typescript
plugin.llmProvider.sendReply(requestId: string, response: any, success: boolean): void
```

Send the final reply for a completion or stream request.
For non-streaming: this is the only message you send.
For streaming: send after all chunks have been emitted.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `string` |  |
| `response` | `any` |  |
| `success` | `boolean` |  Default: `true` |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llmProvider.sendReply('requestId', /* any */, true);
```
