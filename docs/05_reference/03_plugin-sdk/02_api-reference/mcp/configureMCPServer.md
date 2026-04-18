---
name: configureMCPServer
cbbaseinfo:
  description: Configures a specific toolbox with provided configuration.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: ""
      isOptional: false
    - name: config
      typeName: MCPConfiguration
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ConfigureToolBoxResponse>"
    description: ""
data:
  name: configureMCPServer
  category: mcp
  link: configureMCPServer.md
---
# configureMCPServer

```typescript
plugin.mcp.configureMCPServer(name: string, config: MCPConfiguration): Promise<ConfigureToolBoxResponse>
```

Configures a specific toolbox with provided configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  |
| `config` | `MCPConfiguration` |  |

## Returns

**`Promise<ConfigureToolBoxResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.configureMCPServer('name', /* MCPConfiguration */);
```
