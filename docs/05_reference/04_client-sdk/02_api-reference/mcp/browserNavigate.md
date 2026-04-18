---
name: browserNavigate
cbbaseinfo:
  description: "Navigates to a URL using the browser MCP server.

Sends a navigation command to the browser automation MCP server, instructing it to
load a specific web page. Requires the browser MCP server to be installed and enabled."
cbparameters:
  parameters:
    - name: data
      typeName: McpBrowserNavigateRequest
      description: The navigation request
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the navigation has been initiated
data:
  name: browserNavigate
  category: mcp
  link: browserNavigate.md
---
# browserNavigate

```typescript
client.mcp.browserNavigate(data: McpBrowserNavigateRequest): Promise<unknown>
```

Navigates to a URL using the browser MCP server.

Sends a navigation command to the browser automation MCP server, instructing it to
load a specific web page. Requires the browser MCP server to be installed and enabled.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `McpBrowserNavigateRequest` | The navigation request |

## Returns

**`Promise<unknown>`** — A promise that resolves when the navigation has been initiated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.browserNavigate(/* McpBrowserNavigateRequest */);
```
