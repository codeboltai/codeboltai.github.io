---
name: getChatHistory
cbbaseinfo:
  description: Call getChatHistory on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: ""
data:
  name: getChatHistory
  category: projectsApi
  link: getChatHistory.md
---
# getChatHistory

```typescript
plugin.projectsApi.getChatHistory(): Promise<unknown[]>
```



## Parameters

_None_

## Returns

**`Promise<unknown[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getChatHistory();
```
