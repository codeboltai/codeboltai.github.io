---
name: getThreadMessages
cbbaseinfo:
  description: Call getThreadMessages on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage[]>"
    description: ""
data:
  name: getThreadMessages
  category: mailApi
  link: getThreadMessages.md
---
# getThreadMessages

```typescript
plugin.mailApi.getThreadMessages(threadId: string): Promise<MailMessage[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<MailMessage[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.getThreadMessages('threadId');
```
