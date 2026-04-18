---
name: replyToMessage
cbbaseinfo:
  description: Call replyToMessage on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: data
      typeName: ReplyToMessageRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage>"
    description: ""
data:
  name: replyToMessage
  category: mailApi
  link: replyToMessage.md
---
# replyToMessage

```typescript
plugin.mailApi.replyToMessage(data: ReplyToMessageRequest): Promise<MailMessage>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ReplyToMessageRequest` |  |

## Returns

**`Promise<MailMessage>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.replyToMessage(/* ReplyToMessageRequest */);
```
