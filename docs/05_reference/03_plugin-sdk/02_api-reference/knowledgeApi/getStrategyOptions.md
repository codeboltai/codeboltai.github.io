---
title: getStrategyOptions
---

# `getStrategyOptions`

```typescript
plugin.knowledgeApi.getStrategyOptions(strategy: string): Promise<KnowledgeStrategyOptions>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `strategy` | `string` | Yes |  |

## Returns

`Promise<KnowledgeStrategyOptions>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.getStrategyOptions('strategy');
console.log(result);
```
