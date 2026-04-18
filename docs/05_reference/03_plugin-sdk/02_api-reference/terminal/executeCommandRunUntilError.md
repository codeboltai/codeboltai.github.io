---
title: executeCommandRunUntilError
---

# `executeCommandRunUntilError`

```typescript
plugin.terminal.executeCommandRunUntilError(command: string, executeInMain: boolean): Promise<CommandError>
```

Executes a given command and keeps running until an error occurs.
Listens for messages from the WebSocket and resolves the promise when an error is encountered.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Yes | The command to be executed. |
| `executeInMain` | `boolean` | Yes |  _(default: `false`)_ |

## Returns

`Promise<CommandError>` — A promise that resolves when an error occurs during command execution.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.terminal.executeCommandRunUntilError('command', true);
console.log(result);
```
