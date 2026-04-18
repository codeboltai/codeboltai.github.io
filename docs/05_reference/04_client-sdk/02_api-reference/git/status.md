---
name: status
cbbaseinfo:
  description: "Retrieves the current Git status of the working directory.

Returns information about staged, unstaged, and untracked files,
similar to running `git status` from the command line."
cbparameters:
  parameters:
    - name: data
      typeName: GitStatusRequest
      description: Optional parameters to scope the status check
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitStatus>"
    description: A promise that resolves to the  of the repository
data:
  name: status
  category: git
  link: status.md
---
# status

```typescript
client.git.status(data?: GitStatusRequest): Promise<GitStatus>
```

Retrieves the current Git status of the working directory.

Returns information about staged, unstaged, and untracked files,
similar to running `git status` from the command line.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitStatusRequest` _(optional)_ | Optional parameters to scope the status check |

## Returns

**`Promise<GitStatus>`** — A promise that resolves to the  of the repository

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.status();
```
