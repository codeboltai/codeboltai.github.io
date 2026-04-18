---
name: executeTool
cbbaseinfo:
  description: Executes a specific tool with provided parameters.
cbparameters:
  parameters:
    - name: toolbox
      typeName: string
      description: ""
      isOptional: false
    - name: toolName
      typeName: string
      description: ""
      isOptional: false
    - name: params
      typeName: ToolParameters
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ExecuteToolResponse>"
    description: ""
data:
  name: executeTool
  category: mcp
  link: executeTool.md
---
# executeTool

```typescript
plugin.mcp.executeTool(toolbox: string, toolName: string, params: ToolParameters): Promise<ExecuteToolResponse>
```

Executes a specific tool with provided parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `toolbox` | `string` |  |
| `toolName` | `string` |  |
| `params` | `ToolParameters` |  |

## Returns

**`Promise<ExecuteToolResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.executeTool('toolbox', 'toolName', /* ToolParameters */);
```
