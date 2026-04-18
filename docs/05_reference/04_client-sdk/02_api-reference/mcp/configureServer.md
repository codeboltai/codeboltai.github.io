---
name: configureServer
cbbaseinfo:
  description: "Configures a specific MCP server's settings.

Updates the connection parameters, environment variables, and other settings for a
named MCP server. The server may need to be restarted for changes to take effect."
cbparameters:
  parameters:
    - name: serverName
      typeName: string
      description: The name of the MCP server to configure
      isOptional: false
    - name: data
      typeName: McpConfigureServerRequest
      description: The server-specific configuration to apply
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the server configuration has been saved
data:
  name: configureServer
  category: mcp
  link: configureServer.md
---
# configureServer

```typescript
client.mcp.configureServer(serverName: string, data: McpConfigureServerRequest): Promise<unknown>
```

Configures a specific MCP server's settings.

Updates the connection parameters, environment variables, and other settings for a
named MCP server. The server may need to be restarted for changes to take effect.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `serverName` | `string` | The name of the MCP server to configure |
| `data` | `McpConfigureServerRequest` | The server-specific configuration to apply |

## Returns

**`Promise<unknown>`** — A promise that resolves when the server configuration has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.configureServer('serverName', /* McpConfigureServerRequest */);
```
