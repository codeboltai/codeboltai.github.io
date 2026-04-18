---
name: diff
cbbaseinfo:
  description: Retrieves the diff of changes for a specific commit in the local repository.
cbparameters:
  parameters:
    - name: commitHash
      typeName: string
      description: The hash of the commit to retrieve the diff for.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GitDiffResponse>"
    description: A promise that resolves with the response from the diff event.
data:
  name: diff
  category: git
  link: diff.md
---
# diff

```typescript
plugin.git.diff(commitHash: string): Promise<GitDiffResponse>
```

Retrieves the diff of changes for a specific commit in the local repository.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `commitHash` | `string` | The hash of the commit to retrieve the diff for. |

## Returns

**`Promise<GitDiffResponse>`** — A promise that resolves with the response from the diff event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.diff('commitHash');
```
