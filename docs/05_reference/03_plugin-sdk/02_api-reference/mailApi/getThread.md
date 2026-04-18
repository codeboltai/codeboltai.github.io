---
name: getThread
cbbaseinfo:
  description: Call getThread on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailThread>"
    description: ""
data:
  name: getThread
  category: mailApi
  link: getThread.md
---
# getThread

```typescript
plugin.mailApi.getThread(threadId: string): Promise<MailThread>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<MailThread>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.getThread('threadId');
```
