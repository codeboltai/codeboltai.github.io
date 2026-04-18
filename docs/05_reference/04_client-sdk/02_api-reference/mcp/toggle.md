---
name: toggle
cbbaseinfo:
  description: "Toggles an MCP server between enabled and disabled states.

Enables or disables a registered MCP server. Disabled servers will not be started
or connected to, and their tools will not be available to agents."
cbparameters:
  parameters:
    - name: data
      typeName: McpToggleRequest
      description: The toggle request specifying the server and desired state
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the toggle operation has completed
data:
  name: toggle
  category: mcp
  link: toggle.md
---
# toggle

```typescript
client.mcp.toggle(data: McpToggleRequest): Promise<unknown>
```

Toggles an MCP server between enabled and disabled states.

Enables or disables a registered MCP server. Disabled servers will not be started
or connected to, and their tools will not be available to agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `McpToggleRequest` | The toggle request specifying the server and desired state |

## Returns

**`Promise<unknown>`** — A promise that resolves when the toggle operation has completed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.toggle(/* McpToggleRequest */);
```
