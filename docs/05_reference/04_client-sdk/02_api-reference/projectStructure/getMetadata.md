---
name: getMetadata
cbbaseinfo:
  description: "Retrieves the full workspace metadata including package definitions and structure.

Returns the complete structural representation of the workspace, which describes how
the project is organized into packages, modules, and sections."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<WorkspaceMetadata>"
    description: A promise that resolves to the workspace metadata
data:
  name: getMetadata
  category: projectStructure
  link: getMetadata.md
---
# getMetadata

```typescript
client.projectStructure.getMetadata(): Promise<WorkspaceMetadata>
```

Retrieves the full workspace metadata including package definitions and structure.

Returns the complete structural representation of the workspace, which describes how
the project is organized into packages, modules, and sections.

## Parameters

_None_

## Returns

**`Promise<WorkspaceMetadata>`** — A promise that resolves to the workspace metadata

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.getMetadata();
```
