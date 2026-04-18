---
name: registerAgent
cbbaseinfo:
  description: Call registerAgent on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IRegisterAgentParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IRegisterAgentResponse>"
    description: ""
data:
  name: registerAgent
  category: mail
  link: registerAgent.md
---
# registerAgent

```typescript
plugin.mail.registerAgent(params: IRegisterAgentParams): Promise<IRegisterAgentResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IRegisterAgentParams` |  |

## Returns

**`Promise<IRegisterAgentResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.registerAgent(/* IRegisterAgentParams */);
```
