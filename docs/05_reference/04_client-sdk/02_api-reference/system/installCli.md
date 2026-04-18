---
name: installCli
cbbaseinfo:
  description: "Installs the CodeBolt CLI tool on the system.

Downloads and configures the command-line interface tool for CodeBolt,
enabling terminal-based operations and command execution. The installation
process includes setting up necessary binaries and configuration files."
cbparameters:
  parameters:
    - name: data
      typeName: InstallCliRequest
      description: Optional parameters for CLI installation
      isOptional: true
  returns:
    signatureTypeName: "Promise<InstallCliResponse>"
    description: A promise that resolves to installation status and details
data:
  name: installCli
  category: system
  link: installCli.md
---
# installCli

```typescript
client.system.installCli(data?: InstallCliRequest): Promise<InstallCliResponse>
```

Installs the CodeBolt CLI tool on the system.

Downloads and configures the command-line interface tool for CodeBolt,
enabling terminal-based operations and command execution. The installation
process includes setting up necessary binaries and configuration files.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InstallCliRequest` _(optional)_ | Optional parameters for CLI installation |

## Returns

**`Promise<InstallCliResponse>`** — A promise that resolves to installation status and details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.system.installCli();
```
