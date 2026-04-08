---
title: CommandExecutionRequestNotify
---

[**@codebolt/codeboltjs**](../index)

***

# Function: CommandExecutionRequestNotify()

```ts
function CommandExecutionRequestNotify(
   command: string, 
   returnEmptyStringOnSuccess?: boolean, 
   executeInMain?: boolean, 
   toolUseId?: string): void;
```

Defined in: packages/codeboltjs/src/notificationfunctions/terminal.ts:32

Sends a command execution request notification

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to execute |
| `returnEmptyStringOnSuccess?` | `boolean` | Optional flag to return empty string on success |
| `executeInMain?` | `boolean` | Optional flag to execute in main terminal |
| `toolUseId?` | `string` | Optional custom toolUseId, will be generated if not provided |

## Returns

`void`
