---
name: getAvailableAll
cbbaseinfo:
  description: "Retrieves all available MCP servers including both marketplace and community servers.

Returns the full unfiltered catalog of MCP servers from all sources. This includes
official, community-contributed, and locally developed servers."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<McpAvailableServer[]>"
    description: A promise that resolves to an array of all available MCP servers
data:
  name: getAvailableAll
  category: mcp
  link: getAvailableAll.md
---
# getAvailableAll

```typescript
client.mcp.getAvailableAll(): Promise<McpAvailableServer[]>
```

Retrieves all available MCP servers including both marketplace and community servers.

Returns the full unfiltered catalog of MCP servers from all sources. This includes
official, community-contributed, and locally developed servers.

## Parameters

_None_

## Returns

**`Promise<McpAvailableServer[]>`** — A promise that resolves to an array of all available MCP servers

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.getAvailableAll();
```
