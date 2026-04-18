---
name: getAgents
cbbaseinfo:
  description: Call getAgents on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<MailAgent[]>"
    description: ""
data:
  name: getAgents
  category: mailApi
  link: getAgents.md
---
# getAgents

```typescript
plugin.mailApi.getAgents(): Promise<MailAgent[]>
```



## Parameters

_None_

## Returns

**`Promise<MailAgent[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.getAgents();
```
