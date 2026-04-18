---
name: getPackages
cbbaseinfo:
  description: "Retrieves all package definitions in the workspace.

Returns the list of logical packages that make up the project, each containing
its sections, items, and metadata."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<PackageDefinition[]>"
    description: A promise that resolves to an array of package definitions
data:
  name: getPackages
  category: projectStructure
  link: getPackages.md
---
# getPackages

```typescript
client.projectStructure.getPackages(): Promise<PackageDefinition[]>
```

Retrieves all package definitions in the workspace.

Returns the list of logical packages that make up the project, each containing
its sections, items, and metadata.

## Parameters

_None_

## Returns

**`Promise<PackageDefinition[]>`** — A promise that resolves to an array of package definitions

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.getPackages();
```
