---
name: send
cbbaseinfo:
  description: Call send on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: data
      typeName: SendMailMessageRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage>"
    description: ""
data:
  name: send
  category: mailApi
  link: send.md
---
# send

```typescript
plugin.mailApi.send(data: SendMailMessageRequest): Promise<MailMessage>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SendMailMessageRequest` |  |

## Returns

**`Promise<MailMessage>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.send(/* SendMailMessageRequest */);
```
