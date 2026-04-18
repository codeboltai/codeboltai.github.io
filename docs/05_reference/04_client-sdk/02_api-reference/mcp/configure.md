---
name: configure
cbbaseinfo:
  description: "Applies global MCP configuration settings.

Updates the workspace-level MCP settings that affect how all MCP servers are managed,
including default timeout values, transport preferences, and security policies."
cbparameters:
  parameters:
    - name: data
      typeName: McpConfigureRequest
      description: The global MCP configuration to apply
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the configuration has been saved
data:
  name: configure
  category: mcp
  link: configure.md
---
# configure

```typescript
client.mcp.configure(data: McpConfigureRequest): Promise<unknown>
```

Applies global MCP configuration settings.

Updates the workspace-level MCP settings that affect how all MCP servers are managed,
including default timeout values, transport preferences, and security policies.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `McpConfigureRequest` | The global MCP configuration to apply |

## Returns

**`Promise<unknown>`** — A promise that resolves when the configuration has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.configure(/* McpConfigureRequest */);
```
