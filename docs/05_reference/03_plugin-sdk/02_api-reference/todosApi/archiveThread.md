---
name: archiveThread
cbbaseinfo:
  description: Call archiveThread on the Plugin SDK todosApi module.
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
  name: archiveThread
  category: todosApi
  link: archiveThread.md
---
# archiveThread

```typescript
plugin.todosApi.archiveThread(threadId: string): Promise<void>
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

await plugin.todosApi.archiveThread('threadId');
```
