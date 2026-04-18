---
name: createPackage
cbbaseinfo:
  description: "Creates a new package definition in the project structure.

Adds a logical package to the workspace structure with the given name and configuration.
Packages group related code sections and items together."
cbparameters:
  parameters:
    - name: data
      typeName: CreatePackageRequest
      description: The package creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<PackageDefinition>"
    description: A promise that resolves to the newly created package definition
data:
  name: createPackage
  category: projectStructure
  link: createPackage.md
---
# createPackage

```typescript
client.projectStructure.createPackage(data: CreatePackageRequest): Promise<PackageDefinition>
```

Creates a new package definition in the project structure.

Adds a logical package to the workspace structure with the given name and configuration.
Packages group related code sections and items together.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreatePackageRequest` | The package creation payload |

## Returns

**`Promise<PackageDefinition>`** — A promise that resolves to the newly created package definition

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.createPackage(/* CreatePackageRequest */);
```
