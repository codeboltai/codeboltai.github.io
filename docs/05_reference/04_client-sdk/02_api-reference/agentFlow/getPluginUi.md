---
name: getPluginUi
cbbaseinfo:
  description: "Retrieves the UI definition for a specific flow plugin.

Returns the schema and layout information needed to render the
plugin's configuration interface in the flow editor."
cbparameters:
  parameters:
    - name: pluginName
      typeName: string
      description: The name of the plugin to get the UI definition for
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentFlowPluginUi>"
    description: A promise that resolves to the AgentFlowPluginUi definition
data:
  name: getPluginUi
  category: agentFlow
  link: getPluginUi.md
---
# getPluginUi

```typescript
client.agentFlow.getPluginUi(pluginName: string): Promise<AgentFlowPluginUi>
```

Retrieves the UI definition for a specific flow plugin.

Returns the schema and layout information needed to render the
plugin's configuration interface in the flow editor.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `pluginName` | `string` | The name of the plugin to get the UI definition for |

## Returns

**`Promise<AgentFlowPluginUi>`** — A promise that resolves to the AgentFlowPluginUi definition

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentFlow.getPluginUi('pluginName');
```
