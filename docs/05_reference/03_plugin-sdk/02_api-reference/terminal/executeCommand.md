---
title: executeCommand
---

# `executeCommand`

```typescript
plugin.terminal.executeCommand(command: string, returnEmptyStringOnSuccess: boolean): Promise<CommandOutput | CommandError | CommandFinish>
```

Executes a given command and returns the result.
Listens for messages from the WebSocket that indicate the output, error, or finish state
of the executed command and resolves the promise accordingly.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Yes | The command to be executed. |
| `returnEmptyStringOnSuccess` | `boolean` | Yes |  _(default: `false`)_ |

## Returns

`Promise<CommandOutput | CommandError | CommandFinish>` — A promise that resolves with the command's output, error, or finish signal.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.terminal.executeCommand('command', true);
console.log(result);
```
