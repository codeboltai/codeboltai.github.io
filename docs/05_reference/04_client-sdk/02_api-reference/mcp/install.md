---
name: install
cbbaseinfo:
  description: "Installs an MCP server from the available catalog.

Downloads and registers an MCP server, making it available for configuration and use.
The server may require additional configuration (e.g., API keys) before it can be started."
cbparameters:
  parameters:
    - name: data
      typeName: McpInstallRequest
      description: The installation request specifying which server to install
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the installation has completed
data:
  name: install
  category: mcp
  link: install.md
---
# install

```typescript
client.mcp.install(data: McpInstallRequest): Promise<unknown>
```

Installs an MCP server from the available catalog.

Downloads and registers an MCP server, making it available for configuration and use.
The server may require additional configuration (e.g., API keys) before it can be started.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `McpInstallRequest` | The installation request specifying which server to install |

## Returns

**`Promise<unknown>`** — A promise that resolves when the installation has completed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.install(/* McpInstallRequest */);
```
