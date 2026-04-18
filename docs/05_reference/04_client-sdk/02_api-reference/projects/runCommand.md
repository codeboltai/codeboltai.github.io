---
name: runCommand
cbbaseinfo:
  description: "Executes a shell command within the project's working directory.

Runs a command (e.g., build, test, lint) in the context of the project, with access
to the project's environment variables and path configuration."
cbparameters:
  parameters:
    - name: data
      typeName: RunCommandRequest
      description: The command execution request
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the command execution result
data:
  name: runCommand
  category: projects
  link: runCommand.md
---
# runCommand

```typescript
client.projects.runCommand(data: RunCommandRequest): Promise<unknown>
```

Executes a shell command within the project's working directory.

Runs a command (e.g., build, test, lint) in the context of the project, with access
to the project's environment variables and path configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `RunCommandRequest` | The command execution request |

## Returns

**`Promise<unknown>`** — A promise that resolves to the command execution result

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.runCommand(/* RunCommandRequest */);
```
