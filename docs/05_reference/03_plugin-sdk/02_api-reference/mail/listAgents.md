---
name: listAgents
cbbaseinfo:
  description: Call listAgents on the Plugin SDK mail module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<IListAgentsResponse>"
    description: ""
data:
  name: listAgents
  category: mail
  link: listAgents.md
---
# listAgents

```typescript
plugin.mail.listAgents(): Promise<IListAgentsResponse>
```



## Parameters

_None_

## Returns

**`Promise<IListAgentsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.listAgents();
```
