---
name: getLocalMCPServers
cbbaseinfo:
  description: Gets the list of locally available toolboxes.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetLocalToolBoxesResponse>"
    description: ""
data:
  name: getLocalMCPServers
  category: mcp
  link: getLocalMCPServers.md
---
# getLocalMCPServers

```typescript
plugin.mcp.getLocalMCPServers(): Promise<GetLocalToolBoxesResponse>
```

Gets the list of locally available toolboxes.

## Parameters

_None_

## Returns

**`Promise<GetLocalToolBoxesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.getLocalMCPServers();
```
