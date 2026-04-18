---
name: addVectorItem
cbbaseinfo:
  description: Adds a new vector item to the vector database.
cbparameters:
  parameters:
    - name: item
      typeName: any
      description: The item to add to the vector.
      isOptional: false
  returns:
    signatureTypeName: "Promise<AddVectorItemResponse>"
    description: A promise that resolves when the item is successfully added.
data:
  name: addVectorItem
  category: vectordb
  link: addVectorItem.md
---
# addVectorItem

```typescript
plugin.vectordb.addVectorItem(item: any): Promise<AddVectorItemResponse>
```

Adds a new vector item to the vector database.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `item` | `any` | The item to add to the vector. |

## Returns

**`Promise<AddVectorItemResponse>`** — A promise that resolves when the item is successfully added.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordb.addVectorItem(/* any */);
```
