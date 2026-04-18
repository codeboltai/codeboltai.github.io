---
title: executeCommandRunUntilInterrupt
---

# `executeCommandRunUntilInterrupt`

```typescript
plugin.terminal.executeCommandRunUntilInterrupt(command: string, executeInMain: boolean): Promise<CommandError>
```

Executes a given command and keeps running until manually interrupted.
Listens for messages from the WebSocket and resolves the promise when interrupted.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Yes | The command to be executed. |
| `executeInMain` | `boolean` | Yes | Whether to execute in main terminal. _(default: `false`)_ |

## Returns

`Promise<CommandError>` — A promise that resolves when the command is interrupted.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.terminal.executeCommandRunUntilInterrupt('command', true);
console.log(result);
```
