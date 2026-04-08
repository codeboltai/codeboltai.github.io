---
title: GitAddRequestNotify
---

[**@codebolt/codeboltjs**](../index)

***

# Function: GitAddRequestNotify()

```ts
function GitAddRequestNotify(
   path?: string, 
   files?: string[], 
   toolUseId?: string): void;
```

Defined in: packages/codeboltjs/src/notificationfunctions/git.ts:252

Sends a git add request notification

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path?` | `string` | Optional path where to perform git add |
| `files?` | `string`[] | Optional array of files to add |
| `toolUseId?` | `string` | Optional custom toolUseId, will be generated if not provided |

## Returns

`void`
