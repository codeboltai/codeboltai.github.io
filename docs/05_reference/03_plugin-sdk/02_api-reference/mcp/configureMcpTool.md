---
name: configureMcpTool
cbbaseinfo:
  description: Configures a specific MCP tool with provided configuration.
cbparameters:
  parameters:
    - name: mcpName
      typeName: string
      description: ""
      isOptional: false
    - name: toolName
      typeName: string
      description: ""
      isOptional: false
    - name: config
      typeName: Record<string, unknown>
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ConfigureMCPToolResponse>"
    description: ""
data:
  name: configureMcpTool
  category: mcp
  link: configureMcpTool.md
---
# configureMcpTool

```typescript
plugin.mcp.configureMcpTool(mcpName: string, toolName: string, config: Record<string, unknown>): Promise<ConfigureMCPToolResponse>
```

Configures a specific MCP tool with provided configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `mcpName` | `string` |  |
| `toolName` | `string` |  |
| `config` | `Record<string, unknown>` |  |

## Returns

**`Promise<ConfigureMCPToolResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.configureMcpTool('mcpName', 'toolName', /* Record<string, unknown> */);
```
