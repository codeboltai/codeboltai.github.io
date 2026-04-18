---
name: deletePackage
cbbaseinfo:
  description: "Deletes a package and all its sections and items from the project structure.

Permanently removes the package definition. This does not delete actual source files,
only the structural metadata describing the package."
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: The unique identifier of the package to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the package has been deleted
data:
  name: deletePackage
  category: projectStructure
  link: deletePackage.md
---
# deletePackage

```typescript
client.projectStructure.deletePackage(packageId: string): Promise<void>
```

Deletes a package and all its sections and items from the project structure.

Permanently removes the package definition. This does not delete actual source files,
only the structural metadata describing the package.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` | The unique identifier of the package to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the package has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.deletePackage('packageId');
```
