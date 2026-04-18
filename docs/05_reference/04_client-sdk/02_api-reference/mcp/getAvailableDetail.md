---
name: getAvailableDetail
cbbaseinfo:
  description: "Retrieves detailed information about a specific available MCP server.

Returns comprehensive details about an MCP server from the catalog, including its
description, supported tools, configuration schema, and installation requirements."
cbparameters:
  parameters:
    - name: mcpId
      typeName: string
      description: The identifier of the available MCP server to inspect
      isOptional: false
  returns:
    signatureTypeName: "Promise<McpAvailableServer>"
    description: A promise that resolves to the detailed MCP server information
data:
  name: getAvailableDetail
  category: mcp
  link: getAvailableDetail.md
---
# getAvailableDetail

```typescript
client.mcp.getAvailableDetail(mcpId: string): Promise<McpAvailableServer>
```

Retrieves detailed information about a specific available MCP server.

Returns comprehensive details about an MCP server from the catalog, including its
description, supported tools, configuration schema, and installation requirements.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `mcpId` | `string` | The identifier of the available MCP server to inspect |

## Returns

**`Promise<McpAvailableServer>`** — A promise that resolves to the detailed MCP server information

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.getAvailableDetail('mcpId');
```
