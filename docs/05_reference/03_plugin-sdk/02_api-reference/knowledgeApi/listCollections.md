---
name: listCollections
cbbaseinfo:
  description: Call listCollections on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<KnowledgeCollection[]>"
    description: ""
data:
  name: listCollections
  category: knowledgeApi
  link: listCollections.md
---
# listCollections

```typescript
plugin.knowledgeApi.listCollections(params?: Record<string, unknown>): Promise<KnowledgeCollection[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<KnowledgeCollection[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.listCollections();
```
