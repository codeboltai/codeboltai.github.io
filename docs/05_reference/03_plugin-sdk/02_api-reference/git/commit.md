---
name: commit
cbbaseinfo:
  description: Commits the staged changes in the local repository with the given commit message.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The commit message to use for the commit.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GitCommitResponse>"
    description: A promise that resolves with the response from the commit event.
data:
  name: commit
  category: git
  link: commit.md
---
# commit

```typescript
plugin.git.commit(message: string): Promise<GitCommitResponse>
```

Commits the staged changes in the local repository with the given commit message.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | The commit message to use for the commit. |

## Returns

**`Promise<GitCommitResponse>`** — A promise that resolves with the response from the commit event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.commit('message');
```
