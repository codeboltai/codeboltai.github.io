---
name: getAgent
cbbaseinfo:
  description: Call getAgent on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IGetAgentParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IGetAgentResponse>"
    description: ""
data:
  name: getAgent
  category: mail
  link: getAgent.md
---
# getAgent

```typescript
plugin.mail.getAgent(params: IGetAgentParams): Promise<IGetAgentResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IGetAgentParams` |  |

## Returns

**`Promise<IGetAgentResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.getAgent(/* IGetAgentParams */);
```
