---
name: push
cbbaseinfo:
  description: Pushes local repository changes to the remote repository at the given path.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GitPushResponse>"
    description: A promise that resolves with the response from the push event.
data:
  name: push
  category: git
  link: push.md
---
# push

```typescript
plugin.git.push(): Promise<GitPushResponse>
```

Pushes local repository changes to the remote repository at the given path.

## Parameters

_None_

## Returns

**`Promise<GitPushResponse>`** — A promise that resolves with the response from the push event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.push();
```
