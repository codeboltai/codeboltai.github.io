---
name: addItem
cbbaseinfo:
  description: "Adds an item to a specific section within a package.

Registers a new item (e.g., a file, class, or endpoint reference) under the specified
section of a package, enriching the structural metadata."
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: The unique identifier of the package
      isOptional: false
    - name: section
      typeName: string
      description: "The name of the section to add the item to (e.g., 'routes', 'models')"
      isOptional: false
    - name: data
      typeName: AddSectionItemRequest
      description: The item definition to add
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the item has been added
data:
  name: addItem
  category: projectStructure
  link: addItem.md
---
# addItem

```typescript
client.projectStructure.addItem(packageId: string, section: string, data: AddSectionItemRequest): Promise<void>
```

Adds an item to a specific section within a package.

Registers a new item (e.g., a file, class, or endpoint reference) under the specified
section of a package, enriching the structural metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` | The unique identifier of the package |
| `section` | `string` | The name of the section to add the item to (e.g., 'routes', 'models') |
| `data` | `AddSectionItemRequest` | The item definition to add |

## Returns

**`Promise<void>`** — A promise that resolves when the item has been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.addItem('packageId', 'section', /* AddSectionItemRequest */);
```
