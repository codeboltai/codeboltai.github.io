---
name: diff
cbbaseinfo:
  description: "Retrieves the current diff of changes in the working directory.

Compares the working tree against the latest commit to show all
unstaged modifications. Optionally filters to a specific file path."
cbparameters:
  parameters:
    - name: data
      typeName: GitDiffRequest
      description: Optional filter parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitDiff[]>"
    description: A promise that resolves to an array of  objects with file changes and line modifications
data:
  name: diff
  category: git
  link: diff.md
---
# diff

```typescript
client.git.diff(data?: GitDiffRequest): Promise<GitDiff[]>
```

Retrieves the current diff of changes in the working directory.

Compares the working tree against the latest commit to show all
unstaged modifications. Optionally filters to a specific file path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitDiffRequest` _(optional)_ | Optional filter parameters |

## Returns

**`Promise<GitDiff[]>`** — A promise that resolves to an array of  objects with file changes and line modifications

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.diff();
```
