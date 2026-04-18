---
name: getMentionedMCPServers
cbbaseinfo:
  description: Gets toolboxes mentioned in a user message.
cbparameters:
  parameters:
    - name: userMessage
      typeName: MCPUserMessage
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<GetAvailableToolBoxesResponse>"
    description: ""
data:
  name: getMentionedMCPServers
  category: mcp
  link: getMentionedMCPServers.md
---
# getMentionedMCPServers

```typescript
plugin.mcp.getMentionedMCPServers(userMessage: MCPUserMessage): Promise<GetAvailableToolBoxesResponse>
```

Gets toolboxes mentioned in a user message.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `userMessage` | `MCPUserMessage` |  |

## Returns

**`Promise<GetAvailableToolBoxesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.getMentionedMCPServers(/* MCPUserMessage */);
```
