---
title: getStrategies
---

# `getStrategies`

```typescript
plugin.knowledgeApi.getStrategies(): Promise<KnowledgeStrategy[]>
```



## Parameters

_No parameters._

## Returns

`Promise<KnowledgeStrategy[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.getStrategies();
console.log(result);
```
