---
name: deleteThread
cbbaseinfo:
  description: Call deleteThread on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deleteThread
  category: mailApi
  link: deleteThread.md
---
# deleteThread

```typescript
plugin.mailApi.deleteThread(threadId: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.deleteThread('threadId');
```
