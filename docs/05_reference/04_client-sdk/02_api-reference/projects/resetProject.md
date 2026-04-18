---
name: resetProject
cbbaseinfo:
  description: "Resets a project to its initial state.

Clears the project's chat history, debug sessions, and configuration changes,
restoring it to a clean state. This is a destructive operation that cannot be undone."
cbparameters:
  parameters:
    - name: data
      typeName: ResetProjectRequest
      description: The reset request identifying the project and reset scope
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the project has been reset
data:
  name: resetProject
  category: projects
  link: resetProject.md
---
# resetProject

```typescript
client.projects.resetProject(data: ResetProjectRequest): Promise<void>
```

Resets a project to its initial state.

Clears the project's chat history, debug sessions, and configuration changes,
restoring it to a clean state. This is a destructive operation that cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ResetProjectRequest` | The reset request identifying the project and reset scope |

## Returns

**`Promise<void>`** — A promise that resolves when the project has been reset

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.resetProject(/* ResetProjectRequest */);
```
