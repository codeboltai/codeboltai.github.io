---
name: getMessages
cbbaseinfo:
  description: Call getMessages on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IGetMessagesParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IGetMessagesResponse>"
    description: ""
data:
  name: getMessages
  category: mail
  link: getMessages.md
---
# getMessages

```typescript
plugin.mail.getMessages(params: IGetMessagesParams): Promise<IGetMessagesResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IGetMessagesParams` |  |

## Returns

**`Promise<IGetMessagesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.getMessages(/* IGetMessagesParams */);
```
