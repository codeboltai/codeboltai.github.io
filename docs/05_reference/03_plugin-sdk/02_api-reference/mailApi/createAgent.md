---
name: createAgent
cbbaseinfo:
  description: Call createAgent on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateMailAgentRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailAgent>"
    description: ""
data:
  name: createAgent
  category: mailApi
  link: createAgent.md
---
# createAgent

```typescript
plugin.mailApi.createAgent(data: CreateMailAgentRequest): Promise<MailAgent>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateMailAgentRequest` |  |

## Returns

**`Promise<MailAgent>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.createAgent(/* CreateMailAgentRequest */);
```
