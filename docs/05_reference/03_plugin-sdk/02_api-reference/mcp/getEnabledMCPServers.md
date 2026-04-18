---
title: getEnabledMCPServers
---

# `getEnabledMCPServers`

```typescript
plugin.mcp.getEnabledMCPServers(): Promise<GetEnabledToolBoxesResponse>
```

Gets the list of currently enabled toolboxes.

## Parameters

_No parameters._

## Returns

`Promise<GetEnabledToolBoxesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.getEnabledMCPServers();
console.log(result);
```
