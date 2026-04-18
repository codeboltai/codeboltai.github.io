---
name: checkCli
cbbaseinfo:
  description: "Checks the current CLI installation status.

Returns information about whether the CLI tool is installed, which
version is present, and if it's properly configured. Use this to
verify CLI availability before attempting to use it."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CliStatus>"
    description: A promise that resolves to CLI status information
data:
  name: checkCli
  category: system
  link: checkCli.md
---
# checkCli

```typescript
client.system.checkCli(): Promise<CliStatus>
```

Checks the current CLI installation status.

Returns information about whether the CLI tool is installed, which
version is present, and if it's properly configured. Use this to
verify CLI availability before attempting to use it.

## Parameters

_None_

## Returns

**`Promise<CliStatus>`** — A promise that resolves to CLI status information

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.system.checkCli();
```
