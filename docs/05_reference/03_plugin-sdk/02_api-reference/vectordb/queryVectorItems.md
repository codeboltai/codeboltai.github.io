---
name: queryVectorItems
cbbaseinfo:
  description: Queries a vector item from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: items
      typeName: []
      description: ""
      isOptional: false
    - name: dbPath
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<QueryVectorItemResponse>"
    description: A promise that resolves with the queried vector item.
data:
  name: queryVectorItems
  category: vectordb
  link: queryVectorItems.md
---
# queryVectorItems

```typescript
plugin.vectordb.queryVectorItems(items: [], dbPath: string): Promise<QueryVectorItemResponse>
```

Queries a vector item from the vector database based on the provided key.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `items` | `[]` |  |
| `dbPath` | `string` |  |

## Returns

**`Promise<QueryVectorItemResponse>`** — A promise that resolves with the queried vector item.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordb.queryVectorItems(/* [] */, 'dbPath');
```
