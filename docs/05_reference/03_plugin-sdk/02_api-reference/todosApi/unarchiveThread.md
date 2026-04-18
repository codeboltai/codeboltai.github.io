---
name: unarchiveThread
cbbaseinfo:
  description: Call unarchiveThread on the Plugin SDK todosApi module.
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
  name: unarchiveThread
  category: todosApi
  link: unarchiveThread.md
---
# unarchiveThread

```typescript
plugin.todosApi.unarchiveThread(threadId: string): Promise<void>
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

await plugin.todosApi.unarchiveThread('threadId');
```
