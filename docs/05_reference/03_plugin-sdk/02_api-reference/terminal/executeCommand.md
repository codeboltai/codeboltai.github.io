---
name: executeCommand
cbbaseinfo:
  description: "Executes a given command and returns the result.
Listens for messages from the WebSocket that indicate the output, error, or finish state
of the executed command and resolves the promise accordingly."
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
      isOptional: false
    - name: returnEmptyStringOnSuccess
      typeName: boolean
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<CommandOutput | CommandError | CommandFinish>"
    description: "A promise that resolves with the command's output, error, or finish signal."
data:
  name: executeCommand
  category: terminal
  link: executeCommand.md
---
# executeCommand

```typescript
plugin.terminal.executeCommand(command: string, returnEmptyStringOnSuccess: boolean): Promise<CommandOutput | CommandError | CommandFinish>
```

Executes a given command and returns the result.
Listens for messages from the WebSocket that indicate the output, error, or finish state
of the executed command and resolves the promise accordingly.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The command to be executed. |
| `returnEmptyStringOnSuccess` | `boolean` |  Default: `false` |

## Returns

**`Promise<CommandOutput | CommandError | CommandFinish>`** — A promise that resolves with the command's output, error, or finish signal.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.terminal.executeCommand('command', true);
```
