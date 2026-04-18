---
title: executeTool
---

# `executeTool`

```typescript
plugin.mcp.executeTool(toolbox: string, toolName: string, params: ToolParameters): Promise<ExecuteToolResponse>
```

Executes a specific tool with provided parameters.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `toolbox` | `string` | Yes |  |
| `toolName` | `string` | Yes |  |
| `params` | `ToolParameters` | Yes |  |

## Returns

`Promise<ExecuteToolResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.executeTool('toolbox', 'toolName', /* ToolParameters */);
console.log(result);
```
