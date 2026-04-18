---
name: getTools
cbbaseinfo:
  description: Gets detailed information about specific tools.
cbparameters:
  parameters:
    - name: toolRequests
      typeName: object[]
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<GetToolsResponse>"
    description: ""
data:
  name: getTools
  category: mcp
  link: getTools.md
---
# getTools

```typescript
plugin.mcp.getTools(toolRequests: object[]): Promise<GetToolsResponse>
```

Gets detailed information about specific tools.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `toolRequests` | `object[]` |  |

## Returns

**`Promise<GetToolsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.getTools(/* object[] */);
```
