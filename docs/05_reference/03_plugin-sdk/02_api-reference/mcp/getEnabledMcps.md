---
name: getEnabledMcps
cbbaseinfo:
  description: Gets the list of enabled MCP servers.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetEnabledMCPSResponse>"
    description: ""
data:
  name: getEnabledMcps
  category: mcp
  link: getEnabledMcps.md
---
# getEnabledMcps

```typescript
plugin.mcp.getEnabledMcps(): Promise<GetEnabledMCPSResponse>
```

Gets the list of enabled MCP servers.

## Parameters

_None_

## Returns

**`Promise<GetEnabledMCPSResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.getEnabledMcps();
```
