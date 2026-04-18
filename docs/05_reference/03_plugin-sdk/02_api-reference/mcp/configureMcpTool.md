---
title: configureMcpTool
---

# `configureMcpTool`

```typescript
plugin.mcp.configureMcpTool(mcpName: string, toolName: string, config: Record<string, unknown>): Promise<ConfigureMCPToolResponse>
```

Configures a specific MCP tool with provided configuration.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `mcpName` | `string` | Yes |  |
| `toolName` | `string` | Yes |  |
| `config` | `Record<string, unknown>` | Yes |  |

## Returns

`Promise<ConfigureMCPToolResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.configureMcpTool('mcpName', 'toolName', /* Record<string, unknown> */);
console.log(result);
```
