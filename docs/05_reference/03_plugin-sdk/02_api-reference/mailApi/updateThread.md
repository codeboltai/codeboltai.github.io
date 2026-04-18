---
name: updateThread
cbbaseinfo:
  description: Call updateThread on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateMailThreadRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailThread>"
    description: ""
data:
  name: updateThread
  category: mailApi
  link: updateThread.md
---
# updateThread

```typescript
plugin.mailApi.updateThread(threadId: string, data: UpdateMailThreadRequest): Promise<MailThread>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |
| `data` | `UpdateMailThreadRequest` |  |

## Returns

**`Promise<MailThread>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.updateThread('threadId', /* UpdateMailThreadRequest */);
```
