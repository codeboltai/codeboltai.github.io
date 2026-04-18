---
name: pull
cbbaseinfo:
  description: "Pulls changes from the remote repository.

Downloads and integrates remote changes into the current branch.
Equivalent to running `git pull` from the command line."
cbparameters:
  parameters:
    - name: data
      typeName: GitPullRequest
      description: Optional pull parameters such as remote name or branch
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the pull is complete
data:
  name: pull
  category: git
  link: pull.md
---
# pull

```typescript
client.git.pull(data?: GitPullRequest): Promise<unknown>
```

Pulls changes from the remote repository.

Downloads and integrates remote changes into the current branch.
Equivalent to running `git pull` from the command line.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitPullRequest` _(optional)_ | Optional pull parameters such as remote name or branch |

## Returns

**`Promise<unknown>`** — A promise that resolves when the pull is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.pull();
```
