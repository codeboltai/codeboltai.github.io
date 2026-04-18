---
name: deleteItem
cbbaseinfo:
  description: "Removes an item from a package section.

Deletes the structural reference to an item within a package section. This only removes
the metadata entry, not the actual underlying file or resource."
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: The unique identifier of the package
      isOptional: false
    - name: section
      typeName: string
      description: The name of the section containing the item
      isOptional: false
    - name: itemId
      typeName: string
      description: The unique identifier of the item to remove
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the item has been removed
data:
  name: deleteItem
  category: projectStructure
  link: deleteItem.md
---
# deleteItem

```typescript
client.projectStructure.deleteItem(packageId: string, section: string, itemId: string): Promise<void>
```

Removes an item from a package section.

Deletes the structural reference to an item within a package section. This only removes
the metadata entry, not the actual underlying file or resource.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` | The unique identifier of the package |
| `section` | `string` | The name of the section containing the item |
| `itemId` | `string` | The unique identifier of the item to remove |

## Returns

**`Promise<void>`** — A promise that resolves when the item has been removed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.deleteItem('packageId', 'section', 'itemId');
```
