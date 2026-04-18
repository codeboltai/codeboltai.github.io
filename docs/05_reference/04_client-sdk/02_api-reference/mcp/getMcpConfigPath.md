---
name: getMcpConfigPath
cbbaseinfo:
  description: "Retrieves the filesystem path to the MCP configuration file.

Returns the absolute path where the MCP configuration is stored on disk. Useful for
manual editing or backup of MCP server configurations."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<McpConfigPath>"
    description: A promise that resolves to the MCP configuration file path
data:
  name: getMcpConfigPath
  category: mcp
  link: getMcpConfigPath.md
---
# getMcpConfigPath

```typescript
client.mcp.getMcpConfigPath(): Promise<McpConfigPath>
```

Retrieves the filesystem path to the MCP configuration file.

Returns the absolute path where the MCP configuration is stored on disk. Useful for
manual editing or backup of MCP server configurations.

## Parameters

_None_

## Returns

**`Promise<McpConfigPath>`** — A promise that resolves to the MCP configuration file path

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.getMcpConfigPath();
```
