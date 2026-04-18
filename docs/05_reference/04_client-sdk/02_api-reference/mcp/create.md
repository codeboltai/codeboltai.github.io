---
name: create
cbbaseinfo:
  description: "Creates a new custom MCP server configuration.

Registers a custom MCP server that is not part of the standard catalog. This is useful
for connecting to proprietary or locally developed MCP-compatible services."
cbparameters:
  parameters:
    - name: data
      typeName: McpCreateRequest
      description: The custom server creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the server has been created
data:
  name: create
  category: mcp
  link: create.md
---
# create

```typescript
client.mcp.create(data: McpCreateRequest): Promise<unknown>
```

Creates a new custom MCP server configuration.

Registers a custom MCP server that is not part of the standard catalog. This is useful
for connecting to proprietary or locally developed MCP-compatible services.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `McpCreateRequest` | The custom server creation payload |

## Returns

**`Promise<unknown>`** — A promise that resolves when the server has been created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.create(/* McpCreateRequest */);
```
