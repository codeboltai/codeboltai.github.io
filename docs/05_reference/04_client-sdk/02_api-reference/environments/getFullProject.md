---
name: getFullProject
cbbaseinfo:
  description: "Retrieves the complete project file structure from an environment.

Returns the full directory tree and file listing for the project
contained within the environment."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the project structure data
data:
  name: getFullProject
  category: environments
  link: getFullProject.md
---
# getFullProject

```typescript
client.environments.getFullProject(id: string): Promise<unknown>
```

Retrieves the complete project file structure from an environment.

Returns the full directory tree and file listing for the project
contained within the environment.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |

## Returns

**`Promise<unknown>`** — A promise that resolves to the project structure data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.getFullProject('id');
```
