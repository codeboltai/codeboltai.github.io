---
title: GitCloneRequestNotify
---

[**@codebolt/codeboltjs**](../index)

***

# Function: GitCloneRequestNotify()

```ts
function GitCloneRequestNotify(
   repoUrl: string, 
   targetPath?: string, 
   toolUseId?: string): void;
```

Defined in: packages/codeboltjs/src/notificationfunctions/git.ts:676

Sends a git clone request notification

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `repoUrl` | `string` | URL of the repository to clone |
| `targetPath?` | `string` | Optional target path for the cloned repository |
| `toolUseId?` | `string` | Optional custom toolUseId, will be generated if not provided |

## Returns

`void`
