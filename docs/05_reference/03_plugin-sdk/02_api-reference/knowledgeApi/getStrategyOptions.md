---
name: getStrategyOptions
cbbaseinfo:
  description: Call getStrategyOptions on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: strategy
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeStrategyOptions>"
    description: ""
data:
  name: getStrategyOptions
  category: knowledgeApi
  link: getStrategyOptions.md
---
# getStrategyOptions

```typescript
plugin.knowledgeApi.getStrategyOptions(strategy: string): Promise<KnowledgeStrategyOptions>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `strategy` | `string` |  |

## Returns

**`Promise<KnowledgeStrategyOptions>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.getStrategyOptions('strategy');
```
