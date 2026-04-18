---
name: searchMessages
cbbaseinfo:
  description: Call searchMessages on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: params
      typeName: MailSearchParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<MailMessage[]>"
    description: ""
data:
  name: searchMessages
  category: mailApi
  link: searchMessages.md
---
# searchMessages

```typescript
plugin.mailApi.searchMessages(params?: MailSearchParams): Promise<MailMessage[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `MailSearchParams` _(optional)_ |  |

## Returns

**`Promise<MailMessage[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.searchMessages();
```
