---
name: executeCommandWithStream
cbbaseinfo:
  description: "Executes a given command and streams the output.
Listens for messages from the WebSocket and streams the output data."
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
      isOptional: false
    - name: executeInMain
      typeName: boolean
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "CustomEventEmitter"
    description: A promise that streams the output data during command execution.
data:
  name: executeCommandWithStream
  category: terminal
  link: executeCommandWithStream.md
---
# executeCommandWithStream

```typescript
plugin.terminal.executeCommandWithStream(command: string, executeInMain: boolean): CustomEventEmitter
```

Executes a given command and streams the output.
Listens for messages from the WebSocket and streams the output data.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The command to be executed. |
| `executeInMain` | `boolean` |  Default: `false` |

## Returns

**`CustomEventEmitter`** — A promise that streams the output data during command execution.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.terminal.executeCommandWithStream('command', true);
```
