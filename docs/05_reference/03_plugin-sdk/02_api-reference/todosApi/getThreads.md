---
name: getThreads
cbbaseinfo:
  description: Call getThreads on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TodoList[]>"
    description: ""
data:
  name: getThreads
  category: todosApi
  link: getThreads.md
---
# getThreads

```typescript
plugin.todosApi.getThreads(): Promise<TodoList[]>
```



## Parameters

_None_

## Returns

**`Promise<TodoList[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.getThreads();
```
