---
name: commit
cbbaseinfo:
  description: "Creates a new Git commit with the staged changes.

Commits all currently staged files with the provided commit message
and optional author information."
cbparameters:
  parameters:
    - name: data
      typeName: GitCommitRequest
      description: Commit parameters including the commit message
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the commit is created
data:
  name: commit
  category: git
  link: commit.md
---
# commit

```typescript
client.git.commit(data: GitCommitRequest): Promise<unknown>
```

Creates a new Git commit with the staged changes.

Commits all currently staged files with the provided commit message
and optional author information.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitCommitRequest` | Commit parameters including the commit message |

## Returns

**`Promise<unknown>`** — A promise that resolves when the commit is created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.commit(/* GitCommitRequest */);
```
