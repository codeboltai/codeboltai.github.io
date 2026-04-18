---
name: updatePackage
cbbaseinfo:
  description: "Updates an existing package definition.

Modifies the metadata and configuration of a package. Does not affect the package's
sections or items; use  and  for those operations."
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: The unique identifier of the package to update
      isOptional: false
    - name: data
      typeName: UpdatePackageRequest
      description: The fields to update on the package
      isOptional: false
  returns:
    signatureTypeName: "Promise<PackageDefinition>"
    description: A promise that resolves to the updated package definition
data:
  name: updatePackage
  category: projectStructure
  link: updatePackage.md
---
# updatePackage

```typescript
client.projectStructure.updatePackage(packageId: string, data: UpdatePackageRequest): Promise<PackageDefinition>
```

Updates an existing package definition.

Modifies the metadata and configuration of a package. Does not affect the package's
sections or items; use  and  for those operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` | The unique identifier of the package to update |
| `data` | `UpdatePackageRequest` | The fields to update on the package |

## Returns

**`Promise<PackageDefinition>`** — A promise that resolves to the updated package definition

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.updatePackage('packageId', /* UpdatePackageRequest */);
```
