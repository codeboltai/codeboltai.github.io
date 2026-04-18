---
name: createInDefault
cbbaseinfo:
  description: "Creates a new project in the default workspace.

Convenience method that creates a project without needing to specify a workspace.
The project is placed in the system's default workspace directory."
cbparameters:
  parameters:
    - name: data
      typeName: Record<string, unknown>
      description: The project creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<Project>"
    description: A promise that resolves to the newly created project
data:
  name: createInDefault
  category: projects
  link: createInDefault.md
---
# createInDefault

```typescript
client.projects.createInDefault(data: Record<string, unknown>): Promise<Project>
```

Creates a new project in the default workspace.

Convenience method that creates a project without needing to specify a workspace.
The project is placed in the system's default workspace directory.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `Record<string, unknown>` | The project creation payload |

## Returns

**`Promise<Project>`** — A promise that resolves to the newly created project

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.createInDefault(/* Record<string, unknown> */);
```
