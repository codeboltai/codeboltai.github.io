---
name: getStrategies
cbbaseinfo:
  description: Call getStrategies on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<KnowledgeStrategy[]>"
    description: ""
data:
  name: getStrategies
  category: knowledgeApi
  link: getStrategies.md
---
# getStrategies

```typescript
plugin.knowledgeApi.getStrategies(): Promise<KnowledgeStrategy[]>
```



## Parameters

_None_

## Returns

**`Promise<KnowledgeStrategy[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.getStrategies();
```
