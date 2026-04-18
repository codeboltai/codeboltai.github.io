---
name: listCollections
cbbaseinfo:
  description: Call listCollections on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<VectorCollection[]>"
    description: ""
data:
  name: listCollections
  category: vectordbApi
  link: listCollections.md
---
# listCollections

```typescript
plugin.vectordbApi.listCollections(params?: Record<string, unknown>): Promise<VectorCollection[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<VectorCollection[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.listCollections();
```
