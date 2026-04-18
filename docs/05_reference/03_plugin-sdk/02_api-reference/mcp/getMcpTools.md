---
name: getMcpTools
cbbaseinfo:
  description: Gets MCP tools from the specified servers.
cbparameters:
  parameters:
    - name: mcpNames
      typeName: string[]
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<GetMcpToolsResponse>"
    description: ""
data:
  name: getMcpTools
  category: mcp
  link: getMcpTools.md
---
# getMcpTools

```typescript
plugin.mcp.getMcpTools(mcpNames?: string[]): Promise<GetMcpToolsResponse>
```

Gets MCP tools from the specified servers.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `mcpNames` | `string[]` _(optional)_ |  |

## Returns

**`Promise<GetMcpToolsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.getMcpTools();
```
