---
title: configureMCPServer
---

# `configureMCPServer`

```typescript
plugin.mcp.configureMCPServer(name: string, config: MCPConfiguration): Promise<ConfigureToolBoxResponse>
```

Configures a specific toolbox with provided configuration.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes |  |
| `config` | `MCPConfiguration` | Yes |  |

## Returns

`Promise<ConfigureToolBoxResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.configureMCPServer('name', /* MCPConfiguration */);
console.log(result);
```
