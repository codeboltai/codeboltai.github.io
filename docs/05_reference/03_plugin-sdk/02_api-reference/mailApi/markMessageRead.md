---
name: markMessageRead
cbbaseinfo:
  description: Call markMessageRead on the Plugin SDK mailApi module.
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
  name: markMessageRead
  category: mailApi
  link: markMessageRead.md
---
# markMessageRead

```typescript
plugin.mailApi.markMessageRead(messageId: string): Promise<void>
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

await plugin.mailApi.markMessageRead('messageId');
```
