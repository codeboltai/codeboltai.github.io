---
name: init
cbbaseinfo:
  description: "Initializes a new Git repository in the workspace.

Creates a new `.git` directory and sets up the repository. If the
repository already exists, behavior depends on the server configuration."
cbparameters:
  parameters:
    - name: data
      typeName: GitInitRequest
      description: Optional initialization parameters such as default branch name
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when initialization is complete
data:
  name: init
  category: git
  link: init.md
---
# init

```typescript
client.git.init(data?: GitInitRequest): Promise<unknown>
```

Initializes a new Git repository in the workspace.

Creates a new `.git` directory and sets up the repository. If the
repository already exists, behavior depends on the server configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitInitRequest` _(optional)_ | Optional initialization parameters such as default branch name |

## Returns

**`Promise<unknown>`** — A promise that resolves when initialization is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.init();
```
