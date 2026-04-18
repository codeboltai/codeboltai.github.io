---
name: getPackage
cbbaseinfo:
  description: "Retrieves a single package by its unique identifier.

Returns the full package definition including all its sections and items."
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: The unique identifier of the package to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<PackageDefinition>"
    description: A promise that resolves to the package definition
data:
  name: getPackage
  category: projectStructure
  link: getPackage.md
---
# getPackage

```typescript
client.projectStructure.getPackage(packageId: string): Promise<PackageDefinition>
```

Retrieves a single package by its unique identifier.

Returns the full package definition including all its sections and items.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` | The unique identifier of the package to retrieve |

## Returns

**`Promise<PackageDefinition>`** — A promise that resolves to the package definition

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.getPackage('packageId');
```
