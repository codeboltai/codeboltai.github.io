---
name: getAvailableList
cbbaseinfo:
  description: "Retrieves the catalog of MCP servers available for installation.

Returns a curated list of MCP servers that can be installed from the marketplace or
registry. Use this to discover new capabilities to add to the workspace."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<McpAvailableServer[]>"
    description: A promise that resolves to an array of available MCP servers
data:
  name: getAvailableList
  category: mcp
  link: getAvailableList.md
---
# getAvailableList

```typescript
client.mcp.getAvailableList(): Promise<McpAvailableServer[]>
```

Retrieves the catalog of MCP servers available for installation.

Returns a curated list of MCP servers that can be installed from the marketplace or
registry. Use this to discover new capabilities to add to the workspace.

## Parameters

_None_

## Returns

**`Promise<McpAvailableServer[]>`** — A promise that resolves to an array of available MCP servers

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.getAvailableList();
```
