---
name: ensureFolder
cbbaseinfo:
  description: "Ensures the requirement plan folder exists in the workspace.

Creates the requirement plan directory if it doesn't already exist,
establishing a location for storing plan files and related documents.
This operation is idempotent and safe to call multiple times."
cbparameters:
  parameters:
    - name: data
      typeName: EnsureRequirementPlanFolderRequest
      description: Optional parameters for folder creation
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the folder is ensured
data:
  name: ensureFolder
  category: requirementPlan
  link: ensureFolder.md
---
# ensureFolder

```typescript
client.requirementPlan.ensureFolder(data?: EnsureRequirementPlanFolderRequest): Promise<unknown>
```

Ensures the requirement plan folder exists in the workspace.

Creates the requirement plan directory if it doesn't already exist,
establishing a location for storing plan files and related documents.
This operation is idempotent and safe to call multiple times.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `EnsureRequirementPlanFolderRequest` _(optional)_ | Optional parameters for folder creation |

## Returns

**`Promise<unknown>`** — A promise that resolves when the folder is ensured

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.requirementPlan.ensureFolder();
```
