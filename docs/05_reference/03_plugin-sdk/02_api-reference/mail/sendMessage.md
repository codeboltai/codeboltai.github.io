---
name: sendMessage
cbbaseinfo:
  description: Call sendMessage on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: ISendMessageParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ISendMessageResponse>"
    description: ""
data:
  name: sendMessage
  category: mail
  link: sendMessage.md
---
# sendMessage

```typescript
plugin.mail.sendMessage(params: ISendMessageParams): Promise<ISendMessageResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ISendMessageParams` |  |

## Returns

**`Promise<ISendMessageResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.sendMessage(/* ISendMessageParams */);
```
