---
name: checkProjectName
cbbaseinfo:
  description: "Checks whether a project name is available for use.

Validates that the proposed project name does not conflict with existing projects
in the workspace. Use this before creating a new project."
cbparameters:
  parameters:
    - name: data
      typeName: CheckProjectNameRequest
      description: The name check request
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves to an object indicating availability
data:
  name: checkProjectName
  category: projects
  link: checkProjectName.md
---
# checkProjectName

```typescript
client.projects.checkProjectName(data: CheckProjectNameRequest): Promise<object>
```

Checks whether a project name is available for use.

Validates that the proposed project name does not conflict with existing projects
in the workspace. Use this before creating a new project.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckProjectNameRequest` | The name check request |

## Returns

**`Promise<object>`** — A promise that resolves to an object indicating availability

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.checkProjectName(/* CheckProjectNameRequest */);
```
