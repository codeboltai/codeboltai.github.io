---
name: searchAvailableMCPServers
cbbaseinfo:
  description: Searches for available toolboxes matching a query.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<SearchAvailableToolBoxesResponse>"
    description: ""
data:
  name: searchAvailableMCPServers
  category: mcp
  link: searchAvailableMCPServers.md
---
# searchAvailableMCPServers

```typescript
plugin.mcp.searchAvailableMCPServers(query: string): Promise<SearchAvailableToolBoxesResponse>
```

Searches for available toolboxes matching a query.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `query` | `string` |  |

## Returns

**`Promise<SearchAvailableToolBoxesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.searchAvailableMCPServers('query');
```
