---
name: getByName
cbbaseinfo:
  description: "Retrieves a specific MCP server by its registered name.

Returns the full configuration and status of a single MCP server, including its
tool definitions, resource list, and connection parameters."
cbparameters:
  parameters:
    - name: serverName
      typeName: string
      description: The registered name of the MCP server to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<McpServer>"
    description: A promise that resolves to the MCP server details
data:
  name: getByName
  category: mcp
  link: getByName.md
---
# getByName

```typescript
client.mcp.getByName(serverName: string): Promise<McpServer>
```

Retrieves a specific MCP server by its registered name.

Returns the full configuration and status of a single MCP server, including its
tool definitions, resource list, and connection parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `serverName` | `string` | The registered name of the MCP server to retrieve |

## Returns

**`Promise<McpServer>`** — A promise that resolves to the MCP server details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.getByName('serverName');
```
