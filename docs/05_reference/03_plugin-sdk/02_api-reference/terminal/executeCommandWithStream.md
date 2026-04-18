---
title: executeCommandWithStream
---

# `executeCommandWithStream`

```typescript
plugin.terminal.executeCommandWithStream(command: string, executeInMain: boolean): CustomEventEmitter
```

Executes a given command and streams the output.
Listens for messages from the WebSocket and streams the output data.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `command` | `string` | Yes | The command to be executed. |
| `executeInMain` | `boolean` | Yes |  _(default: `false`)_ |

## Returns

`CustomEventEmitter` — A promise that streams the output data during command execution.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.terminal.executeCommandWithStream('command', true);
console.log(result);
```
