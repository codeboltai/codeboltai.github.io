---
name: pull
cbbaseinfo:
  description: Pulls the latest changes from the remote repository to the local repository at the given path.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GitPullResponse>"
    description: A promise that resolves with the response from the pull event.
data:
  name: pull
  category: git
  link: pull.md
---
# pull

```typescript
plugin.git.pull(): Promise<GitPullResponse>
```

Pulls the latest changes from the remote repository to the local repository at the given path.

## Parameters

_None_

## Returns

**`Promise<GitPullResponse>`** — A promise that resolves with the response from the pull event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.pull();
```
