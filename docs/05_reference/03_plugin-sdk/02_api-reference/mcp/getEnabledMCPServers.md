---
name: getEnabledMCPServers
cbbaseinfo:
  description: Gets the list of currently enabled toolboxes.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetEnabledToolBoxesResponse>"
    description: ""
data:
  name: getEnabledMCPServers
  category: mcp
  link: getEnabledMCPServers.md
---
# getEnabledMCPServers

```typescript
plugin.mcp.getEnabledMCPServers(): Promise<GetEnabledToolBoxesResponse>
```

Gets the list of currently enabled toolboxes.

## Parameters

_None_

## Returns

**`Promise<GetEnabledToolBoxesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.getEnabledMCPServers();
```
