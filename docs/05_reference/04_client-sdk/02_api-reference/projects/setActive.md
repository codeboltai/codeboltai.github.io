---
name: setActive
cbbaseinfo:
  description: "Sets a project as the currently active project in the workspace.

Switches the active project context, which affects which project's files, configuration,
and history are used for subsequent operations."
cbparameters:
  parameters:
    - name: data
      typeName: SetActiveProjectRequest
      description: The request identifying which project to activate
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the active project has been switched
data:
  name: setActive
  category: projects
  link: setActive.md
---
# setActive

```typescript
client.projects.setActive(data: SetActiveProjectRequest): Promise<void>
```

Sets a project as the currently active project in the workspace.

Switches the active project context, which affects which project's files, configuration,
and history are used for subsequent operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetActiveProjectRequest` | The request identifying which project to activate |

## Returns

**`Promise<void>`** — A promise that resolves when the active project has been switched

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.setActive(/* SetActiveProjectRequest */);
```
