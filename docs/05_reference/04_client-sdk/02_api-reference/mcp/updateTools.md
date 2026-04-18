---
name: updateTools
cbbaseinfo:
  description: "Updates the tool configurations for MCP servers.

Modifies which tools are exposed or hidden from agents, and updates tool-specific
settings like descriptions, parameter defaults, or access permissions."
cbparameters:
  parameters:
    - name: data
      typeName: McpUpdateToolsRequest
      description: The tool update configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the tool configurations have been updated
data:
  name: updateTools
  category: mcp
  link: updateTools.md
---
# updateTools

```typescript
client.mcp.updateTools(data: McpUpdateToolsRequest): Promise<unknown>
```

Updates the tool configurations for MCP servers.

Modifies which tools are exposed or hidden from agents, and updates tool-specific
settings like descriptions, parameter defaults, or access permissions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `McpUpdateToolsRequest` | The tool update configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the tool configurations have been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.updateTools(/* McpUpdateToolsRequest */);
```
