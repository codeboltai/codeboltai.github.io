---
name: create
cbbaseinfo:
  description: "Creates a new project in a specified workspace.

Initializes a new project with the given configuration. The project will be created
in the specified workspace directory with its own configuration and history."
cbparameters:
  parameters:
    - name: data
      typeName: Record<string, unknown>
      description: The project creation payload including name and workspace details
      isOptional: false
  returns:
    signatureTypeName: "Promise<Project>"
    description: A promise that resolves to the newly created project
data:
  name: create
  category: projects
  link: create.md
---
# create

```typescript
client.projects.create(data: Record<string, unknown>): Promise<Project>
```

Creates a new project in a specified workspace.

Initializes a new project with the given configuration. The project will be created
in the specified workspace directory with its own configuration and history.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `Record<string, unknown>` | The project creation payload including name and workspace details |

## Returns

**`Promise<Project>`** — A promise that resolves to the newly created project

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.create(/* Record<string, unknown> */);
```
