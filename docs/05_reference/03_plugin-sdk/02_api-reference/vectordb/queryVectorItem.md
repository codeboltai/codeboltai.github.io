---
name: queryVectorItem
cbbaseinfo:
  description: Queries a vector item from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the vector to query the item from.
      isOptional: false
  returns:
    signatureTypeName: "Promise<QueryVectorItemResponse>"
    description: A promise that resolves with the queried vector item.
data:
  name: queryVectorItem
  category: vectordb
  link: queryVectorItem.md
---
# queryVectorItem

```typescript
plugin.vectordb.queryVectorItem(key: string): Promise<QueryVectorItemResponse>
```

Queries a vector item from the vector database based on the provided key.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `key` | `string` | The key of the vector to query the item from. |

## Returns

**`Promise<QueryVectorItemResponse>`** — A promise that resolves with the queried vector item.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordb.queryVectorItem('key');
```
