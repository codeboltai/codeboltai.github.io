---
name: markRead
cbbaseinfo:
  description: Call markRead on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IMarkReadParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IMarkReadResponse>"
    description: ""
data:
  name: markRead
  category: mail
  link: markRead.md
---
# markRead

```typescript
plugin.mail.markRead(params: IMarkReadParams): Promise<IMarkReadResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IMarkReadParams` |  |

## Returns

**`Promise<IMarkReadResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.markRead(/* IMarkReadParams */);
```
