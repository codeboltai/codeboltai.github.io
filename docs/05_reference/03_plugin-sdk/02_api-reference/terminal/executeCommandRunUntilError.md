---
name: executeCommandRunUntilError
cbbaseinfo:
  description: "Executes a given command and keeps running until an error occurs.
Listens for messages from the WebSocket and resolves the promise when an error is encountered."
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
    signatureTypeName: "Promise<CommandError>"
    description: A promise that resolves when an error occurs during command execution.
data:
  name: executeCommandRunUntilError
  category: terminal
  link: executeCommandRunUntilError.md
---
# executeCommandRunUntilError

```typescript
plugin.terminal.executeCommandRunUntilError(command: string, executeInMain: boolean): Promise<CommandError>
```

Executes a given command and keeps running until an error occurs.
Listens for messages from the WebSocket and resolves the promise when an error is encountered.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The command to be executed. |
| `executeInMain` | `boolean` |  Default: `false` |

## Returns

**`Promise<CommandError>`** — A promise that resolves when an error occurs during command execution.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.terminal.executeCommandRunUntilError('command', true);
```
