---
name: listMcpFromServers
cbbaseinfo:
  description: Lists all tools from the specified toolboxes.
cbparameters:
  parameters:
    - name: toolBoxes
      typeName: string[]
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ListToolsFromToolBoxesResponse>"
    description: ""
data:
  name: listMcpFromServers
  category: mcp
  link: listMcpFromServers.md
---
# listMcpFromServers

```typescript
plugin.mcp.listMcpFromServers(toolBoxes: string[]): Promise<ListToolsFromToolBoxesResponse>
```

Lists all tools from the specified toolboxes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `toolBoxes` | `string[]` |  |

## Returns

**`Promise<ListToolsFromToolBoxesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.listMcpFromServers(/* string[] */);
```
