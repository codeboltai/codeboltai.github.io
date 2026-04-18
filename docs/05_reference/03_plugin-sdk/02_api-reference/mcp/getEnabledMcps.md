---
title: getEnabledMcps
---

# `getEnabledMcps`

```typescript
plugin.mcp.getEnabledMcps(): Promise<GetEnabledMCPSResponse>
```

Gets the list of enabled MCP servers.

## Parameters

_No parameters._

## Returns

`Promise<GetEnabledMCPSResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.getEnabledMcps();
console.log(result);
```
