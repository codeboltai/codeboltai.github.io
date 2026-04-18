---
name: replyMessage
cbbaseinfo:
  description: Call replyMessage on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IReplyMessageParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IReplyMessageResponse>"
    description: ""
data:
  name: replyMessage
  category: mail
  link: replyMessage.md
---
# replyMessage

```typescript
plugin.mail.replyMessage(params: IReplyMessageParams): Promise<IReplyMessageResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IReplyMessageParams` |  |

## Returns

**`Promise<IReplyMessageResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.replyMessage(/* IReplyMessageParams */);
```
