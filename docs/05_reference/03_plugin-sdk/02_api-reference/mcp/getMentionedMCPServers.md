---
title: getMentionedMCPServers
---

# `getMentionedMCPServers`

```typescript
plugin.mcp.getMentionedMCPServers(userMessage: MCPUserMessage): Promise<GetAvailableToolBoxesResponse>
```

Gets toolboxes mentioned in a user message.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `userMessage` | `MCPUserMessage` | Yes |  |

## Returns

`Promise<GetAvailableToolBoxesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.getMentionedMCPServers(/* MCPUserMessage */);
console.log(result);
```
