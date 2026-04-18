---
name: executeCommandRunUntilInterrupt
cbbaseinfo:
  description: "Executes a given command and keeps running until manually interrupted.
Listens for messages from the WebSocket and resolves the promise when interrupted."
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
      isOptional: false
    - name: executeInMain
      typeName: boolean
      description: Whether to execute in main terminal.
      isOptional: false
  returns:
    signatureTypeName: "Promise<CommandError>"
    description: A promise that resolves when the command is interrupted.
data:
  name: executeCommandRunUntilInterrupt
  category: terminal
  link: executeCommandRunUntilInterrupt.md
---
# executeCommandRunUntilInterrupt

```typescript
plugin.terminal.executeCommandRunUntilInterrupt(command: string, executeInMain: boolean): Promise<CommandError>
```

Executes a given command and keeps running until manually interrupted.
Listens for messages from the WebSocket and resolves the promise when interrupted.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The command to be executed. |
| `executeInMain` | `boolean` | Whether to execute in main terminal. Default: `false` |

## Returns

**`Promise<CommandError>`** — A promise that resolves when the command is interrupted.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.terminal.executeCommandRunUntilInterrupt('command', true);
```
