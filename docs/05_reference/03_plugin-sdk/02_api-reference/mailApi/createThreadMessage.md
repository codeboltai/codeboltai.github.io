---
name: createThreadMessage
cbbaseinfo:
  description: Call createThreadMessage on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: SendMailMessageRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage>"
    description: ""
data:
  name: createThreadMessage
  category: mailApi
  link: createThreadMessage.md
---
# createThreadMessage

```typescript
plugin.mailApi.createThreadMessage(threadId: string, data: SendMailMessageRequest): Promise<MailMessage>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |
| `data` | `SendMailMessageRequest` |  |

## Returns

**`Promise<MailMessage>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.createThreadMessage('threadId', /* SendMailMessageRequest */);
```
