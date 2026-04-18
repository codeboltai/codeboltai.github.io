---
name: acknowledge
cbbaseinfo:
  description: Call acknowledge on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IAcknowledgeParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IAcknowledgeResponse>"
    description: ""
data:
  name: acknowledge
  category: mail
  link: acknowledge.md
---
# acknowledge

```typescript
plugin.mail.acknowledge(params: IAcknowledgeParams): Promise<IAcknowledgeResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IAcknowledgeParams` |  |

## Returns

**`Promise<IAcknowledgeResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.acknowledge(/* IAcknowledgeParams */);
```
