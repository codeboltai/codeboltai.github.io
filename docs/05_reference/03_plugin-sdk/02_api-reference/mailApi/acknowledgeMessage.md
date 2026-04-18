---
name: acknowledgeMessage
cbbaseinfo:
  description: Call acknowledgeMessage on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: messageId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: acknowledgeMessage
  category: mailApi
  link: acknowledgeMessage.md
---
# acknowledgeMessage

```typescript
plugin.mailApi.acknowledgeMessage(messageId: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `messageId` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.acknowledgeMessage('messageId');
```
