---
title: getLocalMCPServers
---

# `getLocalMCPServers`

```typescript
plugin.mcp.getLocalMCPServers(): Promise<GetLocalToolBoxesResponse>
```

Gets the list of locally available toolboxes.

## Parameters

_No parameters._

## Returns

`Promise<GetLocalToolBoxesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.getLocalMCPServers();
console.log(result);
```
